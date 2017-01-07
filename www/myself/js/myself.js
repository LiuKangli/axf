define([],function(){
	
	$('#content').on('click','.order2 .jifen',function(){
		console.log($(this));
		location.href = 'myself/jifen/jifenMarket.html';
	});
	//查看全部订单
	$('#content').on('click',' .order',function(){
		seeOrder(0);
	});
	$('#content').on('click','.order1 .ord',function(){
		var index = $(this).index();
		seeOrder((index+1));
	});
	function seeOrder(type){
		sessionStorage.setItem('type',type);
		location.href = 'myself/order/order.html';
	}
});