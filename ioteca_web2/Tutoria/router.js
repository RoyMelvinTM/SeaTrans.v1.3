app

//==================================
// catalogo routers
//==================================
    .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    //==================================
    // catalogo layout base
    //==================================
        .state('tutoria', {
        url: '/tutoria',
        views: {
            '': {
                templateUrl: 'app/views/layout.html'
            },
            'aside': {
                templateUrl: 'app/views/aside.html'
            },
            'content': {
                templateUrl: 'app/views/content.html'
            }
        }
    })

    //==================================
    // url ct
    //==================================
    .state("tutoria.cat", {
        url: "/cat",
        data: { section: 'Tutoria', page: 'Document' },
        templateUrl: "app/views/pages/document.html"
    })

    //==================================
    // url eje
    //==================================
    .state("tutoria.eje", {
        url: "/eje",
        data: { section: 'Tutoria', page: 'Eje' },
        templateUrl: "tutoria/views/eje/index.html"
    })

    //==================================
    // url periodo
    //==================================

    .state("tutoria.periodo", {
        url: "/periodo",
        data: { section: 'Tutoria', page: 'Periodo' },
        templateUrl: "tutoria/views/periodo/index.html"
})
    //==================================
    // url test
    //==================================

    .state("tutoria.test", {
        url: "/test",
        data: { section: 'Tutoria', page: 'Test' },
        templateUrl: "tutoria/views/test/index.html"

    })

    //==================================
    // url dimension
    //==================================
    .state("tutoria.dimension", {
        url: "/dimension",
        data: { section: 'Tutoria', page: 'Dimension' },
        templateUrl: "tutoria/views/dimension/index.html"

    })
    //==================================
    // url evaluacion
    //==================================
    .state("tutoria.evaluacion", {
        url: "/evaluacion",
        data: { section: 'Tutoria', page: 'Evaluacion' },
        templateUrl: "tutoria/views/evaluacion/index.html"

    })
    //==================================
    // url categoria
    //==================================
      .state("tutoria.categoria", {
        url: "/categoria",
        data: { section: 'Tutoria', page: 'Categoria' },
        templateUrl: "tutoria/views/categoria/index.html"

    })
    //==================================
    // url alumno
    //==================================
      .state("tutoria.alumno", {
        url: "/alumno",
        data: { section: 'Tutoria', page: 'Alumno' },
        templateUrl: "tutoria/views/alumno/index.html"

    })
    //==================================
    // url eap
    //==================================
      .state("tutoria.grupo", {
        url: "/grupo",
        data: { section: 'Tutoria', page: 'Grupo' },
        templateUrl: "tutoria/views/grupo/index.html"

    })
    //==================================
    // url eap
    //==================================
      .state("tutoria.eap", {
        url: "/eap",
        data: { section: 'Tutoria', page: 'Eap' },
        templateUrl: "tutoria/views/eap/index.html"

    })
    //==================================
    // url facultad
    //==================================
      .state("tutoria.facultad", {
        url: "/facultad",
        data: { section: 'Tutoria', page: 'Facultad' },
        templateUrl: "tutoria/views/facultad/index.html"

    })

});
