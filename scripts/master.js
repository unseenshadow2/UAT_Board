// This file requires the IO.js file to function

var indexPage = "home.html";
var page_area = "page_area";

var basic_title = " - Anthony Parsch's UAT Board";

var buttons = 
	{
		'home.html':'home_button',
		'GameProgramming/GP_Objectives.html':'game_button',
		'AdvancingComputerScience/ACS_Objectives.html':'acs_button'
	};

function SetActive(page)
{
	// Cleanse our active button and set our active button
	for (var key in buttons)
	{
		if (page != key) ResetButtonActive(buttons[key]);
		else SetButtonActive(buttons[key]);
	}
}

function SetActiveAndLoad(page)
{
	SetActive(page);
	LoadPage(page);
}

function SetButtonActive(button)
{
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

function SetupButtons(currentPage)
{
	// Update buttons from ids to actual buttons
	for (var key in buttons) { buttons[key] = document.getElementById(buttons[key]); }
	
	// Update our buttons active status if we aren't on the index page
	SetActive(currentPage);
}