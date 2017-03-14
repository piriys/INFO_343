function clearCanvas() {
	var canvas = document.getElementById('results');
	
	if(canvas.getContext) {
		$('#prompt').html('Click on a button to start drawing');
		$('.button').removeClass('state-active');
		$('.button').addClass('state-inactive');
		$('#results').removeClass('state-active');
		$('#results').addClass('state-inactive');
	
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, 650, 650);	
	}	
}

function drawGlasses() {
	var canvas = document.getElementById('results');
	var centerX = canvas.width/2;
	var centerY = canvas.height/2;	
	
	if($('#draw2').hasClass('state-active')) {
		centerY = centerY - 20;
		centerX = centerX - 30;
	}
	
	if(canvas.getContext && !$('#drawglasses').hasClass('state-active') && (($('#draw1').hasClass('state-active') || $('#draw2').hasClass('state-active')) || $('#draw3').hasClass('state-active'))) {
		$('#drawglasses').removeClass('state-inactive');
		$('#drawglasses').addClass('state-active');	
		var ctx = canvas.getContext('2d');
		
		if(!$('#draw1').hasClass('state-active')) {	
			var title = $('#prompt').html();
			title = "Piriya's " + title;
			$('#prompt').html(title);
			
			drawLens(centerX - 100, centerY, ctx);
			drawLens(centerX + 100, centerY, ctx);
			ctx.beginPath();
			ctx.moveTo(centerX + 30, centerY);
			ctx.lineTo(centerX - 30, centerY);
			ctx.strokeStyle = "black";
			ctx.stroke();
		} else {
			var title = $('#prompt').html();
			title = "Piriya-fied " + title;
			$('#prompt').html(title);	
			
			pacmanLens(centerX + 30, centerY - 50, ctx)	
		}
	}
}

function pacmanLens(centerX, centerY, ctx) {
	ctx.beginPath();
	ctx.arc(centerX, centerY, 32, 0, 2 * Math.PI, false);	
	ctx.fillStyle = "rgba(30, 173, 254, 0.5)";
	ctx.fill();
	
	ctx.beginPath();
	ctx.arc(centerX + 15, centerY - 15, 16, 0, 2 * Math.PI, false);
	ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
	ctx.fill();

	ctx.beginPath();
	ctx.arc(centerX - 15, centerY + 15, 12, 0, 2 * Math.PI, false);
	ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
	ctx.fill();
	
	ctx.beginPath();
	ctx.arc(centerX, centerY, 32, 0, 2 * Math.PI, false);	
	ctx.lineWidth = 9;	
	ctx.strokeStyle = "black";
	ctx.stroke();	
	
	ctx.beginPath();
	ctx.moveTo(centerX + 32, centerY);
	ctx.lineTo(centerX + 70, centerY + 30);
	ctx.lineTo(centerX + 50, centerY + 50);
	ctx.lineWidth = 9;	
	ctx.strokeStyle = "black";
	ctx.stroke();	
}

function drawLens(centerX, centerY, ctx) {
	ctx.beginPath();
	ctx.arc(centerX,centerY, 70, 0, 2 * Math.PI, false);
	ctx.fillStyle = "rgba(30, 173, 254, 0.5)";
	ctx.fill();
	
	ctx.beginPath();
	ctx.arc(centerX + 30,centerY - 30, 30, 0, 2 * Math.PI, false);
	ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
	ctx.fill();
	
	ctx.beginPath();
	ctx.arc(centerX - 30,centerY + 30, 20, 0, 2 * Math.PI, false);;
	ctx.fill();
	
	ctx.beginPath();
	ctx.arc(centerX,centerY, 70, 0, 2 * Math.PI, false);
	ctx.lineWidth = 10;
	ctx.strokeStyle = "black";
	ctx.stroke();	
}

