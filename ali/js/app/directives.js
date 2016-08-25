define(['app'],function (app) {
	 'use strict';


	app.run(['$rootScope',function($rootScope){
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
app.directive('compare',function () {
	
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


////分页
//aliApp.directive("myPage",['$http',function($http){
//    return {
//        scope:{
//            totalItem:"@totalItem",
//            currentPage:"=currentPage",
//            itemsPerpage:"@itemsPerpage",
//            pageUrl:"@pageUrl"
//        },
//        restrict:"EA",
//        replace:true,
//        transclude:true,
//        template:'<nav class="{{align}}">\
//                        <ul class="pagination">\
//                            <li ng-class="{disabled:curr == 1}" ng-click="setChange(1)"><a aria-label="Previous" href="javascript:;"><span aria-hidden="true">首页</span></a></li>\
//                            <li ng-class="{disabled:curr == 1}" ng-click="setChange(currentPage=currentPage-1)"><a aria-label="Previous" href="javascript:;"><span aria-hidden="true">上一页</span></a></li>\
//                            <li ng-class="{active:$index + 1 == curr}" ng-repeat="page in pages" ng-click="change(page)"><a href="javascript:;">{{page}}</a></li>\
//                            <li ng-class="{disabled:currentPage == pageNumber}" ng-click="setChange(currentPage=currentPage+1)"><a aria-label="Next" href="javascript:;"><span aria-hidden="true">下一页</span></a></li>\
//                            <li ng-class="{disabled:curr == }" ng-click="setChange(end)"><a aria-label="Previous" href="javascript:;"><span aria-hidden="true">尾页</span></a></li>\
//                        </ul>\
//                    </nav>',
//        link:function(scope,element,attrs){
//            scope.pageNumber = Math.ceil(parseInt(attrs.totalItem) / parseInt(attrs.itemsPerpage));
//            scope.maxsize = Math.max(attrs.maxSize,5);
//            scope.pages = [];
//            scope.curr = scope.currentPage;
//            scope.resPages = [];
//            scope.align = attrs.align;
//            for (var i = 1; i <= scope.pageNumber; i++) {
//                scope.resPages.push(i);
//            };
//            scope.pages = scope.resPages.slice((scope.currentPage - 1),scope.maxsize);
//            //点击切换分页
//            scope.change = function(page){
//                scope.currentPage = page;
//                if(scope.currentPage - 3 <= 0){
//                    var start = 0;
//                    var end = start + scope.maxsize;
//                }else if(scope.currentPage + 2 >= scope.pageNumber){
//                    var end = scope.pageNumber;
//                    var start = end - scope.maxsize;
//                }else{
//                    var start = scope.currentPage - 3;
//                    var end = scope.currentPage + 2;
//                }
//                scope.pages = scope.resPages.slice(start,end);
//                scope.curr = scope.pages.indexOf(page) + 1;
//                //调用ajax取值回来渲染
//                scope.$parent.lists = [];
//                //$http({
//                //    "url":attrs.pageUrl,
//                //    "method":"get",
//                //    "params":{
//                //        "currentPage":page,
//                //        "perPage":attrs.itemsPerpage
//                //    }
//                //})
//                $http.get('data/user.json')
//                    .success(function(res){
//                        //这里res我给出的数据是数组当然你返回的不一定是这个数据结构，你可以自行修改，比如res.list是数组等等
//                        scope.$parent.lists = res.slice((page - 1) * attrs.itemsPerpage ,page * attrs.itemsPerpage);
//                    })
//                    .error(function(res){
//                        console.log(res);
//                    });
//            };
//            scope.change(1); //初始化
//            //点击上一页下一页
//            scope.setChange = function(page){
//                if(page <= 0){
//                    scope.currentPage = page + 1;
//                }else if(page > scope.pageNumber){
//                    scope.currentPage = page - 1;
//                }else{
//                    scope.change(page);
//                }
//            }
//        }
//    }
//}]);
})









