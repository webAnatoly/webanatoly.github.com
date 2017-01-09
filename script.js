'use strict';

function changeColor() {
	var myColor = document.body.style.background[0];// getting first letter of color name
	(myColor == 'd' || myColor == null ) ? document.body.style.background = 'lightslategray' : 
	document.body.style.background = 'darkseagreen';
	
	// It's The Conditional Operator (?:)
	/* The first operand is evaluated and interpreted as a boolean. 
	If the value of the first operand is truthy, then the second operand is evaluated, and its value is returned. 
	Otherwise, if the first operand is falsy, then the third operand is evaluated and its value is returned. 
	Only one of the second and third operands is evaluated, never both.
	*/// changing background color of HTML page
}

function getProperties () { // gettin all properties' names of document and their values
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

function textClocks () { // this function show tick clocks into button as text.  
	var gDate = new Date(); // gDate it's Date object for using into my function;
	var myClock = document.getElementById('newButtonView');
	var h = gDate.getHours(); (h < 10) ? h = '0'+ h : h; // hours
	var m = gDate.getMinutes(); (m < 10) ? m = '0'+ m : m; // minutes
	var s = gDate.getSeconds(); (s < 10) ? s = '0'+ s : s; // seconds
	myClock.innerHTML =  "<button type='button' class='buttonTransparent' onclick='textClocks()'><pre style='font-size: 15px'>" + h + ":" + m + ":" + s + '</pre>' + '</button>';
	setInterval(textClocks, 1000);
}

function fix(fixNumber, decimalPlaces) { // Example №5 from a text-book
	/* 	DESCRIPTION:
		In the following example, you write a function using pow(), which ﬁxes the number of decimal places 
		in a number —  a function that’s missing from earlier versions of JavaScript, though it has now been 
		added to JScript 5.5 and JavaScript 1.5, as you’ll see later in this chapter. This helps demonstrate that 
		even when a function is missing from JavaScript, you can usually use existing functions to create what 
		you want.
		DICTIONARY:
		decimal places - the position of a digit to the right of a decimal point 
	*/
	var div = Math.pow(10, decimalPlaces);
	fixNumber = Math.round(fixNumber * div) / div;
	return fixNumber.toFixed(decimalPlaces);
} //console.log (fix(2.1009000, 3)); // uncomment function call to see how function work

function learnForEach () { // The forEach() method executes a provided function once for each array element.
	
	// FIRST EXAMPLE
	var arr1 = [1,2,3];
	arr1.forEach(function(element){
		//console.log(element);
	});

	// SECONS EXAMPLE
	var arr = ['a', 'b', 'c'];
	var arr2 = [];
	arr.forEach(upper);
	function upper(element){
		arr2.push(element.toUpperCase());
	}

	// THIRD EXAMPLE
	var arr3 = [[1,2], [3,4], [5,6]];
	function logArray(element, index, array) {
		//console.log('element:' + element + '  index:' + index + '  array:' + array);
		//console.log(array[index][1]); 
	}
	arr3.forEach(logArray);

	// FOURTH EXAMPLE
	function logArrayElements(element, index, array) {
		console.log('a[' + index + '] = ' + element);
	}

	// Notice that index 2 is skipped since there is no item at
	// that position in the array.
	[2,3,,4,5].forEach(logArrayElements);
} //learnForEach();

function learnFilter() {
	// DESCRIPTION
	/* Он создаёт новый массив, в который войдут только те элементы arr, 
	для которых вызов callback(item, i, arr) возвратит true. 
	The filter() method creates a new array with all elements that pass the test implemented by the provided function.*/

	// EXAMPLE 1
	var arr = [1,2,'3',4,'a','b',12,100];
	var new_arr = arr.filter(function(item){
		if (typeof item === 'string') {
			return item;
		}
	}); console.log (new_arr);

	// EXAMPLE 2 
	var arr2 = arr.filter(function(a){
		return a > 0;
	}); console.log (arr2 + ' this is arr2');

	// EXAMPLE 3
	function greater10(n){
		return n > 10;
	}
	var arr3 = arr.filter(greater10);
	console.log(arr3);	
} //learnFilter();

function learnMap() { // understanding map() method
	/*
	The map() method creates a new array with the results of calling a provided function on every element in this array.
	--
	The premise of the map() method is similar to that of forEach(), except that the results of every 
	operation are stored in another array that the map() method returns. 
	[1,2,3,4].map(function(n){return n * 10;}); -> will log [10,20,30,40]
	--
	Метод map() создаёт новый массив, который будет состоять из результатов вызова callback(item, i, arr) 
	для каждого элемента arr.
	*/
	

	//EXAMPLE #1
	var numbers = [1, 5, 10, 15];
	var roots = numbers.map(function(x){
   		return x * 2;
	});
	// roots is now [2, 10, 20, 30]
	// numbers is still [1, 5, 10, 15]
	console.log(roots);
	console.log(numbers);

	//EXAMPLE #2 with Math.sqrt() method
	var number2 = [1,4,9,16,25,36,49,64,81];
	var roots2 = number2.map(Math.sqrt);
	console.log(roots2);


	//EXAMPLE #3
	var arr = [1,2,3,4,5];
	var newArr = arr.map(function(element, index, array){
		var longString =  'element:' + element + ' index:' + index + ' array:' + array;
		return longString;
	});
	for (var n = 0; n < newArr.length; n++) {
		console.log(newArr[n]);
	}

	// EXAMPLE #4: Using map to reformat objects in an array
	var myArray = [
		{key:1, value:10},
		{key:2, value:20},
		{key:3, value:30}];
	var newMyArray = myArray.map(function(element, index, array){
		var obj = {};
		obj[element.key] = element.value;
		return obj;
	}); 
	console.log (newMyArray); // expected output in console is [{1:10},{2:20},{3:30}] we create a new array, but original myArray don't change

	// EXAMPLE #5
	var names = ['HTML', 'CSS', 'JavaScript'];
	var namesLength = names.map(function(n){
		return n + ' length = ' + n.length;
	});
	console.log(namesLength);

	// EXAMPLE #6 Task: получить массив содержащий длины слов
	var arr = ["Есть", "жизнь", "на", "Марсе"];
	var arrL = arr.map(function(element) {
		return element.length;
	});
	console.log(arrL);
} //learnMap();

function learnReduce() { // understanding reduce() method and statement like "return x = x1 + x2;"
	/*
	The reduce() and reduceRight() methods combine the elements of an array, using the
	function you specify, to produce a single value. This is a common operation in func-
	tional programming and also goes by the names “inject” and “fold.” Examples help
	illustrate how it works:
	*/

	// EXAMPLE #1
	var arr5 = [1,2,3,4,5];
	var sumArr5 = arr5.reduce(function (x,y){
		return x + y;
	}); 
	console.log (sumArr5 + ' sum of array');

	// EXAMPLE #2 getting factorial
	function getFactorial() {
		var rawInput = (prompt('Enter any number from 2 to 100'));
		if (rawInput >= 2 && rawInput <= 100 && Number(rawInput)) { 
			rawInput = Number(rawInput);
			var arr = [];
			for (var a = 0; a < rawInput && a + 1 < rawInput; a++) { // making array number from 2 to rawInput like [2,3,4 ... ,rawInput];
				arr[a] = a + 2;
			}
			var factorial = arr.reduce(function(a,b){ // using reduce() metod for getting factorial from variable rawInput
				return a * b;
			});
			alert('The factorial of ' + rawInput + ' is ' + factorial);
		} else {
			if (rawInput === null) return null; // stop prompting script if user press 'esc' or 'cansel'
			alert ("Only numbers from 2 to 100. \n\t Thanks for cooperation.");
			getFactorial(); // I use recursion function call if variable 'rawInput' not in a range 2 - 100
		}
		// Next task for future for this code: change it to use form input into HTML page rather than using prompt();
	} //getFactorial();

	// EXAMPLE #3 Task and solution
	/*
	На входе массив чисел, например: arr = [1,2,3,4,5].
	Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
	Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, 
	в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.
	*/
	function getSums(arr){
		var result = [];
		if (!arr.length) return result; // Если длинна приходящего массива нулевая, то и считать его смысла нет и возвращаем ноль.
		arr.reduce(function(accumulator, currentValue, index){
			return result[index] = accumulator + currentValue;}, 0);
		return result;
	} 
	console.log(getSums([1,2,3,4,5]));
	// В данном примере мы использовали инструкцию вида return result[index] = accumulator + currentValue. Оказывает так тоже можно. 
	// Чтобы понять и запомнить этот вариант записи, напишу простую функцию:
	
	// EXAMPLE #4 Understanding statements like this "return x = x1 + x2;"
	function assignAndReturn () {
		var b;
		console.log('b is ' + b); // b == undefined. Переменной еще не присвоенно значение.
		function myFunc (a) {
			return b = a + 10; // вычисляет значение справа, присваивает это значение переменной b,  возвращает это значение и прекращает работу функции. Т.е. здесь получается так, что инструкция вида 'return b = c + a' сначало вычисляет значение и присваивает это значение переменной "b", а потом уже возвращает это же значение и прекращает работу функции. Одним выстрелом убивается два зайца. Т.е. прежде чем вернуть вычесленное значение, как-бы по-пути мы можем это значение присвоить переменной "b".
		} 
		console.log (myFunc(2)); // вызываем функцию и она нам возвращает 12 
		console.log (b) // переменной b функция присвоила значение 12 и все это в одной строчке "return b = a + 10"
		/* ПОДРОБНОЕ ОБЪЕСНЕНИЕ
		Левый операнд у нас переменная "b", правый операнд у нас выражение "a + 10". 
		Интерпретатор вычисляет выражение в правой части и присваивает его переменной "b", и уже после этого 
		возвращает результат выражения "a + 10"  и прекращает работу функции.  
		Если бы было просто "return a + 10", то после вычисления выражения его результат 
		возвращался бы и память очищалась. 
		Но если мы делаем так "return b = a + 10" и если "b" у нас находится за пределами функции, 
		то мы создаем ссылку на результат вычислений "a + 10" и данный результат вычислений остается в памяти 
		и имеет ссылку в виде переменной "b". Вот такой замечательный синтаксис, который стоит запомнить и применять. 
		*/
	} assignAndReturn ()
} //learnReduce();

function xoReferee(data) { // Task "Тic-Тac-Тoe" from chekio.org

	var str = data.join(''); // join all strings in data
	console.log(str);
	for (var n = 0; n < 3; n++) {
		if (str[n] == str[n+3] && str[n+3] == str[n+6]) { if (str[n] != '.') return str[n]; }
	}

	for (var n = 0; n < 9; n += 3) {
		if (str[n] == str[n+1] && str[n] == str[n+2]) { if (str[n] != '.') return str[n]; }
	}

	if (str[0] == str[4] && str[4] == str[8]) { if (str[0] != '.') return str[0]; }
	if (str[2] == str[4] && str[4] == str[6]) { if (str[2] != '.') return str[2]; }
	return 'D';
} //var game = [".O.","...","..."]; //console.log(xoReferee(game));

function breakRings(rings){ // Task "Break Rings" from chekio.org
	// Step 1 Create array with subarrays [a,b] where "a" hold a serial number of ring, and "b" hold an amount of rings this one connect. 
    var counter = 0;// counter for broken rings
    
    while (rings.length > 0) {
    	var sequence = rings.map(function(item, index){
    		var str = item.join('');
    		return str;
    	});
    	sequence = sequence.join('').split('').sort(); //create sequence like ithis [1, 1, 2, 2, 3, 3, 4, 4];
    		//console.log(sequence);
	    function creatPairValues(arr) { // creating new array with subarrays pairs [a,b], where "a" hold a serial number of ring, and "b" hold an amount of rings this one connect, for example [[1,2], [2,2], [3,2], [4,2]] 
	    	var accum = 0;
	    	var pairsArray = [];
	    	// console.log(arr); // arr = [1,1,2,2,3,3,4,4] sorted array;
	    	while (arr.length > 0) { //count how many 'number' are in  the 'arr' and form new array "pairsArray" with subarrays [number,accum];
    			var number = arr[0]; // 1;
    			for (var i = 0; i < arr.length; i++) { 
    				if (number == arr[i]) {
    					accum += 1;
    				} 
    				else {
    					pairsArray.push([number,accum]);
    					arr.splice(0,i);
    					accum = 0;
    					break;
    				} 
    			}
    			if (number == arr[arr.length-1]) { // if all rest elements in array equal each other set 'arr' = [] to break cycle 'while'
    				pairsArray.push([number,accum]);
    				arr = []; 
    			}	
    		}
    		return pairsArray;
	    } 
	    sequence = creatPairValues(sequence); // creat array of subarrays like this  [[a,b],[c,d]];

	    function getLargestValue(sequence) { // sort sequence [[a,b],[c,d]] and return first largest value 'sequence[0][0]'
		    sequence.sort(function(a,b) {
		    	return b[1] - a[1];
		    });
		    return(sequence[0][0]);
		} 
		var largest = getLargestValue(sequence); // 'largest' it is the ring which go through other rings more of all 

		// Step 2 - delete all subarrays [a,b] in which appears values == veriable 'largest' (largest now = 4) and increase variable "counter" by 1
		
		for (var x = 0; x < rings.length; x++) {
			for (var y = 0; y < 2; y++) {
				if (rings[x][y] == largest) {
					rings.splice(x, 1);
					x = x - 1;
					break;
				}
			}
		}
		counter += 1;
	} // ending while cycle
	// STEP 3  - repeat Step 1 and Step 2 until variable 'rings' become empty array [] and then return 'counter'
    console.log (counter);
} 

//var rings = [[8, 9], [1, 9], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [8, 7]]; // should return 3
//var rings = [[1,9],[1,2],[8,5],[4,6],[5,6],[8,1],[3,4],[2,6],[9,6],[8,4],[8,3],[5,7],[9,7],[2,3],[1,7]]; // 5 
			//[[8,5], [4,6], [5,6], [3,4] [2,6] [9,6] [8,4] [8,3] [5,7] [9,7] [2,3]]; // - первая итерация; counter = 1
			//[[8,5],[3,4],[8,4],[8,3],[5,7],[9,7],[2,3]]; // - вторая итерация; counter = 2
			//[[8,5],[8,4],[5,7],[9,7]]; // - третья итерация, counter = 3
			//[[8,4],[9,7]]; // - четвертая итерация, counter = 4
			//[9,7]; // - пятая итерация, counter = 5
			//[]; // - шестая итерация, counter = 6
			//[[1,9],[1,7],[1,2],[2,6],[2,3],[3,4],[4,6],[5,6],[5,7],[8,5],[8,3],[8,1],[8,4],[9,6],[9,7]]
			//[[2,3],[2,6],[3,4],[4,6],[5,6],[5,7],[8,4],[8,3],[8,5],[9,7],[9,6]]
			//[[2,3],[3,4],[5,7],[8,5],[8,4],[8,3],[9,7]]
			//[[5,7],[8,5],[8,4],[9,7]]
			//[[9,7],[8,4]]
			//[[9,7]]
			//the key of solution of this task is the "graph theory"
//breakRings(rings);



