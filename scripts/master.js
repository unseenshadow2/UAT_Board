var homepage;
var gamepage;
var acspage;

var basic_title = " - Anthony Parsch's UAT Board";

function LoadPage(url, id)
{
	// Set default
	id = id || "page_area";
	
	var page_area = document.getElementById(id);
	
	page_area.innerHTML = read_contents(url);
	
	// Scroll to the top of the page
	document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function SetActive(button_id)
{
	// Cleanse our active button
	ResetButtonActive(homepage);
	ResetButtonActive(gamepage);
	ResetButtonActive(acspage);
	
	// Set the button to active
	var button = document.getElementById(button_id);
	button.classList.add('active');
	if (button.classList.contains('navigator')) button.classList.remove('navigator');
}

function ResetButtonActive(button)
{
	if (button.classList.contains('active')) 
	{
		button.classList.remove('active');
		button.classList.add('navigator');
	}
}

function SetupButtons()
{
	homepage = document.getElementById("home_button");
	gamepage = document.getElementById("game_button");
	acspage = document.getElementById("acs_button");
}