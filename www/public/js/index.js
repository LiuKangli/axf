
console.log(JSON.parse(localStorage.getItem('user')));
if(JSON.parse(localStorage.getItem('user')) == undefined){
	console.log('user');
var obj = {}
		obj["0"]={
			"name":"米米米米米",
			"sex":1,
			"phone":15899979800,
			"city":'深圳',
			"are":'宝安28区',
			"address":"德冠庭"
		}
		obj["1"]={
			"name":"开开开开开",
			"sex":-1,
			"phone":12345123450,
			"city":"纽约",
			"are":"曼哈顿",
			"address":"第五大街"
		}
	localStorage.setItem("user",JSON.stringify(obj));
}




$('#foot').on('click','li',function(){
defaultImg($(this).index());
small($(this).index());
	

(function(){
	sessionStorage.setItem('count',0);
	$('.allNum').text(0);
	console.log('haha',$('.allNum').text());
})();
	$('#foot').on('click','li',function(){
	console.log($(this).index());
	defaultImg($(this).index());
	small($(this).index());


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

//sessionStorage.setItem('count',count);
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

