app

    .controller("EjeCtrl", function($scope, API, $window, $stateParams, $mdDialog ) {
    var params = {};
    params.page = $stateParams.page ? $stateParams.page : 1;
    params.page_size =  5;
    $scope.lista = [];  
    $scope.eje={};

    $scope.list = function(params) {

        console.log("page_size: " + params.page_size);
        //API.Autor.list({ query: $scope.query, page: page }).$promise.then(function(r) {
        API.Eje.list(params).$promise.then(function(r) {
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
        params.fields = 'nombre,descripcion';
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
        $scope.eje.id = null;
        $scope.eje = {};
        $mdDialog.show({
            scope: $scope,
            targetEvent: evt,
            templateUrl: 'tutoria/views/eje/formd.html',
            parent: angular.element(document.body),
            clickOutsideToClose: false,
            preserveScope: true,
        }).then(function() {
            window.alert("Se ha guardado satisfactoriamente!");
            $scope.list(params);
        }, function() {});
    };
    //end mdDialog

    $scope.sel = function(d) {
        $scope.eje = API.Eje.get({ id: d.id });
        $mdDialog.show({
            scope: $scope,
            templateUrl: 'tutoria/views/eje/formd.html',
            parent: angular.element(document.body),
            clickOutsideToClose:false,
            preserveScope: true,
        }).then(function(){
            $scope.list(params);
            $scope.eje={};
            //$scope.categoria={};
        }, function(){
        });
    };


    $scope.save = function() {
        if ($scope.eje.id) {

            API.Eje.update({ id: $scope.eje.id }, $scope.eje).$promise.then(function(r) {
                console.log("r: " + r);
                $mdDialog.hide();
                window.alert("Se ha actualizado satisfactoriamente!");
            }, function(err) {
                console.log("Err " + err);
            });

        } else {
            API.Eje.save($scope.eje).$promise.then(function(r) {
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
            API.Eje.delete({ id: d.id }).$promise.then(function(r) {
                console.log("r: " + r);
                $scope.list(params);
            }, function(err) {
                console.log("Err " + err);
            });
        }
    };
});