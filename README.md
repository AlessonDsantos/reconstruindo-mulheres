# Reconstruindo Mulheres — site institucional

Site estático (HTML + CSS + JS puro, sem build). Abra `index.html` no navegador ou publique a pasta em qualquer hospedagem estática.

## Estrutura
- `index.html` — homepage (header, hero, eixos, sobre, projetos, histórias, apoiar, contato, footer)
- `assets/css/styles.css` — estilos; cores da marca e dos eixos no topo (`:root`)
- `assets/js/data.js` — **conteúdo editável**: textos dos eixos, projetos e histórias
- `assets/js/main.js` — menu mobile, diálogos dos eixos, listas, formulário, animações
- `assets/img/logo-reconstruindo-mulheres.jpg` — logo oficial (apenas recortadas as margens vazias; sem alteração de cores ou proporção)

## Como expandir
- **Novo projeto / nova história:** adicione um objeto em `projetos` ou `historias` no `data.js` (campos `imagem`/`foto` aceitam o caminho de um arquivo em `assets/img/`).
- **Fotos:** nos blocos "Foto provisória" do `index.html` (hero e Sobre), troque o `<figure class="ph">…</figure>` por `<figure class="ph"><img src="assets/img/arquivo.jpg" alt="descrição"></figure>`.
- **Novo eixo:** crie `--eixo-6` e `.eixo-6` no CSS, um card em `#eixos` e uma entrada em `SITE.eixos`.
- **Novas páginas** (eventos, parceiros, voluntariado, doações): duplique o header/footer do `index.html` e aponte os botões "Saiba mais"/"Ver todos os projetos" para elas.
- **Formulário:** hoje é só demonstração (`main.js`, bloco "Formulário"). Conecte a um serviço de formulários ou back-end.

## Conteúdo provisório (substituir)
Fotos, textos institucionais, números de impacto (000/00), depoimentos, e-mail/telefone/endereço, links das redes sociais e política de privacidade.

## Dica sobre o logo
O logo enviado tem fundo rosa (JPG); por isso o header e o rodapé usam o mesmo tom (`--rosa-suave`). Se tiver uma versão PNG com fundo transparente, basta trocar o arquivo mantendo o nome.
