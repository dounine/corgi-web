/*jshint unused: vars */
require.config({
    baseUrl: 'js',
    paths: {
    	'angular': 'lib/angular/angular',
    	'jquery': 'lib/jquery/jquery',
    	'bootstrap':'lib/bootstrap/bootstrap',
        'angular-route': 'lib/angular-ui-router/angular-ui-router',
        'angular-animate':'lib/angular-animate/angular-animate',
        'angular-loading-bar':'lib/angular-loading-bar/loading-bar',
        'ng-grid.debug':'ng-grid.debug',
        'app': 'app',
        'router':'app/router',
        'homenavController':'app/homeNav/homenavController',
        'myctrlController':'app/myctrl/myctrlController',
        'formController':'app/form/formController',
        'add-delTab':'app/tab/add-delTab',
        'directives':'app/directives'
    },
    shim: {
        'jquery':{
            'exports':'$'
        },
        'angular' : {
            'deps':['jquery'],
            'exports' : 'angular'
        },
        'angular-animate':{
            'deps':['angular']
        },
        'bootstrap':{
            'deps':['jquery']
        },
        'angular-route': {
            'deps':['angular'],
            exports : 'angular-route'
        },
        'angular-loading-bar':{
            'deps':['angular']
        },
        'ng-grid.debug':{
        	'deps':['jquery','angular']
        }
    },
  priority: [
      'angular'
  ],
  packages: [

  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
	'app',
    'angular',
    'jquery',
    'angular-route',
    'angular-animate',
    'angular-loading-bar',
    'ng-grid.debug',
    'router',
    'homenavController',
    'myctrlController',
    'formController',
    'add-delTab',
    'directives',
    'bootstrap'
], function(app,angular,$,angularRoute,angularAnimate,angularLoading) {


 'use strict';
    /* jshint ignore:start */
//  var $html = angular.element(document.getElementsByTagName('html')[0]);
    /* jshint ignore:end */
  angular.element().ready(function() {
            angular.resumeBootstrap([app.name]);

  });

});
