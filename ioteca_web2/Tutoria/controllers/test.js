app

    .controller("TestCtrl", function($scope, API, $window, $mdDialog, $stateParams) {

    var params = {};
    params.page = $stateParams.page ? $stateParams.page : 1;
    params.page_size =  5;
    $scope.lista = [];
    $scope.test={};

    $scope.list = function(params) {

        console.log("page_size: " + params.page_size);
        API.Test.list(params).$promise.then(function(r) {
            $scope.lista = r.results;
            $scope.options = r.options;
            //$scope.per= $scope.per ? $scope.per :r.options.page_size;
        }, function(err) {
            console.log("Err " + err);
        });
    };
    $scope.list(params);

    $scope.listeje = function() {

        API.Eje.list({query:$scope.query}).$promise.then(function(r) {
            console.log("sssss");
            console.log(r);
            console.log("sssss");
            $scope.listaeje = r.results;
        }, function(err) {
            console.log("Err " + err);
        });
    };
    $scope.listeje();

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
        $scope.test.id = null;
        $scope.Test = {};
        $mdDialog.show({
            scope: $scope,
            targetEvent: evt,
            templateUrl: 'tutoria/views/test/formd.html',
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
        $scope.test = API.Test.get({ id: d.id });
        $mdDialog.show({
            scope: $scope,
            templateUrl: 'tutoria/views/test/formd.html',
            parent: angular.element(document.body),
            clickOutsideToClose:false,
            preserveScope: true,
        }).then(function(){
            $scope.list(params);
            //$scope.categoria={};
        }, function(){
        });
    };


    $scope.save = function() {
        if ($scope.test.id) {

            API.Test.update({ id: $scope.test.id }, $scope.test).$promise.then(function(r) {
                window.alert("Se ha actualizado satisfactoriamente!");
                console.log("r: " + r);
                //$scope.list();
                $mdDialog.hide();
            }, function(err) {
                console.log("Err " + err);
            });

        } else {
            API.Test.save($scope.test).$promise.then(function(r) {
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
            API.Test.delete({ id: d.id }).$promise.then(function(r) {
                console.log("r: " + r);
                $scope.list(params);
            }, function(err) {
                console.log("Err " + err);
            });
        }
    };
});