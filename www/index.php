<?php
require_once("jssdk.php");
$jssdk = new jssdk("wx38d277f6e689befc", "01e98b0fe2336551a523fffb7955d38a");
$signPackage = $jssdk->GetSignPackage();
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width" />
	<link rel="stylesheet" type="text/css" href="public/css/rest.css"/>
	<link rel="stylesheet" type="text/css" href="public/css/swiper-3.4.1.min.css"/>
	<link rel="stylesheet" type="text/css" href="public/css/index.css"/>
	<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js" type="text/javascript" charset="utf-8"></script>
	<title>首页</title>
</head>
<body>
	<!--<header></header>-->
	<section id="content"></section>
	<footer id="foot">
		<ul>
			<li>
				<a href="#home">
					<figure>
					<img src="public/img/12.png" default="public/img/11.png" data-src="public/img/12.png" alt="" />
					<figcaption>
						首页
					</figcaption>
				</figure>
				</a>
			</li>
			<li>
				<a href="#superMarket">
					<figure>
						<img src="public/img/13.png" default ="public/img/13.png" data-src="public/img/14.png" alt="" />
						<figcaption>
							闪送超市
						</figcaption>
					</figure>
				</a>
			</li>
			<li>
				<a href="#reserve">
					<figure>
					<img src="public/img/1_03.png"  data-src="public/img/8_07.png" default = "public/img/1_03.png" alt="" />
					<figcaption>
						新鲜预定
					</figcaption>
				</figure>
				</a>
			</li>
			<li id="car">
				<a href="#car">
					<figure>
					<img src="public/img/15.png" default = "public/img/15.png" data-src="public/img/16.png" alt="" />
					<figcaption>
						购物车
					</figcaption>
					<div class="allNum"></div>
				</figure>
				</a>
				
			</li>
			<li>
				<a href="#mySelf">
					<figure>
					<img src="public/img/17.png" data-src = "public/img/18.png" alt="" default="public/img/17.png"/>
					<figcaption>
						我的
					</figcaption>
				</figure>
				</a>
			</li>
		</ul>
	</footer>
</body>
<script src="public/lib/require.js" data-main='main'></script>
<script src="public/lib/jquery-2.2.3.js" type="text/javascript" charset="utf-8"></script>
<script src="public/js/index.js" type="text/javascript" charset="utf-8"></script>
<script>
	wx.config({
			debug: false, 
		    appId: '<?php echo $signPackage["appId"];?>',
		    timestamp:'<?php echo $signPackage["timestamp"];?>' , 
		    nonceStr: '<?php echo $signPackage["nonceStr"];?>', 
		    signature: '<?php echo $signPackage["signature"];?>',
		    jsApiList: ['scanQRCode','getLocation','openLocation']
		});
</script>
</html>