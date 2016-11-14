// JavaScript Document

function startMove(obj,json,endFn){
	
		clearInterval(obj.timer);
		
		obj.timer = setInterval(function(){
			
			var bBtn = true;
			
			for(var attr in json){
				
				var iCur = 0;
			
				if(attr == 'opacity'){
					if(Math.round(parseFloat(getStyle(obj,attr))*100)==0){
					iCur = Math.round(parseFloat(getStyle(obj,attr))*100);
					
					}
					else{
						iCur = Math.round(parseFloat(getStyle(obj,attr))*100) || 100;
					}	
				}
				else{
					iCur = parseInt(getStyle(obj,attr)) || 0;
				}
				
				var iSpeed = (json[attr] - iCur)/8;
			iSpeed = iSpeed >0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				if(iCur!=json[attr]){
					bBtn = false;
				}
				
				if(attr == 'opacity'){
					obj.style.filter = 'alpha(opacity=' +(iCur + iSpeed)+ ')';
					obj.style.opacity = (iCur + iSpeed)/100;
					
				}
				else{
					obj.style[attr] = iCur + iSpeed + 'px';
				}
				
				
			}
			
			if(bBtn){
				clearInterval(obj.timer);
				
				if(endFn){
					endFn.call(obj);
				}
			}
			
		},30);
	
	}
	
	
	function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}
		else{
			return getComputedStyle(obj)[attr];
		}
	}
	
	function stopMove(obj){
		clearInterval(obj.timer);
	}

function upFn(obj, target, sum){

	var aP = obj.getElementsByTagName('p');
	var oSpan = obj.getElementsByTagName('span')[0];
	//var obj.timer = null;
	var num = 0;

	clearInterval(obj.timer);
	obj.timer = setInterval(function(){

		num += 2;

		if(num >= target){
			clearInterval(obj.timer)
		}

		oSpan.style.bottom = num + 20 + 'px';
		oSpan.innerHTML = parseInt(num/sum*100) + '%';

		aP[0].style.bottom = num + 'px';
		aP[1].style.height = num + 'px';
		aP[2].style.height = num + 'px';

	},20)


}




