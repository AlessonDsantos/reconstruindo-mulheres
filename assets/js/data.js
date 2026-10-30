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
      nome: "Empoderamento + Saúde e Bem-Estar",
      conceito: "Eu me reconheço",
      palavras: ["identidade", "autoestima", "autocuidado", "saúde", "bem-estar", "autoconhecimento", "fortalecimento"],
      descricao: "O empoderamento e a saúde e bem-estar caminham juntos porque reconhecer o próprio valor também envolve aprender a cuidar de si. Este eixo busca fortalecer a autoestima, a identidade, a autonomia sobre o próprio corpo e as escolhas de vida, promovendo o cuidado integral com a saúde física, emocional, mental e social. A proposta é criar espaços de acolhimento, escuta, orientação, fortalecimento de vínculos e acesso a informações e serviços que contribuam para que cada mulher reconheça suas potencialidades e desenvolva uma relação mais consciente e cuidadosa consigo mesma. Aqui, o cuidado não é visto como fragilidade, mas como uma dimensão fundamental da força e da autonomia.",
      transformacao: "Fortalecer mulheres para que reconheçam seu valor, ampliem sua autoestima, cuidem de si e possam ocupar seus espaços com maior segurança, consciência e autonomia."
    },
    2: {
      nome: "Educação + Qualificação",
      conceito: "Eu aprendo",
      palavras: ["educação", "conhecimento", "formação", "qualificação", "aprendizagem", "desenvolvimento", "oportunidades"],
      descricao: "Educação e qualificação estão conectadas porque o conhecimento amplia possibilidades e a qualificação transforma conhecimento em oportunidade. Este eixo busca ampliar o acesso das mulheres à educação, à formação e ao desenvolvimento de competências que possam contribuir para sua trajetória pessoal, profissional e social. São consideradas tanto a educação formal quanto as possibilidades de formação complementar, cursos, oficinas, capacitações, desenvolvimento de habilidades e acesso a novos conhecimentos. Mais do que transmitir conteúdos, o eixo pretende estimular a curiosidade, a confiança para aprender e a percepção de que o conhecimento também é uma ferramenta de transformação e emancipação.",
      transformacao: "Ampliar conhecimentos, desenvolver competências e fortalecer as mulheres para que possam construir novas possibilidades para suas trajetórias."
    },
    3: {
      nome: "Empregabilidade + Empreendedorismo",
      conceito: "Eu construo oportunidades",
      palavras: ["trabalho", "empregabilidade", "carreira", "empreendedorismo", "renda", "oportunidades", "desenvolvimento profissional"],
      descricao: "Empregabilidade e empreendedorismo se complementam porque ampliar o acesso ao trabalho também significa ampliar a capacidade de criar e construir oportunidades. Este eixo atua no fortalecimento da autonomia profissional e econômica das mulheres, considerando diferentes caminhos para a geração de trabalho e renda. A proposta contempla preparação para o mundo do trabalho, desenvolvimento de competências profissionais, orientação, construção de currículo, preparação para processos seletivos, conexão com oportunidades e incentivo ao empreendedorismo, à economia criativa e a iniciativas que possam gerar renda. O eixo reconhece que cada mulher possui diferentes talentos, experiências e possibilidades e que sua trajetória profissional pode assumir diferentes formatos.",
      transformacao: "Ampliar o acesso a oportunidades de trabalho e geração de renda, fortalecendo a autonomia profissional e a capacidade de construir projetos econômicos sustentáveis."
    },
    4: {
      nome: "Espiritualidade + Cidadania",
      conceito: "Eu encontro sentido e pertenço",
      palavras: ["espiritualidade", "sentido", "valores", "cidadania", "direitos", "diversidade", "pertencimento", "participação"],
      descricao: "Espiritualidade e cidadania se encontram na compreensão de que pertencer, encontrar sentido e reconhecer-se como sujeito de direitos são dimensões importantes da reconstrução de uma vida. Este eixo promove espaços de reflexão, convivência, fortalecimento de valores, pertencimento, participação social e exercício da cidadania, respeitando a diversidade de crenças, espiritualidades, filosofias de vida e também as diferentes formas de compreender o mundo. A espiritualidade é abordada de maneira inclusiva e respeitosa, sem imposição religiosa, enquanto a cidadania fortalece o conhecimento sobre direitos, responsabilidades, participação social e acesso às políticas públicas. A proposta é contribuir para que a mulher compreenda que sua história possui valor, que sua voz importa e que ela pertence à sociedade não apenas como beneficiária de direitos, mas como sujeito ativo na construção dela.",
      transformacao: "Fortalecer o sentimento de pertencimento, o respeito à diversidade, a consciência de direitos e a participação das mulheres na vida social e comunitária."
    },
    5: {
      nome: "Educação Financeira + Autossuficiência",
      conceito: "Eu construo autonomia",
      palavras: ["educação financeira", "planejamento", "autonomia", "recursos", "sustentabilidade", "tomada de decisão", "autossuficiência"],
      descricao: "Educação financeira e autossuficiência estão diretamente relacionadas porque compreender e administrar recursos é uma das bases para construir autonomia e tomar decisões com maior segurança. Este eixo busca desenvolver conhecimentos e habilidades relacionados à organização financeira, planejamento, consumo consciente, administração de recursos, definição de prioridades e construção de estratégias para alcançar objetivos. A proposta não se limita ao controle do dinheiro. Trata-se de fortalecer a capacidade de tomar decisões, planejar o futuro, reconhecer possibilidades e construir caminhos que reduzam dependências e ampliem a autonomia. A educação financeira, portanto, é compreendida como uma ferramenta de proteção, planejamento e transformação social.",
      transformacao: "Fortalecer a autonomia financeira e a capacidade de planejamento, contribuindo para que as mulheres tenham maior segurança para tomar decisões e construir seus próprios caminhos."
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
