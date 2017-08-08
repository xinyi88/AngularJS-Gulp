angular.module('helloWorldApp', [
    'ngRoute'
])
.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/first', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            }).when('/second', {
                templateUrl: 'views/test.html',
                controller: 'TestCtrl'
            })
            // .when('/redirect', {
            //     redirectTo:'second'
            // })
            .when('/redirect',{
                redirectTo:function(){
                    alert("hey, redirect");
                    return 'first'
                },
                caseInsensitiveMatch: true
            })
            .when('/parameter/:p1/:p2/:p3?',{
                 templateUrl: 'views/parameter.html',
                controller: 'ParameterCtrl'
            // ? : nullable...
            })
        .when('/calc/:option/:a?/:b?',{
            redirectTo: function(params, path, search){
                // params : option, a, b
                // path: relative path -> /calc/...
                // search: ?p=30&q=20 -> p:"30", q,"20"
                // console.log(params["option"]);
                // console.log(path);
                // console.log(search);

                return '/first'
            }
        })
        .when('/form',{
            templateUrl: 'views/form.html',
            controller: 'FormCtrl'
        })
        .otherwise({
            template:'hey, this is not found!'
        });
    }
])
.config(function(movieProvider){
    // name convention
    movieProvider.setVersion("1.0");
})