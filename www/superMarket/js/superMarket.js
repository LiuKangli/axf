define([],function(){
	
	function request(){
		console.log($('.leftUl li').length);
		// 点击左导航,请求右边的数据
		$('content').on('click','.leftUl li',function(){
			$(this).before().css('visibility','visible');
			console.log($(this).text());
			var category = $(this).text();
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
					var result = JSON.parse(data);
	//				console.log(result.data);
					var html = baidu.template('goods',result);
					$('#goodsList').html(html);
				}
			});
		});
	}
	
		
	
	
	return {
		request : request
	}
})


		