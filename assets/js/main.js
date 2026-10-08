(function () {
  "use strict";
  var SITE = window.SITE || { eixos: {}, projetos: [], historias: [] };
  var CORES = { 1: "var(--eixo-1)", 2: "var(--eixo-2)", 3: "var(--eixo-3)", 4: "var(--eixo-4)", 5: "var(--eixo-5)" };
  var FUNDOS = { 1: "#efe9f8", 2: "#e5edf9", 3: "#dff3ec", 4: "#dcf0f1", 5: "#f8e9e1" };
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function esc(t) { var d = document.createElement("div"); d.textContent = t == null ? "" : t; return d.innerHTML; }

  /* ---------- Menu mobile ---------- */
  var toggle = $(".nav-toggle"), nav = $("#menu-principal");
  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    $(".i-abrir", toggle).style.display = open ? "none" : "";
    $(".i-fechar", toggle).style.display = open ? "" : "none";
    document.body.style.overflow = open ? "hidden" : "";
  }
  toggle.addEventListener("click", function () { setMenu(!nav.classList.contains("is-open")); });
  $$("a", nav).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("is-open")) { setMenu(false); toggle.focus(); } });
  window.matchMedia("(min-width: 961px)").addEventListener("change", function (e) { if (e.matches) setMenu(false); });

  /* ---------- Projetos ---------- */
  var lista = $("#lista-projetos");
  var icone = '<svg class="ph-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="2"/><path d="M3 17l5-4 4 3 3-2 6 4"/></svg>';
  function cardProjeto(p) {
    var eixo = SITE.eixos[p.eixo] || {};
    var imagem = p.imagem
      ? '<figure class="ph" style="margin:0"><img src="' + esc(p.imagem) + '" alt="' + esc(p.alt || p.titulo) + '" loading="lazy"></figure>'
      : '<figure class="ph" style="margin:0;--tom:' + FUNDOS[p.eixo] + ';--cor-ph:' + CORES[p.eixo] + '">' + icone + '<figcaption>Imagem provisória</figcaption></figure>';
    return '<article class="projeto-card reveal" style="--cor:' + CORES[p.eixo] + '">' + imagem +
      '<div class="projeto-corpo"><span class="projeto-eixo">' + esc(eixo.conceito || "") + '</span>' +
      '<h3>' + esc(p.titulo) + '</h3><p>' + esc(p.descricao) + '</p>' +
      '<a class="link-seta" href="' + esc(p.link || "#contato") + '">Saiba mais <span aria-hidden="true">→</span></a></div></article>';
  }
  if (lista) lista.innerHTML = SITE.projetos.map(cardProjeto).join("");

  /* ---------- Histórias ---------- */
  var hl = $("#lista-historias");
  function cardHistoria(h) {
    var cor = CORES[h.eixo] || "#f6b8cf";
    var avatar = h.foto
      ? '<span class="avatar"><img src="' + esc(h.foto) + '" alt="Foto de ' + esc(h.nome) + '" loading="lazy"></span>'
      : '<span class="avatar" style="--c:' + cor + '" aria-hidden="true">' + esc((h.nome || "?").charAt(0)) + '</span>';
    return '<figure class="historia reveal"><blockquote>' + esc(h.texto) + '</blockquote><figcaption>' + avatar +
      '<span><cite>' + esc(h.nome) + '</cite><small>' + esc(h.detalhe || "") + '</small></span></figcaption></figure>';
  }
  if (hl) hl.innerHTML = SITE.historias.map(cardHistoria).join("");

  /* ---------- Diálogo dos eixos ---------- */
  var dlg = $("#eixo-dialog"), ultimoBotao = null;
  function abrirEixo(n, botao) {
    var e = SITE.eixos[n]; if (!e) return;
    ultimoBotao = botao;
    dlg.className = "eixo-dialog eixo-" + n;
    $("#dialog-conceito").textContent = e.conceito;
    $("#dialog-titulo").textContent = e.nome;
    $("#dialog-descricao").textContent = e.descricao;
    $("#dialog-tags").innerHTML = e.palavras.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("");
    if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
  }
  function fecharEixo() { if (dlg.close) dlg.close(); else dlg.removeAttribute("open"); if (ultimoBotao) ultimoBotao.focus(); }
  $$(".link-eixo").forEach(function (b) { b.addEventListener("click", function () { abrirEixo(b.getAttribute("data-eixo"), b); }); });
  $(".dialog-fechar", dlg).addEventListener("click", fecharEixo);
  $("#dialog-cta").addEventListener("click", function () { dlg.close && dlg.close(); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) fecharEixo(); });

  /* ---------- Formulário (provisório: sem envio real) ---------- */
  var form = $("#form-contato"), status = $("#form-status");
  $$(".apoio-item").forEach(function (a) {
    a.addEventListener("click", function () {
      var sel = $("#interesse"), v = a.getAttribute("data-interesse");
      $$("option", sel).forEach(function (o) { if (o.textContent === v) sel.value = o.textContent; });
    });
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var ok = form.checkValidity();
    if (!ok) { status.style.color = "var(--rosa-escuro)"; status.textContent = "Preencha nome, e-mail e mensagem para continuar."; $$("input:invalid, textarea:invalid", form)[0].focus(); return; }
    /* TODO: conectar a um serviço de formulário / back-end (ex.: Formspree, e-mail do projeto, API própria). */
    status.style.color = "var(--eixo-3)";
    status.textContent = "Obrigada! (Envio de demonstração — formulário ainda não conectado.)";
    form.reset();
  });

  /* Links de páginas futuras (ex.: política de privacidade) */
  $$("[data-pagina]").forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); alert("Página em construção."); });
  });
  $("#ver-todos").addEventListener("click", function (e) { /* trocar por projetos.html quando existir */ });

  $("#ano").textContent = new Date().getFullYear();

  /* ---------- Destaque do menu + animações ---------- */
  var links = $$(".nav-list a[href^='#']:not(.btn)");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
    }, { threshold: .12 });
    $$(".reveal").forEach(function (el) { io.observe(el); });

    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (en.isIntersecting) links.forEach(function (a) {
          if (a.getAttribute("href") === "#" + en.target.id) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(function (s) { spy.observe(s); });
  } else {
    $$(".reveal").forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