function draw1() {
	var canvas = document.getElementById('results');
	var centerX = canvas.width/2;
	var centerY = canvas.height/2;
	
	if(canvas.getContext) {
		$('#prompt').html('Pacman');
		$('.button').removeClass('state-active');
		$('.button').addClass('state-inactive');
		$('#draw1').removeClass('state-inactive');
		$('#draw1').addClass('state-active');	
		
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, 650, 650);	
		
		ctx.beginPath();
		ctx.moveTo(centerX, centerY);
		ctx.arc(centerX,centerY, 70, Math.PI - (Math.PI / 4), Math.PI + (Math.PI / 4), true);
		ctx.fillStyle = "rgb(254, 223, 83)";
		ctx.fill();
		
		for(var i = 1; i <= 4; i++)
		{
			ctx.beginPath();
			ctx.moveTo(centerX - (80 * i), centerY);	
			ctx.arc(centerX - (80 * i),centerY, 15, 2 * Math.PI, 0, false);
			ctx.fillStyle = "white";
			ctx.fill();	
		}	
		
		$('#results').removeClass('state-inactive');
		$('#results').addClass('state-active');			
	}
}

function draw2() {	
	var canvas = document.getElementById('results');
	var centerX = canvas.width/2;
	var centerY = canvas.height/2;	
	
	if(canvas.getContext) {
		$('#prompt').html('Awesome Face');
		$('.button').removeClass('state-active');
		$('.button').addClass('state-inactive');
		$('#draw2').removeClass('state-inactive');
		$('#draw2').addClass('state-active');	
		
		var line1 = "Awesome!";
		var line2 = "A+? :D ";
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, 650, 650);
		
		var draw2Gradient = ctx.createLinearGradient(0, 0, 0, 650);
		draw2Gradient.addColorStop(1, "#fe7c22");
		draw2Gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
		ctx.fillStyle = draw2Gradient;
		ctx.fillRect(0, 0, 650, 650);
		
		drawBaseFace(centerX, centerY, ctx);
		drawAwesomeEye(centerX + 110, centerY - 60, ctx);
		drawAwesomeEye(centerX - 110, centerY - 60, ctx);	
		drawAwesomeMouth(centerX, centerY + 20, ctx);
		drawBubble(550, 100, line1, line2, ctx);
		
		$('#results').removeClass('state-inactive');
		$('#results').addClass('state-active');			
	}
}

function draw3() {
	var canvas = document.getElementById('results');
	var centerX = canvas.width/2;
	var centerY = canvas.height/2;	
	
	if(canvas.getContext) {
		$('#prompt').html('Look of Disapproval');
		$('.button').removeClass('state-active');
		$('.button').addClass('state-inactive');
		$('#draw3').removeClass('state-inactive');
		$('#draw3').addClass('state-active');	
		
		var line1 = "...";
		var line2 = "Close enough";	
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, 650, 650);	
		
		var draw3Gradient = ctx.createLinearGradient(0, 0, 0, 650);
		draw3Gradient.addColorStop(1, "#681ab7");
		draw3Gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
		ctx.fillStyle = draw3Gradient;
		ctx.fillRect(0, 0, 650, 650);
		
		drawBaseFace(centerX, centerY, ctx);
		drawDisapprovalEye(centerX + 110, centerY - 30, ctx);
		drawDisapprovalEye(centerX - 110, centerY - 30, ctx);	
		drawDisapprovalMouth(centerX, centerY + 100, ctx);		
		drawBubble(550, 100, line1, line2, ctx);
		
		$('#results').removeClass('state-inactive');
		$('#results').addClass('state-active');				
	}
}

function drawBaseFace(centerX, centerY, ctx) {
		ctx.beginPath();
		ctx.arc(centerX,centerY, 250, 0, Math.PI*2,true);
		ctx.fillStyle = "rgb(254, 223, 83)";
		ctx.fill();
		ctx.lineWidth = 20;
		ctx.strokeStyle = "black";
		ctx.stroke();
}

function drawAwesomeEye(centerX, centerY, ctx) {
		ctx.beginPath();
		ctx.arc(centerX,centerY, 70, 0 + (Math.PI / 8), Math.PI - (Math.PI / 8), true);
		ctx.closePath();
		
		ctx.fillStyle = "white";
		ctx.fill();
		
		ctx.lineWidth = 20;
		ctx.strokeStyle = "black";
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(centerX, centerY);
		ctx.arc(centerX + 35, centerY - 42, 25, 0, Math.PI * 2,true);
		ctx.fillStyle = "black";
		ctx.fill();
}

