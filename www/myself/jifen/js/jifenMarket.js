$(function() {
	var pe = 0;
	var itv = setInterval(process,10);
	
	function process(){
		if(pe >= 100){
			clearInterval(itv);
		}
		var  num = pe * 3.6;
		if (num<=180) {
			$('.right').css('transform', "rotate(" + num + "deg)");
		} else {
			$('.right').css('transform', "rotate(180deg)");
			$('.left').css('transform', "rotate(" + (num - 180) + "deg)");
		};
//		console.log(num);
//			$('.mask > span').html(pe);
		pe ++;
	}
});