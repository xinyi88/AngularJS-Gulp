angular.module('helloWorldApp')
.controller('ParameterCtrl', [
    '$scope','$routeParams',
    function($scope, $routeParams) {
        $scope.message = 'This is test hello';
        $scope.p1 = $routeParams.p1;
        $scope.p2 = $routeParams.p2;
        $scope.p3 = $routeParams.p3;
    }
]);
