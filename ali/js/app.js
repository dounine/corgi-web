var aliApp = angular.module('aliApp',['ui.router']);


aliApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

aliApp.config(function ($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/login');
	$stateProvider
	
		.state('login',{
			url:'/login',
			views:{
				'':{
					templateUrl:'tpls/login.html'
				},
				'loginForm@login':{
					templateUrl:'tpls/loginForm.html'
				}
			}
		})
	
		.state('home',{
			url:'/home',
			views:{
				'':{
					templateUrl:'tpls/app.html'
				},
				'menuTop@home':{
					templateUrl:'tpls/header.html'
				},
				'menuLeft@home':{
					templateUrl:'tpls/menuLeft.html'
				},
				'content@home':{
					templateUrl:'tpls/content.html'
				},
				'conNav@home':{
					templateUrl:'tpls/conNav/homeNav.html'
				},
				'conBody@home':{
					templateUrl:'tpls/conBody.html'
				}
			}
		})
		

		
		.state('home.shiL',{
			url:'/shili',
			views:{
				'conBody@home':{
					templateUrl:'tpls/conBody/shili.html'
				}
			}
		})
		.state('home.anQ',{
			url:'/anquanzu',
			views:{
				'conBody@home':{
					templateUrl:'tpls/conBody/anquanzu.html'
				}
			}
		})
		.state('home.biaoQ',{
			url:'/biaoqian',
			views:{
				'conBody@home':{
					templateUrl:'tpls/conBody/biaoqian.html'
				}
			}
		})
		.state('home.caoZ',{
			url:'/caozuo',
			views:{
				'conBody@home':{
					templateUrl:'tpls/conBody/caozuo.html'
				}
			}
		})
		.state('home.ciP',{
			url:'/cipan',
			views:{
				'conBody@home':{
					templateUrl:'tpls/conBody/cipan.html'
				}
				
			}
		})
		.state('home.adduesr',{
			url:'/adduser',
				views:{
					'conBody@home':{
						templateUrl:'tpls/conBody/adduser.html'
					}
				}
		})
		.state('home.reviseuser',{
			url:'/reviseuser/:userId',
			views:{
				'conBody@home':{
						templateUrl:'tpls/conBody/reviseuser.html'
					}
			}
		})
		
		.state('home.gengX',{
			url:'/gengxin',
			views:{
				'conBody@home':{
					templateUrl:'tpls/conBody/gengxin.html'
				}
			}
		})
		.state('home.jingX',{
			url:'/jingxiang',
			views:{
				'conBody@home':{
					templateUrl:'tpls/conBody/jingxiang.html'
				}
			}
		})
		.state('home.kuaiZ',{
			url:'/kuaizhao',
			views:{
				'conBody@home':{
					templateUrl:'tpls/conBody/kuaizhao.html'
				}
			}
		})
			
		.state('single',{
			url:'/single',
			
			views:{
				'':{
					templateUrl:'tpls/app.html'
				},
				'menuTop@single':{
					templateUrl:'tpls/header.html'
				},
				'menuLeft@single':{
					templateUrl:'tpls/menuLeft.html'
				},
				'content@single':{
					templateUrl:'tpls/content.html'
				},
				'conNav@single':{
					templateUrl:'tpls/conNav/singleNav.html'
				},
				'conBody@single':{
					templateUrl:'tpls/conBody/sinbody.html'
				}
			}
		})
		.state('single.zhenS',{
			url:'/zhengshu',
			views:{
				'conBody@single':{
					templateUrl:'tpls/conBody/sin_zs.html'
				}
			}
		})
		.state('single.biaoQ',{
			url:'/biaoqian',
			views:{
				'conBody@single':{
					templateUrl:'tpls/conBody/sin_bq.html'
				}
			}
		})
		.state('single.caoZ',{
			url:'/caozuo',
			views:{
				'conBody@single':{
					templateUrl:'tpls/conBody/sin_cz.html'
				}
			}
		})
		.state('single.jingX',{
			url:'/jingxiang',
			views:{
				'conBody@single':{
					templateUrl:'tpls/conBody/sin_jx.html'
				}
			}
		})
		.state('single.chanP',{
			url:'/chanping',
			views:{
				'conBody@single':{
					templateUrl:'tpls/conBody/sin_cp.html'
				}
			}
		})
		
})





