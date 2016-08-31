/**
 * Created by Bjike on 2016/8/30.
 */

define(['app'],function(app){
    "use strict";
    //子菜单显示隐藏
    app.controller('homeNav',function ($scope) {
        $scope.submenu1 = false;
        $scope.arrow1 = "down"
        $scope.toggle1 = function () {
            $scope.submenu1 = !$scope.submenu1;
            if ($scope.arrow1 == "right") {
                $scope.arrow1 = "down"
            } else{
                $scope.arrow1 = "right"
            }
        }
        $scope.submenu2 = false;
        $scope.arrow2 = "down"
        $scope.toggle2 = function () {
            $scope.submenu2 = !$scope.submenu2;
            if ($scope.arrow2 == "right") {
                $scope.arrow2 = "down"
            } else{
                $scope.arrow2 = "right"
            }
        }


    });
})
