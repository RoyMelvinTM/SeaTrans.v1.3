app
//------------------------------
// TODO: API menu
// por lo pronto colocar aqui el menu para su Modelo, vease test1
//------------------------------
    .factory("menuService", function() {

    var sections = [
        /*
        {
          title: 'Getting Started',
          state: 'getting-started',
          url: '/getting-started',
          type: 'link'
        }
        */
    ];

    //sections.push({
    //    title: 'Dashboard',
    //    state: 'app.dashboard',
    //    type: 'link'
    //});

    sections.push({
        title: 'TUTORIA',
        type: 'heading',
    });

    sections.push({
        children: [{
            title: 'Evaluacion',
            type: 'link',
            state: 'tutoria.evaluacion',
        }]
    });

    sections.push({
        //title: 'Sec. Tutoria',
        //type: 'heading',
        children: [{
            title: 'Configuraciones',
            type: 'toggle',
            group: 'tutoria',
            pages: [{
                title: 'cat',
                state: 'tutoria.cat',
                type: 'link'
            }, {
                title: 'Eje',
                    state: 'tutoria.eje',
                type: 'link'
            },{

                title: 'Periodo',
                state: 'tutoria.periodo',
                type: 'link'
            },{

                title: 'Tests',
                state: 'tutoria.test',
                type: 'link'

            }, {
                title: 'Categorias',
                state: 'tutoria.categoria',
                type: 'link'
            }, {
                title: 'Dimensiones',
                state: 'tutoria.dimension',
                type: 'link'
            }, {
                title: 'Alumnos',
                state: 'tutoria.alumno',
                type: 'link'
            }, {
                title: 'Grupos',
                state: 'tutoria.grupo',
                type: 'link'
            }, {
                title: 'Eaps',
                state: 'tutoria.eap',
                type: 'link'
            },  {
                title: 'Facultades',
                state: 'tutoria.facultad',
                type: 'link'
            },]
        }]
    });


   
    /*
    sections.push({
        title: 'Sec. Tutoria',
        type: 'heading',
        children: [{
            title: 'Dimension',
            type: 'toggle',
            group: 'tutoria',
            pages: [{
                title: 'Cat t',
                state: 'catalogo.ct',
                type: 'link'
            }, {
                title: 'Categoría',
                state: 'catalogo.categoria',
                type: 'link'
            },{
                title: 'Autor',
                state: 'catalogo.autor',
                type: 'link'
            }, ]
        }]
    });
    */

    return {
        sections: sections,
    };
});
