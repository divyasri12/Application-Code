
var ranNo = Math.ceil(Math.random()*12);
var guessNo=parseInt(Math.ceil(prompt('guess number from 1-12')));
if (ranNo===guessNo) {
 alert('Congratulations');
}else{
	alert(ranNo);
}