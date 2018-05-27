var x=0;
document.getElementById('sync').addEventListener('click',function dice(){
		
		
		var rand=Math.floor(Math.random()*6+1);	

		switch(rand){
			case 1:{
				document.getElementById('img').src="images/dice-1.png";
				break;
			}
			case 2:{
				document.getElementById('img').src="images/dice-2.png";
				break;
			}
			case 3:{
				document.getElementById('img').src="images/dice-3.png";
				break;
			}
			case 4:{
				document.getElementById('img').src="images/dice-4.png";
				break;
			}
			case 5:{
				document.getElementById('img').src="images/dice-5.png";
				break;
			}
			case 6:{
				document.getElementById('img').src="images/dice-6.png";
				break;
			}
		}
if(rand !== 1) {
				
		
		x += rand;
		var b  = x;
	
		document.getElementById("sco1").innerHTML = b ;
				console.log(x);
}
else{
	x=0;
	document.getElementById("sco1").innerHTML = 0;
	document.getElementById("sync").style.display='none';
	document.getElementById("sync2").style.display='block';

}
});

	


document.getElementById('hold').addEventListener('click', function hold(){
	
	var d=x;

	var c=document.getElementById("num1");
	var f = (parseInt(c.innerHTML) + d)
	c.innerHTML+= f;
	var a=0;
	document.getElementById("sco1").innerHTML=a;

	document.getElementById("sync").style.display='none';
	document.getElementById("sync2").style.display='block';	
	document.getElementById("hold").style.display='none';
	document.getElementById("hold2").style.display='block';	

});




var j=0;
document.getElementById('sync2').addEventListener('click',function dice2(){
		
		
		var rand=Math.floor(Math.random()*6+1);	

		switch(rand){
			case 1:{
				document.getElementById('img').src="images/dice-1.png";
				break;
			}
			case 2:{
				document.getElementById('img').src="images/dice-2.png";
				break;
			}
			case 3:{
				document.getElementById('img').src="images/dice-3.png";
				break;
			}
			case 4:{
				document.getElementById('img').src="images/dice-4.png";
				break;
			}
			case 5:{
				document.getElementById('img').src="images/dice-5.png";
				break;
			}
			case 6:{
				document.getElementById('img').src="images/dice-6.png";
				break;
			}
		}
if(rand !== 1) {
				
		
		j += rand;
		var c  = j;
	
		document.getElementById("sco2").innerHTML = c ;
				console.log(j);
}
else{
	j=0;
	document.getElementById("sco2").innerHTML = 0;
	document.getElementById("sync2").style.display='none';
	document.getElementById("sync").style.display='block';
}
});

document.getElementById('hold2').addEventListener('click', function hold2(){
	var d=j;
	var c=document.getElementById("num2");
	c.innerHTML=d;	
	document.getElementById("sco2").innerHTML=0;
	document.getElementById("sync2").style.display='none';
	document.getElementById("sync").style.display='block';
	document.getElementById("hold2").style.display='none';
	document.getElementById("hold").style.display='block';	


	

});