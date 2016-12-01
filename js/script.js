
var main = (function init(){
  var numberId = [];
  var tcc = {
     "nome":"TCC",
     "cargaHoraria":90,
     "disciplinas":[
       {
         "nome":"Disciplina TCC"
       }
     ],
     "id":1
  };
  var elements = [
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
        $('.spec-name').html('Certificado de MBA Essencial em Gestão');
        $('.meses').html('1 ano de duração');
        $('.hours').html((objs.length*180)+90 );
        break;
    case 4:
        $('.areas').html(objs.length +' áreas');
        $('.spec-name').html('Certificado de MBA Avançado em Gestão');
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
