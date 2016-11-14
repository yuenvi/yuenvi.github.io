var num = 0;
var oLoadDiv = document.getElementById('loadDiv');
var oText = document.getElementById('loginnum');
var oLine = document.getElementById('line');
var loadPic = [
        "img/h_left.jpg",
        "img/banner/0.png",
        "img/banner/1.png",
        "img/banner/2.png",
        "img/banner/3.png",
        "img/banner/4.png",
        "img/banner/5.png",
        "img/banner/6.png",
        "img/banner/7.png",
        "img/banner/8.png",
        "img/banner/banner01.jpg",
        "img/banner/cell.png",
        "img/banner/id.png",
        "img/banner/mac.png",
        "img/banner/pad.png",
        "img/c_bg.jpg",
        "img/about_footer.jpg",
        "img/about_map.jpg",
        "img/works/1.jpg",     
        "img/works/2.jpg",    
        "img/works/3.jpg",    
        "img/works/4.png",    
        "img/works/5.png"          

]

var unum = Math.round(200/loadPic.length );
totalnum = unum*loadPic.length

for(var i=0; i<loadPic.length; i++){
	var oImg = new Image();
	oImg.src=loadPic[i];
	oImg.onload = function(){
		num++;
		oText.innerHTML = parseInt(num/loadPic.length*100) + '%';
		oLine.style.width = num*unum + 'px';
		if(num == loadPic.length){
			startMove(oLoadDiv, {'opacity':0},function(){
				this.style.display = 'none';
			})
		}

	}
}








