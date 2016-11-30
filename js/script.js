
var main = (function init(){
  $( ".drag" ).draggable({revert:"invalid"});
  $( ".droppable" ).droppable({
      accept: ".drag",
      drop: function( event, ui ) {
        addNumber( ui.draggable.data('id') );
        return onCreate();
      },
      out: function ( event,ui ){
        removeNumber( ui.draggable, ui.draggable.data('id') );
        onDelete();
      }
  });

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
          "nome":"Curso A",
          "cargaHoraria":180,
          "disciplinas":[
            {
              "nome":"RH"
            }
          ],
          "id":1
       },
       {
          "nome":"Curso B",
          "cargaHoraria":180,
          "disciplinas":[
            {
              "nome":"Logística"
            }
          ],
          "id":2
       },
       {
          "nome":"Curso C",
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
              "nome":"Disciplinas D"
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

  var stateRevertTrue = function revert(element){
    element('option','revert',true);
    return true;
  }

  var stateRevertFalse = function revert(element){
     element('option','revert',false);
     return true;
  }

  var stateRevertValid = function revert(element){
     element('option','revert',"valid");
     return true;
  }

  var stateRevertInvalid = function revert(element){
     element('option','revert',"invalid");
     return true;
  }

  var addNumber = function dropCount(number){
    if(dropped() > 4){
      return false;
    }else{
      numberId.push(number);
      return true
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
      return true;
  };

  var onCreate = function update(){
    return cart();
  };

  var onDelete = function update(){
    return cart();
  };
});
