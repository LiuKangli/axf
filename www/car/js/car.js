define([],function(){
	function request(){
		countPrice();
		function countPrice(){
//			var x = $('.goods').length;
//			console.log(x);
			var allPrice=0;
			for(var i=0; i<$('.goods').length; i++){
//				console.log($('goods').eq(i).find('.choose').is(':checked'));
				if($('.goods').eq(i).find('.choose').prop('checked')){
					var price = parseFloat($('.goods').eq(i).find('.price').text());
					var countNum = parseInt($('.goods').eq(i).find('.countNum').text());
					allPrice += price*countNum;
				}
			}
			
//			console.log(allPrice);
			$('.allPrice').text(allPrice.toFixed(1));
			if(allPrice == 0){
				$('.decide').css('backgroundColor','#999');
			}else{
				$('.decide').css('backgroundColor','#FFD600');
			}
		}
		
		// 减少数量
		$('.goodsList .minus').on('click',function(e){
			e.stopPropagation();
//			console.log('minus');
//			console.log($(this).next().text());
			var num = $(this).next().text();
			num--;
			$(this).next().text(num);
			if(num<=0){
//				console.log($(this).parent().parent().parent());
				$(this).parent().parent().parent().remove();
			}
			countPrice();
		});
		// 增加数量
		$('.goodsList .plus').on('click',function(e){
			e.stopPropagation();
			var num = $(this).prev().text();
			num++;
			$(this).prev().text(num);
			countPrice();
		});
		// 选择收货时间
		$('.chooseTime').on('click',function(e){
			e.stopPropagation();
			$('.selectTime').toggle();
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
//		console.log(time.getHours());
		var hours = time.getHours();
		var t = 20 - hours;
//		console.log(t);
		// 0点至19点
		if(t<=11 && t>1){
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
		
		

		$("#select").click(function(){
//			console.log('复选框');
//			console.log(this);
		    if(this.checked){   
//		    	console.log('复选框1');
		        $(".choose").prop("checked", true);  
		    }else{
//		    	console.log('复选框2')
				$(".choose").prop("checked", false);
		    }
		    countPrice();
		});
		
		$('.goodsList').on('click','.goods .choose',function(){
			countPrice();
		});
		
		// 获得选中的所有值。我们要跟后台程序交互就必须获取列表中所选项的值，我们通过遍历数组，将选中项的值存放在数组中，最后组成由逗号(,)隔开的字符串，开发者就可以通过获取这个字符串进行相应的操作了。
		$(".goodsList").click(function(){
			var valArr = new Array;
		    $(".choose[checked]").each(function(i){
				valArr[i] = $(this).val();
		    });
			var vals = valArr.join(',');//转换为逗号隔开的字符串
//		    alert(vals);
		});
		// 为了完善选中选项功能，我们在单击列表中某个选项时，如果勾选的项刚好满足全部选中的条件，则#all也要相应的变为选中状态，同样，如果事先所有的选项是选中状态时，当取消勾选某个选项时，那么#all也要相应的变为未选中状态。
//设置全选复选框
		$(".goods .choose").click(function(){
			allchk();
		});

		function allchk(){
			var chknum = $(".goods .choose").size();//选项总个数
			var chk = 0;
			$(".goods .choose").each(function () {  
		        if($(this).prop("checked")==true){
					chk++;
				}
		    });
			if(chknum==chk){//全选
				$("#select").prop("checked",true);
			}else{//不全选
				$("#select").prop("checked",false);
			}
		}
		
		getCarInfo();
		function getCarInfo(){
				var index = localStorage.getItem('index');
			if(!index){
				index = 0;
			}
				// 获取值赋给列表
//				console.log(index);
				var newData = localStorage.getItem("user");
				var newUser = JSON.parse(newData)[index];
				console.log(newUser.name);
				$('.userName').text(newUser.name);
				if(newUser.sex == 1){
					$('.sex').text('先生');
				}else{
					$('.sex').text('女士');
				}
				$('.phoneNum').text(newUser.phone);
				$('.city').text(newUser.city);
				$('.area').text(newUser.are);
				$('.address').text(newUser.address);
				console.log(02);
		}
		
	}
	
	
	
	return {
		request : request
	}
});