function SetupPage(header_id, sidebar_id, footer_id)
{
	var header = document.getElementById(header_id);
	var sidebar = document.getElementById(sidebar_id);
	var footer = document.getElementById(footer_id);
	
	if (header && sidebar && footer) // Run only when we have all elements
	{
		header.outerHTML = read_contents("/UAT_board/header.txt");
		sidebar.outerHTML = read_contents("/UAT_board/sidebar.txt");
		footer.outerHTML = read_contents("/UAT_board/footer.txt");
	}
}