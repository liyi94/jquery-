$(function(){
	$.focus=function(id){
		var sWidth=$(id).width();
		var len=$(id).find("ul li").length;
		var index=0;

		var btn="<div class='btnBg'></div><div class='btn'>";
		for(var i=0;i<len;i++){
			var ii=i+1;
			btn+="<span>"+ii+"</span>";
		}
		btn+="</div><div class='preNext pre'></div><div class='preNext next'></div>";
		$(id).append(btn);

		$(id).find("div.preNext").css("opacity",0.2);

		$(id+" div.btn span").css("opacity",0.2).mouseenter(function(){
			index=$(id+" div.btn span").index(this);
			showPic(index);
		}).eq(0)
		.trigger("mouseenter");

		$(id+" .preNext").hover(function(){
			$(this).stop(true,false).animate({"opacity":0.8},300);
		},function(){
			$(this).stop(true,false).animate({"opacity":0.2},300);
		});

		$(id+" .next").click(function(){
			index++;
			if(index==len){
				index=0;
			}
			showPic(index);
		});

		$(id+" .pre").click(function(){
			index--;
			if(index==-1){
				index=len-1;
			}
			showPic(index);
		})

		$(id).hover(function(){
			clearInterval(picTimer);
		},function(){
			picTimer=setInterval(function(){
				showPic(index);
				index++;
				if(index==len){
					index=0;
				}
			},1000);
		}).trigger("mouseout");

		function showPic(index){
			var nowLeft=-index*sWidth;
			$(id+" ul").stop(true,false).animate({"left":nowLeft},300);

			$(id+" .btn span").stop(true,false).animate({"opacity":0.4},300)
			.eq(index).stop(true,false).animate({"opacity":1},300);
		}
	};
	
})