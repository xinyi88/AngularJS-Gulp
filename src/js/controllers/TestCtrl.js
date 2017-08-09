angular.module('helloWorldApp')
.controller('TestCtrl', [
    '$scope',
    function($scope) {
        $scope.message = 'This is test hello';
    }
])
.directive('alert', function(){
    return {
        restrict : 'E',
        scope:{ // locate in alert element
            topic:'@topic',
            description:'@description'
        },
        template: '<span ng-bind="topic"></span>' +
                  '<span ng-bind="description"></span>',
        replace:false
    };
})
.directive('attributeTest', function(){
    return{
        restrict:'A',
        template:'This is attribute'
    };
})
.directive('testEqual',function(){
    return {
        restrict : 'E',
        scope : {
            message : '=message'
        },
        template : '<span message></span>'
    };
});
