	function n (a, b, c, d, m) {
		var g = new Date();	
		var h = new Date(a, b - 1, c, d, m);

		var f = (Math.round((h.getTime() - g.getTime()) / (24 * 60 * 60 * 1000)));
		
		document.write(f);
	}
	
