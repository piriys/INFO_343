function changeTheme(colorName) {
	var themeColor = "transpalent";
	if(colorName != "default") {
		if(colorName == "red") {
			themeColor = "#ae113d";
		} else if(colorName == "blue") {
			themeColor = "#1eadfe";
		} else if(colorName == "green") {
			themeColor = "#91d100";
		} else if(colorName == "mango") {
			themeColor = "#f5b401";
		} else if(colorName == "purple") {
			themeColor = "#a93ffe";
		} 
			
		document.getElementsByClassName("themetext")[0].style.color = themeColor;
		document.getElementsByTagName("article")[0].style.backgroundColor = themeColor;
		var buttons = document.getElementsByClassName("button");
		for(i = 0; i < buttons.length; i++) {
			buttons[i].style.backgroundColor = themeColor;
		}
	} else {
		document.getElementsByClassName("themetext")[0].style.color = "#f79608";
		document.getElementById("home").style.backgroundColor = "#a500ff";
		document.getElementById("about").style.backgroundColor = "#92009a";
		document.getElementById("portfolio").style.backgroundColor = "#e771bd";
		document.getElementById("paper").style.backgroundColor = "#f79608";
		document.getElementById("vhtml5").style.backgroundColor = "#e71400";
		document.getElementById("vcss3").style.backgroundColor = "#18a2e7";
		document.getElementById("vwave").style.backgroundColor = "#319a31";
		document.getElementById("presentation").style.backgroundColor = "#e66d1a";
		document.getElementById("contact").style.backgroundColor = "#8cbe21";
		document.getElementById("caution").style.backgroundColor = "#f5b401";
		document.getElementsByTagName("article")[0].style.backgroundColor = "#8cbe21";
	}
}
