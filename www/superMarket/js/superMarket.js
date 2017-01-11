(function(){
		var index = localStorage.getItem('li-index');
		console.log($('#content #left .leftUl li'));
		$('.leftUl li').eq(index).addClass('active').siblings().removeClass('active');
	})();
define([], function() {
	console.log(localStorage.getItem('superMarketList'));
	// 如果本地没有存储数据,则默认加载'热销榜'
	if(localStorage.getItem('superMarketList')==false) {
		getGoods('热销榜');
		console.log('热销榜');
	}
	$('#content').on('click', '.headRight', function() {
		window.location.href = 'home/search/search.html';
	});
	function request() {
		getGoods('热销榜');
		var category = localStorage.getItem('superMarketList');
		if(category) {
			// 获得本地存储数据并加载
			getGoods(category);
		}
		// 点击左导航,请求右边的数据
		$('#content').on('click', '.leftUl li', function() {
			console.log($(this));
			// 给左侧导航黄条
			$(this).addClass('active').siblings().removeClass('active');
			var category = $(this).text();
			console.log(category);
			getGoods(category);
			localStorage.setItem('li-index', $(this).index());
			localStorage.setItem('superMarketList', category);
		});
	}
	var result;
	function getGoods(category) {
		// 传入左边文本内容,请求数据
		$.ajax({
			type: "get",
			url: "http://h5.yztctech.net/api/axf/apicategory.php",
			async: true,
			data: {
				category: category
			},
			success: function(data) {		
				result = JSON.parse(data);
				var html = baidu.template('goods', result);
				$('#goodsList').html(html);
			}
		});
	}
	// 分类,排序---点击展开
	$('#content').on('click', '.classify', function(e) {
		$('.unfold').show();
		e.stopPropagation();
		$('.classifyShow').css('display', 'block').siblings().css('display', 'none');
	});
	$('#content').on('click', '.sort', function(e) {
		e.stopPropagation();
		$('.unfold').show();
		$('.sortShow').css('display', 'block').siblings().css('display', 'none');
	});

	// 关闭分类,排序
	$('#content').on('click', '.classifyShow li', function(e) {
		console.log($('.leftUl li'));
		console.log($(this));
		e.stopPropagation();
		$('.unfold').hide();
		$(this).addClass('active').siblings().removeClass('active');
	});
	$('#content').on('click', '.sortShow li', function(e) {
		e.stopPropagation();
		if($(this).text() == '价格最低') {
		}
		if($(this).text() == '价格最高') {
		}
		$(this).addClass('active').siblings().removeClass('active');
		$('.unfold').hide();
	});

	// 点击任意位置,关闭分类排序
	$('#content').on('click', function(e) {
		e.stopPropagation();
		$('.unfold').hide();
	});

	var count = 0;
	var offset = $("#content").offset();
	// 增加商品数量,添加到购物车中
	$('#content').on('click', '.plus', function() {
		count = sessionStorage.getItem('count');
		console.log(count);
		var num = $(this).prev().text();
		//	e.stopPropagation();
		$(this).siblings().show();
		num++;
		$(this).prev().text(num);
		console.log('增加数量');
		// 把物品数量增加显示在下方的购物车中
		count++;
		console.log(count);
		var img = $(this).parent().parent().children('img').attr('src'); //获取当前点击图片链接   
		var flyer = $('<img class="flyer-img" src="' + img + '">'); //抛物体对象   
		flyer.fly({
			start: {
				left: event.pageX - 200, //抛物体起点横坐标   
				top: event.pageY - 100 //抛物体起点纵坐标   
			},
			end: {
				left: offset.left + 240, //抛物体终点横坐标   
				top: offset.top + 530, //抛物体终点纵坐标   
				width: 0,
				height: 0
			},
			onEnd: function() { //console.log(this);
				$("#tip").show().animate({
					width: '200px'
				}, 300).fadeOut(500); ////成功加入购物车动画效果   
				this.destroy(); //销毁抛物体   
			}
		});
		sessionStorage.setItem('count', count);
		console.log(count);
	});
	$('#content').on('click', '.minus', function() {
		var count = sessionStorage.getItem('count');
		var num = $(this).next().text();
		num--;
		if(num <= 0) {
			$(this).hide().next().hide();
		}
		$(this).next().text(num);
		// 把物品数量增加显示在下方的购物车中
		count = sessionStorage.getItem('count');
		count--;
		sessionStorage.setItem('count', count);
	});
	
	
	
	return {
		request: request
	}
	
});
console.log($('.allNum'));

(function(){
		var index = localStorage.getItem('li-index');
		console.log($('#content #left .leftUl li'));
		$('.leftUl li').eq(index).addClass('active').siblings().removeClass('active');
	})();