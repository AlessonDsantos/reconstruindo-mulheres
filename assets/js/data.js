/* ==========================================================
   CONTEÚDO DO SITE
   Para adicionar um projeto ou uma história, basta incluir um
   novo objeto nas listas abaixo. Imagens: preencha "imagem"
   com o caminho do arquivo (ex.: "assets/img/projetos/feira.jpg").
   Itens marcados com provisorio:true exibem o selo de provisório.
   ========================================================== */

window.SITE = {

  eixos: {
    1: {
      nome: "Empoderamento Feminino + Saúde e Bem-Estar",
      conceito: "Potência",
      palavras: ["identidade", "autoestima", "autocuidado", "saúde", "bem-estar", "autoconhecimento", "fortalecimento"],
      descricao: "Este eixo parte do reconhecimento de que reconstruir a própria história também significa olhar para si. É um espaço voltado ao fortalecimento da identidade, autoestima, autonomia, autocuidado e valorização da mulher em suas diferentes dimensões. Integra ações de promoção da saúde e do bem-estar físico, emocional e social, estimulando o autoconhecimento, a construção de relações saudáveis e o reconhecimento das próprias potencialidades."
    },
    2: {
      nome: "Educação + Qualificação Profissional",
      conceito: "Conhecimento",
      palavras: ["educação", "conhecimento", "formação", "qualificação", "aprendizagem", "desenvolvimento", "oportunidades"],
      descricao: "Este eixo compreende a educação como uma ferramenta de transformação individual e social. Atua na ampliação do acesso ao conhecimento, à educação formal e às oportunidades de formação e qualificação. Busca aproximar mulheres de cursos, capacitações, instituições de ensino, desenvolvimento de competências e novas possibilidades de aprendizagem."
    },
    3: {
      nome: "Empregabilidade + Empreendedorismo",
      conceito: "Oportunidade",
      palavras: ["trabalho", "empregabilidade", "carreira", "empreendedorismo", "renda", "oportunidades", "desenvolvimento profissional"],
      descricao: "Este eixo está voltado à ampliação das possibilidades de inserção, permanência e crescimento das mulheres no mundo do trabalho. Integra empregabilidade e empreendedorismo, desenvolvendo ações relacionadas à preparação para o mercado de trabalho, desenvolvimento profissional, elaboração de currículo, processos seletivos, networking, empreendedorismo, geração de renda e fortalecimento de iniciativas próprias."
    },
    4: {
      nome: "Espiritualidade + Cidadania",
      conceito: "Pertencimento",
      palavras: ["espiritualidade", "sentido", "valores", "cidadania", "direitos", "diversidade", "pertencimento", "participação"],
      descricao: "Este eixo reconhece a espiritualidade como uma dimensão de interioridade, sentido, valores, conexão e busca pessoal, respeitando a diversidade de crenças, experiências e formas de expressão. Em diálogo com a cidadania, promove reflexões sobre pertencimento, dignidade, direitos, participação social, respeito às diferenças e convivência democrática."
    },
    5: {
      nome: "Educação Financeira + Autossuficiência",
      conceito: "Autonomia",
      palavras: ["educação financeira", "planejamento", "autonomia", "recursos", "sustentabilidade", "tomada de decisão", "autossuficiência"],
      descricao: "Este eixo trabalha conhecimentos e ferramentas que contribuem para que as mulheres desenvolvam maior autonomia na relação com o dinheiro, com o trabalho e com as decisões que envolvem sua própria vida. A educação financeira é compreendida como instrumento para planejamento, tomada de decisões e construção de possibilidades."
    }
  },

  // Projetos e iniciativas (conteúdo provisório)
  projetos: [
    { titulo: "Oficina de Autocuidado e Bem-Estar", eixo: 1, descricao: "Encontros para cuidar de si: autoestima, saúde emocional e hábitos de bem-estar.", imagem: "", link: "#contato", provisorio: true },
    { titulo: "Curso de Qualificação Profissional", eixo: 2, descricao: "Formação para ampliar competências e abrir portas no mundo do trabalho.", imagem: "", link: "#contato", provisorio: true },
    { titulo: "Feira de Empreendedorismo", eixo: 3, descricao: "Espaço para mulheres apresentarem seus negócios, trocarem experiências e gerarem renda.", imagem: "", link: "#contato", provisorio: true },
    { titulo: "Rodas de Conversa", eixo: 4, descricao: "Diálogos abertos sobre sentido, direitos e pertencimento, com respeito a todas as crenças.", imagem: "", link: "#contato", provisorio: true }
    // { titulo: "Novo projeto", eixo: 5, descricao: "...", imagem: "assets/img/projetos/novo.jpg", link: "projetos/novo.html" }
  ],

  // Depoimentos (conteúdo provisório — substituir por relatos reais, com autorização)
  historias: [
    { nome: "Participante (nome provisório)", detalhe: "Eixo 1 · depoimento ilustrativo", texto: "[Depoimento provisório] Aqui entrará o relato de uma participante sobre o que mudou depois de conhecer o projeto.", eixo: 1, foto: "" },
    { nome: "Participante (nome provisório)", detalhe: "Eixo 3 · depoimento ilustrativo", texto: "[Depoimento provisório] Espaço reservado para uma história de retomada profissional ou de um novo negócio.", eixo: 3, foto: "" },
    { nome: "Participante (nome provisório)", detalhe: "Eixo 4 · depoimento ilustrativo", texto: "[Depoimento provisório] Aqui entrará uma fala sobre acolhimento, pertencimento e participação.", eixo: 4, foto: "" }
  ]
};
