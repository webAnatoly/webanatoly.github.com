'use strict';

function changeColor() {
	var myColor = document.body.style.background[0];
	console.log(myColor);
	(myColor == 'w' || myColor == null ) ? document.body.style.background = 'darkseagreen' : 
	document.body.style.background = 'whitesmoke';
	
	// It's The Conditional Operator (?:)
	/* The first operand is evaluated and interpreted as a boolean. 
	If the value of the first operand is truthy, then the second operand is evaluated, and its value is returned. 
	Otherwise, if the first operand is falsy, then the third operand is evaluated and its value is returned. 
	Only one of the second and third operands is evaluated, never both.
	*/
}

function getProperties () {
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

// =========================================







