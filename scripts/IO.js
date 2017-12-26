// ###############################
// ##### ANTHONY PARSCH CODE #####
// ###############################

/*
 * LoadIntoId()
 * This function loads the page at the given URI into the
 * innerHTML of the object whose id is given. If no id object
 * is given, then an object with the id "page_area" will be
 * used.
 */
function LoadIntoId(url, id)
{
	// Set default
	id = id || "page_area";
	
	var page_area = document.getElementById(id);
	
	page_area.innerHTML = read_contents(url);
	
	// Scroll to the top of the page
	document.body.scrollTop = document.documentElement.scrollTop = 0;
}

/*
 * LoadPage()
 * This function loads the given page into an object
 * with the given id. It also changes the hash string
 * of the page to match the new page.
 */
function LoadPage(url, id)
{
	parent.location.hash = url;
	LoadIntoId(url, id);
}

/*
 * LoadPageAtStart()
 * This function is a wrapper for LoadPage() that should
 * be run at the load of an HTML page. This will pull the 
 * hash string and open the given page.
 * Returns the uri from the hash.
 */
function LoadPageAtStart(id, defaultPage)
{
	//var uri = getQueryVariable(pageQueryString) || defaultPage;
	var uri = parent.location.hash || defaultPage;
	
	if (uri != defaultPage) uri = uri.slice(1);
	
	LoadIntoId(uri, id);
	return uri;
}

// ###################################
// ##### END ANTHONY PARSCH CODE #####
// ###################################

// *************************************************************** IO

// http://codingforums.com/showthread.php?t=143412

// LA MOD String Version. 
// A tiny ajax library by DanDavis

// Revised 20101006
// http://www.quirksmode.org/js/xmlhttp.html

var XMLHttpFactories = [
        function ( )
          {
          return ( new XMLHttpRequest ( ) );
          },
        function ( )
          {
          return ( new ActiveXObject ( "Msxml2.XMLHTTP" ) );
          },
        function ( )
          {
          return ( new ActiveXObject ( "Msxml3.XMLHTTP" ) );
          },
        function ( )
          {
          return ( new ActiveXObject ( "Microsoft.XMLHTTP" ) );
          }
        ];

// ********************************************** createXMLHTTPObject

function createXMLHTTPObject()
{
    var xmlhttp = false;

    for ( var i = 0; ( i < XMLHttpFactories.length ); i++ )
      {
      try
        {
        xmlhttp = XMLHttpFactories [ i ] ( );
        }

      catch ( e )
        {
        continue;
        }

      break;
      }

    return ( xmlhttp );
}

// **************************************************** read_contents

function read_contents ( url )
{
    var request = createXMLHTTPObject ( );

    request.open ( 'GET', url, false );
    request.setRequestHeader ( 'Content-Type', 'text/html' );
    request.send ( '' );

    return ( request.responseText );
}