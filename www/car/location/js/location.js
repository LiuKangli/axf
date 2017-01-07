$('.locationBox').on('click','.compile',function(){
	// 左上角返回键类名改变
	$('.back').removeClass('back').addClass('goBack');
	// 点击返回地址列表
	$('.goBack').on('click',function(){
//		console.log(111);
		// 编辑页面关闭
		$('#updataAddress').toggle();
		// 左上角类名恢复
		$('.goBack').removeClass('goBack').addClass('Back');
		// 保存按钮隐藏
		$('.save').toggle();
	})
	
	// 编辑页面显示
	$('#updataAddress').toggle();
	// 获取当前列表的所有用户信息
	console.log($(this));
	console.log($(this).parent().find('.userName').text());
	var userName = $(this).parent().find('.userName').text();
	var sex = $(this).parent().find('.sex').text();
	var phoneNum = $(this).parent().find('.phoneNum').text();
	var city = $(this).parent().find('.city').text();
	var are = $(this).parent().find('.area').text();
	var address = $(this).parent().find('.address').text();
	console.log(sex,phoneNum,city,are,address);
	// 赋予用户信息给编辑页面
	$('#userName').val(userName);
	if(sex == '先生'){
		$('#sex1').attr('checked',1);
		console.log('先生');
		console.log($('#sex1').attr('checked',1).next('input'));
	}else{
		$('#sex2').attr('checked',1);
		console.log('女士');
	}
	$('#phoneNum').val(phoneNum);
	$('#city').val(city);
	$('#area').val(are);
	$('#address').val(address);
	
	// 保存按钮显示
	$('.save').toggle();
	
	// 点击保存,把值返回
	var $this = $(this).parent();
	console.log($this.find('.userName'));
	$('.save').on('click',function(){
		console.log('保存');
		console.log($this);
		// 编辑页面隐藏
		$('#updataAddress').toggle();
		// 保存按钮隐藏
		$('.save').toggle();
		// 左上角类名恢复
		$('.goBack').removeClass('goBack').addClass('Back');
		
		// 
		
		$this.children().find('.userName').text($('#userName').val());
	})
});

// 返回上一页
$('.back').on('click',function(){
	window.history.back(-1);
})
