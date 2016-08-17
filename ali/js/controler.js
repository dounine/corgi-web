aliApp.controller('homeNav',function ($scope) {
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
	
	$scope.dianji = function () {
		
	}
	
});

aliApp.controller('menuleft',function ($scope) {
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
})

//表单删除
aliApp.controller('user',function ($scope,$http,$state,$stateParams) {
	
	$http.get("data/user.json")
		.success(function (data,index) {
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
		        var ind=-1;
		    //angular里的forEach里的value对应的是循环遍历的每一个元素，而key对应的是索引值
		        angular.forEach(data,function(item,key){
//		        	console.log(key)
		          if(item.index===id){
//		              console.log(item.index)
		              ind=key;
		              return;
		          }
		        });
		        return ind;
		    }
				
				})
		
	
	

})
//表单
aliApp.controller('myform',function ($scope,$http,$state,$stateParams) {
	$scope.userdata ={};
	
	//表单提交
	$scope.submitForm = function () {
		console.log($scope.userdata)
	};
	
	
})


//表单修改 revise
aliApp.controller('reviseuser',function ($scope,$http,$state,$stateParams) {
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

