

/*Scripts for page*/
var pos = pos || {};
pos.unigranrio = pos.unigranrio || {};
pos.unigranrio.simulador = pos.unigranrio.simulador || {};
pos.unigranrio.simulador.saude = pos.unigranrio.simulador.saude || {};
pos.unigranrio.simulador.saude.main =function(){
  var numberId = [];
  const tcc = {
     "nome":"TCC",
     "cargaHoraria":90,
     "disciplinas":[
       {
         "nome":"Disciplina TCC"
       }
     ],
     "id":1
  };

  //combDay são os dias de cada curso
  // 1 = Seg e Quar 1st semestre
  // 2 = Ter e Qui  1st semestre
  const elements = [
       {
          "nome":"Hotelaria Hospitalar",
          "slug":"hotelaria-hospitalar",
          "cargaHoraria":180,
          "id":1,
          "peso":5,
          "combDay":1,
          "semestre":2,
       },
       {
          "nome":"Logística em Saúde",
          "slug":"logistica-saude",
          "cargaHoraria":180,
          "id":2,
          "peso":10,
          "combDay":2,
          "semestre":2,
       },
       {
          "nome":"Qualidade e Acreditação em Saúde",
          "slug":"qualidade-saude",
          "cargaHoraria":180,
          "id":3,
          "peso":15,
          "combDay":2,
          "semestre":1,
       },
       {
          "nome":"Segurança do Paciente",
          "slug":"seguranca-paciente",
          "cargaHoraria":180,
          "id":4,
          "peso":20,
          "combDay":1,
          "semestre":1,
       },
  ];

  //Total: elements.peso * elements2.peso ou o valor do próprio peso é o elemento
  const goals = [
    {
      "id":1,
      "descricao":"Fazer compreender a importância do domínio das ferramentas na área de  logística como sendo fundamentais para o processo efetivo de <b>disponibilização adequada</b> de bens e serviços e também todo o processo de avaliação, concessão e manutenção das certificações  realizadas em nosso país, cada vez mais exigidas pelo mercado e legislação.",
      "total":150
    },
    {
      "id":2,
      "descricao":"Fazer compreender a importância das ações desenvolvidas nacional e internacionalmente voltadas para o desenvolvimento dos programas e protocolos de segurança do paciente e gestão de riscos hospitalares e também todo o processo de avaliação, concessão e manutenção das certificações  realizadas em nosso país, cada vez mais exigidas pelo mercado e legislação.",
      "total":300
    },
    {
      "id":3,
      "descricao":"Fazer compreender todo o processo de avaliação, concessão e manutenção das certificações  realizadas em nosso país e também no uso de ferramentas voltadas para o processo de admissão, permanência e alta dos pacientes na geração de vantagens competitivas para as unidades de saúde.",
      "total":75
    },
    {
      "id":4,
      "descricao":"Fazer compreender a importância do domínio das ferramentas na área de  logística como sendo fundamentais para o processo efetivo de <b>disponibilização adequada</b> de bens e serviços e também para o processo de admissão, permanência e alta dos pacientes na geração de vantagens competitivas para as unidades de saúde.",
      "total":50
    },
    {
      "id":5,
      "descricao":"Fazer compreender a importância do domínio das variáveis de gestão dos recursos humanos da organizacão, em seus aspectos motivacionais, de liderança e de competências e os seus impactos nos resultados financeiros da organização, bem como nos processos e sistemas de gestão de recursos e de investimentos.",
      "total":60
    },
    {
      "id":6,
      "descricao":"Fazer compreender a importância do domínio das ferramentas na área de  logística como sendo fundamentais para o processo efetivo de <b>disponibilização adequada</b> de bens e serviços e no desenvolvimento dos programas e protocolos de segurança do paciente e gestão de riscos hospitalares.",
      "total":200
    },
    {
      "id":7,
      "descricao":"Fazer compreender o processo de avaliação, concessão e manutenção das certificações realizadas no Brasil, consideradas fundamentais para o sucesso das unidades de saúde.",
      "total":15
    },
    {
      "id":8,
      "descricao":"Fazer compreender a importância do domínio das ferramentas na área de logística como sendo fundamentais para o processo efetivo de disponibilização adequada de bens e serviços aos pacientes em unidades de saúde.",
      "total":10
    },
    {
      "id":9,
      "descricao":"Fazer compreender a importância das ações desenvolvidas nacional e internacionalmente, voltadas para o planejamento, organização, implementação, controle e avaliação dos programas e protocolos de segurança do paciente e gestão de riscos hospitalares.",
      "total":20
    },
    {
      "id":10,
      "descricao":"Fazer compreender a importância do domínio das ferramentas na área de Hotelaria Hospitalar como sendo fundamentais para o processo de admissão, permanência e alta dos pacientes e na geração de vantagens competitivas para as unidades de saúde.",
      "total":5
    },
    {
      "id":11,
      "descricao":"Fazer compreender a importância das ações desenvolvidas nacional e internacionalmente, voltadas para o desenvolvimento dos programas e protocolos de segurança do paciente e gestão de riscos hospitalares e no domínio das ferramentas fundamentais para o processo de admissão, permanência e alta dos pacientes na geração de vantagens competitivas para a unidade de saúde.",
      "total":100
    },
    {
      "id":12,
      "descricao":"Fazer compreender a integração dos aspectos gerais da Gestão em  Saúde , em suas visões essenciais dos temas voltados à Segurança do Paciente, da participação da Hotelaria Hospitalar e todo o processo de gestão estratégica e operacional dos recursos da Logística em Saúde , de forma integrada e holística.",
      "total":1000
    },
    {
      "id":13,
      "descricao":"Fazer compreender a integração dos aspectos gerais da Gestão em  Saúde , em suas visões essenciais dos temas voltados à Segurança do Paciente, da gestão da Qualidade e seus Sistemas de Acreditação e todo o processo de gestão estratégica e operacional dos recursos da Logística em Saúde , de forma integrada e holística.",
      "total":3000
    },
    {
      "id":14,
      "descricao":"Fazer compreender a integração dos aspectos gerais da Gestão em  Saúde , em suas visões essenciais dos temas voltados à participação da Hotelaria Hospitalar , da gestão da Qualidade e seus Sistemas de Acreditação e todo o processo de gestão estratégica e operacional dos recursos da Logística em Saúde , de forma integrada e holística.",
      "total":750
    },
    {
      "id":15,
      "descricao":"Fazer compreender a integração dos aspectos gerais da Gestão em  Saúde , em suas visões essenciais dos temas voltados à Segurança do Paciente, da participação da Hotelaria Hospitalar e da gestão da Qualidade e seus Sistemas de Acreditação, de forma integrada e holística.",
      "total":1500
    },
    {
      "id":16,
      "descricao":"Fazer compreender os aspectos gerais de uma Gestão em Saúde interelacionando  em suas visões avançadas, aspectos vinculados às areas de Hotelaria, Logística, Qualidade e Acreditação e Segurança do Paciente. Com esses conhecimentos, se torna possível a construção de um ambiente voltado para a implementação das mais modernas metodologias necessárias à uma gestão de excelência.",
      "total":15000
    },
  ];
  const skills = [
    {
      "id":1,
      "descricao":"Ao final do curso, o participante estará apto a implementar estratégias que assegurem a disponibilização de bens e serviços, a partir da adequação dos fluxos - de informações e físicos e atuar em Comissões Internas de Qualidade e Certificação, desenvolvendo ações que contribuam na entrega de serviços de qualidade em suas unidades de saúde.",
      "total":150
    },
    {
      "id":2,
      "descricao":"Ao final do curso, o participante estará apto a atuar em implantação de programas voltados à Segurança do Paciente, contribuindo de forma significativa para a melhoria dos resultados assistenciais de sua unidade de saúde e e atuar em Comissões Internas de Qualidade e Certificação, desenvolvendo ações que contribuam na entrega de serviços de qualidade aos seus pacientes.",
      "total":300
    },
    {
      "id":3,
      "descricao":"Ao final do curso, o participante estará apto a  atuar em Comissões Internas de Qualidade e Certificação, desenvolvendo ações que contribuam na entrega de serviços de qualidade aos seus pacientes além de desenvolver e implementar estratégias operacionais, de forma a auxiliar a relevante atividade relacionada à movimentação e estadia dos pacientes em unidades hospitalares.",
      "total":75
    },
    {
      "id":4,
      "descricao":"Ao final do curso, o participante estará apto a implementar estratégias que assegurem a disponibilização de bens e serviços, a partir da adequação dos fluxos - de informações e físicos, de forma a auxiliar a relevante atividade relacionada à movimentação e estadia dos pacientes em unidades de saúde.",
      "total":50
    },
    {
      "id":5,
      "descricao":"Ao final de curso o participante estará apto a entender a importância das práticas de recursos humanos no sucesso da organização e a sua influência nos resultados financeiros de avaliação de investimentos, retornos financeiros, fluxos de caixa e de análise de recursos utilizados pelas equipes.",
      "total":60
    },
    {
      "id":6,
      "descricao":"Ao final do curso, o participante estará apto a implementar estratégias que assegurem a disponibilização de bens e serviços, a partir da adequação dos fluxos - de informações e físicos, a implantação de programas voltados à Segurança do Paciente, contribuindo de forma significativa para a melhoria dos resultados assistenciais de sua unidade de saúde.",
      "total":200
    },
    {
      "id":7,
      "descricao":"Ao final do curso o participante estará apto a atuar em Comissões Internas e a desenvolover ações que contribuam na entrega de serviços de qualidade em suas unidades de saúde.",
      "total":15
    },
    {
      "id":8,
      "descricao":"Ao final do curso o participante estará apto à implementar estratégias logísticas que assegurem a disponibilização de bens e serviços, a partir da adequação dos fluxos - de informações e físicos.",
      "total":10
    },
    {
      "id":9,
      "descricao":"Ao final do curso, o participante estará apto à atuar em implantação de programas voltados à Segurança do Paciente, contribuindo para a melhoria dos resultados assistenciais de sua unidade de saúde.",
      "total":20
    },
    {
      "id":10,
      "descricao":"Ao final do curso, o aluno estará apto a atuar em cargos de liderança e a desenvolver estratégias operacionais de hotelaria, de forma a auxiliar na manutenção adequada dos pacientes em unidades de saúde.",
      "total":5
    },
    {
      "id":11,
      "descricao":"Ao final do curso, o participante estará apto a atuar em implantação de programas voltados à Segurança do Paciente, contribuindo de forma significativa para a melhoria dos resultados assistenciais de sua unidade de saúde e desenvolver e implementar estratégias operacionais, de forma a auxiliar a relevante atividade relacionada à movimentação e estadia dos pacientes em unidades hospitalares.",
      "total":100
    },
    {
      "id":12,
      "descricao":"Ao final do curso, o aluno estará apto a entender e aplicar o modelo de Gestão em Saúde, considerando o desenvolvimento de estratégias operacionais de forma a atuar em implantação de programas voltados à Segurança do Paciente, a sustentar a atividade relacionada à movimentação e estadia dos pacientes  e estratégias logísticas que assegurem a disponibilização de bens e serviços, a partir da adequação dos fluxos - de informações e físicos.",
      "total":1000
    },
    {
      "id":13,
      "descricao":"Ao final do curso, o aluno estará apto a entender e aplicar o modelo de Gestão em Saúde, considerando atuar em implantação de programas voltados à Segurança do Paciente, a  atuação em Comissões Internas de Qualidade e Certificação e desenvolver ações que contribuam na entrega de serviços de qualidade  e estratégias logísticas que assegurem a disponibilização de bens e serviços, a partir da adequação dos fluxos - de informações e físicos.",
      "total":3000
    },
    {
      "id":14,
      "descricao":"Ao final do curso, o aluno estará apto a entender e aplicar o modelo de Gestão em Saúde, considerando criar estratégias operacionais de forma a sustentar a atividade relacionada à movimentação e estadia dos pacientes, a  atuação em Comissões Internas de Qualidade e Certificação no desenvolvimento de ações que contribuam na entrega de serviços de qualidade e estratégias logísticas que assegurem a disponibilização de bens e serviços.",
      "total":750
    },
    {
      "id":15,
      "descricao":"Ao final do curso, o aluno estará apto a entender e aplicar o modelo de Gestão em Saúde, considerando atuar em implantação de programas voltados à Segurança do Paciente, criar estratégias operacionais de forma a sustentar a atividade relacionada à movimentação e estadia dos pacientes e na  atuação em Comissões Internas de Qualidade e Certificação  no desenvolvimento de ações que contribuam na entrega de serviços de qualidade.",
      "total":1500
    },
    {
      "id":16,
      "descricao":"Ao final do curso, o aluno estará apto a entender e aplicar os modelos de gestão na área de saúde de forma ampla e abrangente, podendo ocupar cargos de liderança e chefia nestas áreas. Desenvolverá uma visão sistema, que permitirá a tomada de decisão e definição de estratégias que propicie uma gestão sustentável. Desta forma conseguirá contribuir na busca e mantutenção da perenidade institucional.",
      "total":15000
    },
  ];
  const nameEspec = [
      {
      "id": 1,
      "certificado": "Certificado de Especialização em Gestão de Logística em Saúde e Qualidade e Acreditação",
      "info": [
        {
          "unidade": "Campus I - Duque de Caxias",
          "endereco": "Rua Prof. José de Souza Herdy, 1160 - Jardim Vinte e Cinco de Agosto, Duque de Caxias - RJ",
          "inicio": "20/03/2017 (Duração: 12 meses)",
          "periodo": "Segunda a Sexta (Semanal)",
          "carga": "630 horas",
          "horario": "19h às 22h",
          "valor": "1+14x de R$ 1.008,00 ou 1+17x de 882,00 ou 1+23x de 693,00",
          "aVista": "R$ 13.608,00",
          "link": "http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=22135-17001"
        },
        {
          "unidade": "Unidade Barra da Tijuca",
          "endereco": "Av. Ayrton Senna, 3.383, Barra da Tijuca - Rio de Janeiro (RJ) - CEP: 22775-002",
          "inicio": "20/03/2017 (Duração: 12 meses)",
          "periodo": "Segunda a Sexta (Semanal)",
          "carga": "630 horas",
          "horario": "19h às 22h",
          "valor": "1+14x de R$ 1.008,00 ou 1+17x de 882,00 ou 1+23x de 693,00",
          "aVista": "R$ 13.608,00",
          "link": "http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=22135-17002"
        },
      ],
      "total":150,
    },
    {
      "id":2,
      "certificado":"Certificado de Especialização em Gestão da Segurança do Paciente e Hotelaria Hospitalar",
      "info":[
        {
          "unidade":"Unidade Barra da Tijuca",
          "endereco":"Av. Ayrton Senna, 3.383, Barra da Tijuca - Rio de Janeiro (RJ) - CEP: 22775-002",
          "inicio":"20/03/2017 (Duração: 12 meses)",
          "periodicidade":"Segunda-feira e quarta-feira (Semanal), Sexta-feira (Quinzenal)",
          "cargaHoraria":"450 horas",
          "horario":"19h às 22h",
          "valor":"1+14x de R$ 744,00 ou 1+17x de 651,00 ou 1+23x de 511,50",
          "aVista":"R$ 10.044,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=41138-17001"
        }
      ],
      "total":100,
    },
    {
      "id":3,
      "certificado": "Certificado de Especialização em Gestão de Logística em Saúde e Hotelaria Hospitalar",
      "info":[
        {
          "unidade":"Unidade Barra da Tijuca",
          "endereco":"Av. Ayrton Senna, 3.383, Barra da Tijuca - Rio de Janeiro (RJ) - CEP: 22775-002",
          "inicio":"20/03/2017 (Duração: 12 meses)",
          "periodicidade":"Segunda-feira a sexta-feira (Semanal)",
          "cargaHoraria":"450 horas",
          "horario":"19h às 22h",
          "valor":"1+8x de R$ 1.240,00 ou 1+14x de R$ 781,20",
          "aVista":"R$ 10.044,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=41140-17001"
        }
      ],
      "total":50,
    },
    {
      "id":4,
      "certificado":"Certificado da Especialização em Gestão da Qualidade em Acreditação e Hotelaria Hospitalar ",
      "info":[
        {
          "unidade":"Unidade Barra da Tijuca",
          "endereco":"Av. Ayrton Senna, 3.383, Barra da Tijuca - Rio de Janeiro (RJ) - CEP: 22775-002",
          "inicio":"20/03/2017 (Duração: 6 meses)",
          "periodicidade":"Segunda-feira a sexta-feira (Semanal)",
          "cargaHoraria":"450 horas",
          "horario":"19h às 22h",
          "valor":"1+8x de R$ 1.240,00 ou 1+14x de R$ 781,20",
          "aVista":"R$ 10.044,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=41139-17001"
        }
      ],
      "total":75,
    },
    {
      "id":4,
      "certificado":"Certificado de Especialização em Gestão de Logística em Saúde e Segurança do Paciente",
      "info":[
        {
          "unidade":"Unidade Barra da Tijuca",
          "endereco":"Av. Ayrton Senna, 3.383, Barra da Tijuca - Rio de Janeiro (RJ) - CEP: 22775-002",
          "inicio":"20/03/2017 (Duração: 12 meses)",
          "periodicidade":"Segunda-feira a sexta-feira (Semanal)",
          "cargaHoraria":"450 horas",
          "horario":"19h às 22h",
          "valor":"1+8x de R$ 1.240,00 ou 1+14x de R$ 781,20",
          "aVista":"R$ 10.044,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=41137-17001"
        }
      ],
      "total":200,
    },
    {
      "id":5,
      "certificado":"Certificado de Especialização em Gestão da Segurança do Paciente e Qualidade e Acreditação",
      "info":[
        {
          "unidade":"Unidade Barra da Tijuca",
          "endereco":"Av. Ayrton Senna, 3.383, Barra da Tijuca - Rio de Janeiro (RJ) - CEP: 22775-002",
          "inicio":"20/03/2017 (Duração: 6 meses)",
          "periodicidade":"Segunda-feira a sexta-feira (Semanal)",
          "cargaHoraria":"450 horas",
          "horario":"19h às 22h",
          "valor":"1+8x de R$ 1.240,00 ou 1+14x de R$ 781,20",
          "aVista":"R$ 10.044,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=41136-17001"
        }
      ],
      "total":300,
    },
    {
      "id":6,
      "certificado":"Certificado de Aperfeiçoamento em Hotelaria Hospitalar",
      "info":[
        {
          "unidade":"Unidade Barra da Tijuca",
          "endereco":"Av. Ayrton Senna, 3.383, Barra da Tijuca - Rio de Janeiro (RJ) - CEP: 22775-002",
          "inicio":"20/03/2017 (Duração: 6 meses)",
          "periodicidade":"Segunda-feira e quarta-feira (Semanal), Sexta-feira (Quinzenal)",
          "cargaHoraria":"180 horas",
          "horario":"19h às 22h",
          "valor":"1+5x de R$ 990,00",
          "aVista":"R$ 5.346,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=41135-17001"
        }
      ],
      "total":5,
    },
    {
      "id":7,
      "certificado":"Certificado de Aperfeiçoamento em Logística em Saúde",
      "info":[
        {
          "unidade":"Unidade Barra da Tijuca",
          "endereco":"Av. Ayrton Senna, 3.383, Barra da Tijuca - Rio de Janeiro (RJ) - CEP: 22775-002",
          "inicio":"21/03/2017 (Duração: 6 meses)",
          "periodicidade":"Terça-feira e quinta-feira (Semanal), Sexta-feira (Quinzenal)",
          "cargaHoraria":"180 horas",
          "horario":"19h às 22h",
          "valor":"1+5x de R$ 990,00",
          "aVista":"R$ 5.346,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=41134-17001"
        }
      ],
      "total":10,
    },
    {
      "id":8,
      "certificado":"Certificado de Aperfeiçoamento em Qualidade e Acreditação em Saúde",
      "info":[
        {
          "unidade":"Unidade Barra da Tijuca",
          "endereco":"Av. Ayrton Senna, 3.383, Barra da Tijuca - Rio de Janeiro (RJ) - CEP: 22775-002",
          "inicio":"21/03/2017 (Duração: 6 meses)",
          "periodicidade":"Terça-feira e quinta-feira (Semanal), Sexta-feira (Quinzenal)",
          "cargaHoraria":"180 horas",
          "horario":"19h às 22h",
          "valor":"1+5x de R$ 990,00",
          "aVista":"R$ 5.346,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=41133-17001"
        }
      ],
      "total":15,
    },
    {
      "id":9,
      "certificado":"Certificado de Aperfeiçoamento em Segurança do Paciente",
      "info":[
        {
          "unidade":"Unidade Barra da Tijuca",
          "endereco":"Av. Ayrton Senna, 3.383, Barra da Tijuca - Rio de Janeiro (RJ) - CEP: 22775-002",
          "inicio":"21/03/2017 (Duração: 6 meses)",
          "periodicidade":"Terça-feira e quinta-feira (Semanal), Sexta-feira (Quinzenal)",
          "cargaHoraria":"180 horas",
          "horario":"19h às 22h",
          "valor":"1+5x de R$ 990,00",
          "aVista":"R$ 5.346,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=41132-17001"
        }
      ],
      "total":20,
    },
    {
      "id":10,
      "certificado":"Certificado de MBA em Gestão Essencial em Saúde",
      "info":[
        {
          "unidade":"Unidade Barra da Tijuca",
          "endereco":"Av. Ayrton Senna, 3.383, Barra da Tijuca - Rio de Janeiro (RJ) - CEP: 22775-002",
          "inicio":"20/03/2017 (Duração: 12 meses)",
          "periodicidade":"Segunda-feira a sexta-feira (Semanal)",
          "cargaHoraria":"630 horas",
          "horario":"19h às 22h",
          "valor":"1+14x de R$ 1.008,00 ou 1+17x de 882,00 ou 1+23x de 693,00",
          "aVista":"R$ 13.608,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=41142-17001"
        }
      ],
      "total":750,
    },
    {
      "id":11,
      "certificado":"Certificado de MBA em Gestão Avançada em Saúde",
      "info":[
        {
          "unidade":"Unidade Barra da Tijuca",
          "endereco":"Av. Ayrton Senna, 3.383, Barra da Tijuca - Rio de Janeiro (RJ) - CEP: 22775-002",
          "inicio":"20/03/2017 (Duração: 12 meses)",
          "periodicidade":"Segunda-feira a sexta-feira (Semanal)",
          "cargaHoraria":"810 horas",
          "horario":"19h às 22h",
          "valor":"1+14x de R$ 1.200,00 ou 1+17x de 1.050,00 ou 1+23x de 825,00",
          "aVista":"R$ 16.200,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=41143-17001"
        }
      ],
      "total":15000,
    },
  ]
  const grade = [
    {
      "id":1,
      "dia":1,
      "class": "segunda-1",
      "combDay":1,
      "disponivel":true,
      "trilha":"",
      "curso":"",
      "semestre":1,
    },
    {
      "id":2,
      "dia":2,
      "class": "terca-1",
      "combDay":2,
      "disponivel":true,
      "trilha":"",
      "curso":"",
      "semestre":1,
    },
    {
      "id":3,
      "dia":3,
      "class": "quarta-1",
      "combDay":1,
      "disponivel":true,
      "trilha":"",
      "curso":"",
      "semestre":1,
    },
    {
      "id":4,
      "dia":4,
      "class": "quinta-1",
      "combDay":2,
      "disponivel":true,
      "trilha":"",
      "curso":"",
      "semestre":1,
    },
    {
      "id":5,
      "dia":1,
      "class": "segunda-2",
      "combDay":1,
      "disponivel":true,
      "trilha":"",
      "curso":"",
      "semestre":2,
    },
    {
      "id":6,
      "dia":2,
      "class": "terca-2",
      "combDay":2,
      "disponivel":true,
      "trilha":"",
      "curso":"",
      "semestre":2,
    },
    {
      "id":7,
      "dia":3,
      "class": "quarta-2",
      "combDay":1,
      "disponivel":true,
      "trilha":"",
      "curso":"",
      "semestre":2,
    },
    {
      "id":8,
      "dia":4,
      "class": "quinta-2",
      "combDay":2,
      "disponivel":true,
      "trilha":"",
      "curso":"",
      "semestre":2,
    },
  ]

  let dropped = function count(){
    return $('.draggable .dropped').length;
  }

  let cart = function finish(){
    return elements.filter(o => numberId.indexOf(o.id) >= 0);
  }

  let findById = function find(id){
    return elements.filter(o => o.id == id);
  };

  let gradeBycurso = function find(id){
    return grade.filter(o => o.curso == id );
  }

  $( ".drag" ).draggable({revert : revertElement});
  $(".droppable" ).droppable({accept: ".drag",drop: onDrop,out: onOut});

  function onDrop (event, ui){
    let elDroppedId = ui.draggable.data('id'),
    elDropped = ui.draggable;
    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    addNumber( elDropped, elDroppedId );
    if(cart().length < 3){
      especCoursesDay(elDroppedId, grade, cart());
    }else{
      mbaCoursesDay(grade, cart());
    }
    paint(cart(),goals, skills, nameEspec);
    return true;
  }

  function onOut( event, ui){
    let elDroppedId = ui.draggable.data('id'),
    elDropped = ui.draggable;
    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    removeNumber(elDropped, elDroppedId);
    removeCoursesDay(elDroppedId, grade);
    repaintCoursesDay(cart(), grade);
    paint(cart(), goals, skills, nameEspec);
    return true;
   }

  function revertElement( event, ui){
    $(this).data("uiDraggable").originalPosition = {
        top : 0,
        left : 0
    };
    return !event;
  }

  let addNumber = function dropCount(element, number){
    if(dropped() > 4){
      return false
    }else{
      numberId.push(number);
      return added(element, true);
    }
  };

  let added = function alterElement(element,bool){
      if(bool){
        element.addClass('dropped');
        return true;
      }
      return false;
  }

  let removeNumber = function dropCount(element,number){
      element.removeClass('dropped');
      for(let i = numberId.length - 1; i >= 0; i--) {
         if(numberId[i] === number) {
            numberId.splice(i, 1);
        }
      }
      return true;
  };
  let especCoursesDay = function find(elementId,grades, courses){
      let element = findById(elementId)[0],
      grade = grades.filter((grade) => grade.combDay == element.combDay && grade.disponivel == true);
      grade.forEach(function(grade,index){
        if(index < 2){
          grade.curso = element.id;
          grade.disponivel = false;
          $('.'+grade.class).html(element.nome)
        }
        return false;
      });
  }

  let mbaCoursesDay = function find(grades, courses){
      let findGradeCourse = function(course){
        return grades.filter(grade => grade.combDay == course.combDay && grade.semestre == course.semestre);
      }
      let repaintCourse = function(grades, course){
        grades.forEach(function(grade){
          grade.id =course.id;
          grade.disponivel = false;
          $('.'+grade.class).html(course.nome)
        })
      };
      grades.forEach(function(grade){
        grade.id ="";
        grade.disponivel = true;
        $('.'+grade.class).html("");
      });
      courses.forEach(function(course){
        let grades = findGradeCourse(course);
        repaintCourse(grades, course);
      });
  }
  let removeCoursesDay = function find(elementId,grades){
    let element = findById(elementId)[0];
    let grade = grades.filter((grade) => grade.curso == element.id && grade.disponivel == false);
    grade.forEach(function(el,index){
        el.curso = "";
        el.disponivel = true;
        $('.'+el.class).html(el.curso)
    })
  }

  let repaintCoursesDay = function(courses, grades){
    let findGradeCourse = function(course){
      return grades.filter(grade => grade.combDay == course.combDay && grade.disponivel == true);
    }
    let repaintCourse = function(grades, course){
      grades.forEach(function(grade, index){
        if(index < 2){
          grade.id =course.id;
          grade.disponivel = false;
          $('.'+grade.class).html(course.nome)
        }
      })
    };
    grades.forEach(function(grade){
      grade.id ="";
      grade.disponivel = true;
      $('.'+grade.class).html("");
    });
    courses.forEach(function(course){
      let grades = findGradeCourse(course);
      repaintCourse(grades, course);
    });
  }

  var paint = function init(courses,goals,skills, nameEspec){
    let specname, goal, skill;
    let peso = function peso(objs){
      return objs.reduce((result, current) => result*current.peso, 1)
    }
    let findGoal = function find(goals,value){
      return goals.filter(o => o.total == value);
    }
    let findSkill = function find(skills,value){
      return skills.filter(o => o.total == value);
    }

    let findNameEspec = function find(value, espec){
      return espec.filter(o => o.total == value)[0];
    }

    let infoComb =  function info(specname){
      $('.info-detail').remove();
      specname.info.forEach(function(info, index){
        let unidade, endereco, inicio, periodo, carga, horario, valor, aVista, link, elementInfo;
        unidade = $('<p></p>').text('Unidade: '+info.unidade);
        endereco = $('<p></p>').text('Endereço: '+info.endereco);
        inicio = $('<p></p>').text('Início: '+info.inicio);
        periodo = $('<p></p>').text('Periodicidade: '+info.periodicidade);
        carga = $('<p></p>').text('Carga horária total: '+info.cargaHoraria);
        horario = $('<p></p>').text('Horário: '+info.horario);
        valor = $('<p></p>').text('Valor: '+info.valor);
        aVista = $('<p></p>').text('Valor: à vista:'+ info.aVista);
        link = $('<a></a>').text("Inscreva-se").attr("href", info.link).attr("target", "_blank").addClass('button-print');
        elementInfo = $('.info-cursos').append("<div class='info-detail detail-"+index+" column col-m-12 col-t-6'></div>");
        unidade.appendTo('.detail-'+index);
        endereco.appendTo('.detail-'+index);
        inicio.appendTo('.detail-'+index);
        carga.appendTo('.detail-'+index);
        periodo.appendTo('.detail-'+index);
        horario.appendTo('.detail-'+index);
        valor.appendTo('.detail-'+index);
        aVista.appendTo('.detail-'+index);
        link.appendTo('.detail-'+index);
      });
    };

    switch(courses.length) {
      case 1:
          $('.line-info').show();
          $('.line-mensagem').hide();
          $('.areas').html(courses.length +' área');
          specname = findNameEspec(peso(courses), nameEspec);
          $('.spec-name').html(specname.certificado);
          $('.hours').html((courses.length*180));
          $('.meses').html('6 meses de duração');
          $('.trilha-1').html("Trilha 1");
          $('.trilha-2,.trilha-3,.trilha-4').html("");
          goal = findGoal(goals,peso(courses));
          skill = findSkill(skills, peso(courses));
          $('.goal').html(goal[0].descricao);
          $('.skill').html(skill[0].descricao);
          infoComb(specname);
          break;
      case 2:
          $('.line-info').show();
          $('.line-mensagem').hide();
          $('.areas').html(courses.length +' áreas');
          specname = findNameEspec(peso(courses), nameEspec);
          $('.spec-name').html(specname.certificado);
          if(courses[0].combDay == courses[1].combDay){
            $('.meses').html('1 ano de duração');
            $('.trilha-1').html("Trilha 1");
            $('.trilha-3').html("Trilha 2");
            $('.trilha-2,.trilha-4').html("");
          }else{
            $('.meses').html('6 meses de duração');
            $('.trilha-1').html("Trilha 1");
            $('.trilha-2').html("Trilha 2");
            $('.trilha-3,.trilha-4').html("");
          }
          $('.hours').html((courses.length*180)+90);
          goal = findGoal(goals,peso(courses));
          skill = findSkill(skills, peso(courses));
          $('.goal').html(goal[0].descricao);
          $('.skill').html(skill[0].descricao);
          $('.info-detail').remove();
          infoComb(specname);
          break;
      case 3:
          $('.line-info').show();
          $('.line-mensagem').hide();
          $('.areas').html(courses.length +' áreas');
          specname = findNameEspec(750, nameEspec);
          $('.spec-name').html(specname.certificado);
          $('.meses').html('1 ano de duração');
          let i=0;
          let coursesGrade = courses.some(function(el, index){
            if(el.semestre == 2){i++;}
            return i >=2;
          });
          if(coursesGrade){
            $('.trilha-1').html("Trilha 1");
            $('.trilha-2').html("");
            $('.trilha-3').html("Trilha 2");
            $('.trilha-4').html("Trilha 3");
          }else{
            $('.trilha-1').html("Trilha 1");
            $('.trilha-2').html("Trilha 2");
            $('.trilha-3').html("Trilha 3");
            $('.trilha-4').html("");
          }
          $('.hours').html((courses.length*180)+90 );
          goal = findGoal(goals,peso(courses));
          skill = findSkill(skills, peso(courses));
          $('.goal').html(goal[0].descricao);
          $('.skill').html(skill[0].descricao);
          $('.info-detail').remove();
          infoComb(specname);
          break;
      case 4:
          $('.line-info').show();
          $('.line-mensagem').hide();
          $('.areas').html(courses.length +' áreas');
          specname = findNameEspec(peso(courses), nameEspec);
          $('.spec-name').html(specname.certificado);
          $('.meses').html('1 ano de duração');
          $('.trilha-1').html("Trilha 1");
          $('.trilha-2').html("Trilha 2");
          $('.trilha-3').html("Trilha 3");
          $('.trilha-4').html("Trilha 4");
          $('.hours').html((courses.length*180)+90);
          goal = findGoal(goals,peso(courses));
          skill = findSkill(skills, peso(courses))
          $('.goal').html(goal[0].descricao);
          $('.skill').html(skill[0].descricao);
          $('.info-detail').remove();
          infoComb(specname);
          break;
      default:
         $('.line-mensagem').show();
         $('.mensagem-none').html("<b>Simule a escolha de seu curso de Pós, selecionando de uma a quatro áreas de acordo com a necessidade da sua carreira</b>.<br>Clique na(s) área(s) de interesse e arraste para os campos pontilhados, para gerar a simulação.");
         $('.line-info').hide();
         $('.skill').html('');
         $('.goal').html('');
         $('.trilhas').html('');
         $('.info-detail').remove();
      }
  };

  paint(cart());

};
