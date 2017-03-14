function loadContent(page) {
	var urlName = "./js/" + page + ".html";
	$('#titlearea').load(urlName + ' #title');
	$('#contentarea').load(urlName + ' #ajaxcontent');
}

$(document).ready(function() {
	loadContent('home');
});

