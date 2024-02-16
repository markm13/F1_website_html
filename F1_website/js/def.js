function temps_pour_parcourir_la_distance(event)
{var d = document.getElementById("d").value;
	s=247;
   
   var x = event.keyCode;
	if (x==13)
	{
		var t = d / s;
		texte= t.toFixed(2);		
		document.getElementById("resultat").innerHTML = texte;
	}
}