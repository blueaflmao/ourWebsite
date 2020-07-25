var y = document.getElementsByClassName("gameOverlay");
var x = document.getElementsByClassName("gameButtons");

function openGame()
{
	// clickArt = 0;
	var game = "<p>";
	game += "I host a lightweight modded minecraft server occasinally for friends, if you wanna visit";
	game += "<br>Server address: <a href='blueandhai.ddns.net' target=_blank>blueandhai.ddns.net</a>";
	game += "<br>Note that this URL leads back to this website also";
	game += "<br>Link to the mods folder";
	game += "<a href='upload/mods.rar' download> Download mods folder</a>";
	game += "</p>";

	document.getElementsByClassName("info")[0].innerHTML = game;
	
	gameContent();

	var head = "GAMES";
	document.getElementsByClassName("head")[0].innerHTML = head;
}

function gameContent()
{
	var info = document.getElementsByClassName("info")[0];
	for (var i = 1; i <=12; i++)
	{
		
		var button = document.createElement("button");
		button.setAttribute("class", "gameButtons");
		info.appendChild(button);
	}

	for (var i = 0; i<=11; i++)
	{	
		x[i].innerHTML = "<div class = 'gameOverlay'></div>";
		
		y[i].innerHTML = "<div class = 'gameText'></div>";
		overlayTexts(i);
	}
}

function overlayTexts(i)
{
	if (i == 0) {y[i].innerHTML += "<h5>BORDERLANDS 2</h5>";}
	if (i == 1) {y[i].innerHTML += "OVERCOOKED 2";}
	if (i == 2) {y[i].innerHTML += "OSU!";}
	if (i == 3) {y[i].innerHTML += "MINECRAFT";}
}