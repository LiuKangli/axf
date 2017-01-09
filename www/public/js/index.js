
	$('#foot').on('click','li',function(){
	console.log($(this).index());
	defaultImg($(this).index());
	small($(this).index());
	if($(this).index()==3){
		getCarInfo();
//		// 获取值赋给列表
//		var index = localStorage.getItem('index');
//		var newData = localStorage.getItem("user");
//		var newUser = JSON.parse(newData)[index];
//		console.log(newUser.name);
//		console.log($('#content #car .userName').text());
//		$('#content #car .userName').text(newUser.name);
//		if(newUser.sex == 1){
//			$('#content #car .sex').text('先生');
//		}else{
//			$('#content #car .sex').text('女士');
//		}
//		$('#content #car .phoneNum').text(newUser.phone);
//		$('#content #car .city').text(newUser.city);
//		$('#content #car .area').text(newUser.are);
//		$('#content #car .address').text(newUser.address);
//		console.log(02);
	}
	
	
	
});
function defaultImg(num){
	for(var i = 0;i<5; i++){
		var data = $('footer li').eq(i).children('a').children('figure').children('img').attr('data-src');
		var defaul = $('footer li').eq(i).children('a').children('figure').children('img').attr('default');
		if (i == num) {
			$('footer li').eq(i).children('a').children('figure').children('img').attr('src',data);
		}else{
			$('footer li').eq(i).children('a').children('figure').children('img').attr('src',defaul);
		}

	}
}
function small(i) {
		$('footer li').eq(i).children('a').children('figure').children('img').css('transform', 'scale(1.2,1.2)');
		setTimeout(function() {
			$('footer li').eq(i).children('a').children('figure').children('img').css('transform', 'scale(1,1)');
		}, 100);
}

$('#content').on('click','#superMarket',function(){
	console.log('全局购物车触发');
//	var count = localStorage.getItem('count');
	var count = sessionStorage.getItem('count');
	console.log(count);
	if(count==0){
		$('.allNum').hide();
	}else if(count>0){
		$('.allNum').show();
	}
	$('.allNum').text(count);
});

window.onload=function(){
	getCarInfo();
	console.log('111');
}
function getCarInfo(){
	// 获取值赋给列表
	var index = localStorage.getItem('index');
	var newData = localStorage.getItem("user");
	var newUser = JSON.parse(newData)[index];
	console.log(newUser.name);
	$('.userName').text(newUser.name);
	if(newUser.sex == 1){
		$('.sex').text('先生');
	}else{
		$('.sex').text('女士');
	}
	$('.phoneNum').text(newUser.phone);
	$('.city').text(newUser.city);
	$('.area').text(newUser.are);
	$('.address').text(newUser.address);
	console.log(02);
}
