var obj = {
		"0":{
			"name":"米米米米米",
			"sex":1,
			"phone":15899979800,
			"city":'深圳',
			"are":'宝安28区',
			"address":"德冠庭"
		},
		"1":{
			"name":"开开开开开",
			"sex":0,
			"phone":12345123450,
			"city":"纽约",
			"are":"曼哈顿",
			"address":"第五大街"
		}
}
localStorage.setItem("user",JSON.stringify(obj));


var index = 0;
// 点击保存
$('.save').click(function(){
	var data = localStorage.getItem("user");
	var useerr = JSON.parse(data)
	var user = useerr[index];
	user.name = $('#userName').val();
	if($('#sex1').is('checked')==1){
		user.sex = 1;console.log(1);
	}else{
		user.sex = 0;console.log(0);
	}
	user.phone = $('#phoneNum').val().trim();
	user.city = $('#city').val().trim();
	user.are = $('#area').val().trim();
	user.address = $('#address').val().trim();
	console.log(data);
	localStorage.setItem("user",JSON.stringify(useerr));
	
	get(index);
	
	// 编辑页面隐藏
	$('#updataAddress').hide();
	// 保存按钮隐藏
	$('.save').hide();
	// 左上角返回键变更,功能恢复
	$('.back').remove();		
	$('.goBack').remove();
	$('#head').prepend('<span class="headSp headLeft back"></span>');
});

for(var i = 0; i<($('.compile').size());i++){
	console.log(i);
	get(i);
}
function get(indx){
	// 获取值赋给列表
	var newData = localStorage.getItem("user");
	var newUser = JSON.parse(newData)[indx];
	console.log(newUser.name);
	$('.list').eq(indx).find('.userName').text(newUser.name);
	if(newUser.sex == 1){
		$('.list').eq(indx).find('.sex').text('先生');
	}else{
		$('.list').eq(indx).find('.sex').text('女士');
	}
	$('.list').eq(indx).find('.phoneNum').text(newUser.phone);
	$('.list').eq(indx).find('.city').text(newUser.city);
	$('.list').eq(indx).find('.area').text(newUser.are);
	$('.list').eq(indx).find('.address').text(newUser.address);
	console.log(02);
}

// 展开编辑页面
$('.locationBox').on('click','.compile',function(){
	
	console.log($('.compile').size(),$(this).parent().index());
	index = $(this).parent().index();
	// 获取信息到编辑页面
	var data = localStorage.getItem('user');
	var user = JSON.parse(data)[index];
	console.log(user.name);
	$('#userName').val(user.name);
	if(user.sex == 1){
		$('#sex1').attr('checked',1);
	}else{
		$('#sex2').attr('checked',1);
	}
	$('#phoneNum').val(user.phone);
	$('#city').val(user.city);
	$('#area').val(user.are);
	$('#address').val(user.adrress);


	// 左上角返回键变更,功能变更
	$('#head').prepend('<span class="headSp headLeft goBack"></span>');
	$('.back').remove();
	// 点击返回,从编辑返回地址列表
	goBack();
	// 编辑页面显示
	$('#updataAddress').toggle();
	$('.save').show();

	// 返回上一页
	$('#head .back').on('click',function(){
		console.log('back');
		window.history.back(-1);
		console.log('back');
	})
	
	
});



// 返回地址列表函数
function goBack(){
	$('.goBack').on('click',function(){
		// 编辑页面关闭
		$('#updataAddress').hide();
		// 左上角返回键变更,功能恢复
		$('#head').prepend('<span class="headSp headLeft back"></span>');
		$('.goBack').remove();
		// 保存按钮隐藏
		$('.save').hide();
	});
}

$('.locationBox').on('click','.list p',function(){
//	alert($(this).parent().index());
	localStorage.setItem('index',$(this).parent().index());
	window.history.back(-1);
});


// 返回上一页(购物页)
$('#head').on('click','.back',function(){
//	alert(index);
	localStorage.setItem('index',index);
	window.history.back(-1);
});

// 点击显示编辑空页面
$('.addAddress').on('click',function(){
	console.log('新增');
	// 编辑页面显示
	$('#updataAddress').show();
	// 保存按钮显示
	$('.save').show();
	// 左上角返回键变更,功能变更
	$('#head').prepend('<span class="headSp headLeft goBack"></span>');
	$('.back').remove();
	goBack();
	
	$('#userName').val('');
	$('#phoneNum').val('');
	$('#city').val('');
	$('#area').val('');
	$('#address').val('');
	
	changeSave();
});

function changeSave(){
	$('.create').click(function(){
//		$() <div class="list">
//					<p><span class="userName">米开开开开开开</span>&nbsp;<span class="sex">先生</span><span class="phoneNum">15899979800</span></p>
//					<p class="addressInfo">
//						<span class="city">深圳</span>
//						<span class="area">宝安28区</span>
//						<span class="address">七星啦啦啦啦啦啦啦啦啦</span>
//					</p>
//					<div class="compile"></div>
//				</div>

		
	});

}


