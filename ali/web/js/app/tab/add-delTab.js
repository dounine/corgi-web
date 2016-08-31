/**
 * Created by Bjike on 2016/8/30.
 */

define(['app'],function(app){

    //增加删除选项卡
   app.controller('add-delTab',function($scope,$http){
       $http.get('data/tab.json').success(function(data,index){
           var selected = new Array();
           var optional = new Array();


           /*已选区域*/
           angular.forEach(data['selectedTab'],function(item,index){
               var seldTabs = item;
               var select = new Object();
               select['icon'] = seldTabs['icon'];
               select['index'] = seldTabs['index'];
               select['text'] = seldTabs['text'];
               selected.push(select);
           })

           /*可选区域*/
           angular.forEach(data['optionalTab'],function(item,index){

               var optTabs = item;
               var option = new Object();
               option['icon'] = optTabs['icon'];
               option['index'] = optTabs['index'];
               option['text'] = optTabs['text'];
               optional.push(option);
           })



           $scope.selectedTabs = selected;
           $scope.optionalTabs = optional;




           var _this = this;
           /*删除*/
           $scope.close = function(id){
               var ind=_this.findIndex(id,selected);
               optional.push(selected[ind])
               console.log(ind)
               if(ind!==-1){
                   selected.splice(ind,1);  //从第index位删除一位
               }
           }

           /*添加*/
           $scope.addtab = function(id){
               var ind = _this.findIndex(id,optional);
               selected.push(optional[ind])

               if(ind!==-1){
                   optional.splice(ind,1);  //从第index位删除一位


               }
           }


           //找到该元素的索引
           this.findIndex=function(id,tab){
               var ind=-1;
               //angular里的forEach里的value对应的是循环遍历的每一个元素，而key对应的是索引值
               angular.forEach(tab,function(item,key){
                   //console.log(key)
                   if(item.index===id){
                       ind=key;
                       return;
                   }
               });
               return ind;
           }


       }).error(function(){
           alert("错误")
       } )


   })
})









