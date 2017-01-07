//热门搜索点击事件
$('.div-search').on('click','.hot_search .item',function(){
	console.log($(this).text());
//	$('.search_div input').val($(this).text());
addItem($(this).text());
});

//添加历史记录
function addItem(val){
	$('.history_search').append('<div class="item">'+val+'</div>')
}
//删除历史记录
$('.clean_history').on('click',function(){
	console.log($('.history_search').find('div').length);
	if($('.history_search').find('div').length>0){
	$('.history_search').remove();	
	}
});

//导航栏搜索按钮
$('.search').on('click',function(){
	if($('.search_div input').val()){
		addItem($('.search_div input').val());
	}
});
