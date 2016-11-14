define(function(require, exports){

	function show(aA, aCon){
		//var wrap = document.getElementById('wrap');
		var hr = document.documentElement.clientHeight;
		var h = hr - 76;
		var w = document.documentElement.clientWidth;
		alert(w)
		var firstHash = window.location.hash.substring(1) || 'index';

		for(var i=0; i<aCon.length; i++ ){

			if(firstHash == aCon[i].dataset.hash){

				aCon[i].style.display = 'block';

				switch(firstHash){
					case 'index':
						require('indexIn.js').init(aCon[i],w,h);
					break;
					case 'works':
						//require('worksIn.js').init(aCon[i]);
					break;
					case 'about':
						//require('aboutIn.js').init(aCon[i]);
					break;
					case 'contact':
						//require('contactIn.js').init(aCon[i]);
					break;
				}

				window.onresize = function(){
					resize(aCon[i]);
				};

				function resize(obj){

					var hr = document.documentElement.clientHeight;
					var w = document.documentElement.clientWidth;
					var h = hr - 76;

					wrap.style.height = h + 'px';
					wrap.style.width = w + 'px';

					obj.style.height = h + 'px';
					obj.style.width = w + 'px';
				
				}

			}

		}

	}

	exports.show = show;
	
})