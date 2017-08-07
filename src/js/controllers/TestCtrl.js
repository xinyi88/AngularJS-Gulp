angular.module('helloWorldApp')
.controller('TestCtrl', [
    '$scope',
    function($scope) {
        $scope.message = 'This is test hello';
    }
]);
