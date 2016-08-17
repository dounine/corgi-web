aliApp.run(['$rootScope',function($rootScope){
        $rootScope.nativeId=getCurrentNativeId();
        function getCurrentNativeId(){
                var str = "#/index";
                var href=window.location.href;
                var index = href.indexOf("#/");
                if(index != -1){
                        str = href.substring(index,href.length);
                }
                return str;
               
        }
}])
.directive('native',['$rootScope',function($rootScope,$cookies){
        return{
            restrict:'A',
            link:function(scope,element,attrs){
            	
                $(element).click(function(){
                        scope.$apply(function(){
                                $rootScope.nativeId = attrs.href;
                        });
				if($(this).has(".onNav")){
						$(this).addClass("onNav").parents("li").siblings("li").find("a").removeClass("onNav");
					}
				
                });
               
            }
        }
}]);
//密码验证
aliApp.directive('compare',function () {
	
		var o ={};
		o.strict = 'AE';
		o.scope = {
			orgText:'=compare'
		}
		o.require = 'ngModel';
		o.link = function(sco,ele,att,con){
			con.$validators.compare = function (v) {
				return v == sco.orgText;
			}
			sco.$watch('orgText',function () {
				con.$validate()
			});
		}
		return o;
	
})
