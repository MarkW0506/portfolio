$(function(){

	var _height = $(window).height();
	var sec2_height = $(".works").height();

	$(".welcome article").css("height",_height);

	$(".intro").delay(400).fadeIn(300);
	
	$(".navi a.btn_01").click(function(){
		$("body").stop().animate({scrollTop:_height}, 300);
		return false;
	});

	$(".navi a.btn_02").click(function(){
		$("body").stop().animate({scrollTop:_height+sec2_height}, 300);
		return false;
	});

	$(".scrolldown a").click(function(){
		$("body").stop().animate({scrollTop:_height}, 300);
	})

	$(".goTop a").click(function(){
		$("body").stop().animate({scrollTop:0}, 300);
	});


	$(".demo_works > ul > li").hover(function(){
		$(this).find(".demo_info").stop().animate({opacity:"1"},300, "easeOutQuad");
	}, function(){
		$(this).find(".demo_info").stop().animate({opacity:"0"},300, "easeOutQuad");
	});

		$(window).resize(function() {
			if( $(window).width() > 768){
				$(".top_menu .work_menu").css("display","none");
				$(".menu_btn img").attr("src","images/menu_btn.png");

				togglemenu = false;				
			}
		});

		$(".work_menu a").click(function(){
			$(".work_menu a").removeClass('active');
			$(this).addClass('active');

			return false;	
		});

		$("a.wm_1").click(function(){
			$(".works_01").css("display", "block");
			$(".works_02").css("display","none");
			$(".works_03").css("display","none");
		});
		$("a.wm_2").click(function(){
			$(".works_01").css("display","none");
			$(".works_02").css("display", "block");
			$(".works_03").css("display","none");
		});
		$("a.wm_3").click(function(){
			$(".works_01").css("display","none");
			$(".works_02").css("display","none");
			$(".works_03").css("display", "block");
		});

		var togglemenu = false;

		$(".menu_btn").click(function() {
			if (togglemenu == false) {
				$(".top_menu .work_menu").css("display","block");
				$(".menu_btn img").attr("src","images/menu_btn_opened.png");

				togglemenu = true;

			}else if(togglemenu == true){
				$(".top_menu .work_menu").css("display","none");
				$(".menu_btn img").attr("src","images/menu_btn.png");

				togglemenu = false;
			};

			return false;
		});

		$(window).resize(function() {
			if( $(window).width() > 768){
				$(".top_menu .work_menu").css("display","none");
				$(".menu_btn img").attr("src","images/menu_btn.png");

				togglemenu = false;				
			}
		});
	})