define(['swiper'], function(swiper) {
	(function() {
		var count = sessionStorage.getItem('count');
		if(count == 0) {
			$('.allNum').hide();
		} else if(count > 0) {
			$('.allNum').show();
		}
		$('.allNum').text(count);

//		wx.ready(function() {
//			wx.checkJsApi({
//				jsApiList:[
//				'getLocation'
//				],
//				success:function(){
//					if (res.checkResult.getLocation == false) {
//						
//					} 
//				}
//			})
//		})

	})();
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
	function changeIcon() {
		var data = $('footer li').eq(1).children('a').children('figure').children('img').attr('data-src');
		var defaul = $('footer li').eq(0).children('a').children('figure').children('img').attr('default');
		$('footer li').eq(0).children('a').children('figure').children('img').attr('src', defaul);
		$('footer li').eq(1).children('a').children('figure').children('img').attr('src', data);
		$('footer li').eq(1).children('a').children('figure').children('img').css('transform', 'scale(1.2,1.2)');
		setTimeout(function() {
			$('footer li').eq(1).children('a').children('figure').children('img').css('transform', 'scale(1,1)');
		}, 100);
	}

	function animateForaddToCar(ele) {
		$(this).css({
			transform: 'translate(3,-5)'
		})
	}
	//更多
	$('#content').on('click', '.milk .top .more', function() {
		location.hash = 'superMarket';
		changeIcon();
	});
	//添加到购物车
	var offset = $("#content").offset(); 
	$('#content').on('click', '.addToCar ', function(event) {
       	 var img = $(this).siblings('img').attr('src'); //获取当前点击图片链接   
        	var flyer = $('<img class="flyer-img" src="' + img + '">'); //抛物体对象   
       	 flyer.fly({   
            start: {   
                left: event.pageX-85,//抛物体起点横坐标   
                top: event.pageY-100 //抛物体起点纵坐标   
            },   
            end: {   
                left: offset.left +240,//抛物体终点横坐标   
                top: offset.top + 530, //抛物体终点纵坐标   
            },   
            onEnd: function() {   
                $("#tip").show().animate({width: '200px'},300).fadeOut(500);////成功加入购物车动画效果   
                this.destroy(); //销毁抛物体   
            }   
        });   
       
		var count = sessionStorage.getItem('count');
		count++;
		if(count == 0) {
			$('.allNum').hide();
		} else if(count > 0) {
			$('.allNum').show();
		}
		$('.allNum').text(count);

		sessionStorage.setItem('count', count);
	});

	//搜索
	$('#content ').on('click', '.search span', function() {
		location.href = 'home/search/search.html';
	});

	//	//微信
		
	//二维码
	$('#content').on('click', '.ewm', function() {
			wx.scanQRCode({
			    needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
			    scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
			    success: function (res) {
				    var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
				}
	});
});
	
return {
	bannerData: bannerData
}
});