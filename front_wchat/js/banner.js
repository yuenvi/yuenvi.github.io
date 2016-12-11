
function addClass(obj, sClass) { 
    var aClass = obj.className.split(' ');
    if (!obj.className) {
        obj.className = sClass;
        return;
    }
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) return;
    }
    obj.className += ' ' + sClass;
}

function removeClass(obj, sClass) { 
    var aClass = obj.className.split(' ');
    if (!obj.className) return;
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) {
            aClass.splice(i, 1);
            obj.className = aClass.join(' ');
            break;
        }
    }
}

function fnTab(){
	var oList = document.getElementById('add_list');
	var aNav = document.getElementById('add_btn').children;
	var iNow = 0;
	var runL = 0;
	var iStartTouchX = 0;
	var iStartX = 0;
	var iW = document.documentElement.clientWidth
	//var iW = $('body').width();
	oList.addEventListener('touchstart', fnStart,false);
	oList.addEventListener('touchmove', fnMove,false);
	oList.addEventListener('touchend', fnEnd,false);

	function fnStart(ev){
		ev=ev.changedTouches[0];
		iStartTouchX=ev.pageX;
		iStartX=runL;

	}

	function fnMove(ev){
		ev=ev.changedTouches[0];
		var iDis=ev.pageX-iStartTouchX;
		runL=iStartX+iDis;
		oList.style.transform="translateX("+runL+"px)";

	}

	function fnEnd(){

		iNow=runL/iW;
		iNow=-Math.round(iNow);
		if(iNow<0){
			iNow = 0;
		}
		if(iNow>aNav.length-1){
			iNow=aNav.length-1;
		}
		tab()	
	}

	function tab(){

		iX=-iNow*iW;
		oList.style.transition="0.5s";
		oList.style.WebkitTransform=oList.style.transform="translateX("+iX+"px)";
		for(var i=0;i<aNav.length;i++){
			removeClass(aNav[i],"active");
		}
		addClass(aNav[iNow],"active");

	}
}
fnTab()