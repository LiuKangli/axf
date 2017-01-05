define(['template'], function(template) {
	function request() {
		$.ajax({
			type: "get",
			url: "http://h5.yztctech.net/api/axf/apiyuding.php",
			dataType: 'json',
			success: function(data) {
				console.log(data);
				var html = baidu.template('tpl', data);
				$('.pl').html(html);
				lazyLoad();
				load();
			}
		});
		//懒加载
		function lazyLoad() {
			var imgs = $('#content').find('[data-src]');
			$('#content').on('scroll', function() {
				load();
			});
		}
		function load() {
			var $content = $('#content');
			var imgs = $content.find('[data-src]');
			// 获取当前屏幕高度
			var height = $content.height();
			for(var i = 0 ; i < imgs.length ; i++){
				// 如果图片的位置小于当前屏幕的高度
				if($(imgs[i]).offset().top < height){
					$(imgs[i]).attr('src',$(imgs[i]).attr('data-src')); 
				}
			}
		}
	}
	return {
		request: request
	}
});