
var imgDir = "";
function backArtPress(i)
// Impliment animations for the avatars when the return button is clicked
{
	var avatar = document.getElementsByClassName("avatar");	
	var returnArt = document.getElementById("returnArt");
	
	returnArt.style.transform = "scaleX(0)";

	// Scale down and hide the speech bubble when the return button is clicked
	var hideSpeech1 = document.getElementById("speechBubble1");
	var hideSpeech2 = document.getElementById("speechBubble2");
	hideSpeech1.style.transform = "scale(0)";
	hideSpeech2.style.transform = "scale(0)";
	
	// Make the avatars clickable again
	avatar[0].onclick = function() {artProfile(0);};
	avatar[1].onclick = function() {artProfile(1);};

	// Scale down and hide the slideshow frame
	var hideFrame = document.getElementById("frame");
	hideFrame.style.transform = "scale(0)";

	// Animation for the avatars to return and re appear at their original positions
	if (i == 0)
	{
		avatar[0].style.transform = "rotateZ(0deg) scale(1)";
		avatar[0].style.marginLeft = "20%";
		
		avatar[1].style.transform = "rotateZ(0deg) scale(1)";
		avatar[1].style.marginLeft = "35%";

		avatar[0].onmouseover = "";
		avatar[0].onmouseout = "";
	}

	else if (i == 1)
	{
		avatar[1].style.transform = "rotateZ(0deg) scale(1)";
		avatar[1].style.marginLeft = "35%";
		
		avatar[0].style.transform = "rotateZ(0deg) scale(1)";
		avatar[0].style.marginLeft = "20%";

		avatar[1].onmouseover = "";
		avatar[1].onmouseout = "";
	}
}


function avatarHover(i)
{
	var avatar = document.getElementsByClassName("avatar");	
	if (i == 0)
	{
		avatar[0].style.transform = "rotateZ(0deg) scale(0.7)";
	}
	else if (i == 1)
	{
		avatar[1].style.transform = "rotateZ(0deg) scale(0.7)";
	}
}

function avatarLeave(i)
{
	var avatar = document.getElementsByClassName("avatar");	
	if (i == 0)
	{
		avatar[0].style.transform = "rotateZ(-360deg) scale(0.7)";
	}
	else if (i == 1)
	{
		avatar[1].style.transform = "rotateZ(360deg) scale(0.7)";
	}
}


function speechBubble()
{
	var speechBubble1 = document.createElement("div");
	speechBubble1.setAttribute("id", "speechBubble1");
	info[0].appendChild(speechBubble1);
	
	var speechBubble2 = document.createElement("div");
	speechBubble2.setAttribute("id", "speechBubble2");
	info[0].appendChild(speechBubble2);
}


function enlargeSpeech(i)
{
	var speechBubble1 = document.getElementById("speechBubble1");
	var speechBubble2 = document.getElementById("speechBubble2");
	if (i == 0){speechBubble1.style.transform = "scale(1)";}
	else if (i == 1){speechBubble2.style.transform = "scale(1)";}
}


function artSlideshow()
// Create a 5 pages(divs) slideshow carousel
{
	var frame = document.createElement("div");
	frame.setAttribute("id", "frame");
	info[0].appendChild(frame);
	var slideFrame = document.getElementById("frame");

	for (var i = 0; i <= 4; i++)
	{
		var slideshow = document.createElement("div");
		slideshow.setAttribute("class", "artSlideshow fade");
		slideFrame.appendChild(slideshow);
		// slideshow.style.transform = "scale(0)";
	}

	slideButtons();
}


function enlargeSlide(i)
{
	var slideFrame = document.getElementById("frame");
	slideFrame.style.transform = "scale(1)";

	displayArts(j = Math.floor(Math.random() * (imagelist.length+2)), i);
}

function slideButtons()
{
	var slideFrame = document.getElementById("frame");
	for (var i=0; i<=1; i++)
	{
		var navSlide = document.createElement("button");
		navSlide.setAttribute("class", "navSlide");
		slideFrame.appendChild(navSlide);
	}


	var navButtons = document.getElementsByClassName("navSlide");

	var left_arrow = document.createElement("p");
	left_arrow.setAttribute("class", "navArrow left");

	var right_arrow = document.createElement("p");
	right_arrow.setAttribute("class", "navArrow right");

	navButtons[0].appendChild(left_arrow);
	navButtons[1].appendChild(right_arrow);
}


function displayArts(j, h)
{
	if (h==0) 
	{
		imgDir = "url(Art/Other/";
		imagelist = TessArt;
	}
	else if (h==1) 
	{
		imgDir = "url(Art/Webfolio/Productions_faites_en_cours/";
		imagelist = HungArt;
	}

	// j = imagelist's index
	if (j < 0){j = 0;}
	else if (j > imagelist.length - 1){j = imagelist.length - 1;}

	var k = j - 2;

	var slideshow = document.getElementsByClassName("artSlideshow");

	for (var i = 0; i <= 4; i++)
	{
		if (k < 0 || k >= imagelist.length)
		{
			slideshow[i].style.backgroundImage = "";
		}

		else
		{
			slideshow[i].style.backgroundImage = imgDir + String(imagelist[k]) + ")";
		}

		k += 1;	
	}

	var slideshow = document.getElementsByClassName("artSlideshow");
	for (var n = 0; n <= 4; n++)
	{
		slideshow[n].style.display = "block";
	}
	
	var navButtons = document.getElementsByClassName("navSlide");
	
	navButtons[0].onclick = function()
	{
		displayArts(j-1,h);
		noDisplaySlide();
		setTimeout(resetFade, 10);
	};

	navButtons[1].onclick = function()
	{
		displayArts(j+1,h); 
		noDisplaySlide();
		setTimeout(resetFade, 10);
	};
}

function noDisplaySlide()
{
	var slideshow = document.getElementsByClassName("artSlideshow");
	for (var n = 0; n <= 4; n++)
	{
		slideshow[n].style.display = "none";
	}
}

function resetFade()
{
	var slideshow = document.getElementsByClassName("artSlideshow");
		for (var i = 0; i <= 4; i++)
		{
			slideshow[i].style.display = "block";
		}
}

function offNavSlide()
{
	var navButtons = document.getElementsByClassName("navSlide");
	navButtons[0].disabled = true;
	navButtons[1].disabled = true;

	setTimeout(function()
	{
		var navButtons = document.getElementsByClassName("navSlide");
		navButtons[0].disabled = false;
		navButtons[1].disabled = false;
	}
	, 705);
}
