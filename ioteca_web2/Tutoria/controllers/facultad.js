/**
 * Created by JORDAN on 1/07/2016.
 */
app
    .controller("FacultadCtrl", function($scope, API, $window, $mdDialog, $stateParams) {
    var params = {};
    params.page = $stateParams.page ? $stateParams.page : 1;
    params.page_size =  5;
    $scope.lista = [];
    $scope.facultad={};

    $scope.list = function(params) {

        console.log("page_size: " + params.page_size);
        API.Facultad.list(params).$promise.then(function(r) {
            $scope.lista = r.results;
            $scope.options = r.options;
        }, function(err) {
            console.log("Err " + err);
        });
    };
    $scope.list(params);

    });