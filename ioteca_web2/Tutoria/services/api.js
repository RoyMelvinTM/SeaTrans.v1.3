app
    .factory("API", function($resource, config) {
    var url = config.tutoriaUrl;
    return {

        //Eje
        Eje: $resource(url + "ejes/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            //"list": { method: 'GET', isArray: false, params: { query: '@query', page: '@page', page_size: '@page_size' } }
            "list": {
                method: 'GET',
                isArray: false,
                transformResponse: function(r) {
                    var results = [];
                    var options = {};
                    results = angular.fromJson(r).results ? angular.fromJson(r).results: angular.fromJson(r);
                    options = angular.fromJson(r).options ? angular.fromJson(r).options:{"count":1,"pages":1,"page":1,"per":1,"range":"all",
                    "previous":null,"page_size":1,"next":null};
                    return { results: results, options: options };
                }
            },
            "options": {
                method: 'OPTIONS',
                isArray: false,
                transformResponse: function(r) {
                    return angular.fromJson(r).actions.POST;
                }
            }
        }),
        //Eje

        //Periodo
        Periodo: $resource(url + "periodos/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            //"list": { method: 'GET', isArray: true, params: { query: '@query' } }
            "list": {
                method: 'GET',
                isArray: false,
                transformResponse: function(r) {
                    var results = [];
                    var options = {};
                    results = angular.fromJson(r).results ? angular.fromJson(r).results: angular.fromJson(r);
                    options = angular.fromJson(r).options ? angular.fromJson(r).options:{"count":1,"pages":1,"page":1,"per":1,"range":"all",
                    "previous":null,"page_size":1,"next":null};
                    return { results: results, options: options };
                }
            },
            "options": {
                method: 'OPTIONS',
                isArray: false,
                transformResponse: function(r) {
                    return angular.fromJson(r).actions.POST;
                }
            }
        }), 
        //Periodo

        //Test

        Test: $resource(url + "tests/:id/", { 'id': '@id' }, {
            //"update": { method: 'PUT' },
            //"list": { method: 'GET', isArray: true, params: { query: '@query' } }
            "update": { method: 'PUT' },
            "list": {
                method: 'GET',
                isArray: false,
                transformResponse: function(r) {
                    var results = [];
                    var options = {};
                    results = angular.fromJson(r).results ? angular.fromJson(r).results: angular.fromJson(r);
                    options = angular.fromJson(r).options ? angular.fromJson(r).options:{"count":1,"pages":1,"page":1,"per":1,"range":"all",
                    "previous":null,"page_size":1,"next":null};
                    return { results: results, options: options };
                }
            },
            "options": {
                method: 'OPTIONS',
                isArray: false,
                transformResponse: function(r) {
                    return angular.fromJson(r).actions.POST;
                }
            }
        }),
        //Test

        //Dimensiones
        Dimension: $resource(url + "dimensiones/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            //"list": { method: 'GET', isArray: false, params: { query: '@query', page: '@page', page_size: '@page_size' } }
            "list": {
                method: 'GET',
                isArray: false,
                transformResponse: function(r) {
                    var results = [];
                    var options = {};
                    results = angular.fromJson(r).results ? angular.fromJson(r).results: angular.fromJson(r);
                    options = angular.fromJson(r).options ? angular.fromJson(r).options:{"count":1,"pages":1,"page":1,"per":1,"range":"all",
                    "previous":null,"page_size":1,"next":null};
                    return { results: results, options: options };
                }
            },
            "options": {
                method: 'OPTIONS',
                isArray: false,
                transformResponse: function(r) {
                    return angular.fromJson(r).actions.POST;
                }
            }
        }),
        //Dimensiones

         //Evaluacion
        Evaluacion: $resource(url + "evaluaciones/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            //"list": { method: 'GET', isArray: true, params: { query: '@query' } }
            "list": {
                method: 'GET',
                isArray: false,
                transformResponse: function(r) {
                    var results = [];
                    var options = {};
                    results = angular.fromJson(r).results ? angular.fromJson(r).results: angular.fromJson(r);
                    options = angular.fromJson(r).options ? angular.fromJson(r).options:{"count":1,"pages":1,"page":1,"per":1,"range":"all",
                    "previous":null,"page_size":1,"next":null};
                    return { results: results, options: options };
                }
            },
            "options": {
                method: 'OPTIONS',
                isArray: false,
                transformResponse: function(r) {
                    return angular.fromJson(r).actions.POST;
                }
            }
        }),
        //Evaluacion

        //Categoria
        Categoria: $resource(url + "categorias/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            //"list": { method: 'GET', isArray: true, params: { query: '@query' } }
            "list": {
                method: 'GET',
                isArray: false,
                transformResponse: function(r) {
                    var results = [];
                    var options = {};
                    results = angular.fromJson(r).results ? angular.fromJson(r).results: angular.fromJson(r);
                    options = angular.fromJson(r).options ? angular.fromJson(r).options:{"count":1,"pages":1,"page":1,"per":1,"range":"all",
                    "previous":null,"page_size":1,"next":null};
                    return { results: results, options: options };
                }
            },
            "options": {
                method: 'OPTIONS',
                isArray: false,
                transformResponse: function(r) {
                    return angular.fromJson(r).actions.POST;
                }
            }
        }),
        //Categoria

        //Alumno
        Alumno: $resource(url + "alumnos/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": {
                method: 'GET',
                isArray: false,
                transformResponse: function(r) {
                    var results = [];
                    var options = {};
                    results = angular.fromJson(r).results ? angular.fromJson(r).results: angular.fromJson(r);
                    options = angular.fromJson(r).options ? angular.fromJson(r).options:{"count":1,"pages":1,"page":1,"per":1,"range":"all",
                    "previous":null,"page_size":1,"next":null};
                    return { results: results, options: options };
                }
            },
            "options": {
                method: 'OPTIONS',
                isArray: false,
                transformResponse: function(r) {
                    return angular.fromJson(r).actions.POST;
                }
            }
        }),
        //Alumno

        //Grupo
        Grupo: $resource(url + "grupos/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": {
                method: 'GET',
                isArray: false,
                transformResponse: function(r) {
                    var results = [];
                    var options = {};
                    results = angular.fromJson(r).results ? angular.fromJson(r).results: angular.fromJson(r);
                    options = angular.fromJson(r).options ? angular.fromJson(r).options:{"count":1,"pages":1,"page":1,"per":1,"range":"all",
                    "previous":null,"page_size":1,"next":null};
                    return { results: results, options: options };
                }
            },
            "options": {
                method: 'OPTIONS',
                isArray: false,
                transformResponse: function(r) {
                    return angular.fromJson(r).actions.POST;
                }
            }
        }),
        //Grupo

        //Eap
        Eap: $resource(url + "eaps/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": {
                method: 'GET',
                isArray: false,
                transformResponse: function(r) {
                    var results = [];
                    var options = {};
                    results = angular.fromJson(r).results ? angular.fromJson(r).results: angular.fromJson(r);
                    options = angular.fromJson(r).options ? angular.fromJson(r).options:{"count":1,"pages":1,"page":1,"per":1,"range":"all",
                    "previous":null,"page_size":1,"next":null};
                    return { results: results, options: options };
                }
            },
            "options": {
                method: 'OPTIONS',
                isArray: false,
                transformResponse: function(r) {
                    return angular.fromJson(r).actions.POST;
                }
            }
        }),
        //Eap

        //Facultad
        Facultad: $resource(url + "facultades/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": {
                method: 'GET',
                isArray: false,
                transformResponse: function(r) {
                    var results = [];
                    var options = {};
                    results = angular.fromJson(r).results ? angular.fromJson(r).results: angular.fromJson(r);
                    options = angular.fromJson(r).options ? angular.fromJson(r).options:{"count":1,"pages":1,"page":1,"per":1,"range":"all",
                    "previous":null,"page_size":1,"next":null};
                    return { results: results, options: options };
                }
            },
            "options": {
                method: 'OPTIONS',
                isArray: false,
                transformResponse: function(r) {
                    return angular.fromJson(r).actions.POST;
                }
            }
        }),
        //Facultad
    };
});



