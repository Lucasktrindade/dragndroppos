

/*Scripts for page*/
var main = (function init(){
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
  const elements = [
       {
          "nome":"RH",
          "slug":"rh",
          "dropped":false,
          "cargaHoraria":180,
          "disciplinas":[
            {
              "nome":"RH"
            }
          ],
          "id":1,
          "peso":5
       },
       {
          "nome":"Logística",
          "slug":"logistica",
          "dropped":false,
          "cargaHoraria":180,
          "disciplinas":[
            {
              "nome":"Logística"
            }
          ],
          "id":2,
          "peso":10
       },
       {
          "nome":"Marketing",
          "slug":"marketing",
          "dropped":false,
          "cargaHoraria":180,
          "disciplinas":[
            {
              "nome":"Marketing"
            }
          ],
          "id":3,
          "peso":15
       },
       {
          "nome":"Finanças",
          "slug":"financas",
          "dropped":false,
          "cargaHoraria":180,
          "disciplinas":[
            {
              "nome":"Finanças"
            }
          ],
          "id":4,
          "peso":20
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
      "descricao":"Fazer compreender a importância do domínio das ferramentas nas áreas de marketing e finanças como sendo fundamentais para o processo efetivo de atendimento ao cliente de forma eficiente, tanto sob o ponto de vista de serviços como financeiros e dos instrumentos e impactos nos resultados da empresa.",
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
      "descricao":"Ao final do curso o participante estará apto a compreender o mercado, planejar o composto de marketing e implantar estratégias mercadológicas e entender o impacto da correta gestão de recursos humanos no que tange à liderança, proatividade e comprometimento, na aplicação das ferramentas de marketing e no sucesso da empresa.",
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
      "descricao":"Ao final do curso, o participante estará apto a implementar estratégias logísticas que assegurem a disponibilização de bens e serviços, a partir da adequação dos fluxos - de informações e físicos.",
      "total":10
    },
    {
      "id":9,
      "descricao":"Ao final do curso, o participante estará apto a desenvolver políticas de gestão financeira que atendam às especificidades do mercado.",
      "total":20
    },
    {
      "id":10,
      "descricao":"Ao final do curso, o participante estará apto a compreender o impacto da correta gestão de recursos humanos no que tange à liderança, proatividade e comprometimento, no sucesso da empresa.",
      "total":5
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
  paint(cart());
  $( ".drag" ).draggable({
      revert : function(event, ui) {
            $(this).data("uiDraggable").originalPosition = {
                top : 0,
                left : 0
            };
            return !event;
        }
      });
  $(".droppable" ).droppable({
      accept: ".drag",
      drop: function( event, ui ) {
        ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
        addNumber( ui.draggable, ui.draggable.data('id') );
        hourIn(ui.draggable.data('id'));
        return paint(cart(),goals,skills);
      },
      out: function ( event,ui ){
        ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
        removeNumber( ui.draggable, ui.draggable.data('id') );
        hourOut(ui.draggable.data('id'));
        return paint(cart(),goals,skills);
      }
  });

  let addNumber = function dropCount(element, number){
    if(dropped() > 4){
      return added(element, false);
    }else{
      numberId.push(number);
      return added(element, true);
    }
  };

  let added = function alterElement(element,bool){
      if(bool){
        element.addClass('dropped');
        return true;
      }else{
        return false;
      }
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

  let hourIn =  function show(id){
    let element = findById(id);
    if(!element[0].dropped){
      element[0].dropped = true;
      $('.hour-'+element[0].slug).fadeIn();
    }
  };

  let hourOut =  function show(id){
    let element = findById(id);
      if(element[0].dropped){
        element[0].dropped = false;
        $('.hour-'+element[0].slug).fadeOut();
      }
  };

});

var paint = (function init(courses,goals,skills){
  let peso = function peso(objs){
    return objs.reduce((prev,current) => prev.peso*current.peso);
  }
  let findGoal = function find(goals,value){
    return goals.filter(o => o.total == value);
  }
  let findSkill = function find(skills,value){
    return skills.filter(o => o.total == value);
  }
  switch(courses.length) {
    case 1:
        $('.line-info').show();
        $('.line-mensagem').hide();
        $('.areas').html(courses.length +' área');
        $('.spec-name').html('Certificado de Aperfeiçoamento em Gestão '+courses[0].nome);
        $('.hours').html((courses.length*180));
        $('.meses').html('6 meses de duração');
        let goal1 = findGoal(goals,courses[0].peso);
        let skill1 = findSkill(skills, courses[0].peso)
        $('.goal').html(goal1[0].descricao);
        $('.skill').html(skill1[0].descricao);
        break;
    case 2:
        $('.line-info').show();
        $('.line-mensagem').hide();
        $('.areas').html(courses.length +' áreas');
        $('.spec-name').html('Certificado de Especialização em Gestão');
        $('.meses').html('6 meses de duração');
        $('.hours').html((courses.length*180)+90);
        let goal2 = findGoal(goals,peso(courses));
        let skill2 = findSkill(skills, peso(courses))
        $('.goal').html(goal2[0].descricao);
        $('.skill').html(skill2[0].descricao);
        break;
    case 3:
        $('.line-info').show();
        $('.line-mensagem').hide();
        $('.areas').html(courses.length +' áreas');
        $('.spec-name').html('Certificado de MBA em Gestão Essencial');
        $('.meses').html('1 ano de duração');
        $('.hours').html((courses.length*180)+90 );
        $('.goal').html("Fazer compreender os aspectos gerais de gestão de empresas e negócios, em suas visões essenciais dos aspectos de mercado e de marketing, da gestão de recursos financeiros, humanos e todo o processo de gestão estratégica e operacional dos recursos logísticos, de forma integrada e holística.");
        $('.skill').html("Ao final do curso o aluno estará apto a entender e aplicar os modelos de gestão das empresas considerando desde a análise e posicionamento de mercado, sua forma de atendimento ao consumidor, seu processo de produção e movimentação de produtos e serviços, sua gestão de recursos financeiros e apuração de resultados, bem como o processo de envolvimento das pessoas na gestão dos recursos e na motivação para a busca de resultados.");
        break;
    case 4:
        $('.line-info').show();
        $('.line-mensagem').hide();
        $('.areas').html(courses.length +' áreas');
        $('.spec-name').html('Certificado de MBA em Gestão Avançado');
        $('.meses').html('1 ano de duração');
        $('.alert-box').fadeOut();
        $('.hours').html((courses.length*180)+90);
        $('.goal').html("Fazer compreender os aspectos gerais de gestão de empresas e negócios, em suas visões avançadas relacionadas aos aspectos de mercado e de markeeting, a gestão de recursos financeiros e humanos e todo o processo de gestão estratégica e operacional de recursos logísticos, de forma integrada e holística.");
        $('.skill').html("Ao final do curso o aluno estará apto a entender e aplicar os modelos de gestão das empresas considerando, de forma ampla e abrangente, desde a análise e posicionamento de mercado, sua forma de atendimento ao consumidor, seu processo de produção e movimentação de produtos e serviços, sua gestão de recursos financeiros e apuração de resultados, bem como o processo de envolvimento das pessoas na gestão dos recursos e na motivação para a busca de resultados.");
        break;
    default:
       $('.line-info').hide();
       $('.line-mensagem').show();
       $('.mensagem-none').html("<b>Simule a escolha de seu curso de Pós, selecionando de uma a quatro áreas de acordo com a necessidade da sua carreira</b>.<br>Clique na(s) área(s) de interesse e arraste para os campos pontilhados, para gerar a simulação.");
       $('.skill').html('');
       $('.goal').html('');
    }
});
