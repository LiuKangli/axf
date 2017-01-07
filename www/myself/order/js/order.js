console.log(sessionStorage.getItem('type'));
(function(){
	
	if (sessionStorage.getItem('type')) {
		var index = sessionStorage.getItem('type');
		$('.btns li').eq(index).css('borderBottom','2px solid yellow');
	}else{
			$('.btns li').eq(0).css('borderBottom','2px solid yellow');
	}
})();
$('.btns ').on('click','li',function(){
		$('.btns li').eq($(this).index()).css('borderBottom','2px solid yellow').siblings().css('borderBottom','none');
})
