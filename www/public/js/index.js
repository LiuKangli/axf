
	$('#foot').on('click','li',function(){
//	console.log($(this).index());
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