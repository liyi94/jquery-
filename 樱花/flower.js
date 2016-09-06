;(function(w,d,u,$){
	$.fn.showPic=function(options){
		var defaults={
			flakeChar:"&#10047",
			minSize:10,
			maxSize:100,
			newOn:100,
			flakeColor:'white'
		};
		$.extend(defaults,options);

		//生成一个节点，用于存这个图标
		var $flake=$("<div></div>").css({"position":"absolute","top":"-50"});
		//设置出现的位置
		//页面多大
		var documentHeight=$(d).height();
		var documentWidth=$(d).width();

		$flake.html(defaults.flakeChar);

		//定时器操作
		//启动定时器
	setInterval(function(){
		//计算起始位置
		var startPositionLeft=Math.random()*documentWidth-100;		//div的x坐标
		var startOpacity=Math.random()+0.5;							//透明度
		var sizeFlake=defaults.minSize+Math.random()*defaults.maxSize;//花的大小
		var endPositionLeft=startPositionLeft-100+Math.random()*200;
		var endPositionTop=documentHeight-defaults.maxSize;
		var durationFall=documentHeight*5+Math.random()*5000;
		//大小
		//再clone  $flake
		$flake.clone()
			.appendTo("body")
			.css({
				left:startPositionLeft,
				opacity:startOpacity,
				'font-size':sizeFlake,
				color:defaults.flakeColor
			})
			//设置clone出来的flake的css值
			//通过animate设置flake的动画（坐标，透明度，大小）
			.animate({
				top:endPositionTop,
				left:endPositionLeft,
				opacity:0.1
			},durationFall,'linear',function(){
				$(this).remove();
			})
	},100);
	}
})(window,document,undefined,$);