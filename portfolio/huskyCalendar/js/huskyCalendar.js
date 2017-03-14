$(document).ready(function(){
	// Datepicker
	$('#datepicker').datepicker({
		inline: true
	});
	$.extend($.datepicker,{_checkOffset:function(inst,offset,isFixed){return offset}});			
	//hover states on the static widgets
	$('#dialog_link, ul#icons li').hover(
		function() { $(this).addClass('ui-state-hover'); }, 
		function() { $(this).removeClass('ui-state-hover'); }
	);
		
	function getHoliday() {
		var dateArray = $('#datepicker').val().split("/");
		var day = dateArray[1];
		var month = dateArray[0];
		var year = dateArray[2];
		var holidayList = new Array();
		var isHoliday = false; 
		var quarter = "School Break";
		$('#holiday').html("");
		
		$('#holiday').removeClass('state-active');
		$('#holiday').addClass('state-inactive');
		for(var i = 0; i < jsonData.calendar.length; i++) {
			if(year == jsonData.calendar[i].year) {
				//Searching for quarter
				for(var m = 0; m < jsonData.calendar[i].quarters.length; m++) {
					if(month >= jsonData.calendar[i].quarters[m].startMonth && month <= jsonData.calendar[i].quarters[m].endMonth) {
						if(month == jsonData.calendar[i].quarters[m].startMonth && day < jsonData.calendar[i].quarters[m].startDate) {
							continue;
						} else if(month == jsonData.calendar[i].quarters[m].endMonth && day > jsonData.calendar[i].quarters[m].endDate) {
							continue;
						} else {
							quarter = jsonData.calendar[i].quarters[m].name + " " + year;
						}
					}
				}
				$('#holiday').append("<h1>" + quarter + " - " + day + "/" + month + "/" + year + "</h1>");	
				
				//Searching for holiday
				for(var j = 0; j < jsonData.calendar[i].months.length; j++)  {
					if(month == jsonData.calendar[i].months[j].number) {
						for(var k = 0; k < jsonData.calendar[i].months[j].days.length; k++) {
							if($.isArray(jsonData.calendar[i].months[j].days[k].date)) {
								for(var l = 0; l < jsonData.calendar[i].months[j].days[k].date.length; l++) {
									if(day == jsonData.calendar[i].months[j].days[k].date[l]) {
										var holiday = jsonData.calendar[i].months[j].days[k].holiday;
										var attendClass = jsonData.calendar[i].months[j].days[k].attendClass;
										var religion = jsonData.calendar[i].months[j].days[k].religion;
										var notes = jsonData.calendar[i].months[j].days[k].notes;
										isHoliday = true;
										printHoliday(holiday, attendClass, religion, notes);
									}
								}
							} else {
								if(day == jsonData.calendar[i].months[j].days[k].date) {
									var holiday = jsonData.calendar[i].months[j].days[k].holiday;
									var attendClass = jsonData.calendar[i].months[j].days[k].attendClass;
									var religion = jsonData.calendar[i].months[j].days[k].religion;
									var notes = jsonData.calendar[i].months[j].days[k].notes;
									isHoliday = true;
									printHoliday(holiday, attendClass, religion, notes);
								}
							}
						}
					}
				}
				
				if(!isHoliday) {
					$('#holiday').append("<h2>Not a holiday.</h2>");
				} else {
					$('#holiday').removeClass('state-inactive');
					$('#holiday').addClass('state-active');
				}
			}
		}
	}
	
	function printQuarter(quarter, year) {
		$('#holiday').append("<h1>" + quarter + " " + year + "</h1>");
	}
	
	function printHoliday(holiday, attendClass, religion, notes) {	
		if(holiday != null) {
			$('#holiday').append("<h2>" + holiday + "</h2>");
		}
		if(attendClass != null) {
			$('#holiday').append("<p>Attend Class: " + attendClass + "</p>");
		}	
		if(religion != null) {
			$('#holiday').append("<p>Religion: " + religion + "</p>");
		}
		if(notes != null) {
			$('#holiday').append("<p>Notes: " + notes + "</p>");
		}	
	}
	
	getHoliday();
	
	$('#datepicker').click(function(event) {
		$('#holiday').html("");
		getHoliday();
	});	
});