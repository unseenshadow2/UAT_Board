function SetupPage(/*header_id, sidebar_id, footer_id*/)
{
	/*var header = document.getElementById(header_id);
	var sidebar = document.getElementById(sidebar_id);
	var footer = document.getElementById(footer_id);*/
	
	var header = document.getElementById("header");
	var sidebar = document.getElementById("sidebar");
	var footer = document.getElementById("footer");
	
	if (header && sidebar && footer) // Run only when we have all elements
	{
		header.outerHTML = read_contents("/UAT_board/header.txt");
		sidebar.outerHTML = read_contents("/UAT_board/sidebar.txt");
		footer.outerHTML = read_contents("/UAT_board/footer.txt");
	}
}

// So that we can read from our server
function read_contents ( url )
{
    var request = createXMLHTTPObject ( );

    request.open ( 'GET', url, false );
    request.setRequestHeader ( 'Content-Type', 'text/html' );
    request.send ( '' );

    return ( request.responseText );
}