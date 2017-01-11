
//if(!JSON.parse(localStorage.getItem('user'))){
//	console.log(1);
//	
//var obj = {
//		"0":{
//			"name":"米米米米米",
//			"sex":1,
//			"phone":15899979800,
//			"city":'深圳',
//			"are":'宝安28区',
//			"address":"德冠庭"
//		},
//		"1":{
//			"name":"开开开开开",
//			"sex":-1,
//			"phone":12345123450,
//			"city":"纽约",
//			"are":"曼哈顿",
//			"address":"第五大街"
//		}
//	}
//
//localStorage.setItem("user",JSON.stringify(obj));
//}

var index = 0;
var count = 0;
var loadUser = JSON.parse(localStorage.getItem('user'));
$('.locationBox').html('');
for(var i in loadUser){
	console.log(i);
//	get(i);
	var newData = localStorage.getItem("user");
	var newUser = JSON.parse(newData)[i];
	createList(i, newUser.name, newUser.sex, newUser.phone, newUser.city, newUser.are, newUser.address);
}


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



// 点击保存
$('.save').click(function(){
	console.log('save');
	var data = localStorage.getItem("user");
	var useerr = JSON.parse(data)
	var user = useerr[index];
	user.name = $('#userName').val().trim();
	if($('#sex1').is('checked')==1){
		user.sex = 1;console.log(1);
	}else{
		user.sex = -1;console.log(0);
	}
	user.phone = $('#phoneNum').val().trim();
	user.city = $('#city').val().trim();
	user.are = $('#area').val().trim();
	user.address = $('#address').val().trim();
//	console.log(data);
	localStorage.setItem("user",JSON.stringify(useerr));
	get(index);
	gooBack();
//	// 编辑页面隐藏
//	$('#updataAddress').hide();
//	// 保存按钮隐藏
//	$('.save').hide();
//	// 左上角返回键变更,功能恢复
//	$('.back').remove();		
//	$('.goBack').remove();
//	$('#head').append('<span class="headSp headLeft back"></span>');
});


function get(indx){
	// 获取值赋给列表
	var newData = localStorage.getItem("user");
	var newUser = JSON.parse(newData)[indx];
	console.log(indx);
//	console.log(newUser.name);
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
//	console.log(02);
}
// 展开编辑页面
$('.locationBox').on('click','.compile',function(){
//	console.log($('.compile').size(),$(this).parent().index());
	index = $(this).parent().index();
	// 获取信息到编辑页面
	var data = localStorage.getItem('user');
	var user = JSON.parse(data)[index];
//	console.log(user.name);
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
	// 标题变更
	$('#title').text('修改地址');
});
// 返回地址列表函数
function goBack(){
	$('.goBack').on('click',function(){
		gooBack();
	});
}
function gooBack(){
	console.log('goBack');
	// 编辑页面关闭
		$('#updataAddress').hide();
		// 左上角返回键变更,功能恢复
		$('.goBack').remove();
		$('.back').remove();
		$('#head').prepend('<span class="headSp headLeft back"></span>');
		// 保存按钮隐藏
		$('.save').hide();
		// 删除地址显示
		$('.delete').show();
		$('#title').text('选择地址');
}
$('.locationBox').on('click','.list p',function(){
//	alert($(this).parent().index());
	localStorage.setItem('index',$(this).parent().index());
	window.history.back(-1);
});
// 点击显示编辑空页面
$('.addAddress').on('click',function(){
//	console.log('新增');
	// 编辑页面显示
	$('#updataAddress').show();
	// 保存按钮显示
	$('.save').show();
	// 左上角返回键变更,功能变更
	$('#head').prepend('<span class="headSp headLeft goBack"></span>');
	$('.back').remove();
	// 删除按钮隐藏
	$('.delete').hide();
	$('#title').text('修改地址');
	goBack();
	// 编辑页面值清空
	$('#userName').val('');
	$('#phoneNum').val('');
	$('#city').val('');
	$('#area').val('');
	$('#address').val('');
	changeSave();
});

function changeSave(){
	$('.create').show();
	$('.goBack').click(function(){$('.create').hide();gooBack()});
	$('.create').click(function(){
		$('.create').hide();
		var userName=$('#userName').val().trim(), sex, phoneNum=$('#phoneNum').val().trim(), city=$('#city').val().trim(); are=$('#area').val().trim(); address=$('#address').val().trim();
		if($('#sex1').is('checked')==1){sex='先生';}else{sex='女士'}
		console.log(sex);
		createList(-1,userName,sex,phoneNum,city,are,address);
		$('.create').unbind("click");
	});
}
function createList(indx,userName,sex,phoneNum,city,are,address){
	console.log(count);
		var html = '<div class="list"><p><span class="userName">'+userName+'</span><span class="sex">'+sex+'</span><span class="phoneNum">'+phoneNum+'</span></p><p class="addressInfo"><span class="city">'+city+'</span><span class="area">'+are+'</span>&nbsp;<span class="address">'+address+'</span></p><div class="compile"></div></div>';
		$('.locationBox').append(html);
//		console.log($('.list').size());
		gooBack();
		var obj = JSON.parse(localStorage.getItem('user'));
//		console.log(obj);
		obj[$('.list').size()-1]={
//		obj[indx]={
			name:userName,
			sex:$('#sex1').is('checked'),
			phone:phoneNum,
			city:city,
			are:are,
			address:address
		}
		console.log(obj);
		localStorage.setItem('user',JSON.stringify(obj));
		console.log(count);
		count++;
}
//function create(indx,userName,sex,phoneNum,city,are,address){
//	var cJSON.parse(localStorage.getItem('user'));
//	var userName=
//		var html = '<div class="list"><p><span class="userName">'+userName+'</span>&nbsp;<span class="sex">'+sex+'</span><span class="phoneNum">'+phoneNum+'</span></p><p class="addressInfo"><span class="city">'+city+'</span><span class="area">'+are+'</span>&nbsp;<span class="address">'+address+'</span></p><div class="compile"></div></div>';
//		$('.locationBox').append(html);
//		console.log($('.list').size());
//		gooBack();
//		var obj = JSON.parse(localStorage.getItem('user'));
//		console.log(obj);
//		obj[$('.list').size()-1]={
//			name:userName,
//			sex:$('#sex1').is('checked'),
//			phone:phoneNum,
//			city:city,
//			are:are,
//			address:address
//		}
//		console.log(obj);
//		localStorage.setItem('user',JSON.stringify(obj));
//		var create = document.querySelector('.create')
//		$('.create').unbind("click");
	
//}

//// 返回上一页
//$('.headRight .back').on('click',function(){
////		console.log('back');
//	window.history.back(-1);
////		console.log('back');
//});


$('.delete').click(function(){
	
});




// 返回上一页(购物页)
$('#head').on('click','.back',function(){
//	alert(index);
	localStorage.setItem('index',index);
	window.history.back(-1);
});
