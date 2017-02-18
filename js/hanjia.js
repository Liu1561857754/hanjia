window.onload=function (){
	var container =document.getElementById('container');
	var list =document.getElementById('list');
	var buttons =document.getElementById('buttons').getElementsByTagName('span');
	var prev =document.getElementById('prev');
	var next =document.getElementById('next');
	var index = 1;
	var timer;
	function showbutton(){
		for(var i=0;i<buttons.length;i++){
			if(buttons[i].className=='on'){
				buttons[i].className='';
				break;
			}
		}
		buttons[index-1].className = 'on';
	}
	function bofang(offset){
		var newleft = parseInt(list.style.left) +offset;
		var time =300;//位移总时间
		var interval = 10;//位移间隔
		var speed = offset/(time/interval);//每次位移量

		function go(){
			if ((speed<0&&parseInt(list.style.left) > newleft)||(speed>0 &&parseInt(list.style.left)<newleft)){
                   list.style.left= parseInt(list.style.left) +speed + 'px';
                 setTimeout(go,interval); 
		       }
		       else{
		list.style.left=newleft + 'px';
		if (newleft< -500){
			list.style.left = 0 + 'px';
		}
		if (newleft> 0){
			list.style.left = -500 + 'px';
		}
	}
	}
	go();
    }
    function play(){
    	timer = setInterval(function(){
    		next.onclick();
    	},3000);
    }
    function stop(){
    	clearInterval(timer);
    }
	next.onclick = function(){
		bofang(-250);
		if(index==3){
			index=1;
		}
		else{
			index +=1;
		}
		showbutton();
	}
    prev.onclick = function(){
		bofang(250);
		if(index==1){
			index=3;
		}
		else{
			index -=1;
		}
		showbutton();
	}
    for(var i=0;i<buttons.length;i++){
          buttons[i].onclick = function(){
              var myindex =parseInt(this.getAttribute('index'));
              var offset =-250*(myindex- index);
              bofang(offset);
              index =myindex;
              showbutton();
          }
     }
     container.onmouseover =stop;
     container.onmouseout =play;
     play();
}