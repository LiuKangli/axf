define(['swiper'],function(swiper){
	//获取轮播图和菜单数据
	function bannerData(){
		$.ajax({
			type:"get",
			url:"http://h5.yztctech.net/api/axf/apihome.php",
			success:function(data){
				
				var resule = JSON.parse(data).data.slide;
//				console.log(resule);
				var html='';
				for(var i=0; i<resule.length; i++){
					html+= '<div class="swiper-slide"><img src='+resule[i].activity.img+ ' /></div>';
				}
				$('#banner').html(html);
				swiper();
				
				var menu = JSON.parse(data).data.menu;
				menue(menu);
			}
		});
	}
	//启动轮播图
	function swiper(){
		var sw = new Swiper('.swiper-container',{
			loop:true,
			autoplay:1000,
			autoplayDisableOnInteraction:false
		});
	}
	//按钮
		function menue(data){
//			console.log(data);
			var html = '';
			for (var i=0;i<data.length;i++){
				html+='<div class="htn"><img src='+data[i].activity.img+' />'+data[i].activity.name+'</div>'
			}
			$('.btns').html(html);
		}
		//热销
		$('#content ').on('click','.btns .htn',function(){
//			console.log($(this).text());
			if($(this).text()=='疯狂秒杀'){
				location.href = 'home/miaosha/miaosha.html'
			}
		});
		$('#content').on('click','.sales .sale',function(){
			
		});
		//搜索
		$('#content ').on('click','.search span',function(){
			location.href = 'home/search/search.html';
		});
		
		
//$('footer').on('click','li',function(){
//	console.log($(this).index()+'home');
//	
//});
	return {
		bannerData:bannerData
	}
});