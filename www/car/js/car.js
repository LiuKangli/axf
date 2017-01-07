define([],function(){
	function request(){
		// 减少数量
		$('.goodsList .minus').on('click',function(){
			console.log(2222);
			console.log($(this).next().text());
			var num = $(this).next().text();
			num--;
			$(this).next().text(num);
			if(num<=0){
				console.log($(this).parent().parent().parent());
				$(this).parent().parent().parent().remove();
			}
		});
		// 增加数量
		$('.goodsList .plus').on('click',function(){
			var num = $(this).prev().text();
			num++;
			$(this).prev().text(num);
		});
		// 选择收货时间
		$('.chooseTime').on('click',function(e){
			e.stopPropagation();
			$('.selectTime').toggle();
			
//			// 获取当前时间,设置收货时间选项
//			var time = new Date();
//			console.log(time.getHours());
//			var hours = time.getHours();
//			var t = 20 - 19;
//			console.log(t);
//			// 0点至19点
//			if(t<=11 && t>1){
//				console.log($('.today').children());
//				$('.today').children().eq(11-t).prevAll().hide();
////				$('<option value="一小时送达">&nbsp;一小时送达</option>').prependTo('.today');
//				$('.today').prepend('<option value="一小时送达">&nbsp;一小时送达</option>');
//			}else if(t==1){
//			// 19点时
//				$('.today').children().remove();
//				$('.today').prepend('<option value="一小时送达">&nbsp;一小时送达</option>');
//			}else if(t<1){
//			// 20点以后
//				$('.today').remove();
//			}
		});
		// 选择并改变收货时间
		$('.selectTime').on('click','option',function(e){
			e.stopPropagation();
			$('.time').text($(this).val());
			$('.selectTime').hide();
		});
		// 点击任意位置关闭
		$('#content').on('click',function(){
			$('.selectTime').hide();
		})
		
		// 获取当前时间,设置收货时间选项
		var time = new Date();
		console.log(time.getHours());
		var hours = time.getHours();
		var t = 20 - hours;
		console.log(t);
		// 0点至19点
		if(t<=11 && t>1){
			console.log($('.today').children());
			$('.today').children().eq(11-t).prevAll().hide();
//				$('<option value="一小时送达">&nbsp;一小时送达</option>').prependTo('.today');
			$('.today').prepend('<option value="一小时送达">&nbsp;一小时送达</option>');
		}else if(t==1){
		// 19点时
			$('.today').children().remove();
			$('.today').prepend('<option value="一小时送达">&nbsp;一小时送达</option>');
		}else if(t<1){
		// 20点以后
			$('.today').remove();
		}
		
		
		
		
		$('.change').on('click',function(){
			console.log(000000);
			window.location.href = 'car/location/location.html';
		});
		
	}
	
	
	
	return {
		request : request
	}
});