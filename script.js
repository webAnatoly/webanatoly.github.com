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

function getProperies () {
	var properties = '';
	for (var i in document) {
		properties += ('<br>' + i + ': ' + document[i] + '<br>');
	};
	document.getElementById('text').innerHTML = properties;

}

// =========================================

var data = [10, 9, 10, 10, 9, 8];

function nonUniqueElements(data) {
	var newData = [];
	for (var n = 0; n < data.length; n++){
		for (var i = 0; i < data.length; i++){
			if (data[n] == data[i] && n != i) {
				newData[newData.length] = data[n];
				break;
			}
		}
	}
    return newData;
}
console.log(nonUniqueElements(data));





