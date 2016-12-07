
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
          "cargaHoraria":180,
          "disciplinas":[
            {
              "nome":"RH"
            }
          ],
          "id":1
       },
       {
          "nome":"Logística",
          "cargaHoraria":180,
          "disciplinas":[
            {
              "nome":"Logística"
            }
          ],
          "id":2
       },
       {
          "nome":"Marketing",
          "cargaHoraria":180,
          "disciplinas":[
            {
              "nome":"Marketing"
            }
          ],
          "id":3
       },
       {
          "nome":"Finanças",
          "cargaHoraria":180,
          "disciplinas":[
            {
              "nome":"Finanças"
            }
          ],
          "id":4
       },
  ];
  const goals = [
    {
      "id":1,
      "descricao":"Fazer compreender a importância do domínio das ferramentas nas áreas de marketing e logística como sendo fundamentais para o processo efetivo de atendimento ao cliente, que envolve, além da venda, também a disponibilização adequada de bens e serviços.",
      "peso":0;
    },
    {
      "id":2,
      "descricao":"Fazer compreender a importância do domínio das ferramentas nas áreas de marketing e finanças como sendo fundamentais para o processo efetivo de atendimento ao cliente de forma eficiente, tanto sob o ponto de vista de serviços como financeiros e dos instrumentos e impactos nos resultados da empresa.",
      "peso":0;
    },
    {
      "id":3,
      "descricao":"Fazer compreender a importância do domínio das ferramentas nas áreas de marketing e finanças como sendo fundamentais para o processo efetivo de atendimento ao cliente de forma eficiente, tanto sob o ponto de vista de serviços como financeiros e dos instrumentos e impactos nos resultados da empresa.",
      "peso":0;
    },
    {
      "id":4,
      "descricao":"Fazer compreender a importância do domínio das variáveis de gestão dos recursos humanos da organizacão, em seus aspectos motivacionais, de liderança e de competências e a integração e seus impactos nas atividades operacionais de logística e movimentação, bem como da integração entre os processos e recursos físicos e humanos.",
      "peso":0;
    },
    {
      "id":5,
      "descricao":"Fazer compreender a importância do domínio das variáveis de gestão dos recursos humanos da organizacão, em seus aspectos motivacionais, de liderança e de competências e os seus impactos nos resultados financeiros da organização, bem como nos processos e sistemas de gestão de recursos e de investimentos.",
      "peso":0;
    },
  ];
  var dropped = function count(){
    return $('.draggable .dropped').length;
  }

  var cart = function finish(){
    return elements.filter(o => numberId.indexOf(o.id) >= 0);
  }
  paint(cart());
  $( ".drag" ).draggable();
  $(".droppable" ).droppable({
      accept: ".drag",
      drop: function( event, ui ) {
        addNumber( ui.draggable, ui.draggable.data('id') );
        return paint(onCreate());
      },
      out: function ( event,ui ){
        removeNumber( ui.draggable, ui.draggable.data('id') );
        return paint(onDelete());
      }
  });

  var addNumber = function dropCount(element, number){
    if(dropped() > 4){
      return added(element, false);
    }else{
      numberId.push(number);
      return added(element, true);
    }
  };

  var added = function alterElement(element,bool){
      if(bool){
        element.addClass('.dropped');
        return true;
      }else{
        return false;
      }
  }

  var removeNumber = function dropCount(element,number){
      element.removeClass('dropped');
      for(var i = numberId.length - 1; i >= 0; i--) {
         if(numberId[i] === number) {
            numberId.splice(i, 1);
        }
      }

      return true;
  };

  var onCreate = function update(){
    return cart();
  };

  var onDelete = function update(){
    return cart();
  };
});

var paint = (function init(objs){
  switch(objs.length) {
    case 1:
        $('.areas').html(objs.length +' área');
        $('.spec-name').html('Certificado de Aperfeiçoamento em Gestão');
        $('.hours').html((objs.length*180));
        $('.meses').html('6 meses de duração');
        break;
    case 2:
        $('.areas').html( objs.length +' áreas');
        $('.spec-name').html('Certificado de Especialização em Gestão');
        $('.meses').html('6 meses de duração');
        $('.hours').html((objs.length*180)+90);
        break;
    case 3:
        $('.areas').html(objs.length +' áreas');
        $('.spec-name').html('Certificado de MBA em Gestão Essencial');
        $('.meses').html('1 ano de duração');
        $('.hours').html((objs.length*180)+90 );
        break;
    case 4:
        $('.areas').html(objs.length +' áreas');
        $('.spec-name').html('Certificado de MBA em Gestão Avançado');
        $('.meses').html('1 ano de duração');
        $('.hours').html((objs.length*180)+90);
        break;
    default:
       $('.areas').html('0 áreas');
       $('.spec-name').html('Nenhum curso selecionado');
       $('.meses').html('0 de duração');
       $('.hours').html('0');
    }
});
