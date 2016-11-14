define(function(require, exports){

	var oNav = document.getElementById('nav');
	var aA = oNav.getElementsByTagName('a');
	var oMain = document.getElementById('main');
	var aCon = oMain.children;

	window.onhashchange = function(){
		window.location.reload();
	};

	require('show.js').show(aA, aCon);

	require('hide.js').hide(aA, aCon);


});