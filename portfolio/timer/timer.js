/*This is a full version of countdown function, it will print out the number of remaining calendar days until the class ends from the parameters of class ending time*/
	function countdown(year, month, day, hour, min) {
		var today = new Date();	
		var target = new Date(year, month - 1, day, hour, min);
		/*Use the getTime() function to get the milliseconds from midnight, January 1970 of two date objects and subtract to get the milliseconds difference. Then divide by a number of milliseconds in a day (24 * 60 * 60 * 1000) to get convert the milliseconds to days. */
		var difference = (Math.round((target.getTime() - today.getTime()) / (24 * 60 * 60 * 1000)));
		
		document.write(difference);
	}
	
