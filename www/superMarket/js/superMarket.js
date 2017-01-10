define([],function(){
	// 如果本地没有存储数据,则默认加载'热销榜'
	if(!localStorage.getItem('superMarketList')){
		getGoods('热销榜');
	}
	
	$('#content').on('click','.headRight',function(){
		window.location.href = 'home/search/search.html';
	});
	
	function request(){
		// 获得本地存储数据并加载
		var category = localStorage.getItem('superMarketList');
		getGoods(category);
//		console.log(category);
		var index = localStorage.getItem('li-index');
//		console.log(index);
//		console.log($('#content').find('#superMarket li').eq(index));
		$('#content #superMarket #goodsList').find('li').eq(index).addClass('active').siblings().removeClass('active');
//		console.log($('.leftUl li').length);
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
		$('.unfold').hide();
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	$('#content').on('click','.sortShow li',function(e){
		e.stopPropagation();
		if($(this).text()=='价格最低'){
//			console.log(333333);
		}
		if($(this).text()=='价格最高'){
//			console.log(444444);
		}
		$(this).addClass('active').siblings().removeClass('active');
		$('.unfold').hide();
	});
	
	// 点击任意位置,关闭分类排序
	$('#content').on('click',function(e){
		e.stopPropagation();
		$('.unfold').hide();
	});

//	var count = 0;
	// 增加商品数量,添加到购物车中
	$('#content').on('click','.plus',function(){
		// lkl 
		var count = sessionStorage.getItem('count');
		var num = $(this).prev().text();
//		e.stopPropagation();
		$(this).siblings().show();
		num++;
		$(this).prev().text(num);
		console.log('增加数量');
		// 点击添加购物车动画效果
		var imgUrl = $(this).parent().parent().children('img').attr('src');

		var copyImg = '<img class="copyImg" src='+imgUrl+' />';

		$(this).parent().parent().prepend(copyImg);
//		// 给复制图片添加类名达到动画效果
//		$(this).parent().parent().children('.copyImg').addClass('copyImgGo');
		// 路径动画效果
		$('.copyImg').animate({
			width:'2.5rem',
			height:'2.5rem',
			top:'-0.5rem',
			left:'1.5rem',
			opacity:0.8
		},100);
		$('.copyImg').css('transform','rotate(5deg)');
		$('.copyImg').animate({
			width:'2rem',
			height:'2rem',
			top:'1rem',
			left:'2.5rem',
			opacity:0.6
		},100);
		$('.copyImg').css('transform','rotate(15deg)');
		$('.copyImg').animate({
			width:'1.5rem',
			height:'1.5rem',
			top:'2rem',
			left:'3.5rem',
			opacity:0.4
		},100);
		$('.copyImg').css('transform','rotate(30deg)');
		$('.copyImg').animate({
			width:'1rem',
			height:'1rem',
			top:'6rem',
			left:'4rem',
			opacity:0.2
		},100);
//		$('.copyImg').css('transform','rotate(90deg)');
//		 $('.copyImg').rotate({
//              angle: 0,
//              animateTo: 180,
//              easing: $.easing.easeInOutExpo
//          });
		var $this = $(this);
		var st = setTimeout(function(){
//			console.log($this.parent().parent().children('img'));
			// 1s后清除复制图片
			$this.parent().parent().children('.copyImg').remove();
			// 清除定时器
			clearTimeout(st);
		},400);
		
		
		// 把物品数量增加显示在下方的购物车中
		console.log(count);
		count++;
		
//		localStorage.setItem('count',count);
		sessionStorage.setItem('count',count);
		
	});
	$('#content').on('click','.minus',function(){
		var count = sessionStorage.getItem('count');
		var num = $(this).next().text();
//		e.stopPropagation();
		num--;
		if(num <= 0){
			$(this).hide().next().hide();
		}
		$(this).next().text(num);
		
		// 把物品数量增加显示在下方的购物车中
		count--;
//		localStorage.setItem('count',count);
		sessionStorage.setItem('count',count);
		
	});
	
	
	
	
	
		
	
	
	return {
		request : request
	}
})


		