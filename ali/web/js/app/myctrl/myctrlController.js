/**
 * Created by Bjike on 2016/8/30.
 */

//左边菜单展开回缩
define(['app'],function(app){
    "use strict";
    app.controller('myctrl',function ($scope, $http,cfpLoadingBar) {
        $scope.btnT = "btnT_close";
        $scope.conNav = "conNav_close";
        $scope.conCon = "conCon_close"
        $scope.menuBtn = function () {
            if ($scope.btnT == "btnT_open") {
                $scope.btnT = "btnT_close";
                $scope.conNav = "conNav_close";
                $scope.conCon = "conCon_close";
            } else{
                $scope.btnT = "btnT_open";
                $scope.conNav = "conNav_open";
                $scope.conCon = "conCon_open"
            }

        }
        $scope.start = function() {
            cfpLoadingBar.start();
        };
        cfpLoadingBar.start();

        $scope.complete = function () {
            cfpLoadingBar.complete();

        }
        $http.get('')
            .success(function(data) {
                $scope.complete();
            })


    })
})
