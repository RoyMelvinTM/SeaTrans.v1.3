app

    .controller("EvaluacionCtrl", function($scope, API, $window, $stateParams, $mdDialog) {

    //Valores iniciales
    var params = {};
    params.page = $stateParams.page ? $stateParams.page : 1;
    params.page_size =  5;
    $scope.lista = [];
    $scope.evaluacion = {};
    

    $scope.list = function(params) {

        console.log("page_size: " + params.page_size);
        //API.Autor.list({ query: $scope.query, page: page }).$promise.then(function(r) {
        API.Evaluacion.list(params).$promise.then(function(r) {
            $scope.lista = r.results;
            $scope.options = r.options;
            //$scope.per= $scope.per ? $scope.per :r.options.page_size;
        }, function(err) {
            console.log("Err " + err);
        });
    };

    $scope.list(params);

    $scope.buscar = function() {
        params.page = 1;
        params.fields = 'nombre';
        params.query = $scope.query;
        params.page_size= $scope.per;
        $scope.list(params);

    };


    $scope.listAll = function() {
        //params.page = 1;
        //params.fields = 'nombre,direccion';
        //params.query = $scope.query;
        //params.page_size= $scope.per;
        params.all = true; //así debe quedar
        $scope.list(params);

    };

    //mdDialog
    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.new = function(evt) {
        $scope.evaluacion.id = null;
        $scope.evaluacion = {};
        $mdDialog.show({
            scope: $scope,
            targetEvent: evt,
            templateUrl: 'tutoria/views/evaluacion/formd.html',
            parent: angular.element(document.body),
            clickOutsideToClose: false,
            preserveScope: true,
        }).then(function() {
            $scope.list(params);

        }, function() {});
    };


    //end mdDialog



    $scope.sel = function(d) {
        $scope.evaluacion = API.Evaluacion.get({ id: d.id });
        $mdDialog.show({
            scope: $scope,
            templateUrl: 'tutoria/views/evaluacion/formd.html',
            parent: angular.element(document.body),
            clickOutsideToClose: false,
            preserveScope: true,
        }).then(function() {
            $scope.list(params);
            $scope.dimension = {};
        }, function() {});
    };


    $scope.save = function() {
        if ($scope.evaluacion.id) {

            API.Evaluacion.update({ id: $scope.evaluacion.id }, $scope.evaluacion).$promise.then(function(r) {
                console.log("r: " + r);
                //$scope.list();
                $mdDialog.hide();
            }, function(err) {
                console.log("Err " + err);
            });

        } else {
            API.Evaluacion.save($scope.evaluacion).$promise.then(function(r) {
                console.log("r: " + r);
                //$scope.list();
                $mdDialog.hide();
            }, function(err) {
                console.log("Err " + err);
            });
        }
    };

    $scope.delete = function(d) {
        if ($window.confirm("Seguro?")) {
            API.Evaluacion.delete({ id: d.id }).$promise.then(function(r) {
                console.log("r: " + r);
                $scope.list(params);
            }, function(err) {
                console.log("Err " + err);
            });
        }
    };


});

