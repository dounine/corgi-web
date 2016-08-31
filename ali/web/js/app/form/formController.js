/**
 * Created by Bjike on 2016/8/30.
 */

define(['app'],function(app){
    /********严格模式下报错未解决********/
    //"use strict";
    //表单删除
    app.controller('user',function ($scope,$http,$state,$stateParams,cfpLoadingBar) {
        $scope.start = function() {
            cfpLoadingBar.start();
        };
        cfpLoadingBar.start();

        $scope.complete = function () {
            cfpLoadingBar.complete();

        }
        $http.get("data/user.json")
            .success(function (data,index) {
                $scope.complete();
                var _this = this;
                $scope.users = data;
                $scope.remove = function (id) {
                    var ind=_this.findIndex(id);
                    console.log(ind)

                    if(ind!==-1){
                        data.splice(ind,1);  //从第index位删除一位
                    }
                }


                //找到该元素的索引
                 this.findIndex=function(id){
                     console.log(id)
                    var ind=-1;
                    //angular里的forEach里的value对应的是循环遍历的每一个元素，而key对应的是索引值
                    angular.forEach(data,function(item,key){
                        		        	console.log(key)
                        if(item.index===id){
                            ind=key;
                            return;
                        }
                    });
                    return ind;
                }

            })




    })

    //表单
    app.controller('myform',function ($scope,$http,$state,$stateParams) {
        $scope.userdata ={};

        //表单提交
        $scope.submitForm = function () {
            console.log($scope.userdata)
        };


    })

    //表单修改 revise
    app.controller('reviseuser',function ($scope,$http,$state,$stateParams) {
        var i = $stateParams.userId -1;
        $http.get('data/user.json').success(function (data,status) {
            $scope.username = data[i].username;
            $scope.password = data[i].password;
            $scope.email = data[i].email;
            $scope.tel = data[i].tel;
            $scope.sex = data[i].sex;

            $scope.submitForm = function () {
                console.log(data[i])
            };
        })

    })

    //分页
    var bookListModule = angular.module("BookListModule", []);
    bookListModule.controller('BookListCtrl', function($scope, $http, $state, $stateParams,cfpLoadingBar) {
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


        $scope.filterOptions = {
            filterText: "",
            useExternalFilter: true
        };
        $scope.totalServerItems = 0;
        $scope.pagingOptions = {
            pageSizes: [20, 30, 40],
            pageSize: 20,
            currentPage: 1
        };

        $scope.setPagingData = function(data, page, pageSize) {
            var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
            $scope.books = pagedData;
            $scope.totalServerItems = data.length;
            if (!$scope.$$phase) {
                $scope.$apply();
            }
        }
        $scope.getPagedDataAsync = function (pageSize,page,searchText ) {
            setTimeout(function () {
                var data;

                $http.get('data/user.json')
                    .success(function (largeload) {

                        $scope.setPagingData(largeload,page,pageSize);

                    });
            },200);

        };

        $scope.getPagedDataAsync($scope.pagingOptions.pageSize,$scope.pagingOptions.currentPage);

        $scope.$watch('pagingOptions',function (newVal,oldVal) {
            if (newVal !==oldVal && newVal.currentPage !==oldVal.currentPage) {
                $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
            }
        },true);
        $scope.$watch('filterOptions', function(newVal, oldVal) {
            if (newVal !== oldVal) {
                $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
            }
        }, true);

        $scope.gridOptions = {
            data: 'books',
            rowTemplate: '<div style="height: 100%"><div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell">' +
            '<div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }"> </div>' +
            '<div ng-cell></div>' +
            '</div></div>',
            multiSelect: false,
            enableCellSelection: true,
            enableRowSelection: false,
            enableCellEdit: true,
            enablePinning: true,
            columnDefs: [{
                field: 'index',
                displayName: '序号',
                width: 60,
                pinnable: false,
                sortable: true
            }, {
                field: 'username',
                displayName: '用户名',
                enableCellEdit: true,
                width:220
            }, {
                field: 'password',
                displayName: '密码',
                enableCellEdit: true,
                width: 220
            }, {
                field: 'email',
                displayName: '邮箱',
                enableCellEdit: true,
                width: 120
            }, {
                field: 'sex',
                displayName: '性别',
                enableCellEdit: true,
                width: 120

            }, {
                field: 'tel',
                displayName: '电话',
                enableCellEdit: true,
                sortable: false,
                pinnable: false,
                width: 220
            },{
                filed:'type',
                displayName:'状态',
                enableCellEdit: false,
                sortable: false,
                pinnable: false
            }],
            enablePaging: true,
            showFooter: true,
            totalServerItems: 'totalServerItems',
            pagingOptions: $scope.pagingOptions,
            filterOptions: $scope.filterOptions

        };
    });



})
