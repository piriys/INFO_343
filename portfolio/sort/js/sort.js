function compareNumbers( a, b) {
	return a - b;
}
function reveal() {
	$('.dawg').css("visibility", "visible");
	$('#results').css("visibility", "visible");
	$('#result1').css("visibility", "visible");
}
function doSortByBreed() {
	var numArray = new Array();
	document.getElementById("sortby").innerHTML = "Sorted by Breed";
	document.getElementById("byWeight").className = "button theme state-inactive";
	document.getElementById("byBreed").className = "button theme state-active";
	
	for (var i = 0; i < jsonData.items.length; i++) {
		numArray[i] = jsonData.items[i].breed;
	}

	numArray.sort(compareNumbers);
	
  	var r = document.getElementById( "results" );
	var newDlNode = document.createElement("dl");
	r.className = "";
	r.className = "state-active";
	
	for (var j = 0; j < numArray.length; j++) {

		var breed = numArray[j];
		var MAXweight = "";
		var height = "";
		
		if(j <= 4) {
			var imgUrl = "url(\'./img/" + (breed.replace(/\s+/g, '').toLowerCase()) + ".jpg\')";
			var buttonName = "result" + (j + 1);
			var breedId = "breed" + (j + 1);
			document.getElementById(breedId).innerHTML = "#" + (j + 1) + " " + breed;
			document.getElementById(buttonName).style.backgroundImage = imgUrl;
		}
		
		for (var k = 0; k < jsonData.items.length; k++) {
			if (jsonData.items[k].breed == numArray[j]) {
				MAXweight = jsonData.items[k].MAXweight;
				height = jsonData.items[k].height;
			}
		}

		var newDtNode = document.createElement("dt"); 
		var newDdNode = document.createElement("dd");
		var breedText = document.createTextNode(breed);
		var sizeText = document.createTextNode("About " + MAXweight + " lbs and " + height + " high");
		
		newDtNode.appendChild(breedText);
		newDdNode.appendChild(sizeText);
		newDlNode.appendChild(newDtNode);
		newDlNode.appendChild(newDdNode);
	}
	
	r.innerHTML = "";
	r.appendChild(newDlNode);
	reveal();
}

function doSortByWeight() {
	var numArray = new Array();
	document.getElementById("sortby").innerHTML = "Sorted by Maximum Weight";
	document.getElementById("byBreed").className = "button theme state-inactive";
	document.getElementById("byWeight").className = "button theme state-active";
	
	for (var i = 0; i < jsonData.items.length; i++) {
		numArray[i] = jsonData.items[i].MAXweight;
	}

	numArray.sort(compareNumbers);

  	var r = document.getElementById( "results" );
	var newDlNode = document.createElement("dl");
	r.className = "";
	r.className = "state-active";
	
	for (var j = 0; j < numArray.length; j++) {
		var MAXweight = numArray[j];
		var colors = "";
		var breed = "";
		
		for (var k = 0; k < jsonData.items.length; k++) {
			if (jsonData.items[k].MAXweight == numArray[j]) {
				breed = jsonData.items[k].breed;
				colors = jsonData.items[k].colors;
			}
		}
		
		if(j <= 4) {
			var imgUrl = "url(\'./img/" + (breed.replace(/\s+/g, '').toLowerCase()) + ".jpg\')";
			var buttonName = "result" + (j + 1);
			var breedId = "breed" + (j + 1);
			document.getElementById(breedId).innerHTML = "#" + (j + 1) + " " + breed;
			document.getElementById(buttonName).style.backgroundImage = imgUrl;
		}		
		
		var newDtNode = document.createElement("dt"); 
		var breedText = document.createTextNode(breed);
		
		newDtNode.appendChild(breedText);
		newDlNode.appendChild(newDtNode);
		
		for (var l = 0; l < colors.length; l++) {
			var newDdNode = document.createElement("dd");
			var newDfnNode = document.createElement("dfn");
			var colorText = document.createTextNode(colors[l]);
			newDdNode.appendChild(colorText);
			newDfnNode.appendChild(newDdNode);
			newDlNode.appendChild(newDfnNode);
		}	
	}
	
	r.innerHTML = "";	
	r.appendChild(newDlNode);
	reveal();
}

