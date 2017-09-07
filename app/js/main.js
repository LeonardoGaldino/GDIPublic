var currentLocation;

var disciplineContentData = {

    'intro': {
        'title': 'Introdução. Informação. Dados. Sistemas de Informação. SGBD',
        'topics': [],
        'data': '24/08',
        'horario': '12:00'
    },

    'modelagem-dados': {
        'title': 'Modelagem de Dados',
        'topics': ['Modelo E-R'],
        'data': '24/08',
        'horario': '12:00'
    },

    'diagrama-ER': {
        'title': 'Construção de Diagrama Entidade-Relacionamento',
        'topics': ['Modelagem EERCASE'],
        'data': '24/08',
        'horario': '12:00'
    },

    'relacional': {
        'title': 'Banco de Dados Relacional',
        'topics': ['Modelo Relacional', 'Normalização', 'Mapeamento E/R - Relacional'],
        'data': '24/08',
        'horario': '12:00'
    },

    'sql': {
        'title': 'SQL',
        'topics': ['Criação de Esquema', 'Preenchimento e Alterações de Tabelas',
            'Consultas (select from where)', 'Junções e Visões', 'Privilégios de Acesso'],
        'data': '24/08',
        'horario': '12:00'
    },

    'case': {
        'title': 'Ferramenta CASE',
        'topics': [],
        'data': '24/08',
        'horario': '12:00'
    },

    'pl': {
        'title': 'Linguagem de 4ª Geração (PL)',
        'topics': ['Elementos Básicos de PL', 'Blocos', 'Controle de Processamento',
                    'Recuperação de Dados do BD para Variáveis', 'Saída de Dados',
                    'Modelo Exemplo', 'Tratamento de Exceções', 'Cursores',
                    'Subprogramas (Functions, Procedures e Packages)', 'Triggers',
                    'Tabela Mutante'],
        'data': '24/08',
        'horario': '12:00'
    },

    'ambiente-dev': {
        'title': 'Ambiente de Desenvolvimento SQL (Prática em Laboratório)',
        'topics': [],
        'data': '24/08',
        'horario': '12:00'
    },

    'pratica-relacional': {
        'title': 'BD Relacional (Prática em Laboratório)',
        'topics': [],
        'data': '24/08',
        'horario': '12:00'
    },

    'revisao-ER-relacional': {
        'title': 'Revisão ER/Relacional',
        'topics': [],
        'data': '24/08',
        'horario': '12:00'
    },

    'objeto-relacional': {
        'title': 'Sistemas Objeto-Relacionais (OR)',
        'topics': ['Tipos e Tabelas de Objetos', 'Extensão de Tipos de Dados',
                    'Métodos de objetos', 'Herança', 'Identidade e referêcia de objetos',
                    'Coleções de objetos', 'Consultas OR'],
        'data': '24/08',
        'horario': '12:00'
    },

    'dados-semi-estruturados': {
        'title': 'Dados Semi-Estruturados',
        'topics': ['Informação Estruturada X Não Estruturada X Semi-Estruturada',
                    'Recuperação de Informação Não Estruturada',
                    'BD como Sistema de Informação Estruturada',
                    'Comparação com Sistemas de Informação Não Estruturada',
                    'Informação Semi-Estruturada e XML'],
        'data': '24/08',
        'horario': '12:00'
    },

    'xml': {
        'title': 'XML & Oracle',
        'topics': [],
        'data': '24/08',
        'horario': '12:00'
    },

    'conectividade': {
        'title': 'Conectividade',
        'topics': ['JDBC'],
        'data': '24/08',
        'horario': '12:00'
    },

    'recup-info': {
        'title': 'Recuperação de Informações',
        'topics': [],
        'data': '24/08',
        'horario': '12:00'
    },

    'revisao-OR-xml': {
        'title': 'Revisão OR e XML',
        'topics': [],
        'data': '24/08',
        'horario': '12:00'
    },

    'provas': {
        'title': 'Exercícios Escolares',
        'topics': [],
        'data': '24/08',
        'horario': '12:00'
    },

    'final': {
        'title': 'Exame Final',
        'topics': [],
        'data': '24/08',
        'horario': '12:00'
    }

};

function updateBackgroundColor(curPage, nextPage) {
    $('#'+curPage).removeClass('selected-page');
    $('#'+nextPage).addClass('selected-page');
}

function addPageClasses(nextPage) {
    var element = $('#main-card-panel');
    if(nextPage == 'disciplineContent'){
        element.addClass('main-card-panel-responsive');
    }
    else{
        element.removeClass('main-card-panel-responsive');
    }
}

//Function to load the content of the specified page into specified element
function changeLocation(event) {
    //Get ID of the tab clicked (event parameter can be the click event or the ID itself)
    var targetLocation = ($(event).length > 0 ? $(event.target).attr('id') : event);

    if(currentLocation != targetLocation){
        addPageClasses(targetLocation);
        updateBackgroundColor(currentLocation, targetLocation);
        $('#main-card').hide();
        $('#loading-circle').show();
        $('#location-content').load('/pages/'+targetLocation+'.html', function(){
            $('.modal').modal();
            $('#loading-circle').hide();
            $('#main-card').show();
        });
        currentLocation = targetLocation;
        if(window.innerWidth <= 992)
            $(".drag-target").click();
    }

}



function openModal(event) {
    var id = event.currentTarget.id;
    var content = disciplineContentData[id];
    $('#modal-title').html(content['title']);
    $('#modal-data').html('Data: ' + content['data']);
    $('#modal-horario').html('Horário: ' + content['horario']);
    var modalTopics = $('#modal-topics');
    var topics = content['topics'];
    modalTopics.html('');
    for(var i = 0 ; i < topics.length ; ++i){
        let li_element = document.createElement('LI');
        li_element.innerHTML= topics[i];
        modalTopics.append(li_element);
    }
    $('#classModal').modal('open');
}

$(document)
.on('click', 'a.openPage', changeLocation)
.on('click', '.table-row-modal', openModal)
.ready(function(){
    changeLocation('home');
    $(".button-collapse").sideNav();
});