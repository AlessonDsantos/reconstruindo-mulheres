(function () {
  'use strict';
  var dialog = document.getElementById('pix-dialog');
  var trigger = document.getElementById('abrir-pix');
  var radioInputs = Array.prototype.slice.call(document.querySelectorAll('input[name="pix-valor"]'));
  var custom = document.getElementById('pix-outro-valor');
  var error = document.getElementById('pix-erro');
  var result = document.getElementById('pix-resultado');
  var choice = document.getElementById('pix-escolha');
  var code = document.getElementById('pix-codigo');
  var feedback = document.getElementById('pix-feedback');
  var pixKey = 'reconstruindoifeminina@gmail.com';
  var receiver = 'Katia Santos Dias';
  // Cidade informada: Ferraz de Vasconcelos. O campo EMV aceita no máximo 15 caracteres.
  var city = 'FERRAZ DE VASC';

  function field(id, value) { value = String(value); return id + String(value.length).padStart(2, '0') + value; }
  function crc16(str) {
    var crc = 0xFFFF;
    for (var i = 0; i < str.length; i++) {
      crc ^= str.charCodeAt(i) << 8;
      for (var j = 0; j < 8; j++) crc = (crc & 0x8000) ? ((crc << 1) ^ 0x1021) & 0xFFFF : (crc << 1) & 0xFFFF;
    }
    return crc.toString(16).toUpperCase().padStart(4, '0');
  }
  function buildPix(amount) {
    // BR Code (EMV): valor fixado, Pix estático, TXID *** e CRC16/CCITT-FALSE.
    // O padrão EMV limita nome a 25 caracteres e cidade a 15; sem acentos para compatibilidade.
    var merchant = field('00', 'br.gov.bcb.pix') + field('01', pixKey);
    var payload = field('00', '01') + field('26', merchant) + field('52', '0000') + field('53', '986') +
      field('54', amount.toFixed(2)) + field('58', 'BR') + field('59', receiver.substring(0, 25).toUpperCase()) +
      field('60', city) + field('62', field('05', '***')) + '6304';
    return payload + crc16(payload);
  }
  function selectedAmount() {
    var selected = radioInputs.filter(function (el) { return el.checked; })[0];
    if (!selected) return NaN;
    if (selected.value !== 'outro') return Number(selected.value);
    var raw = custom.value.trim().replace(/\s/g, '');
    if (!/^\d{1,7}([,.]\d{1,2})?$/.test(raw)) return NaN;
    return Number(raw.replace(',', '.'));
  }
  function drawQR(payload) {
    var qr = window.ReconQR.create(payload);
    var count = qr.getModuleCount();
    var quiet = 4, total = count + quiet * 2;
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 ' + total + ' ' + total);
    svg.setAttribute('width', '264'); svg.setAttribute('height', '264');
    svg.setAttribute('aria-hidden', 'true');
    var bg = document.createElementNS(svg.namespaceURI, 'rect');
    bg.setAttribute('width', total); bg.setAttribute('height', total); bg.setAttribute('fill', '#fff'); svg.appendChild(bg);
    var path = [];
    for (var row = 0; row < count; row++) for (var col = 0; col < count; col++) {
      if (qr.isDark(row, col)) path.push('M' + (col + quiet) + ' ' + (row + quiet) + 'h1v1h-1z');
    }
    var blocks = document.createElementNS(svg.namespaceURI, 'path');
    blocks.setAttribute('d', path.join('')); blocks.setAttribute('fill', '#171717'); svg.appendChild(blocks);
    var container = document.getElementById('pix-qr'); container.replaceChildren(svg);
  }
  function closeDialog() { if (dialog.close) dialog.close(); else dialog.removeAttribute('open'); }
  trigger.addEventListener('click', function (e) { e.preventDefault(); if (dialog.showModal) dialog.showModal(); else dialog.setAttribute('open', ''); });
  document.getElementById('fechar-pix').addEventListener('click', closeDialog);
  dialog.addEventListener('click', function (e) { if (e.target === dialog) closeDialog(); });
  dialog.addEventListener('close', function () { trigger.focus(); });
  radioInputs.forEach(function (el) { el.addEventListener('change', function () {
    document.getElementById('pix-outro-box').hidden = el.value !== 'outro'; error.hidden = true;
    if (el.value === 'outro') custom.focus();
  }); });
  document.getElementById('pix-gerar').addEventListener('click', function () {
    var amount = selectedAmount();
    if (!Number.isFinite(amount) || amount < 0.01 || amount > 9999999.99) {
      error.textContent = 'Informe um valor válido, maior que zero e com até duas casas decimais.';
      error.hidden = false; return;
    }
    error.hidden = true;
    try {
      var payload = buildPix(amount);
      drawQR(payload);
      code.value = payload;
      document.getElementById('pix-valor-final').textContent = amount.toLocaleString('pt-BR', {style:'currency',currency:'BRL'});
      choice.hidden = true; result.hidden = false; feedback.textContent = '';
    } catch (err) {
      error.textContent = 'Não foi possível gerar o QR Code. Tente novamente.';
      error.hidden = false;
      console.error('Erro ao gerar Pix', err);
    }
  });
  document.getElementById('pix-voltar').addEventListener('click', function () { result.hidden = true; choice.hidden = false; feedback.textContent = ''; });
  document.getElementById('pix-copiar').addEventListener('click', function () {
    function fallback() { code.focus(); code.select(); try { document.execCommand('copy'); feedback.textContent = 'Código copiado!'; } catch(e) { feedback.textContent = 'Selecione e copie o código acima.'; } }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(code.value).then(function () { feedback.textContent = 'Código Pix copiado!'; }, fallback);
    else fallback();
  });
})();
