var info = document.getElementsByClassName("info"); // Call bottom element of the content page (global)

function openArt()
// initiate content on Artworks button 
// call function avatar() to create two avatars of Tess and me
// Call function artSlideshow() to create but temporarily hide the slideshow
{
	var art = "";
	info[0].innerHTML = art;

	var head = "ARTWORKS";
	document.getElementsByClassName("head")[0].innerHTML = head;
	
	avatar();
	artSlideshow();
	speechBubble();
	// slideButtons();

	document.getElementsByClassName("menu")[1].onlick = "";

}


function avatar()
// Call backArt() function on avatars click to create a return button to the main artwork content
// Create the two avatars and format them
// Cal onclick event for the avatars
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
	avatar[1].style.marginLeft = "35%";

	avatar[0].onclick = function() {artProfile(0);};
	avatar[1].onclick = function() {artProfile(1);};
}


function artProfile(i)
// Make the return button scales back to intended size from hiding
// Impliment animation for the avatars on clicks and call
// animations function for them on hover
{
	var returnArt = document.getElementById("returnArt");
	returnArt.style.transform = "scaleX(1)";
	
	var avatar = document.getElementsByClassName("avatar");

	// Call enlargeSlide() to scale up and make the slideshow appears
	// Call enlargeSpeech() to scale up speech ubble and make text appears
	enlargeSlide();
	enlargeSpeech();
	
	if (i==0)
	{
		avatar[1].style.marginLeft = "45%"; 
		avatar[1].style.transform = "rotateZ(0deg) scale(0)";

		avatar[0].style.transform = "rotateZ(-360deg) scale(0.7)";
		avatar[0].style.marginLeft = "5%";


		returnArt.onclick = function() {backArtPress(0);};

		avatar[0].onmouseover = function() {avatarHover(0);};
		avatar[0].onmouseout = function() {avatarLeave(0);};

		avatar[0].onclick = ""; //Disable the avatar to prevent being clicked on
	} 

	else if (i==1)
	{
		avatar[0].style.transform = "rotateZ(0deg) scale(0)";

		avatar[1].style.transform = "rotateZ(360deg) scale(0.7)";
		avatar[1].style.marginLeft = "50%";

		returnArt.onclick = function() {backArtPress(1);};

		avatar[1].onmouseover = function() {avatarHover(1);};
		avatar[1].onmouseout = function() {avatarLeave(1);};

		avatar[1].onclick = ""; //Disable the avatar to prevent being clicked on
	}
}

function backArt()
// Create a return button for when an avatar is clicked on but hide the button temporarily
{
	var returnArt = document.createElement("button");
	returnArt.setAttribute("id", "returnArt");
	info[0].appendChild(returnArt);
	info[0].appendChild(document.createElement("br"));
	returnArt.style.transform = "scaleX(0)";
}