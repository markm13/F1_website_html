/*function move_car() {
	var image = "<img src=\"../image/voiture/ferrari.JPG\" height=100 width=150>";
	var i = 0;
		
	document.getElementById("i").innerHtml=image;
	
	for (i = 1; i < 4; i++1) {
		 var x = event.keyCode;
		if (x==13){
		var prev = i - 1;
		var cur = i;
		document.getElementById(prev).innerHTML = "";
		document.getElementById(cur).innerHTML = image;
		}
	}
}*/

function calc_points(event) {
	var p1 = document.getElementById("p1").value;
	var p2 = document.getElementById("p2").value;
	
	if (p1==1)
	{
		var pts1=25;
	}
	if (p1==2)
	{
		var pts1=18;
	}
	if (p1==3)
	{
		var pts1=15;
	}
	if (p1==4)
	{
		var pts1=12;
	}
	if (p1==5)
	{
		var pts1=10;
	}
	if (p1==6)
	{
		var pts1=8;
	}
	if (p1==7)
	{
		var pts1=6;
	}
	if (p1==8)
	{
		var pts1=4;
	}
	if (p1==9)
	{
		var pts1=2;
	}
	if (p1==10)
	{
		var pts1=1;
	}
	if (p1>10)
	{
		var pts1=0;
	}
	
	
	if (p2==1)
	{
		var pts2=25;
	}
	if (p2==2)
	{
		var pts2=18;
	}
	if (p2==3)
	{
		var pts2=15;
	}
	if (p2==4)
	{
		var pts2=12;
	}
	if (p2==5)
	{
		var pts2=10;
	}
	if (p2==6)
	{
		var pts2=8;
	}
	if (p2==7)
	{
		var pts2=6;
	}
	if (p2==8)
	{
		var pts2=4;
	}
	if (p2==9)
	{
		var pts2=2;
	}
	if (p2==10)
	{
		var pts2=1;
	}
	if (p2>10)
	{
		var pts2=0;
	}
	var x = event.keyCode;
	if (x==13)
	{
	var pts3 = pts1 + pts2;
	text1 = pts1 ;
	text2 = pts2 ;
	text3 = pts3 ;
	document.getElementById("resultat1").innerHTML = text1;
	document.getElementById("resultat2").innerHTML = text2;
	document.getElementById("resultat3").innerHTML = text3;
	}
}