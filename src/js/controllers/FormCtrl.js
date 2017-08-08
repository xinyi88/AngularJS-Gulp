angular.module('helloWorldApp')
.controller('FormCtrl', [
    '$scope','MAX_LEN','notificationService','movie',
    function($scope, MAX_LEN,notificationService, movie) {
        $scope.message = "please";
        $scope.remaining = function(){
            return MAX_LEN - $scope.message.length;
        }
        $scope.hasValidLength = function(){
            // return true or false
            return ($scope.message.length > 10);
        }
        $scope.number = notificationService.doCal();
        $scope.testProvider = movie.title;
    }
]);
