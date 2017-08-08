angular.module('helloWorldApp')
.provider('movie',function(){
    var version;
    return{
        setVersion : function(value){
            version = value
        },
        $get:function(){
            return{
                title : 'The movie has ' + version
            }
        }
    }
})


