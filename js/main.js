
//$(function(){
	
var banner = document.getElementById('banner');
///var wH = Math.abs(($(document).height() - 576)/2);

//works
var str_work = '';
var str_about = '';
var css_about = '';
var onOff = true;
var oStyle = document.createElement('style');
var arr_work = [
	{ href: "javascript:;",src:"img/works/1.jpg",title:"" },
	{ href: "javascript:;",src:"img/works/2.jpg",title:"second_object" },
	{ href: "javascript:;",src:"img/works/3.jpg",title:"third_object" },
	{ href: "javascript:;",src:"img/works/4.png",title:"first_object" },
	{ href: "javascript:;",src:"img/works/5.png",title:"first_object" }
]
arr_about = [
	{data:110, left:51, c1:"#fffd38",c2:"#cbc800",c3:"#ffff00"},
	{data:100, left:110,c1:"#31c1f5",c2:"#0091cd",c3:"#01b0f1"},
	{data:120, left:165, c1:"#8a5cb6",c2:"#612b81",c3:"#7131a1"},
	{data:125, left:225, c1:"#fa302c",c2:"#ca0300",c3:"#fe0000"},
	{data:92, left:280, c1:"#719ad0",c2:"#416b9d",c3:"#4f81bc"}
]
//alert($(arr_work)[0].title)
$(arr_work).each(function(){
	//alert(i)
	str_work += '<a href='+ this.href +'><img src='+ this.src +'><span>'+ this.title +'</span></a>'
})
$('.work_main').html(str_work);
$('.work_w').css('paddingTop',76);

var template = $('.about_template');

$(arr_about).each(function(i){
	var newTemplate = template.clone();
	newTemplate.insertBefore(template);
	newTemplate.removeClass('none');
	newTemplate.css('left',this.left);
	newTemplate.find('p:eq(0)').css('backgroundColor', this.c1);
	newTemplate.find('p:eq(1)').css('backgroundColor', this.c2);
	newTemplate.find('p:eq(2)').css('backgroundColor', this.c3);

})

function auto_play(){

	clearInterval(banner.timer);

	banner.timer = setInterval(toNext,2500)
	
}

auto_play();

//banner_autoPlay()

$('.prev_bg, .prev').hover(function(){

		clearInterval(banner.timer);

		$('.prev').css('display','block')

	}, function(){

		auto_play();

		$('.prev').css('display','none');
	});

$('.next_bg, .next').hover(function(){
	
	clearInterval(banner.timer);

	$('.next').css('display','block')

}, function(){

	auto_play();

	$('.next').css('display','none');

});

$('.next, .prev').click(function(){
	toNext();
})


function toNext(){

		$('#sideNav a').removeClass('active');

		if(onOff){
			onOff = false;

			$('#scrollPic div:last').addClass('deep');

			$('#scrollPic div:first').animate({opacity : 0}, 300,'linear', function(){
				$('#scrollPic div:last').removeClass('deep');
				$(this).addClass('deep').animate({opacity : 1}, 300, 'linear');

			})

			$('#sideNav a:last').addClass('active');

		}else{
			onOff = true;

			$('#scrollPic div:first').addClass('deep');
			$('#scrollPic div:last').animate({opacity : 0}, 300,'linear', function(){
				$('#scrollPic div:first').removeClass('deep');
				$(this).addClass('deep').animate({opacity : 1}, 300, 'linear')
			})

			$('#sideNav a:first').addClass('active');

		}

	}

function workIn(){

	$('.work_main').css({'display' : 'block'}).animate({'left': 0, 'opacity' : 1},600,'linear')
	
}
function workOut(){
	$('.work_main').css({'display' : 'none'}).animate({'left' : -500, 'opacity' : 0},600,'linear')

}


function aboutIn(){

	$('.about_map div:not(:last)').each(function(i,elem){
		upFn(elem, arr_about[i].data, 150 )
	})

}
function aboutOut(){

	$('.about_map div').each(function(i,elem){
		upFn(elem, 0, 150 )
	})

}

function conIn(){
	$('.contact div').css('display','block').attr('class','c_main');
	setTimeout(function(){
		$('.c_main img').css('display','block').addClass('formRight');
	},1200)
	/*$('.c_main img').oneTime(1000, function(){
		$(this).css('display','block').addClass('formRight')
	})*/
}

function conOut(){
	$('.contact div').css('display','none').attr('class','');
	$('.contact img').removeClass('formRight').css('display','none');
}


function animateFn(){

	if($('#works').attr('data-show')){
		//alert($('.work_main').outerWidth())
		workIn();
	}else{
		workOut();
	}

	if($('#about').attr('data-show')){
		aboutIn();
	}else{
		aboutOut();
	}

	if($('#contact').attr('data-show')){
		conIn();
	}else{
		conOut();
	}

	$('#scrollPic p.img1, #scrollPic p.img2').css('display', 'block');
}


/*$('.work_main a').hover(function(){
	$('.work_main a span').attr('class','toBig').css('display','block')
}, function(){
	$('.work_main a span').attr('class','').css('display','none')
})
*/
/*$('.work_main a').each(function(i){
	$(this).css('left',i*(210+76))
})*/
	

	/*css('left',i*(210+76)).hover(function(){
			$(this).find('span').attr('class','toBig').css('display','block')
		}, function(){
				$(this).find('span').attr('class','').css('display','none')
		})
})
*/


//})