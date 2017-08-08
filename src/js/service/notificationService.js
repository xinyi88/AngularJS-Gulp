angular.module('helloWorldApp')
.factory('notificationService', function(){
    var _testA = 10;
    var _testB = 20;
    var _doCalc = function(){
        return _testA + _testB;
    };
    return {
        doCal : _doCalc
    };
});

// use factory to hide private data
// instead of using service

//  service: this.XXX = XXX;

// provider -> most generic version 