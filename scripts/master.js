function LoadPage(url, id)
{
	// Set default
	id = id || "page_area";
	
	var page_area = document.getElementById(id);
	
	page_area.innerHTML = read_contents(url);
}