

/*Scripts for page*/
var pos = pos || {};
pos.unigranrio = pos.unigranrio || {};
pos.unigranrio.simulador = pos.unigranrio.simulador || {};
pos.unigranrio.simulador.gestao = pos.unigranrio.simulador.gestao || {};

 pos.unigranrio.simulador.gestao.main = function(){
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
          "nome":"RH",
          "slug":"rh",
          "cargaHoraria":180,
          "id":1,
          "peso":5,
          "combDay":1,
          "semestre":1,
       },
       {
          "nome":"Logística",
          "slug":"logistica",
          "cargaHoraria":180,
          "id":2,
          "peso":10,
          "combDay":2,
          "semestre":2,
       },
       {
          "nome":"Marketing",
          "slug":"marketing",
          "cargaHoraria":180,
          "id":3,
          "peso":15,
          "combDay":1,
          "semestre":2,
       },
       {
          "nome":"Finanças",
          "slug":"financas",
          "cargaHoraria":180,
          "id":4,
          "peso":20,
          "combDay":2,
          "semestre":1,
       },
  ];
  const goals = [
    {
      "id":1,
      "descricao":"Fazer compreender a importância do domínio das ferramentas nas áreas de marketing e logística como sendo fundamentais para o processo efetivo de atendimento ao cliente, que envolve, além da venda, também a disponibilização adequada de bens e serviços.",
      "total":150
    },
    {
      "id":2,
      "descricao":"Fazer compreender a importância do domínio das ferramentas nas áreas de marketing e finanças como sendo fundamentais para o processo efetivo de atendimento ao cliente de forma eficiente, tanto sob o ponto de vista de serviços como financeiros e dos instrumentos e impactos nos resultados da empresa.",
      "total":300
    },
    {
      "id":3,
      "descricao":"Fazer compreender a importância do domínio das ferramentas nas áreas de marketing e gestão de pessoas como sendo fundamentais para o processo efetivo de atendimento ao cliente de forma eficiente, considerando os impactos da participação das pessoas, da liderança e da organização de pessoal, nos resultados da organização.",
      "total":75
    },
    {
      "id":4,
      "descricao":"Fazer compreender a importância do domínio das variáveis de gestão dos recursos humanos da organizacão, em seus aspectos motivacionais, de liderança e de competências e a integração e seus impactos nas atividades operacionais de logística e movimentação, bem como da integração entre os processos e recursos físicos e humanos.",
      "total":50
    },
    {
      "id":5,
      "descricao":"Fazer compreender a importância do domínio das variáveis de gestão dos recursos humanos da organizacão, em seus aspectos motivacionais, de liderança e de competências e os seus impactos nos resultados financeiros da organização, bem como nos processos e sistemas de gestão de recursos e de investimentos.",
      "total":60
    },
    {
      "id":6,
      "descricao":"Fazer compreender a importância do domínio das variáveis de gestão da logística integral da organização, que inclui todas as atividades do processo de compras, produção, movimentação e entregas, avaliando os impactos financeiros destas atividades na gestão organizacional.",
      "total":200
    },
    {
      "id":7,
      "descricao":"Fazer compreender a importância do domínio das ferramentas na área de marketing como sendo fundamentais para o processo efetivo de atendimento e a geração de vantagens competitivas para as organizações.",
      "total":15
    },
    {
      "id":8,
      "descricao":"Fazer compreender a importância do domínio das ferramentas na área de  logística como sendo fundamentais para o processo efetivo de disponibilização adequada de bens e serviços aos clientes e consumidores.",
      "total":10
    },
    {
      "id":9,
      "descricao":"Fazer compreender a importância do domínio das ferramentas na área de  finanças  como sendo fundamentais para o sucesso organizacional.",
      "total":20
    },
    {
      "id":10,
      "descricao":"Fazer compreender a importância do domínio das ferramentas na área de gestão de pessoas, considerando os impactos da participação das pessoas, da liderança e da organização de pessoal nos resultados da organização.",
      "total":5
    },
    {
      "id":11,
      "descricao":"Fazer compreender a importância do domínio das variáveis de gestão dos recursos humanos da organizacão, em seus aspectos motivacionais, de liderança e de competências e os seus impactos nos resultados financeiros da organização, bem como nos processos e sistemas de gestão de recursos e de investimentos.",
      "total":100
    },
  ];
  const skills = [
    {
      "id":1,
      "descricao":"Ao final do curso o participante estará apto a compreender o mercado, planejar o composto de marketing, desenvolver e implementar estratégias mercadológicas, sendo capaz de disponibilizar adequadamente bens e serviços conforme previsto no plano de marketing.",
      "total":150
    },
    {
      "id":2,
      "descricao":"Ao final do curso o participante estará apto a compreender o mercado, planejar o composto de marketing e implantar estratégias mercadológicas, bem como a entender o impacto da gestão financeira das atividades realizadas e a forma de analisar os resultados e compreender a saúde financeira da organização.",
      "total":300
    },
    {
      "id":3,
      "descricao":"Ao final do curso, o participante estará apto a compreender o mercado, planejar o composto de marketing e implantar estratégias mercadológicas e entender o impacto da correta gestão de recursos humanos no que tange à liderança, proatividade e comprometimento, na aplicação das ferramentas de marketing e no sucesso da empresa.",
      "total":75
    },
    {
      "id":4,
      "descricao":"Ao final do curso o participante estará apto a entender a importância das práticas de recursos humanos no sucesso da organização e a sua influência nos resultados operacionais e logísticos, promovendo a integração entre setores, processos e pessoas e motivando e empoderando as equipes na busca de resultados.",
      "total":50
    },
    {
      "id":5,
      "descricao":"Ao final de curso o participante estará apto a entender a importância das práticas de recursos humanos no sucesso da organização e a sua influência nos resultados financeiros de avaliação de investimentos, retornos financeiros, fluxos de caixa e de análise de recursos utilizados pelas equipes.",
      "total":60
    },
    {
      "id":6,
      "descricao":"Ao final de curso o participante estará apto a entender a importância das práticas das atividades logísticas de planejamento de compras, produção, movimentação, entregas e logística reversa, bem como a sua influência nos resultados financeiros de avaliação de investimentos, retornos financeiros, fluxos de caixa e de análise de recursos utilizados pelas equipes",
      "total":200
    },
    {
      "id":7,
      "descricao":"Ao final do curso, o participante estará apto a compreender o mercado, planejar o composto de marketing e a desenvolver e implementar estratégias mercadológicas, de forma a potencializar os recursos organizacionais, conforme previsto no plano de marketing.",
      "total":15
    },
    {
      "id":8,
      "descricao":"Ao final do curso, o participante estará apto a implementar estratégias logísticas que assegurem a disponibilização de bens e serviços, a partir da adequação dos fluxos – de informações e físicos.",
      "total":10
    },
    {
      "id":9,
      "descricao":"Ao final do curso, o participante estará apto a desenvolver políticas de gestão financeira que atendam às especificidades do mercado.",
      "total":20
    },
    {
      "id":10,
      "descricao":"Ao final do curso, o participante estará apto a compreender o impacto da correta gestão de recursos humanos no que tange à liderança, à proatividade e ao comprometimento no sucesso da empresa.",
      "total":5
    },
    {
      "id":11,
      "descricao":"Ao final de curso, o participante estará apto a entender a importância das práticas de recursos humanos no sucesso da organização e a sua influência nos resultados financeiros de avaliação de investimentos, retornos financeiros, fluxos de caixa e de análise de recursos utilizados pelas equipes.",
      "total":100
    },
  ];
  const nameEspec = [
    {
      "id":1,
      "certificado": "Certificado de Especialização em Gestão de Marketing e Logística Integrada",
      "info": [
        {
          "unidade":"Campus I - Duque de Caxias",
          "endereco":"Rua Prof. José de Souza Herdy, 1160 - Jardim Vinte e Cinco de Agosto, Duque de Caxias - RJ",
          "inicio":"20/03/2017 (Duração: 6 meses)",
          "periodicidade":"Segunda a Sexta (Semanal)",
          "cargaHoraria":"450 horas",
          "horario":"19h às 22h",
          "valor":"1+8x de R$ 1.240,00 ou 1+14x de R$ 781,20",
          "aVista":"R$ 10.044,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20188-17001"
        },
        {
          "unidade":"Unidade Barra da Tijuca",
          "endereco":"Av. Ayrton Senna, 3.383, Barra da Tijuca - Rio de Janeiro (RJ) - CEP: 22775-002",
          "inicio":"20/03/2017 (Duração: 6 meses)",
          "periodicidade":"Segunda a Sexta (Semanal)",
          "cargaHoraria":"450 horas",
          "horario":"19h às 22h",
          "valor":"1+8x de R$ 1.240,00 ou 1+14x de R$ 781,20",
          "aVista":"R$ 10.044,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20188-17002"
        },
      ],
      "total":150,
    },
    {
      "id":2,
      "certificado":"Certificado de Especialização em Gestão de Pessoas e Finanças",
      "info": [
        {
          "unidade":"Campus I - Duque de Caxias",
          "endereco":"Rua Prof. José de Souza Herdy, 1160 - Jardim Vinte e Cinco de Agosto, Duque de Caxias - RJ",
          "inicio":"20/03/2017 (Duração: 6 meses)",
          "periodicidade":"Segunda a Sexta (Semanal)",
          "cargaHoraria":"450 horas",
          "horario":"19h às 22h",
          "valor":"1+8x de R$ 1.240,00 ou 1+14x de R$ 781,20",
          "aVista":"R$ 10.044,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20195-17001"
        },
        {
          "unidade":"Unidade Barra da Tijuca",
          "endereco":"Av. Ayrton Senna, 3.383, Barra da Tijuca - Rio de Janeiro (RJ) - CEP: 22775-002",
          "inicio":"20/03/2017 (Duração: 6 meses)",
          "periodicidade":"Segunda a Sexta (Semanal)",
          "cargaHoraria":"450 horas",
          "horario":"19h às 22h",
          "valor":"1+8x de R$ 1.240,00 ou 1+14x de R$ 781,20",
          "aVista":"R$ 10.044,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20195-17002"
        },
      ],
      "total":100,
    },
    {
      "id":3,
      "certificado": "Certificado de Especialização em Gestão de Pessoas e Logística Integrada",
      "total":50,
      "info": [
        {
          "unidade":"Campus I - Duque de Caxias",
          "endereco":"Rua Prof. José de Souza Herdy, 1160 - Jardim Vinte e Cinco de Agosto, Duque de Caxias - RJ",
          "inicio":"20/03/2017 (Duração: 6 meses)",
          "periodicidade":"Segunda a Sexta (Semanal)",
          "cargaHoraria":"450 horas",
          "horario":"19h às 22h",
          "valor":"1+8x de R$ 1.240,00 ou 1+14x de R$ 781,20",
          "aVista":"R$ 10.044,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20200-17001"
        },
        {
          "unidade":"Unidade Barra da Tijuca",
          "endereco":"Av. Ayrton Senna, 3.383, Barra da Tijuca - Rio de Janeiro (RJ) - CEP: 22775-002",
          "inicio":"20/03/2017 (Duração: 6 meses)",
          "periodicidade":"Segunda a Sexta (Semanal)",
          "cargaHoraria":"450 horas",
          "horario":"19h às 22h",
          "valor":"1+8x de R$ 1.240,00 ou 1+14x de R$ 781,20",
          "aVista":"R$ 10.044,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20200-17002"
        },
      ],
    },
    {
      "id":4,
      "certificado":"Certificado de Especialização em Gestão Estratégica de Pessoas e Marketing",
      "info": [
        {
          "unidade":"Campus I - Duque de Caxias",
          "endereco":"Rua Prof. José de Souza Herdy, 1160 - Jardim Vinte e Cinco de Agosto, Duque de Caxias - RJ",
          "inicio":"20/03/2017 (Duração: 6 meses)",
          "periodicidade":"Segunda e Quarta (Semanal), Sexta (Quinzenal)",
          "cargaHoraria":"450 horas",
          "horario":"19h às 22h",
          "valor":"1+14x de R$ 744,00 ou 1+17x de 651,00 ou 1+23x de 511,50",
          "aVista":"R$ 10.044,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20190-17001"
        },
        {
          "unidade":"Unidade Barra da Tijuca",
          "endereco":"Av. Ayrton Senna, 3.383, Barra da Tijuca - Rio de Janeiro (RJ) - CEP: 22775-002",
          "inicio":"20/03/2017 (Duração: 6 meses)",
          "periodicidade":"Segunda e Quarta (Semanal), Sexta (Quinzenal)",
          "cargaHoraria":"450 horas",
          "horario":"19h às 22h",
          "valor":"1+14x de R$ 744,00 ou 1+17x de 651,00 ou 1+23x de 511,50",
          "aVista":"R$ 10.044,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20190-17002"
        },
      ],
      "total":75,
    },
    {
      "id":5,
      "certificado":"Certificado de Especialização em Gestão Financeira e Logística",
      "info": [
        {
          "unidade":"Campus I - Duque de Caxias",
          "endereco":"Rua Prof. José de Souza Herdy, 1160 - Jardim Vinte e Cinco de Agosto, Duque de Caxias - RJ",
          "inicio":"21/03/2017 (Duração: 12 meses)",
          "periodicidade":"Terça e Quinta (Semanal), Sexta (Quinzenal)",
          "cargaHoraria":"450 horas",
          "horario":"19h às 22h",
          "valor":"1+14x de R$ 744,00 ou 1+17x de 651,00 ou 1+23x de 511,50",
          "aVista":"R$ 10.044,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20196-17001"
        },
        {
          "unidade":"Unidade Barra da Tijuca",
          "endereco":"Av. Ayrton Senna, 3.383, Barra da Tijuca - Rio de Janeiro (RJ) - CEP: 22775-002",
          "inicio":"21/03/2017 (Duração: 12 meses)",
          "periodicidade":"Terça e Quinta (Semanal), Sexta (Quinzenal)",
          "cargaHoraria":"450 horas",
          "horario":"19h às 22h",
          "valor":"1+14x de R$ 744,00 ou 1+17x de 651,00 ou 1+23x de 511,50",
          "aVista":"R$ 10.044,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20196-17002"
        },
      ],
      "total":200,
    },
    {
      "id":6,
      "certificado":"Certificado de Especialização em Gestão de Marketing e Finanças",
      "info": [
        {
          "unidade":"Campus I - Duque de Caxias",
          "endereco":"Rua Prof. José de Souza Herdy, 1160 - Jardim Vinte e Cinco de Agosto, Duque de Caxias - RJ",
          "inicio":"20/03/2017 (Duração: 6 meses)",
          "periodicidade":"Segunda a Sexta (Semanal)",
          "cargaHoraria":"450 horas",
          "horario":"19h às 22h",
          "valor":"1+8x de R$ 1.240,00 ou 1+14x de R$ 781,20",
          "aVista":"R$ 10.044,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20192-17001"
        },
        {
          "unidade":"Unidade Barra da Tijuca",
          "endereco":"Av. Ayrton Senna, 3.383, Barra da Tijuca - Rio de Janeiro (RJ) - CEP: 22775-002",
          "inicio":"20/03/2017 (Duração: 6 meses)",
          "periodicidade":"Segunda a Sexta (Semanal)",
          "cargaHoraria":"450 horas",
          "horario":"19h às 22h",
          "valor":"1+8x de R$ 1.240,00 ou 1+14x de R$ 781,20",
          "aVista":"R$ 10.044,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20192-17002"
        },
      ],
      "total":300,
    },
    {
      "id":7,
      "certificado":"Certificado de Aperfeiçoamento em RH",
      "info": [
        {
          "unidade":"Campus I - Duque de Caxias",
          "endereco":"Rua Prof. José de Souza Herdy, 1160 - Jardim Vinte e Cinco de Agosto, Duque de Caxias - RJ",
          "inicio":"20/03/2017 (Duração: 6 meses)",
          "periodicidade":"Segunda e Quarta (Semanal), Sexta (Quinzenal)",
          "cargaHoraria":"180 horas",
          "horario":"19h às 22h",
          "valor":"1+5x de R$ 990,00",
          "aVista":"R$ 5.346,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20501-17001"
        },
        {
          "unidade":"Unidade Barra da Tijuca",
          "endereco":"Av. Ayrton Senna, 3.383, Barra da Tijuca - Rio de Janeiro (RJ) - CEP: 22775-002",
          "inicio":"20/03/2017 (Duração: 6 meses)",
          "periodicidade":"Segunda e Quarta (Semanal), Sexta (Quinzenal)",
          "cargaHoraria":"180 horas",
          "horario":"19h às 22h",
          "valor":"1+5x de R$ 990,00",
          "aVista":"R$ 5.346,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20501-17002"
        },
      ],
      "total":5,
    },
    {
      "id":8,
      "certificado":"Certificado de Aperfeiçoamento em Logística",
      "info": [
        {
          "unidade":"Campus I - Duque de Caxias",
          "endereco":"Rua Prof. José de Souza Herdy, 1160 - Jardim Vinte e Cinco de Agosto, Duque de Caxias - RJ",
          "inicio":"21/03/2017 (Duração: 6 meses)",
          "periodicidade":"Terça e Quinta (Semanal), Sexta (Quinzenal)",
          "cargaHoraria":"180 horas",
          "horario":"19h às 22h",
          "valor":"1+5x de R$ 990,00",
          "aVista":"R$ 5.346,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20502-17001"
        },
        {
          "unidade":"Unidade Barra da Tijuca",
          "endereco":"Av. Ayrton Senna, 3.383, Barra da Tijuca - Rio de Janeiro (RJ) - CEP: 22775-002",
          "inicio":"21/03/2017 (Duração: 6 meses)",
          "periodicidade":"Terça e Quinta (Semanal), Sexta (Quinzenal)",
          "cargaHoraria":"180 horas",
          "horario":"19h às 22h",
          "valor":"1+5x de R$ 990,00",
          "aVista":"R$ 5.346,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20502-17002"
        },
      ],
      "total":10,
    },
    {
      "id":9,
      "certificado":"Certificado de Aperfeiçoamento em Marketing",
      "info": [
        {
          "unidade":"Campus I - Duque de Caxias",
          "endereco":"Rua Prof. José de Souza Herdy, 1160 - Jardim Vinte e Cinco de Agosto, Duque de Caxias - RJ",
          "inicio":"20/03/2017 (Duração: 6 meses)",
          "periodicidade":"Segunda e Quarta (Semanal), Sexta (Quinzenal)",
          "cargaHoraria":"180 horas",
          "horario":"19h às 22h",
          "valor":"1+5x de R$ 990,00",
          "aVista":"R$ 5.346,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20500-17001"
        },
        {
          "unidade":"Unidade Barra da Tijuca",
          "endereco":"Av. Ayrton Senna, 3.383, Barra da Tijuca - Rio de Janeiro (RJ) - CEP: 22775-002",
          "inicio":"21/03/2017 (Duração: 6 meses)",
          "periodicidade":"Segunda e Quarta (Semanal), Sexta (Quinzenal)",
          "cargaHoraria":"180 horas",
          "horario":"19h às 22h",
          "valor":"1+5x de R$ 990,00",
          "aVista":"R$ 5.346,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20500-17002"
        },
      ],
      "total":15,
    },
    {
      "id":10,
      "certificado":"Certificado de Aperfeiçoamento em Finanças",
      "info": [
        {
          "unidade":"Campus I - Duque de Caxias",
          "endereco":"Rua Prof. José de Souza Herdy, 1160 - Jardim Vinte e Cinco de Agosto, Duque de Caxias - RJ",
          "inicio":"21/03/2017 (Duração: 6 meses)",
          "periodicidade":"Terça e Quinta (Semanal), Sexta (Quinzenal)",
          "cargaHoraria":"180 horas",
          "horario":"19h às 22h",
          "valor":"1+5x de R$ 990,00",
          "aVista":"R$ 5.346,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20505-17001"
        },
        {
          "unidade":"Unidade Barra da Tijuca",
          "endereco":"Av. Ayrton Senna, 3.383, Barra da Tijuca - Rio de Janeiro (RJ) - CEP: 22775-002",
          "inicio":"21/03/2017 (Duração: 6 meses)",
          "periodicidade":"Terça e Quinta (Semanal), Sexta (Quinzenal)",
          "cargaHoraria":"180 horas",
          "horario":"19h às 22h",
          "valor":"1+5x de R$ 990,00",
          "aVista":"R$ 5.346,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20505-17002"
        },
      ],
      "total":20,
    },
    {
      "id":10,
      "certificado":"Certificado de MBA em Gestão Essencial",
      "info": [
        {
          "unidade":"Campus I - Duque de Caxias",
          "endereco":"Rua Prof. José de Souza Herdy, 1160 - Jardim Vinte e Cinco de Agosto, Duque de Caxias - RJ",
          "inicio":"20/03/2017 (Duração: 12 meses)",
          "periodicidade":"Segunda a Sexta (Semanal)",
          "cargaHoraria":"630 horas",
          "horario":"19h às 22h",
          "valor":"1+14x de R$ 1.008,00 ou 1+17x de 882,00 ou 1+23x de 693,00",
          "aVista":"R$ 13.608,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20198-17001"
        },
        {
          "unidade":"Unidade Barra da Tijuca",
          "endereco":"Av. Ayrton Senna, 3.383, Barra da Tijuca - Rio de Janeiro (RJ) - CEP: 22775-002",
          "inicio":"20/03/2017 (Duração: 12 meses)",
          "periodicidade":"Segunda a Sexta (Semanal)",
          "cargaHoraria":"630 horas",
          "horario":"19h às 22h",
          "valor":"1+14x de R$ 1.008,00 ou 1+17x de 882,00 ou 1+23x de 693,00",
          "aVista":"R$ 13.608,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20198-17002"
        },
      ],
      "total":750,
    },
    {
      "id":11,
      "certificado":"Certificado de MBA em Gestão Avançada",
      "info": [
        {
          "unidade":"Campus I - Duque de Caxias",
          "endereco":"Rua Prof. José de Souza Herdy, 1160 - Jardim Vinte e Cinco de Agosto, Duque de Caxias - RJ",
          "inicio":"20/03/2017 (Duração: 12 meses)",
          "periodicidade":"Segunda a Sexta (Semanal)",
          "cargaHoraria":"810 horas",
          "horario":"19h às 22h",
          "valor":"1+14x de R$ 1.200,00 ou 1+17x de 1.050,00 ou 1+23x de 825,00",
          "aVista":"R$ 16.200,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20199-17001"
        },
        {
          "unidade":"Unidade Barra da Tijuca",
          "endereco":"Av. Ayrton Senna, 3.383, Barra da Tijuca - Rio de Janeiro (RJ) - CEP: 22775-002",
          "inicio":"20/03/2017 (Duração: 12 meses)",
          "periodicidade":"Segunda a Sexta (Semanal)",
          "cargaHoraria":"810 horas",
          "horario":"19h às 22h",
          "valor":"1+14x de R$ 1.200,00 ou 1+17x de 1.050,00 ou 1+23x de 825,00",
          "aVista":"R$ 16.200,00",
          "link":"http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20199-17002"
        },
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
    if(cart().length < elements.length - 1){
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
      grades.map(function(grade){
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

  var paint = (function init(courses,goals,skills, nameEspec){
    let specName, goal, skill;

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
    };

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
        link = $('<a></a>').text("Inscreva-se já!").attr("href", info.link).attr("target", "_blank").addClass('button-print');
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
          $('.line-info , .info-banner, .grade, .table-semestre-1,.goals-skills').show();
          $('.line-mensagem,.table-semestre-2').hide();
          $('.areas').html(courses.length +' área');
          specName = findNameEspec(peso(courses), nameEspec);
          $('.spec-name').html(specName.certificado);
          $('.hours').html((courses.length*180));
          $('.meses').html('6 meses de duração');
          $('.trilha-1').html("Disciplina comum 1");
          $('.trilha-2,.trilha-3,.trilha-4').html("");
          goal = findGoal(goals,courses[0].peso);
          skill  = findSkill(skills, courses[0].peso)
          $('.goal').html(goal[0].descricao);
          $('.skill').html(skill[0].descricao);
          infoComb(specName);
          break;
      case 2:
          $('.line-info,.info-banner,.goals-skills').show();
          $('.line-mensagem').hide();
          $('.areas').html(courses.length +' áreas');
          specName = findNameEspec(peso(courses), nameEspec);
          $('.spec-name').html(specName.certificado);
          if(courses[0].combDay == courses[1].combDay){
            $('.meses').html('1 ano de duração');
            $('.trilha-1').html("Disciplina comum 1");
            $('.trilha-3').html("Disciplina comum 2");
            $('.trilha-2,.trilha-4').html("");
            $('.grade, .table-semestre-1, .table-semestre-2').show();
          }else{
            $('.meses').html('6 meses de duração');
            $('.trilha-1').html("Disciplina comum 1");
            $('.trilha-2').html("Disciplina comum 2");
            $('.trilha-3,.trilha-4').html("");
            $('.grade, .table-semestre-1').show();
            $('.table-semestre-2').hide();
          }
          $('.hours').html((courses.length*180)+90);
          goal = findGoal(goals,peso(courses));
          skill  = findSkill(skills, peso(courses))
          $('.goal').html(goal[0].descricao);
          $('.skill').html(skill[0].descricao);
          infoComb(specName);
          break;
      case 3:
          $('.line-info,.info-banner, .grade, .table-semestre-1, .table-semestre-2,.goals-skills').show();
          $('.line-mensagem').hide();
          $('.areas').html(courses.length +' áreas');
          specName = findNameEspec(750, nameEspec);
          $('.spec-name').html(specName.certificado);
          $('.meses').html('1 ano de duração');
          let i=0;
          let coursesGrade = courses.some(function(el, index){
            if(el.semestre == 2){i++;}
            return i >=2;
          });
          if(coursesGrade){
            $('.trilha-1').html("Disciplina comum 1");
            $('.trilha-2').html("");
            $('.trilha-3').html("Disciplina comum 2");
            $('.trilha-4').html("Disciplina comum 3");
          }else{
            $('.trilha-1').html("Disciplina comum 1");
            $('.trilha-2').html("Disciplina comum 2");
            $('.trilha-3').html("Disciplina comum 3");
            $('.trilha-4').html("");
          }
          $('.hours').html((courses.length*180)+90 );
          $('.goal').html("Fazer compreender os aspectos gerais de gestão de empresas e negócios, em suas visões essenciais dos aspectos de mercado e de marketing, da gestão de recursos financeiros, humanos, e de todo o processo de gestão estratégica e operacional dos recursos logísticos, de forma integrada e holística.");
          $('.skill').html("Ao final do curso, o aluno estará apto a entender e aplicar os modelos de gestão das empresas, considerando a análise e posicionamento de mercado, sua forma de atendimento ao consumidor, seu processo de produção e movimentação de produtos e serviços, sua gestão de recursos financeiros e apuração de resultados, bem como o processo de envolvimento das pessoas na gestão dos recursos e na motivação para a busca de resultados.");
          infoComb(specName);
          break;
      case 4:
          $('.line-info,.info-banner, .grade, .table-semestre-1, .table-semestre-2, .goals-skills').show();
          $('.line-mensagem').hide();
          $('.areas').html(courses.length +' áreas');
          specName = findNameEspec(peso(courses), nameEspec);
          $('.spec-name').html(specName.certificado);
          $('.meses').html('1 ano de duração');
          $('.trilha-1').html("Disciplina comum 1");
          $('.trilha-2').html("Disciplina comum 2");
          $('.trilha-3').html("Disciplina comum 3");
          $('.trilha-4').html("Disciplina comum 4");
          $('.hours').html((courses.length*180)+90);
          $('.goal').html("Fazer compreender os aspectos gerais de gestão de empresas e negócios, em suas visões avançadas relacionadas aos aspectos de mercado e de marketing, da gestão de recursos financeiros e humanos, e de todo o processo de gestão estratégica e operacional de recursos logísticos, de forma integrada e holística.");
          $('.skill').html("Ao final do curso, o aluno estará apto a entender e aplicar os modelos de gestão das empresas, considerando, de forma ampla e abrangente, a análise e posicionamento de mercado, sua forma de atendimento ao consumidor, seu processo de produção e movimentação de produtos e serviços, sua gestão de recursos financeiros e apuração de resultados, bem como o processo de envolvimento das pessoas na gestão dos recursos e na motivação para a busca de resultados.");
          infoComb(specName);
          break;
      default:
         $('.line-mensagem').show();
         $('.mensagem-none').html("<b>Simule a escolha de seu curso de Pós, selecionando de uma a quatro áreas, de acordo com a necessidade da sua carreira</b>.<br>Para gerar a simulação, clique na(s) área(s) de interesse e a(s) arraste para os campos pontilhados.");
         $('.line-info, .info-banner, .grade, .table-semestre-1, .table-semestre-2,.goals-skills').hide();
         $('.skill, .goal, .trilhas').html('');
         $('.info-detail').remove();
      }
  });

  paint(cart());
};
console.log(pos.main);
