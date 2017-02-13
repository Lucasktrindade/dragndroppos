

/*Scripts for page*/
(function(){
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
          "nome":"Direito Civil",
          "slug":"direito-civil",
          "cargaHoraria":180,
          "id":1,
          "peso":5,
          "combDay":1,
          "semestre":1,
       },
       {
          "nome":"Direito Empresarial",
          "slug":"direito-empresarial",
          "cargaHoraria":180,
          "id":2,
          "peso":10,
          "combDay":2,
          "semestre":1,
       },
       {
          "nome":"Direito Processual",
          "slug":"direito-processual",
          "cargaHoraria":180,
          "id":3,
          "peso":15,
          "combDay":1,
          "semestre":2,
       },
  ];

  //Total: elements.peso * elements2.peso ou o valor do próprio peso é o elemento
  const goals = [
    {
      "id":1,
      "descricao":"Fazer compreender o Direito Civil de uma maneira prática e teórica, ramo essencial para o cotidiano do operador do Direito.",
      "total":5
    },
    {
      "id":2,
      "descricao":"Fazer compreender o Direito Empresarial de uma maneira prática e teórica, ramo essencial para o cotidiano do operador do Direito.",
      "total":10
    },
    {
      "id":3,
      "descricao":"Fazer compreender o Direito Processual de uma maneira prática e teórica, ramo essencial para o cotidiano do operador do Direito.",
      "total":15
    },
    {
      "id":4,
      "descricao":"Apreender uma visão crítica e racional do Direito Civil e do Direito Empresarial, com o objetivo de aplicação prática ao operador do Direito.",
      "total":50
    },
    {
      "id":5,
      "descricao":"Apreender uma visão crítica e racional do Direito Civil e do Direito Processual, com objetivo de aplicação prática ao operador do Direito.",
      "total":75
    },
    {
      "id":6,
      "descricao":"Apreender uma visão crítica e racional do Direito Empresarial e do Direito Processual, com o objetivo de aplicação prática ao operador do Direito.",
      "total":150
    },
    {
      "id":7,
      "descricao":"Apreender uma visão crítica, racional e sistemática do Direito, com foco nos ramos Civil, Empresarial e Processo com objetivo de aplicação prática dos conteúdos.",
      "total":750
    },
  ];
  const skills = [
    {
      "id":1,
      "descricao":"Ao final do curso o aluno estará apto à exercer a prática civil, no sentido de elaborar fundamentações de peças processuais, analisar casos e interpretar julgados.",
      "total":5
    },
    {
      "id":2,
      "descricao":"Ao final do curso o aluno estará apto à exercer a prática empresarial, no sentido de elaborar fundamentações de peças processuais, analisar casos e interpretar julgados.",
      "total":10
    },
    {
      "id":3,
      "descricao":"Ao final do curso o aluno estará apto à exercer a prática processual, no sentido de elaborar fundamentações de peças, analisar casos e interpretar julgados.",
      "total":15
    },
    {
      "id":4,
      "descricao":"Ao final do curso o aluno estará apto à exercer a prática cível e empresarial aplicando os institutos de uma forma prática.",
      "total":50
    },
    {
      "id":5,
      "descricao":"Ao final do curso o aluno estará apto à exercer a prática cível aplicando os institutos, bem como utilizar o processo na forma de instrumento apto na busca e defesa dos direitos.",
      "total":75
    },
    {
      "id":6,
      "descricao":"Ao final do curso o aluno estará apto à exercer a prática empresarial aplicando os institutos, bem como utilizar o processo na forma de instrumento apto na busca e defesa dos direitos.",
      "total":150
    },
    {
      "id":7,
      "descricao":"Ao final do curso o aluno estará apto à exercer a prática cível, empresarial e utilizar o processo como meio hábil na busca e defesa dos direitos de uma forma crítica e sistemática, podendo elaborar fundamentação de petiçòes, analisar casos e interpretar julgados.",
      "total":750
    },
  ];
  const nameEspec = [
    {
      "id":1,
      "certificado": "Certificado de Aperfeiçoamento em Direito Civil",
      "total":5,
    },
    {
      "id":2,
      "certificado": "Certificado de Aperfeiçoamento em Direito Empresarial",
      "total":10,
    },
    {
      "id":3,
      "certificado": "Certificado de Aperfeiçoamento em Direito Processual",
      "total":15,
    },
    {
      "id":4,
      "certificado": "Certificado de Especialização em Direito Civil e Empresarial",
      "total":50,
    },
    {
      "id":5,
      "certificado": "Certificado de Especialização em Direito Civil e Processo",
      "total":75,
    },
    {
      "id":6,
      "certificado": "Certificado de Especialização em Direito Empresarial e Processo",
      "total":150,
    },
    {
      "id":7,
      "certificado": "Certificado de MBA em Direito Civil, Empresarial e Processo",
      "total":750,
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
    if(dropped() > 3){
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
    let specName, goal, skill;
    let peso = function peso(objs){
      return objs.reduce((result, current) => result*current.peso, 1)
    };
    let findGoal = function find(goals, courses){
      let value = peso(courses);
      return goals.filter(o => o.total == value);
    };
    let findSkill = function find(skills, courses){
      let value = peso(courses);
      return skills.filter(o => o.total == value);
    };

    let findNameEspec = function find(espec, courses){
      let value = peso(courses);
      return espec.filter(o => o.total == value)[0];
    };

    switch(courses.length) {
      case 1:
          $('.line-info').show();
          $('.line-mensagem').hide();
          $('.areas').html(courses.length +' área');
          specName = findNameEspec(nameEspec, courses);
          $('.spec-name').html(specName.certificado);
          $('.hours').html((courses.length*180));
          $('.meses').html('6 meses de duração');
          $('.trilha-1').html("Trilha 1");
          $('.trilha-2,.trilha-3,.trilha-4').html("");
          goal = findGoal(goals,courses);
          skill = findSkill(skills, courses)
          $('.goal').html(goal[0].descricao);
          $('.skill').html(skill[0].descricao);
          break;
      case 2:
          $('.line-info').show();
          $('.line-mensagem').hide();
          $('.areas').html(courses.length +' áreas');
          specName = findNameEspec(nameEspec, courses);
          $('.spec-name').html(specName.certificado);
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
          goal = findGoal(goals,courses);
          skill = findSkill(skills,courses)
          $('.goal').html(goal[0].descricao);
          $('.skill').html(skill[0].descricao);
          break;
      case 3:
          $('.line-info').show();
          $('.line-mensagem').hide();
          $('.areas').html(courses.length +' áreas');
          specName = findNameEspec(nameEspec, courses);
          $('.spec-name').html(specName.certificado);
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
          goal = findGoal(goals, courses);
          skill = findSkill(skills, courses)
          $('.goal').html(goal[0].descricao);
          $('.skill').html(skill[0].descricao);
          break;
      default:
         $('.line-mensagem').show();
         $('.mensagem-none').html("<b>Simule a escolha de seu curso de Pós, selecionando de uma a quatro áreas de acordo com a necessidade da sua carreira</b>.<br>Clique na(s) área(s) de interesse e arraste para os campos pontilhados, para gerar a simulação.");
         $('.line-info').hide();
         $('.skill').html('');
         $('.goal').html('');
         $('.trilhas').html('');
      }
  };

  paint(cart());

}());