var clickAvatar = 0;
var info = document.getElementsByClassName("info");

function openArt()
{
	clickAvatar = 0;
	var art = "";
	info[0].innerHTML = art;

	var head = "ARTWORKS";
	document.getElementsByClassName("head")[0].innerHTML = head;
	
	avatar();
}

function avatar()
{
	backArt();

	for (var i=0; i<=1; i++)
	{
		var x = document.createElement("img");
		var y = document.createElement("div");

		if (i==0) {x.src = "img/wifey.png";}
		else if (i==1) {x.src = "img/husbando.png"};
		
		x.setAttribute("class", "avatar");
		y.setAttribute("class", "bio");

		info[0].appendChild(x);
	}

	var avatar = document.getElementsByClassName("avatar");	

	avatar[0].style.marginLeft = "20%";
	avatar[1].style.marginLeft = "30%";

	avatar[0].onclick = function() {artProfile(0);};
	avatar[1].onclick = function() {artProfile(1);};
}

function artProfile(i)
{
	var returnArt = document.getElementById("returnArt");
	returnArt.style.transform = "scale(1)";
	
	var avatar = document.getElementsByClassName("avatar");	
	if (i==0)
	{
		avatar[1].style.marginLeft = "45%"; 
		avatar[1].style.transform = "scale(0)";

		if (clickAvatar == 0)
		{
			avatar[0].style.transform = "rotateZ(-360deg) scale(0.7)";
			avatar[0].style.marginLeft = "5%";

			clickAvatar += 1;
		}
		else if (clickAvatar > 0 && clickAvatar % 2 == 0)
		{
			avatar[0].style.transform = "rotateZ(-360deg) scale(0.7)";
			clickAvatar += 1;	
		}
		else
		{
			avatar[0].style.transform = "rotateZ(360deg) scale(0.7)";
			clickAvatar += 1;
		}
		console.log(clickAvatar);

		returnArt.onclick = function() {backArtPress(0);};
	}

	else if (i==1)
	{
		avatar[0].style.transform = "scale(0)";
		
		if (clickAvatar == 0)
		{
			avatar[1].style.transform = "rotateZ(360deg) scale(0.7)";
			avatar[1].style.marginLeft = "50%";
			clickAvatar += 1;
		}
		else if (clickAvatar > 0 && clickAvatar % 2 == 0)
		{
			avatar[1].style.transform = "rotateZ(360deg) scale(0.7)";
			clickAvatar += 1;	
		}
		else
		{
			avatar[1].style.transform = "rotateZ(-360deg) scale(0.7)";
			clickAvatar += 1;
		}

		returnArt.onclick = function() {backArtPress(1);};
	}
}

function backArt()
{
	var returnArt = document.createElement("button");
	returnArt.setAttribute("id", "returnArt");
	info[0].appendChild(returnArt);
	info[0].appendChild(document.createElement("br"));
	returnArt.style.transform = "scale(0)";
}

function backArtPress(i)
{
	var avatar = document.getElementsByClassName("avatar");	
	var returnArt = document.getElementById("returnArt");
	

	returnArt.style.transform = "scale(0)";
	if (i == 0)
	{
		clickAvatar += 1;
		avatar[0].style.transform = "rotateZ(360deg) scale(1)";
		avatar[0].style.marginLeft = "20%";
		
		avatar[1].style.transform = "scale(1)";
		avatar[1].style.marginLeft = "30%";
	}

	else if (i == 1)
	{
		clickAvatar += 1;
		avatar[1].style.transform = "rotateZ(-360deg) scale(1)";
		avatar[1].style.marginLeft = "30%";
		
		avatar[0].style.transform = "scale(1)";
		avatar[0].style.marginLeft = "20%";
	}
}