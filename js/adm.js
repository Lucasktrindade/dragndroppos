

/*Scripts for page*/
var pos = pos || {};
pos.unigranrio = pos.unigranrio || {};
pos.unigranrio.simulador = pos.unigranrio.simulador || {};
pos.unigranrio.simulador.adm = pos.unigranrio.simulador.adm || {};
pos.unigranrio.simulador.adm.main = function(){
  var numberId = [];
  //combDay são os dias de cada curso
  // 1 = Seg e Quar
  // 2 = Ter e Qui
  const elements = [
       {
          "nome":"Administração Pública",
          "slug":"administracao-publica",
          "cargaHoraria":180,
          "id":1,
          "peso":5,
          "combDay":1,
          "semestre":1,
       },
       {
          "nome":"Desenvolvimento Sustentável",
          "slug":"direito-empresarial",
          "cargaHoraria":180,
          "id":2,
          "peso":10,
          "combDay":2,
          "semestre":1,
       },
  ];

  //Total: elements.peso * elements2.peso ou o valor do próprio peso é o elemento
  const goals = [
    {
      "id":1,
      "descricao":"Ao final do curso o participante estará apto a desenvolver análises e estudos relacionados às implicações decorrentes da formulação e da implementação de políticas e projetos a cargo da Administração Pública em âmbito local e regional, assim como apoiar a formulação e a avaliação de planos e programas de governo.",
      "total":5
    },
    {
      "id":2,
      "descricao":"Ao final do curso o participante estará apto a desenvolver análises e estudos contemplando os atuais direcionadores e demarcadores do desenvolvimento sustentável segundo a óptica da performance integrada entre resultados econômicos, sociais e ambientais.",
      "total":10
    },
    {
      "id":3,
      "descricao":"Ao final do curso o participante estará apto a desenvolver diretrizes e programas afins aos desafios da Nova Adminstração Pública em vista do paradigma do Desenvolvimento Sustentável, assim como gerir projetos, planos de ação e processos de gestão à vista com base em indicadores de desempenho relacionados  às diversas atividades de cunho governamental.",
      "total":50
    }
  ];
  const skills = [
    {
      "id":1,
      "descricao":"Desenvolvimento do aparelho de estado; Desenvolvimento de planos de governo; Alinhamento estratégico e operacional de planos, programas e projetos de governo; Sistematização de controles administrativos e financeiros; Adoção de novas tecnologias de informação e comunicações; Relações públicas e comunitárias.",
      "total":5
    },
    {
      "id":2,
      "descricao":"Desenvolvimento de visão holística voltada para a sustentabilidade; Desenvolvimento de técnicas análiticas e de controle com base na performacne integrada econômica, ambiental e social; Alinhamento de interesses dos ators sociais; Sistematização de indicadores e de instrumentos de comunicação e de formação de parcerias visando à responsabilidade ambiental e social.",
      "total":10
    },
    {
      "id":3,
      "descricao":"Desenvolvimento das capacidades de formulação, implementação e análise de resultados das políticas e planos de ação governamentais; Reconhecimento e priorização de áreas críticas de governo com base na confrontação entre padrões globias e locais de desenvolvimento sustentável.",
      "total":50
    }
  ];
  const nameEspec = [
    {
      "id":1,
      "certificado": "Certificado de Aperfeiçoamento em Administração Pública",
      "info": [
        {
          "unidade": "Campus I - Duque de Caxias",
          "endereco": "Rua Prof. José de Souza Herdy, 1160 - Jardim Vinte e Cinco de Agosto, Duque de Caxias - RJ",
          "inicio": "20/03/2017 (Duração: 6 meses)",
          "periodo": "Segunda e Terça (Semanal), Sexta (Quinzenal)",
          "carga": "180 horas",
          "horario": "19h às 22h",
          "valor": "1+5x de R$ 990,00",
          "aVista": "R$ 5.346,00",
          "link": "http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20506-17001"
        }
      ],
      "total":5,
    },
    {
      "id":2,
      "certificado": "Certificado de Aperfeiçoamento em Desenvolvimento Sustentável",
      "info": [
        {
          "unidade": "Campus I - Duque de Caxias",
          "endereco": "Rua Prof. José de Souza Herdy, 1160 - Jardim Vinte e Cinco de Agosto, Duque de Caxias - RJ",
          "inicio": "22/03/2017 (Duração: 6 meses)",
          "periodo": "Quarta e Quinta (Semanal), Sexta (Quinzenal)",
          "carga": "180 horas",
          "horario": "19h às 22h",
          "valor": "1+5x de R$ 990,00",
          "aVista": "R$ 5.346,00",
          "link": "http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20507-17001"
        }
      ],
      "total":10,
    },
    {
      "id":3,
      "certificado": "Certificado de Especialização em Administração Pública para o Desenvolvimento Sustentável",
      "info": [
        {
          "unidade": "Campus I - Duque de Caxias",
          "endereco": "Rua Prof. José de Souza Herdy, 1160 - Jardim Vinte e Cinco de Agosto, Duque de Caxias - RJ",
          "inicio": "21/03/2017 (Duração: 6 meses)",
          "periodo": "Segunda a Sexta (Semanal)",
          "carga": "180 horas",
          "horario": "19h às 22h",
          "valor": "1+8x de R$ 1.240,00 ou 1+14x de R$ 781,20",
          "aVista": "R$ 10.044,00",
          "link": "http://inscricao.unigranrio.com.br/processoSeletivo/pos/inscricao?hdId=20194-17001"
        }
      ],
      "total":50,
    }
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
      "combDay":1,
      "disponivel":true,
      "trilha":"",
      "curso":"",
      "semestre":1,
    },
    {
      "id":3,
      "dia":3,
      "class": "quarta-1",
      "combDay":2,
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
      "combDay":1,
      "disponivel":true,
      "trilha":"",
      "curso":"",
      "semestre":2,
    },
    {
      "id":7,
      "dia":3,
      "class": "quarta-2",
      "combDay":2,
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

    let infoComb =  function info(specname){
      $('.info-detail').remove();
      specname.info.forEach(function(info, index){
        let unidade, endereco, inicio, periodo, carga, horario, valor, aVista, link, elementInfo;
        unidade = $('<p></p>').text('Unidade: '+info.unidade);
        endereco = $('<p></p>').text('Endereço: '+info.endereco);
        inicio = $('<p></p>').text('Início: '+info.inicio);
        periodo = $('<p></p>').text('Periodicidade: '+info.periodo);
        carga = $('<p></p>').text('Carga horária total: '+info.carga);
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
          $('.line-info, .info-banner, .grade, .table-semestre-1,.goals-skills').show();
          $('.line-mensagem,.table-semestre-2').hide();
          $('.areas').html(courses.length +' área');
          specname = findNameEspec(nameEspec, courses);
          $('.spec-name').html(specname.certificado);
          $('.hours').html((courses.length*180));
          $('.meses').html('6 meses de duração');
          $('.trilha-1').html("Disciplina comum 1");
          $('.trilha-2,.trilha-3,.trilha-4').html("");
          goal = findGoal(goals,courses);
          skill = findSkill(skills, courses)
          $('.goal').html(goal[0].descricao);
          $('.skill').html(skill[0].descricao);
          infoComb(specname);
          break;
      case 2:
          $('.line-info,.info-banner,.goals-skills').show();
          $('.line-mensagem').hide();
          $('.areas').html(courses.length +' áreas');
          specname = findNameEspec(nameEspec, courses);
          $('.spec-name').html(specname.certificado);
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
          goal = findGoal(goals,courses);
          skill = findSkill(skills,courses)
          $('.goal').html(goal[0].descricao);
          $('.skill').html(skill[0].descricao);
          infoComb(specname);
          break;
      case 3:
          $('.line-info,.info-banner, .grade, .table-semestre-1, .table-semestre-2,.goals-skills').show();
          $('.line-mensagem').hide();
          $('.areas').html(courses.length +' áreas');
          specname = findNameEspec(nameEspec, courses);
          $('.spec-name').html(specname.certificado);
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
          goal = findGoal(goals, courses);
          skill = findSkill(skills, courses)
          $('.goal').html(goal[0].descricao);
          $('.skill').html(skill[0].descricao);
          infoComb(specname);
          break;
      default:
         $('.line-mensagem').show();
         $('.mensagem-none').html("<b>Simule a escolha de seu curso de Pós, selecionando de uma a duas áreas, de acordo com a necessidade da sua carreira</b>.<br>Para gerar a simulação, clique na(s) área(s) de interesse e a(s) arraste para os campos pontilhados.");
         $('.line-info,  .info-banner, .grade, .table-semestre-1, .table-semestre-2,.goals-skills').hide();
         $('.skill, .goal, .trilhas').html('');
         $('.info-detail').remove();
      }
  };

  paint(cart());

};
