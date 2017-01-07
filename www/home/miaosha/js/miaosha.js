(function(){
	getData();
})();
function getData(){
	$.ajax({
		type:"get",
		url:"http://h5.yztctech.net/api/axf/apimiaosha.php",
		dataType:'json',
		success:function(data){
			console.log(data);
			var html = baidu.template('tpl',data);
			$('.lists ul').html(html);
			lazyLoad();
			load();
		}
	});
}
$('.refresh').on('click',function(){
	getData();
});

//懒加载
function lazyLoad(){
	var imgs = $('.lists').find('[data-src]');
	$('section').on('scroll',function(){
		load();
	});
	console.log(imgs);
}
function load(){
	var $ele = $('section');
	var imgs = $('.lists').find('[data-src]');
	var height = $ele.height();
	for(var i=0; i<imgs.length;i++){
		if($(imgs[i]).offset().top < height ){
			$(imgs[i]).attr('src',$(imgs[i]).attr('data-src'));
		}
	}
}
