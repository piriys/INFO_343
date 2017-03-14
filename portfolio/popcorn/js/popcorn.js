document.addEventListener("DOMContentLoaded", function () {
	var pop = Popcorn.youtube('#video', 'http://www.youtube.com/watch?v=Pwe-pA6TaZk');
	
	function processLocation(plugin, area, country, startTime, endTime, useArea) {
		$('#loaddiv').removeClass('state-inactive');
		$('#loaddiv').addClass('state-active');
		
		var locationName = "";
		var wikiLink = "";
		var zoomX = 0;
		if(useArea) {
			locationName = area + ", " + country;
			wikiLink = "http://en.wikipedia.org/wiki/" + area.replace(/ /g, "_");
			zoomX = 8;
		} else {
			locationName = country;
			wikiLink = "http://en.wikipedia.org/wiki/" + country.replace(/ /g, "_");
			zoomX = 4;
		}
		
		var textClass = plugin + "-text";
		pop.footnote({
			start: startTime,
			end: endTime,
			text: area + ", " + country,
			target: "footnote",
			effect: "applyclass",
			applyclass: textClass		
		});
		
		var twitterhash = "#" + country;
		
		if(plugin == "gmap") {
			pop.googlemap({
				start: startTime, // Our start time in seconds
				end: endTime, // Our end time in seconds
				target: "loaddiv",  // The id of our target DoM element
				type: "HYBRID", 		
				zoom: zoomX,				
				location: locationName,
				effect: "applyclass",
				applyclass: "gmap-active"
			});
		} else if(plugin == "wiki") {	
			pop.wikipedia({
				start: startTime,
				end: endTime,
				src: wikiLink,
				target: "loaddiv",
				effect: "applyclass",
				applyclass: "wiki-active"				
			});	
		} else if(plugin == "twitter") {	
			pop.twitter({
				start: startTime,
				end: endTime,
				src: twitterhash,
				width: 410,
				target: "loaddiv",
				effect: "applyclass",
				applyclass: "twitter-active"					
			});
		} else if(plugin == "facebook") {
			pop.facebook({
				start: startTime,
				end: endTime,	
				href: "http://www.facebook.com/pages/Where-the-Hell-is-Matt/369964540488",
				type: "LIKE-BOX",
				show_faces: "true",
				header: "false",				
				target: "loaddiv",
				colorscheme: "dark",
				border_color: "transpalent",
				width: 410,
				height: 410,
				num_posts: 5,
				event_app_id: 174243249296725,
				effect: "applyclass",
				applyclass: "facebook-active"					
			});
		}		
	}
	
	pop.footnote({
		start: 0,
		end: 2,
		text: "Click the play button to find out!",
		target: "footnote",	
	});		

	processLocation("gmap", "Kigali", "Rwanda", 2, 7, true);
	processLocation("gmap", "Seville", "Spain", 7, 11, true);
	processLocation("gmap", "Vienna", "Austria", 11, 14, true);
	processLocation("gmap", "Schuykill Haven", "Pennsylvania", 14, 18, false);
	processLocation("gmap", "Damascus", "Syria", 18, 24, true);
	processLocation("gmap", "Poria", "Papua New Guinea", 24, 28, false);
	processLocation("gmap", "P'yongyang", "North Korea", 28, 35, false);
	processLocation("gmap", "Beirut", "Lebanon", 35, 39, true);
	processLocation("wiki", "Athens", "Greece", 39, 43, true);
	processLocation("wiki", "Lesedi", "South Africa", 43, 47, false);
	processLocation("wiki", "Kapong", "Thailand", 47, 51, false);
	processLocation("wiki", "Caracas", "Venezuela", 51, 54, true);
	processLocation("wiki", "Bali", "Indonesia", 54, 58, true);	
	processLocation("wiki", "League City", "Texas", 58, 62, false);
	processLocation("wiki", "Great Barrier Reef", "Australia", 62, 66, true);
	processLocation("wiki", "Al-Muzahmiyya", "Saudi Arabia", 66, 69, true);
	processLocation("wiki", "Oakland", "California", 69, 73, false);
	processLocation("wiki", "Detroit", "Michigan", 73, 77, false);
	processLocation("wiki", "Tereji", "Mongolia", 77, 81, false);
	processLocation("wiki", "Rangali Island", "Maldives", 81, 85, false);
	processLocation("wiki", "Ruwa", "Zimbabwe", 85, 89, true);
	processLocation("wiki", "Budapest", "Hungary", 89, 92, true);
	processLocation("twitter", "Port-au-Prince", "Haiti", 92, 96, true);
	processLocation("twitter", "Erbil", "Iraq", 96, 100, true);
	processLocation("twitter", "Maui", "Hawaii", 100, 104, true);
	processLocation("twitter", "New Orleans", "Louisana", 104, 108, true);
	processLocation("twitter", "Quezon City", "Philippines", 108, 112, true);
	processLocation("twitter", "Schuykill Haven", "Pennsylvania", 112, 116, false);
	processLocation("twitter", "Damascus", "Syria", 116, 119, true);	
	processLocation("twitter", "Kabul", "Afghanistan", 119, 123, true);	
	processLocation("twitter", "Toulon", "France", 123, 127, true);
	processLocation("twitter", "Vienna", "Austria", 127, 131, true);
	processLocation("twitter", "Beijing", "China", 131, 135, true);
	processLocation("twitter", "Jerusalem", "Israel", 135, 139, true);		
	processLocation("twitter", "Pyongyang", "North Korea", 139, 145, false);
	processLocation("twitter", "Opuwo", "Namibia", 145, 149, false);
	processLocation("twitter", "San Juan", "Puerto Rico", 149, 154, false);
	processLocation("twitter", "Belgrade", "Serbia", 154, 158, true);		
	processLocation("twitter", "Boise", "Idaho", 158, 161, false);	
	processLocation("facebook", "Edinburgh", "Scotland", 161, 165, true);	
	processLocation("facebook", "Philadelphia", "Pennsylvania", 165, 169, false);	
	processLocation("facebook", "Robben Island", "South Africa", 169, 173, false);	
	processLocation("facebook", "Toronto", "Canada", 173, 177, true);	
	processLocation("facebook", "Dresden", "Germany", 177, 181, true);	
	processLocation("wiki", "Lyon", "France", 181, 185, true);	
	processLocation("wiki", "USS Abraham Lincoln", "Pacific Ocean", 185, 188, false);	
	processLocation("wiki", "Houston", "Texas", 188, 190, true);
	processLocation("wiki", "Bratislava", "Slovakia", 190, 192, true);
	processLocation("wiki", "Melbourne", "Australia", 192, 194, true);
	processLocation("wiki", "Cairo", "Egypt", 194, 196, true);
	processLocation("wiki", "Hong Kong", "China", 196, 198, true);
	processLocation("wiki", "Tallinn", "Estonia", 198, 200, true);	
	processLocation("wiki", "Helsinki", "Finland", 200, 204, true);		
	processLocation("wiki", "Kyoto", "Japan", 204, 206, true);	
	processLocation("wiki", "Cleveland", "Ohio", 206, 208, true);
	processLocation("wiki", "Kalafasia", "Solomon Islands", 208, 210, false);	
	processLocation("wiki", "Medellin", "Colombia", 210, 212, false);	
	processLocation("wiki", "Poria", "Papua New Guinea", 212, 214, false);	
	processLocation("wiki", "Barcelona", "Spain", 214, 216, true);		
	processLocation("wiki", "Manchester", "England", 216, 218, true);		
	processLocation("twitter", "Karachi", "Pakistan", 218, 220, true);	
	processLocation("twitter", "Prague", "Czech Republic", 220, 223, true);
	processLocation("twitter", "Athens", "Greece", 223, 224, true);
	processLocation("twitter", "Cairo", "Egypt", 224, 225, true);	
	processLocation("twitter", "Zurich", "Switzerland", 225, 226, true);
	processLocation("twitter", "Dresden", "Germany", 226, 227, true);		
	processLocation("twitter", "Rome", "Italy", 227, 229, true);	
	processLocation("twitter", "San Jose", "Costa Rica", 229, 231, false);	
	processLocation("twitter", "Budapest", "Hungary", 231, 234, true);	
	processLocation("twitter", "Milan", "Italy", 234, 237, true);	
	processLocation("twitter", "Rafah", "Gaza Strip", 237, 238, true);	
	processLocation("twitter", "Taoyuan City", "Taiwan", 238, 241, false);	
	processLocation("wiki", "Port of Spain", "Trinidad", 241, 242, true);
	processLocation("wiki", "Cambridge", "Massachusetts", 242, 245, false);
	processLocation("wiki", "Moscow", "Russia", 245, 248, true);
	processLocation("wiki", "San Diego", "California", 248, 250, true);	
	processLocation("wiki", "Rome", "Italy", 250, 252, true);
	processLocation("wiki", "Baltimore", "Maryland", 252, 254, true);
	processLocation("wiki", "San Jose", "Costa Rica", 254, 256, false);	
	processLocation("wiki", "Denver", "Colorado", 256, 258, true);	
	processLocation("wiki", "St. Petersburg", "Russia", 258, 260, false);	
	processLocation("wiki", "Oakland", "California", 260, 262, false);
	processLocation("facebook", "Kigali", "Rwanda", 262, 265, true);		
	processLocation("gmap", "Seattle", "Washington", 265, 275, true);	
	
	$('#loaddiv').removeClass('state-active');
	$('#loaddiv').addClass('state-inactive');
	
	pop.footnote({
		start: 275,
		end: 292,
		text: "Thank you for watching! (:",
		target: "footnote",	
	});	
	
	pop.footnote({
		start: 292,
		end: 294,
		text: "Replay?",
		target: "footnote",	
	});		
}, false);

