
/******************************************************************* 

/* 	each holiday object contains following information and data type

	"date": integer 	(required)
    "holiday": string	(reqiured)
    "religion": string	(optional)
    "notes": string 	(optional)
    "attendClass": string, either "yes" or "no" (optional)


/*	to retrieve the first holiday of 2012 -2013 academic year 
	which is July 4th Independence day, use

	NAME_OF_YOUR_DATA.calendar[0].months[0].days[0].holiday


/* 	example javascript code *

	var holidays = eval(
		{ "calendar": [
			{ 
				"year" : 2012,
				.....
			},
			{
				"year" : 2013,
				.....
			}
			]
		}
	);

	// prompt the browser to alert "Independence Day" 
	alert(holidays.calendar[0].months[0].days[0].holiday);


********************* end of notes *******************************/


var jsonData = eval(
	{ "calendar":[

		{ "year" : 2012,
		"quarters": [
			{
				"name": "Summer",
				"startMonth": 6,
				"startDate": 18,
				"endMonth": 8,
				"endDate": 17
			},
			{
				"name": "Autumn",
				"startMonth": 9,
				"startDate": 24,
				"endMonth": 12,
				"endDate": 7
			}
		],
         "months": [
                {
                "name": "July",
                "number":7,
                "days": [
                        {    
                            
                            "date": 4,
                            "holiday": "Independence Day",
                            "attendClass" : "no"
                        },
                        {
                            "date": 9,
                            "holiday": "Martydom of the Báb",
                            "religion": "Bahá'í",
                            "attendClass" : "yes"
                        },
                        {
                            "date": 20,
                            "holiday": "Beginning of Ramadan",
                            "religion": "Islamic",
                            "notes": "Jul. 20-Aug. 19",
                            "attendClass" : "yes"
                        }
                    ]
                },
                {                
                "name": "August",
                "number":8,
                "days": [
                            {
                                "date": 14,
                                "holiday": "Lailat Ul Qadr",
                                "religion": "Islamic",
                                "attendClass" : "yes"
                            },
                            {
                                "date": 19,
                                "holiday": "Eid al-Fitr, (End of Ramadan)",
                                "religion": "Islamic",
                                "attendClass" : "yes",
                                "notes": "Jul. 20-Aug. 19"
                            }
                    ]
                },

                {
                "name": "September",
                "number": 9,
                "days": [
                        {
                            "date": 3,
                            "holiday": "Labor Day",
                            "attendClass" : "yes",
                            "notes": "classes are not in session"
                        },
                        {
                            "date": 17,
                            "holiday": "Rosh Hashanah (New Year)",
                            "religion": "Jewish",
                            "attendClass" : "yes"
                        },
                        {
                            "date": 22,
                            "holiday": "Autumn Equinox",
                            "attendClass" : "yes"
                        },
                        {
                            "date": 26,
                            "holiday": "Yom Kippur (Day of Atonement)",
                            "religion": "Jewish",
                            "attendClass" : "yes"
                        }
                    ]          
                },

                {
                "name": "October",
                "number": 10,
                "days": [
                        {
                            "date": [1,2,3,4,5,6,7],
                            "holiday": "Sukkot (Feast of the Tabernacles)",
                            "religion": "Jewish",
                            "notes": "1-2 are Primary Obligation Days"
                        },
                        {
                            "date": 8,
                            "holiday": "Shmini Atzeret/SimchatTorah",
                            "religion": "Jewish"
                        },
                        {
                            "date": 8,
                            "holiday": "Columbus Day"
                        },
                        {
                            "date": 20,
                            "holiday": "BirthoftheBab",
                            "religion": "Baha'i"
                        },

                        {
                            "date": 26,
                            "holiday": "Eidal-Adha",
                            "religion": "Islamic"
                        },

                        {
                            "date": 31,
                            "holiday": "Halloween"
                        }
                    ]
                },

                { 
                "name" : "November",
                "number" : 11,
                "days": [
                    {
                        "date": 4,
                        "holiday": "Daylight Saving Time Ends"
                    },
                    	{
                        "date": 11,
                        "holiday": "Veterans Day",
                        "notes": "Observed on Nov. 12"
                    },
                        {
                         "date": 12,
                         "holiday": "Veterans Day",
                         "religion": "Actually on Nov. 11"
                    },
                        {
                         "date": 12,
                         "holiday": "*Birth of Bahá'u'lláh",
                         "religion": "Bahá'í"
                    },
                       	{
                          "date": 22,
                          "holiday": "The Birth of Jacob",
                          "religion": "Beer"
                        },
                    {
                          "date": [22, 23],
                        "holiday": "Thanksgiving Day"
                    },
                    {
                        "date": 26,
                        "holiday": "Day of the Covnant",
                        "religion": "Bahá'í"
                    },
                    {
                        "date": 28,
                        "holiday": "DAscension of 'Abdu'l-Bahá",
                        "religion": "Bahá'í"
                    }
                   ]
                },


				{
				"name": "December",
				"number": 12,
				"days": [
						{
							"date": 9,
							"holiday": "Hanukkah",
							"religion": "Jewish",
							"notes": "Dec. 9-Dec. 16"
							
						},
						{
							"date": 21,
							"holiday": "Winter Solstice"
						},
						{
							"date": 25,
							"holiday": "Christmas",
							"religion": "Christian",
							"attendClass": "no"
						},
						{
							"date": 26,
							"holiday": "Kwanzaa",
							"religion": "Interfaith/African-American",
							"notes": "Dec. 26-Jan. 1",
							"attendClass": "no"
						}
					]
				}
            ]

		},

		{ "year" : 2013,
		"quarters": [
			{
				"name": "Winter",
				"startMonth": 1,
				"startDate": 7,
				"endMonth": 3,
				"endDate": 15
			},
			{
				"name": "Spring",
				"startMonth": 4,
				"startDate": 1,
				"endMonth": 6,
				"endDate": 7
			},
			{
				"name": "Summer",
				"startMonth": 6,
				"startDate": 24,
				"endMonth": 8,
				"endDate": 23
			}			
		],		
		"months" : [
			{
				"name": "January",
				"number": 1,
				"days": [
						{
							"date": 1,
							"holiday": "New Year's Day",
							"attendClass": "no"
						},
						{
							"date": 7,
							"holiday": "Orthodox Christmas",
							"religion": "Christian Orthodox"
						},
						{
							"date": 21,
							"holiday": "Martin Luther King Day",
							"attendClass": "no"
						},
						{
							"date": 24,
							"holiday": "Mawlid-al-Nabi (Mohammad's birthday)",
							"religion": "Islamic"
						}
							]
				},


				{
				"name": "February",
				"number": 2,
				"days": [
					{
						"date": 14,
						"holiday": "Valentine's Day",
						"attendClass" : "yes"
					},
					{
						"date": 18,
						"holiday": "President's Day (Washington's Birthday)",
						"attendClass" : "no"
					}
				]	
			},
			{
				"name": "March",
				"number": 3,
				"days": [
					{
						"date": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
						"holiday": "The Nineteen Day Fast",
						"religion": "Bahá'í",
						"attendClass" : "yes"
					},
					{
						"date": 10,
						"holiday": "Daylight Saving Time Starts",
						"attendClass" : "yes"
					},
					{
						"date": 17,
						"holiday": "St. Patrick's Day",
						"attendClass" : "yes"
					},
					{
						"date": 20,
						"holiday": "Vernal Equinox",
						"attendClass" : "yes"
					},
					{
						"date": 21,
						"holiday": "Naw Ruz (New Year)",
						"religion": "Bahá'í",
						"attendClass" : "yes"
					},
					{
						"date": [26, 27, 28, 29, 30, 31],
						"holiday": "*Passover (Pesach)",
						"religion": "Jewish",
						"notes": "Mar. 26-27, Apr. 1-2 Primary Obligation Days",
						"attendClass" : "yes"
					},
					{
						"date": 29,
						"holiday": "Good Friday",
						"religion": "Christian",
						"attendClass" : "yes"
					},
					{
						"date": 31,
						"holiday": "Easter",
						"religion": "Christian",
						"attendClass" : "yes"
					}
				]
				},

				{
				"name": "April",
				"number": 4,
				"days": [
					{
						"date" : [1,2],
						"holiday": "Passover (Pesach)",
						"religion": "Jewish",
						"notes": "Mar. 26-27, Apr. 1-2 Primary Obligation Days",
						"attendClass" : "yes"
						},

					{
						"date" : 21,
						"holiday": "First Day of Ridvan",
						"religion": "Bahá'í"
					},
					{
						"date" : 29,
						"holiday" : "Ninth Day of Ridvan",
						"religion" : "Bahá'í"
					}
				]	
				},
				{
				"name" : "May",
				"number": 5,
				"days": [
					{
						"date": 2,
						"holiday" : "Twelth Day of Ridvan",
						"religion" : "Bahá'í"
					},
					{
						"date" : 3,
						"holiday" : "Good Friday",
						"religion" : "Christian Orthodox"
					},
					{
						"date" : 5,
						"holiday" : "Easter",
						"religion" : "Christian Orthodox"
					},
					{
						"date" : 5,
						"holiday" : "Cinco de Mayo"
			
					},
					{
						"date" : 12,
						"holiday" : "Mother's Day"
					},
					{
						"date" : 15, 
						"holiday" : "Shavuot",
						"religion" : "Jewish"
					},
					{
						"date" : 23,
						"holiday" : "Declaration of the Bab",
						"religion" : "Baha'i"
					},
					{
						"date" : 27,
						"holiday" : "Memorial Day, Observed",
						"attendClass" : "no"
					},
					{
						"date" : 29,
						"holiday" : "Ascension of Bahaullah",
						"religion" : "Baha'i"
					}
											  
				]
				},
				{
				"name" : "June",
				"number": 6,
				"days" : [
								{
									"date" : 16,
									"holiday" : "Father's Day"
								},
								{
									"date" : 21,
									"holiday" : "Summer Solstice"
								}
				]
				}	
			]			
		}
	]
});
