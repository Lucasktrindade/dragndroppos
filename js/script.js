$(document).ready(function(){
  $( ".drag" ).draggable();
  $( ".droppable" ).droppable({
      accept: ".drag",
      drop: function( event, ui ) {
        addNumber(ui.draggable);
      },
      out: function ( event,ui ){
        removeNumber(ui.draggable);
      }
    });
  $('.send').on('click', function(){
    var objsCreated = cart();
    var workload = cargaHoraria(objsCreated);
    var li = $('<li>');
    console.log(objsCreated);
    $('.obj').remove();
    for (var i = 0; i < objsCreated.length; i++) {
      $('.courses').append($("<li class='obj'>").text(objsCreated[i].nome+'('+objsCreated[i].cargaHoraria+')'));
    }
    $('.result').html(workload);

  });
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
            "nome":"Disciplinas A"
          }
        ],
        "id":1
     },
     {
        "nome":"Curso B",
        "cargaHoraria":180,
        "disciplinas":[
          {
            "nome":"Disciplinas B"
          }
        ],
        "id":2
     },
     {
        "nome":"Curso C",
        "cargaHoraria":180,
        "disciplinas":[
          {
            "nome":"Disciplinas C"
          }
        ],
        "id":3
     },
     {
        "nome":"Curso D",
        "cargaHoraria":180,
        "disciplinas":[
          {
            "nome":"Disciplinas D"
          }
        ],
        "id":4
     },
     {
        "nome":"Curso E",
        "cargaHoraria":180,
        "disciplinas":[
          {
            "nome":"Disciplinas E"
          }
        ],
        "id":5
     },
     {
        "nome":"Curso F",
        "cargaHoraria":180,
        "disciplinas":[
          {
            "nome":"Disciplinas F"
          }
        ],
        "id":6
     },
     {
        "nome":"Curso G",
        "cargaHoraria":180,
        "disciplinas":[
          {
            "nome":"Disciplinas G"
          }
        ],
        "id":7
     },
     {
        "nome":"Curso H",
        "cargaHoraria":180,
        "disciplinas":[
          {
            "nome":"Disciplinas H"
          }
        ],
        "id":8
     },
     {
        "nome":"Curso I",
        "cargaHoraria":180,
        "disciplinas":[
          {
            "nome":"Disciplinas I"
          }
        ],
        "id":9
     },
     {
        "nome":"Curso J",
        "cargaHoraria":180,
        "disciplinas":[
          {
            "nome":"Disciplinas J"
          }
        ],
        "id":10
     },
];

var drops = function count(){
  return $('.draggable .dropped').length;
}

var addNumber = function dropCount(element){
  var number = element.data('id');
  if(drops() >= 4){
    element.draggable( "option", "revert", true );
    return drops()
  }else{
    if(numberId.indexOf(number) == -1){
      numberId.push(number);
    }
    element.addClass('dropped');
    return drops()
  }
};

var removeNumber = function dropCount(element){
    element.removeClass('dropped');
    var index = numberId.indexOf(element.data('id'));
    for(var i = numberId.length - 1; i >= 0; i--) {
        if(numberId[i] === element.data('id')) {
           numberId.splice(i, 1);
        }
    }
    return drops();
};

var cart = function finish(){
  return elements.filter(o => numberId.indexOf(o.id) >= 0)
}

var cargaHoraria = function result(courses){
  if(courses.length >=2 ){
    courses.push(tcc);
    var workload = (courses.length*180)+90;
  }else{
    var workload = courses.length*180;
  }
  return workload;
};
