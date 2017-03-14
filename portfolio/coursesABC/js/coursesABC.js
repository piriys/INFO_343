function getCourses(letter) {
	var xmlPath = "./xml/" + letter + "Courses.xml";
	$('.button').removeClass('state-active');
	$('.button').addClass('state-inactive');

	var buttonName = "#get" + "_" + letter; 
	$(buttonName).addClass('state-active');
	$.ajax({
		type: "GET",
		url: xmlPath,
		dataType: "xml",
		success: jParseXml
	});
}


function jParseXml(xml) {
	$('#tablewrapper').removeClass('state-inactive');
	$('#tablewrapper').addClass('state-active');	
	var curricula = xml.documentElement;
	var curriculum = curricula.childNodes;
	// Target the table element
	var results = document.getElementById("results");
	
	// Create a DIV that will become the tables innerHTML
	var tableContents = document.createElement("div");
	var toprow = document.createElement("tr");
	var th1 = document.createElement("th");
	th1.innerHTML = "Course Name";
	var th2 = document.createElement("th");
	th2.innerHTML = "Campus";
	var th3 = document.createElement("th");
	th3.innerHTML = "Department";
	
	th1.className = "state-active";
	th2.className = "state-active";
	th3.className = "state-active";
	
	th1.setAttribute("width", "320px");
	th2.setAttribute("width", "210px");
	th3.setAttribute("width", "320px");
	
	toprow.appendChild(th1);
	toprow.appendChild(th2);
	toprow.appendChild(th3);
	tableContents.appendChild(toprow);
	
	// The basic loop through the nodeset
	for (var i = 0; i < curriculum.length; i++) {
		// Get the childnodes of YOUR_NODESET_ELEMENT[i]
		var aspects = curriculum[i].childNodes
		
		// Create a table row element
		var p = document.createElement("tr");

		
		for(var j = 0; j < aspects.length; j++) {
			// Test that the nodeName is "fullname" See note below for origin of "aspects"
			if (aspects[j].nodeName == "fullname") {
				var td1 = document.createElement("td");
				// Collect the "fullname" as content for a table data element
				td1.className = "state-active";
				td1.innerHTML = aspects[j].firstChild.nodeValue.toUpperCase();
				td1.setAttribute("width", "320px");
				// Add the table data element to the table row
				p.appendChild(td1);
			}
			// Test that the nodeName is "college-fullname"
			if(aspects[j].nodeName == "college-fullname") {
				var td2 = document.createElement("td");
				// Collect the "college-fullname" as content for a table data element
				td2.className = "state-active last";
				td2.innerHTML = aspects[j].firstChild.nodeValue.toUpperCase();
				td2.setAttribute("width", "320px");
				// Add the table data element to the table row
				p.appendChild(td2);
			}
			
			if(aspects[j].nodeName == "campus-name") {
				var td3 = document.createElement("td");	
				td3.className = "state-active";
				td3.innerHTML = aspects[j].firstChild.nodeValue.toUpperCase();
				td3.setAttribute("width", "210px");
				p.appendChild(td3);		
			}	
		}
		// Add the table row to the table contents DIV
		tableContents.appendChild(p);
	}
	// Give the tableContents to the table element
	results.innerHTML = tableContents.innerHTML;
}