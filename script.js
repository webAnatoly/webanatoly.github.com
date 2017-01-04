'use strict';

function changeColor() {
	var myColor = document.body.style.background[0];// getting first letter of color name
	(myColor == 'l' || myColor == null ) ? document.body.style.background = 'darkseagreen' : 
	document.body.style.background = 'lightslategray';
	
	// It's The Conditional Operator (?:)
	/* The first operand is evaluated and interpreted as a boolean. 
	If the value of the first operand is truthy, then the second operand is evaluated, and its value is returned. 
	Otherwise, if the first operand is falsy, then the third operand is evaluated and its value is returned. 
	Only one of the second and third operands is evaluated, never both.
	*/
}

function getProperties () { // gettin properties of document
	var counter = document.getElementById('forTable').childElementCount;
	if (counter == 0) {
		document.getElementById('buttonProperties').innerHTML = 'Hide Properties'; // to change name of button to the 'Hide Properties'
		var properties = '';
		for (var i in document) {
			properties += ('<tr><td class="first_td">' + i + '</td><td class="second_td">' + document[i] +'</td></tr>' + '\n');
		};
		document.getElementById('forTable').innerHTML = '<table>' + properties + '</table>';
	} else { 
		document.getElementById('forTable').innerHTML = '';
		document.getElementById('buttonProperties').innerHTML = 'Get Properties Of This Document';
	} 
}

function changeButtonAndStartClocks() { // starting function for clock. This function change style of button where will appear clocks.
	var newButton = document.getElementById('newButtonView');
	newButton.innerHTML = "<button type='button' class='ButtonClock' onclick='changeButtonAndStarClocks()'><span id='textClocks'></span></button>"
	setInterval(textClocks, 1000);
}

function textClocks () { // this function show tick clocks into button as text.  
	var gDate = new Date(); // gDate it's Date object for using into my function;
	var myClock = document.getElementById('textClocks');
	var h = gDate.getHours(); (h < 10) ? h = '0'+ h : h; // hours
	var m = gDate.getMinutes(); (m < 10) ? m = '0'+ m : m; // minutes
	var s = gDate.getSeconds(); (s < 10) ? s = '0'+ s : s; // seconds
	myClock.innerHTML =  h + ":" + m + ":" + s;
}

