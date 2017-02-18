window.onload=function (){
	var container =document.getElementById('container');
	var container2 =document.getElementById('container2');
	var list =document.getElementById('list');
	var wenzi10 =document.getElementById('wenzi10');
	var buttons =document.getElementById('buttons').getElementsByTagName('span');
	var buttons2 =document.getElementById('buttons2').getElementsByTagName('span');
	var prev =document.getElementById('prev');
	var next =document.getElementById('next');
	var lefta= document.getElementById('lefta');
	var righta=document.getElementById('righta');
	var index = 1;
	var index2 = 1;
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
	/*	var time =600;//位移总时间
		var interval = 10;//位移间隔
		var speed = offset/(time/interval);//每次位移量*/

		function go(){
			/*if ((speed<0&&parseInt(list.style.left) > newleft)||(speed>0 &&parseInt(list.style.left)<newleft)){
                   list.style.left= parseInt(list.style.left) +speed + 'px';
                 setTimeout(go,interval); 
		       }
		       else{*/
		list.style.left=newleft + 'px';
		if (newleft< -1700){
			list.style.left = 0 + 'px';
		}
		if (newleft> 0){
			list.style.left = -1700 + 'px';
		}
	/*}*/
	} 
	go();
    }
    function play(){
    	timer = setInterval(function(){
    		righta.onclick();
    	},3000);
    }
    function stop(){
    	clearInterval(timer);
    }
	righta.onclick = function(){
		bofang(-850);
		if(index==3){
			index=1;
		}
		else{
			index +=1;
		}
		showbutton();
	}
    lefta.onclick = function(){
		bofang(850);
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
              var offset =-850*(myindex- index);
              bofang(offset);
              index =myindex;
              showbutton();
          }
     }
     container.onmouseover =stop;
     container.onmouseout =play;
     play();

function showbutton2(){
		for(var k=0;k<buttons2.length;k++){
			if(buttons2[k].className=='on2'){
				buttons2[k].className='';
				break;
			}
		}
		buttons2[index2-1].className = 'on2';
	}
function bofang2(offset2){
		var newleft2 = parseInt(wenzi10.style.left) +offset2;
		function go2(){
		wenzi10.style.left=newleft2 + 'px';
		if (newleft2< -1140){
			wenzi10.style.left = 0 + 'px';
		}
		if (newleft2> 0){
			wenzi10.style.left = -1140 + 'px';
		}
	} 
	go2();
    }
for(var j=0;j<buttons2.length;j++){
	buttons2[j].onclick = function(){
		var myindex2 = parseInt (this.getAttribute('index2'));
		var offset2 = -570*(myindex2 - index2);
		bofang2(offset2);
		index2 = myindex2;
		showbutton2();
	}
}
}