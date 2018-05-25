
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
	
		var x=document.getElementById("sco1");
		x.innerHTML= rand;
		console.log(x);
});

	

document.getElementById('hold').addEventListener('click', function hold(){
	var x=document.getElementById("sco1");
	var y=document.getElementById("num1");
	y.innerHTML=x.innerHTML;
	
	

});
