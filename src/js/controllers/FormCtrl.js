angular.module('helloWorldApp')
.controller('FormCtrl', [
    '$scope',
    function($scope) {
        $scope.message = 'Please enter you';
        $scope.remaining = function(){
            return 30 - $scope.message.length;
        }
        $scope.hasValidLength = function(){
            // return true or false
            return ($scope.message.length > 10);
        }
    }
]);
