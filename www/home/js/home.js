
define(['swiper'], function(swiper) {
	(function(){
	var count = sessionStorage.getItem('count');
	if(count==0){
				$('.allNum').hide();
			}else if(count>0){
				$('.allNum').show();
			}
			$('.allNum').text(count);
})();
	function animateImg(width,height,top,left,opcity,time){
		var width = width || 0,
			height = height || 0 ,
			top = top || 0 ,
			left = left || 0,
			opacity = opcity || 1,
			time = time || 0;
		$('.copyImg').animate({
			'width':width,
			'height':height,
			'top':top,
			'left':left,
			'opacity':opcity
		},time);
	}
	//获取轮播图和菜单数据
	function bannerData() {
		$.ajax({
			type: "get",
			url: "http://h5.yztctech.net/api/axf/apihome.php",
			success: function(data) {

				var resule = JSON.parse(data).data.slide;

				var html = '';
				for(var i = 0; i < resule.length; i++) {
					html += '<div class="swiper-slide"><img src=' + resule[i].activity.img + ' /></div>';
				}
				$('#banner').html(html);
				swiper();

				var menu = JSON.parse(data).data.menu;
				menue(menu);
			}
		});
	}
	//启动轮播图
	function swiper() {
		var sw = new Swiper('.swiper-container', {
			loop: true,
			autoplay: 1000,
			autoplayDisableOnInteraction: false
		});
	}
	//按钮
	function menue(data) {
		//			console.log(data);
		var html = '';
		for(var i = 0; i < data.length; i++) {
			html += '<div class="htn"><img src=' + data[i].activity.img + ' />' + data[i].activity.name + '</div>'
		}
		$('.btns').html(html);
	}
	//热销
	$('#content ').on('click', '.btns .htn', function() {
		//			console.log($(this).text());
		if($(this).text() == '疯狂秒杀') {
			location.href = 'home/miaosha/miaosha.html'
		}
	});
	//改变footer下的图标
	function changeIcon(){
		var data = $('footer li').eq(1).children('a').children('figure').children('img').attr('data-src');
	var defaul = $('footer li').eq(0).children('a').children('figure').children('img').attr('default');
	$('footer li').eq(0).children('a').children('figure').children('img').attr('src',defaul);
	$('footer li').eq(1).children('a').children('figure').children('img').attr('src',data);
	$('footer li').eq(1).children('a').children('figure').children('img').css('transform', 'scale(1.2,1.2)');
		setTimeout(function() {
			$('footer li').eq(1).children('a').children('figure').children('img').css('transform', 'scale(1,1)');
		}, 100);
	}
	function animateForaddToCar(ele){
		$(this).css({
			transform:'translate(3,-5)'
		})
	}
	//更多
	$('#content').on('click','.milk .top .more',function(){
	location.hash='superMarket';
		changeIcon();
	});
	//添加到购物车
	$('#content').on('click','.addToCar ',function(){
//		console.log($(this).siblings('img'));
		var copyImg = '<img class="copyImg" src='+$(this).siblings('img').attr('src')+' />';
		$(this).parent().append(copyImg);
		animateImg('50px','50px','150px','55px',0.8,10);
		animateImg('50%','50%','150px','45px',0.6,100);
		animateImg('30%','30%','160px','35px',0.4,10);
		animateImg('10%','10%','165px','55px',0.2,10);
	var time = setTimeout(function(){
		$('.copyImg').remove();
		clearTimeout(time);
	},700);
		
			var count = sessionStorage.getItem('count');
			count++;
			if(count==0){
				$('.allNum').hide();
			}else if(count>0){
				$('.allNum').show();
			}
			$('.allNum').text(count);
			
			sessionStorage.setItem('count',count);
	});
	
	//搜索
	$('#content ').on('click', '.search span', function() {
		location.href = 'home/search/search.html';
	});
	//二维码
	$('#content').on('click','.ewm',function(){
		fun();
	});
	//微信
//	wx.config({
//		debug: true,
//		appId: '<?php echo $signPackage["appId"];?>',
//		timestamp: '<?php echo $signPackage["timestamp"];?>',
//		nonceStr: '<?php echo $signPackage["nonceStr"];?>',
//		signature: '<?php echo $signPackage["signature"];?>',
//		jsApiList: ['scanQRCode', 'getLocation', 'openLocation']
//	});

//	function fun() {
//		wx.scanQRCode({
//			needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
//			scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
//			success: function(res) {
//				var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
//			}
//		});
//	}
//
//	function map() {
//		wx.getLocation({
//			type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
//			success: function(res) {
//				var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
//				var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
//				var speed = res.speed; // 速度，以米/每秒计
//				var accuracy = res.accuracy; // 位置精度  
//
//				wx.openLocation({
//					latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
//					longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
//					name: '深圳', // 位置名
//					address: '金悦保健', // 地址详情说明
//					scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
//					infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
//				});
//			}
//		});
//	}
	return {
		bannerData: bannerData
	}
});