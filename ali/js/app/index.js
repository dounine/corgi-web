//	var start_time = new Date();
//	var loadingtime ;
//  var end_time = "" ;
//  var t = setInterval(function(){
//      if(document.readyState=="complete"){aa();}
////		if ($.ajax().success) {
////			aa();
////		}
//  },50)
// 	
//  function aa(){
//      end_time = new Date();
//      loadingtime = end_time.getTime() -  start_time.getTime()
//      console.log( loadingtime);
//      clearInterval(t);
//  }
//	
//	
//	
//  jQuery({property: 0}).animate({property: 100}, {
//      duration: loadingtime,
//      step: function() {
//          var percentage = Math.round(this.property);
//
//          jQuery('#progress').css('width',  percentage+"%");
//
//           if(percentage == 100) {
//                  jQuery("#progress").addClass("done");//完成，隐藏进度条
//              }
//      }
//	});
//
//	
