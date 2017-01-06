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
			$('body header').css('display','block');
			require(['text!home/home.html','home/js/home'],function(home,homeData){
				homeData.bannerData();
				$('#content').html(home);
				
			});
		},
		superMarket:function(){
			console.log('超市');
			require(['text!superMarket/superMarket.html','superMarket/js/superMarket'],function(superMarket,superMarketCtrl){
				superMarketCtrl.request();
				$('#content').html(superMarket);
			});
		},
		car:function(){
			console.log('购物车');
			
		},
		mySelf:function(){
			console.log('我的');
			require(['text!myself/myself.html','myself/js/myself'],function(myself,myselfJs){
				$('#content').html(myself);
				$('body header').css('display','none');
			});
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