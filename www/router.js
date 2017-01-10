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
			require(['text!car/car.html','car/js/car'],function(car,carCtrl){
				$('#content').html(car);
				carCtrl.request();
				
			})
		},
		mySelf:function(){
			require(['text!myself/myself.html','myself/js/myself'],function(myself){
				$('#content').html(myself);
			});
		},
		reserve:function(){
			require(['text!reserve/reserve.html','reserve/js/reserve'],function(reserve,reserveJs){
				reserveJs.request();
				$('#content').html(reserve);
			});
			
		},
		initialize:function(){
			location.hash = 'home';
		}
	});
	var w = new router();
	backbone.history.start();


});