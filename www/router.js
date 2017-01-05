define(['underscore','backbone'],function(_,backbone){
	var router = backbone.Router.extend({
		routes:{
			'home':'home',
			'superMarket':'superMarket',
			'car':'car',
			'mySelf':'mySelf',
			'reserve':'reserve'
		},
		home:function(){
			console.log('首页');
			require(['text!home/home.html','home/js/home'],function(home,homeData){
				homeData.bannerData();
			$('content').html(home);	
			
			});
		},
		superMarket:function(){
			console.log('超市');
		},
		car:function(){
			console.log('购物车');
		},
		mySelf:function(){
			console.log('我的');
		},
		reserve:function(){
			console.log('预定');
		},
		initialize:function(){
			location.hash = 'home';
		}
	});
	var w = new router();
	backbone.history.start();
});