$(function(){
	//var num = 0;
	$('.nav_main a').hover(function(){
		$('.nav_main a').find('span').removeClass('active');
		$(this).find('span').addClass('active');
	}, function(){

		$(this).find('span').removeClass('active');
		$('.nav_main a[data-hash='+dataHash+']').find('span').addClass('active');
	})
	//alert(num)

	$('.nav_main a').click(function(){

		var wH = $(document).height() - 76;
		//var wW = $(document).width();
		var showObj = $('#main div[data-show="1"]')

		dataHash = $(this).attr('data-hash');

		//num = $(this).index();
		//alert(num)

		$('.nav_main a').find('span').removeClass('active');
		$(this).find('span').addClass('active');

		if(showObj.size() > 0){
			if(showObj.attr('data-hash') == dataHash){return}
			showObj.removeAttr('data-show')
			showObj.animate({
				width : '0%',
				height : '0px'
			},600,'easeInQuart',function(){

				showObj.hide()

				$('#scrollPic p.img1, #scrollPic p.img2').css('display', 'none');

				$("#main div[data-hash='"+dataHash+"']").show().attr('data-show','1').animate({
					width:'100%',
					height: wH
				},1000,'easeInQuart', function(){

					setTimeout(function(){

						animateFn()

					},100)

				})
			})

		}else{
			$("#main div[data-hash='"+dataHash+"']").show().attr('data-show','1').animate({
					width: '100%',
					height: wH
			},800,'easeInQuart',function(){
				
				setTimeout(function(){

					$('#scrollPic p.img1, #scrollPic p.img2').css('display', 'block');

				},200)
			})
		}
		

	})

	$(".nav_main a[data-hash='index']").click()

	window.onresize = function(){
		
		var wH = document.documentElement.clientHeight;

		$('#wrap').css('height' , wH);
		$("#main div[data-show='1']").css('height',wH);
	}

})