function drawDisapprovalEye(centerX, centerY, ctx) {
		ctx.beginPath();
		ctx.arc(centerX,centerY, 65, Math.PI + (Math.PI / 8), (2 * Math.PI) - (Math.PI / 8), true);
		
		ctx.fillStyle = "white";
		ctx.fill();
		
		ctx.lineWidth = 20;
		ctx.strokeStyle = "black";
		ctx.stroke();	

		ctx.beginPath();
		ctx.moveTo(centerX, centerY);
		ctx.arc(centerX, centerY + 10, 10, 0, Math.PI * 2,true);
		ctx.fillStyle = "black";
		ctx.fill();	

		ctx.beginPath();
		ctx.moveTo(centerX - 90, centerY - 30);
		ctx.lineTo(centerX + 90, centerY - 30);
	
		ctx.arc(centerX + 90,centerY - 30 - 35, 35, 0 + (Math.PI / 2), (2 * Math.PI) - (Math.PI / 2), true);
		ctx.stroke();	
}

function drawAwesomeMouth(centerX, centerY, ctx) {
	ctx.beginPath();
	ctx.arc(centerX,centerY, 170, 0, Math.PI,false);
	ctx.fillStyle = "rgb(125, 30, 74)";
	ctx.fill();

	
	ctx.beginPath();
	ctx.moveTo(centerX + 180, centerY);
	ctx.lineTo(centerX - 195, centerY);
	ctx.strokeStyle = "black";
	ctx.stroke();	

	ctx.beginPath();
	ctx.moveTo(centerX, centerY + 170);
	ctx.quadraticCurveTo(centerX, centerY, centerX + 170, centerY);
	ctx.quadraticCurveTo(centerX, centerY, centerX + 175, centerY);
	ctx.quadraticCurveTo(centerX + 170, centerY + 170, centerX, centerY + 170);
	ctx.closePath();
	ctx.fillStyle = "rgb(248, 198, 227)";
	ctx.fill();
	
	ctx.beginPath();
	ctx.arc(centerX,centerY, 170, 0, Math.PI,false);
	ctx.closePath();

	ctx.strokeStyle = "black";
	ctx.lineWidth = 20;
	ctx.stroke();		
}

function drawDisapprovalMouth(centerX, centerY, ctx) {
	ctx.beginPath();
	ctx.moveTo(centerX - 100, centerY);
	ctx.lineTo(centerX + 100, centerY);
	ctx.lineWidth = 20;
	ctx.strokeStyle = "black";
	ctx.stroke();
}

function drawBubble(centerX, centerY, line1, line2, ctx) {
	var width = 40;
	ctx.beginPath();
	ctx.moveTo(centerX - (100 + width), centerY);
	ctx.quadraticCurveTo(centerX - (70 + width), centerY - 70, centerX - (60 + width), centerY - 70);
	ctx.lineTo(centerX + (60 + width), centerY - 70);
	ctx.quadraticCurveTo(centerX + (70 + width), centerY - 70, centerX + (100 + width), centerY);
	ctx.quadraticCurveTo(centerX + (70 + width), centerY + 70, centerX + (60 + width), centerY + 70);
	ctx.lineTo(centerX - (60 + width), centerY + 70);
	ctx.quadraticCurveTo(centerX - (70 + width), centerY + 70, centerX - (100 + width), centerY);
	
	ctx.closePath();
	ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.fill();
	ctx.lineWidth = 10;
	ctx.strokeStyle = "#242424";
	ctx.stroke();
	
	quotePointer(centerX, centerY + 75, ctx);
	ctx.font = "45px 'Komika'";
	ctx.textAlign = "center";
	ctx.fillStyle = "black";
	ctx.fillText(line1, centerX, centerY);
	ctx.font = "30px 'Komika'";
	ctx.fillText(line2, centerX, centerY + 40);
}

function quotePointer (centerX, centerY, ctx) {
	ctx.beginPath();
	ctx.moveTo(centerX + 20, centerY - 10);
	ctx.quadraticCurveTo(centerX + 50, centerY + 70, centerX - 50, centerY + 120);
	ctx.quadraticCurveTo(centerX + 40, centerY + 50, centerX - 20, centerY - 10);
	
	ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(centerX + 20, centerY - 10);
	ctx.quadraticCurveTo(centerX + 50, centerY + 70, centerX - 50, centerY + 120);
	ctx.quadraticCurveTo(centerX + 40, centerY + 50, centerX - 20, centerY - 10);
	ctx.lineWidth = 10;
	ctx.stroke();
}