define([],function(){
	// 如果本地没有存储数据,则默认加载'热销榜'
	if(!localStorage.getItem('superMarketList')){
		console.log(11111111111);
		getGoods('热销榜');
	}
	
	
	function request(){
		// 获得本地存储数据并加载
		var category = localStorage.getItem('superMarketList');
		var index = localStorage.getItem('li-index');
		getGoods(category);
		console.log($('.leftUl li').length);
		// 点击左导航,请求右边的数据
		$('#content').on('click','.leftUl li',function(){
			// 给左侧导航黄条
			$(this).addClass('active').siblings().removeClass('active');
			var category = $(this).text();
			getGoods(category);
			localStorage.setItem('li-index',$(this).index());
			localStorage.setItem('superMarketList',category);
		});
		
	}
	
	var result;
	function getGoods(category){
	// 传入左边文本内容,请求数据
		$.ajax({
			type:"get",
			url:"http://h5.yztctech.net/api/axf/apicategory.php",
			async:true,
			data:{
				category : category
			},
			success : function(data){
//				console.log(data);
				result = JSON.parse(data);
//				console.log(result.data);
				var html = baidu.template('goods',result);
				$('#goodsList').html(html);
			}
		});
	}
	

	// 分类,排序---点击展开
	$('#content').on('click','.classify',function(e){
		
		$('.unfold').show();
		e.stopPropagation();
		$('.classifyShow').css('display','block').siblings().css('display','none');
	});
	$('#content').on('click','.sort',function(e){
		e.stopPropagation();
		$('.unfold').show();
		$('.sortShow').css('display','block').siblings().css('display','none');
	});
	
	// 关闭分类,排序
	$('#content').on('click','.classifyShow li',function(e){
		e.stopPropagation();
		console.log('分类');
		$('.unfold').hide();
	});
	
	$('#content').on('click','.sortShow li',function(e){
		e.stopPropagation();
		if($(this).text()=='价格最低'){
			console.log(333333);
		}
		if($(this).text()=='价格最高'){
			console.log(444444);
		}
		$('.unfold').hide();
	});
	
	// 点击任意位置,关闭分类排序
	$('#content').on('click',function(e){
		e.stopPropagation();
		$('.unfold').hide();
	})

	// 增加商品数量,添加到购物车中
	$('#content').on('click','.plus',function(e){
		var num = $(this).prev().text();
		e.stopPropagation();
		$(this).siblings().show();
		num++;
		$(this).prev().text(num);
		
		// 点击添加购物车动画效果
		console.log($(this).parent().parent().children('img'));
		var imgUrl = $(this).parent().parent().children('img').attr('src');
		console.log(imgUrl);
		
		var copyImg = '<img class="copyImg" src='+imgUrl+' />';
		$(this).parent().parent().prepend(copyImg);
		
		
		
	});
	$('#content').on('click','.minus',function(e){
		var num = $(this).next().text();
		e.stopPropagation();
		num--;
		if(num <= 0){
			$(this).hide().next().hide();
		}
		$(this).next().text(num);
	});
	
	
	
	
		
	
	
	return {
		request : request
	}
})


		