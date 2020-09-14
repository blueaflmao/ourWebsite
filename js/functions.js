function openIntro()
{
	// clickArt = 0;
	var intro = "";
	intro += "<p>" ;
	intro += "Hi ! I'm Blue"
	intro += "<br> I like singing and gaming (even though i suck and have no setup) :/" ;
	intro += "<br> This is just me practicing making a simple web for me and my friend's usage" ;
	intro += "</p>"	;
	// document.getElementById("mid").innerHTML = intro;

	document.getElementsByClassName("info")[0].innerHTML = intro;
	var head = "INTRO";
	document.getElementsByClassName("head")[0].innerHTML = head;

}

function openContact()
{
	// clickArt = 0;
	var contact = "<p>" ;
	contact += "Here are some of my contacts:" ;
	contact += "<br>Discord ID: BlueAfLmao#7768" ;
	contact += '<br> Steam account: <a href="https://steamcommunity.com/id/blueaflmao/" target=_blank>https://steamcommunity.com/id/blueaflmao/</a>' ;
	contact += "</p>" ;

	document.getElementsByClassName("info")[0].innerHTML = contact;

	var head = "CONTACT DETAILS";
	document.getElementsByClassName("head")[0].innerHTML = head;
}

function writeHead()
{
	var head = "<h1>Welcome !!!</h1>";

	document.getElementsByClassName("overlay")[0].innerHTML = head;
}

function menuHover()
{
	var rOverlay = document.getElementById("rOverlay");
	rOverlay.style.visibility = "visible";
	rOverlay.style.opacity = "0.9";

	var menuButtons = document.getElementsByClassName("menu");
	setTimeout(function()
	{
		menuButtons[0].innerHTML = "INTRODUCTION";
		menuButtons[1].innerHTML = "ARTWORK";
		menuButtons[2].innerHTML = "GAMES";
		menuButtons[3].innerHTML = "SOMETHING";
		menuButtons[4].innerHTML = "CONTACT DETAILS";
	}
	, 100);
	
}

function menuOut()
{
	var rOverlay = document.getElementById("rOverlay");
	rOverlay.style.visibility = "hidden";
	rOverlay.style.opacity = "0";

	var menuButtons = document.getElementsByClassName("menu");
	setTimeout(function()
	{
		menuButtons[0].innerHTML = "INTRO";
		menuButtons[1].innerHTML = "ARTS";
		menuButtons[2].innerHTML = "GAMES";
		menuButtons[3].innerHTML = "SMTH";
		menuButtons[4].innerHTML = "CONTACTS";
	}
	, 100);
}
