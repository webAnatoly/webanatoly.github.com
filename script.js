'use strict';

function changeColor() { //changing background color of the HTML page
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
document.getElementById('colorBotton').onclick = changeColor; // Now property "onclick" of "colorButton" object has a function "changeColor" as value, i.e. the "onclick" is a method which you create by yourself and define what it actually should do when user click on object. 

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
document.getElementById('buttonProperties').onclick = getProperties;

function textClocks () { // this function show tick clocks into button as text.  
	var gDate = new Date(); // gDate it's Date object for using into my function;
	var myClock = document.getElementById('clockedButton');
	var h = gDate.getHours(); (h < 10) ? h = '0'+ h : h; // hours
	var m = gDate.getMinutes(); (m < 10) ? m = '0'+ m : m; // minutes
	var s = gDate.getSeconds(); (s < 10) ? s = '0'+ s : s; // seconds
	myClock.innerHTML =  "<button type='button' class='buttonTransparent' onclick='textClocks()'><pre style='font-size: 15px'>" + h + ":" + m + ":" + s + '</pre>' + '</button>';
	setInterval(textClocks, 1000);
}
document.getElementById('clockedButton').onclick = textClocks; // event handler	


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
    			if (number == arr[arr.length-1]) { // if all rest elements in array equal each other set 'arr' = [] to break the loop 'while'
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
	} // ending the while loop
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

function fizzBuzz() { // FizzBuzz game
	/* We're going to play a game of FizzBuzz. The rules are simple. We want to count from 1 to 20. 
	But if the number is divisible by 3, we're going to print "Fizz". 
	And if the number is divisible by 5 we're going to print "Buzz". 
	
	For numbers divisible by 3, print out "Fizz".
	For numbers divisible by 5, print out "Buzz".
	For numbers divisible by both 3 and 5, print out "FizzBuzz" in the console.
	Otherwise, just print out the number.*/

	for (var n = 1; n <= 30; n++) {
		if (!(n % 3) && !(n % 5)) { console.log (n + ' ---- ' + 'FizzBuzz'); }
		else if (!(n % 3)) { console.log (n + ' ---- ' + 'Fizz'); }
		else if (!(n % 5)) { console.log (n + ' ---- ' + 'Buzz'); } 
		else { console.log(n); }
	}
} //fizzBuzz();

function useSwitch() { // understanding the switch statement
	// EXAMPLE #1 
	function getReview(movie) {
		switch (movie) {
			case "Toy Story 2":
			return "Great story. Mean prospector.";

			case "Finding Nemo":
			return "Cool animation, and funny turtles.";

			case "The Lion King":
			return "Great songs.";

			default:
			return 'I don\'t know';
		}
	}
	console.log(getReview("Finding Nemo"));

	// EXAMPLE #2 if don't insert 'break' (or return) all case statements will run from the case where criteria is met
	var expr = 'Oranges';
	switch (expr) {
	  case "Oranges":
	    console.log("Oranges are $0.59 a pound.");
	    //break;
	  case "Apples":
	    console.log("Apples are $0.32 a pound.");
	    //break;
	  case "Bananas":
	    console.log("Bananas are $0.48 a pound.");
	    //break;
	  case "Cherries":
	    console.log("Cherries are $3.00 a pound.");
	    //break;
	  case "Mangoes":
	  case "Papayas":
	    console.log("Mangoes and papayas are $2.79 a pound.");
	    //break;
	  default:
	    console.log("Sorry, we are out of " + expr + ".");
	}
} //useSwitch();

// ========================================== OOP =================================================
// ===== Introduction to OOP: Constructors, Classes, Prototypes, Inheritance, Public, Private =====
//================================================================================================

function intrOOP() { // introduction to OOP and interesting OOP patterns 
	// EXAMPLE #1
	var setAge = function (newAge) {
  		this.age = newAge;
	};
	var bob = new Object();
	bob.age = 30;
	bob.setAge = setAge; // here we're adding the new propertie 'setAge' into object bob and seting the function 'setAge' as value.
	bob.setAge(50); // change age from 30 to 50
	console.log(bob);

	// EXAMPLE #2
	var rectangle = {
		width: 10,
		height: 20
	}

	var setWidth = function(w){
		this.width = w;
	}
	var setHeight = function(h){
		this.height = h;
	}

	rectangle.setWidth = setWidth;
	rectangle.setHeight = setHeight;

	rectangle.setWidth(1);
	rectangle.setHeight(2);

	console.log(rectangle.width); // 1
	console.log(rectangle.height); // 2

	// EXAMPLE #3 my own coding
	var obj = {
		x: 0,
		y: 1,
	};
	obj.setX = function(any) { this.x = any; } // adding property 'setX' in 'obj' with value as a function. This is about how to create methods' object.
	obj.setY = function(any) { this.y = any; }

	obj.setX(false);
	obj.setY(true);

	console.log('x = ' + obj.x); // x = false
	console.log('y = ' + obj.y); // y = true

	// EXAMPLE #4 
	var square = new Object();
	square.sideLength = 6;
	square.calcPerimeter = function() {
		return this.sideLength * 4;
	};

	square.calcArea = function() {
		var s = this.sideLength;
		return s * s;
	}

	var p = square.calcPerimeter(); console.log('Perimeter ' + p);
	var a = square.calcArea(); console.log('Area: ' + a); 

	// EXAMPLE #5 using Constructor
	var Cat = function(age, color, name) {
		this.color = color;
		this.age = age;
		this.getColor = function(){console.log("This is a " + this.color.toUpperCase() + " cat");};
	}

	var meow = new Cat(1, 'white');
	meow.getColor();

	// EXAMPLE #6 Arrays of Objects
	function Person (name, age) {
		this.name = name;
		this.age = age;
	}
	var arr = new Array();
	arr[0] = new Person ('Alice', 16);
	arr[1] = new Person ('Bob', 42);
	arr[2] = new Person ('Nick', 34);
	arr[3] = new Person ('Timmy', 6);

	console.log(arr[0].name + ' - (this is a name from object in the array)');

	// EXAMPLE #7 Loop through an array of objects and access properties or methods
	function Person (name, age) {
	    this.name = name;
	    this.age = age;
	}
	// Now we can make an array of people
	var family = [];
	family[0] = new Person('Alice', 40);
	family[1] = new Person('Bob', 42); 

	// loop through our new array
	for (var a = 0; a < family.length; a++) {
	    console.log(family[a].name + " \t\t\t it's from EXAMPLE #7");
	}

	// EXAMPLE #8 Passing Objects into Functions
	//In addition to making arrays of Objects, we can use objects as parameters for functions as well.

	function Person (name, age) {
	    this.name = name;
	    this.age = age;
	}

	// We can make a function which takes persons as arguments
	// This one computes the difference in ages between two people
	var ageDifference = function(person1, person2) {
	    return person1.age - person2.age;
	}

	var alice = new Person("Alice", 30);
	var billy = new Person("Billy", 25);

	// get the difference in age between alice and billy using our function
	var diff = ageDifference(alice, billy);
	console.log(diff + " \t\t\t\t EXAMPLE #7: difference between Alice and Billy ages"); 

	// EXAMPLE #9 == .hasOwnProperty() == 
	/* Method hasOwnProperty() returns true or false, based on whether an object has a certain property. */
	var suitcase = {
    	shirt: "Hawaiian",
	};
	suitcase.hasOwnProperty('polo') ? console.log(suitcase.polo) : suitcase.polo = 'Red Polo-Shirt';

	// EXAMPLE #10 interesting stuff with ('property' in 'object'), ('var' in "GlobalObject")
	var obj10 = {a:1, 'b':2, 'c':3};
	console.log (('a' in obj10) + ' ------ return true because "a" is in object obj10');
	console.log((a in obj10) + ' ------ false? why?')
	console.log (('x' in obj10) + ' ------ return false because object do NOT have "x"');
} //intrOOP();

function whatClass() { // understanding Classes
	
	// EXAMPLE #1 == Introduction ==
	/* Сonstructors are a way to make objects, but they actually do even more than that.
	When you make a constructor, you are in fact defining a new class. 
	A class can be thought of as a type, or a category of objects-kind of like how Number and String are 
	types in JavaScript. Take a look at our Person example. 
	In this case 'bob' and 'susan' are two separate objects, but both belong to the class Person. */

	function Person(name,age) {
		this.name = name;
		this.age = age;
	}

	var bob = new Person("Bob Smith", 30); // 'bob' belong to the class Person
	var susan = new Person("Susan Jordan", 35); // 'susan' belong to the class Person

	function Circle(radius) {
		this.radius = radius;
		this.getArea = function() { return Math.PI * (this.radius * this.radius); };
	}

	var circle1 = new Circle(4); // 'circle1' belong to the class Circle
	var circle2 = new Circle(100); // 'circle2' belong to the class Circle
	console.log ('Area of circle is ' + Math.round(circle2.getArea()) + ' cm' );

	// EXAMPLE #2 == Prototype == 
	/* So we know that a class will have certain properties and methods, 
	but what keeps track of what a given class can or can't do? 
	What a class has or doesn't have? That is the job of the PROTOTYPE.
	
	JavaScript automatically defines the prototype for class with a constructor. 

	For example, our 'Dog' constructor ensures that the 'Dog' prototype has a breed property. 
	Remember, the 'Dog' prototype keeps track of what 'Dog' has, doesn't have, can, or can't do.
	 */

	function Dog (breed) {
  		this.breed = breed;
	}

	// here we make buddy and teach him how to bark
	var buddy = new Dog("Golden Retriever");
	buddy.bark = function() {
  		console.log("Woof");
	};
	buddy.bark();

	// here we make snoopy
	var snoopy = new Dog("Beagle");
	
	try {
		snoopy.bark(); // this causes an error, because snoopy doesn't know how to bark!
	}
	catch (err) {
		console.log('ERROR: this causes an error, because snoopy doesn\'t have bark() method! ');
	}

	/* if you want to add a method to a class such that all members of the class can use it, 
	we use the following syntax to extend the prototype:

		className.prototype.newMethod =
			function() {
				statements;
			};

	to add new method for ALL instances of Dog we need write this:
		Dog.prototype.bark = function() {
	  		console.log("Woof");
		};
		buddy.bark();
	*/ 

	Dog.prototype.bark = function() {
	  		console.log("Woof");
		};
	snoopy.bark() // now instances of Dog snoopy has method bark() i.e. class Dog has this method and all his instances will be use method bark()

	//EXAMPLE #3 
	/* Classes are very important in object-oriented programming. 
	This is because a class tells us helpful information about objects, 
	and you can think of an object as a particular instance of a class. */

	/* For example, look at our 'Person' class again in the console. 
	We know that any 'Person' will have a 'name' and 'age', because they are in the constructor. 
	This allows us to create a function like 'printPersonName()', which will take a 'Person' as an argument and 
	print out their 'name'. We know the function will work on any 'Person', 
	because 'name' is a valid property for that class. */

	function Person(name,age) {
 		this.name = name;
 		this.age = age;
	}
	// a function that prints the name of any given person
	var printPersonName = function (p) {
		console.log(p.name);
	};

	var bob = new Person("Bob Smith", 30);
	printPersonName(bob); 

	//Example #4 == Object.prototype.method == 
	
	function Cat(name, breed) {
	    this.name = name;
	    this.breed = breed;
	}

	var cheshire = new Cat("Cheshire Cat", "British Shorthair");
	var gary = new Cat("Gary", "Domestic Shorthair");

	Cat.prototype.meow = function() { // adding a new method into class 'Cat' by 'prototype'
	    console.log ('Meow!');
	}
	cheshire.meow();
	gary.meow();	
} //whatClass();

function whatInheritance() { // understanding Inheritance
	/* In object-oriented programming, inheritance allows one class to see and 
	use the methods and properties of another class. You can think of it as a child being able to use 
	his or her parent's money because the child inherits the money. */

	/* Remember, inheritance lets us see and use properties and methods from another class. 
	To say that Penguin inherits from Animal, we need to set Penguin's prototype to be Animal.
	*/

	// EXAMPLE #1 
	/* the original Animal class and sayName method */
	function Animal(name, numLegs) {
	    this.name = name;
	    this.numLegs = numLegs;
	}
	Animal.prototype.sayName = function() {
	    console.log("Hi my name is " + this.name);
	};

	// a Penguin class
	function Penguin(name) {
	    this.name = name;
	}

	Penguin.prototype = new Animal();
	var p = new Penguin('Tom'); // now we can use sayName() method for Penguin class becaus we've inherited it from Animal class

	p.sayName();

	//EXAMPLE #2
	function example2() {

		function Penguin(name) {
	    	this.name = name;
	    	this.numLegs = 2;
		}

		// create your Emperor class here and make it inherit from Penguin
		function Emperor(name) {
	    	this.name = name;
		}
		Emperor.prototype = new Penguin();

		// create an "emperor" object and print the number of legs it has
		var emperor = new Emperor("Caesar");
		console.log(emperor.numLegs + ' \t  this is from EXAMPLE #2'); // Output should be 2 because Emperor class have inherited from Penguin property 'numLegs'!
	} //example2();

	// EXAMPLE #3 
	//========== Up the Food-I-mean-Prototype Chain ================= 
	/* A penguin is an animal and an emperor penguin is a penguin. Are emperor penguins animals too? Of course!
	The "prototype chain" in JavaScript knows this as well. 
	If JavaScript encounters something it can't find in the current class's methods or properties, 
	it looks up the prototype chain to see if it's defined in a class that it inherits from. 
	This keeps going upwards until it stops all the way at the top: the mighty Object.prototype (more on this later).
	By default, all classes inherit directly from Object, unless we change the class's prototype, 
	like we've been doing for Penguin and Emperor. 

	Let's see how going up the prototype chain works! We've defined some classes and inheritance patterns: 
	Emperor inherits from Penguin which inherits from Animal. 
	We've also created an instance of the Emperor class.

	Remember how the prototype chain works: if a property is not defined for a class, 
	this class's prototype chain will be traversed upwards until one is found (or not) in a parent (higher) class. */

	function example3() {
			// original classes
			function Animal(name, numLegs) {
			    this.name = name;
			    this.numLegs = numLegs;
			    this.isAlive = true;
			}
			function Penguin(name) {
			    this.name = name;
			    this.numLegs = 2;
			}
			function Emperor(name) {
			    this.name = name;
			    this.saying = "Waddle waddle";
			}

			// set up the prototype chain
			Penguin.prototype = new Animal(); // Penguin class inherit all properties:values of class Animal
			Emperor.prototype = new Penguin(); // Emperor ingerit all properties of Penguin and Animal

			var myEmperor = new Emperor("Jules");

			console.log( myEmperor.saying ); // should print "Waddle waddle" (property 'saying' is in Emperor)
			console.log( myEmperor.numLegs ); // should print 2 (property 'numLegs' isn't in Emperor but inherited from Penguin)
			console.log( myEmperor.isAlive ); // should print true (property 'isAlive' isn't in Emperor but inherited from Penguin, but Penguin inherited this property from Animal )
			console.log( myEmperor.hasOwnProperty('numLegs')) // return 'false' because class Emperor doesn't have the 'numLegs', but inherits it from Penguin
	} //example3();
} //whatInheritance()

function aboutPrivate() { // Private propertied(variables) and private methods(functions)
	/* Just as functions can have local variables which can only be accessed from within that function, 
	objects can have private variables.  */

	// EXAMPLE #1 Private properties
	function Person(first,last,age) {
		this.firstname = first;
		this.lastname = last;
		this.age = age;
		var bankBalance = 7500; // this is private property

		this.getBalance = function(){ // ihis is public method which can handle with privante property bankBalance
			return bankBalance;
		}
	}

	// create your Person 
	var ant = new Person('Anatoly','Demon',34);
	// if you try to print his bankBalance it will be 'undefined'
	console.log(ant.bankBalance + ' --- it\'s private'); // output is'undefined' because variable bankBalance are private

	/* Although we cannot directly access private variables from outside the class, 
	there is a way to get around this. 
	We can define a public method that returns the value of a private variable. */
	var myBalance = ant.getBalance();
	console.log(myBalance);

	//EXAMPLE #2 Private methods
	/* Methods can also be private within a class and inaccessible outside of the class. 
	Changing 'this.returnBalance' from the last exercise to 'var returnBalance' makes this method private. 
	If you run the program trying to access the method you get an undefined error this time. */
	function example2() {
		function Person(first,last,age) {
		   	this.firstname = first;
		   	this.lastname = last;
		   	this.age = age;
		   	var bankBalance = 7500;
		  
		   	var returnBalance = function() { // now this method privite and we can't use it outside of constructor Person
		      	return bankBalance;
		   	};
       
   			// The way to access a private method is similar to accessing a private variable. 
   			// You must create a public method for the class that returns the private method.
   			// create the new function here
   			this.askTeller = function() {
   				return returnBalance; 
   			}
		}

		var john = new Person('John','Smith',30);
		console.log(john.returnBalance); // our attempt to use method 'returnBalance' will fall and return 'undefined' value because this method is PRIVATE, we can use this method only within constructor 'Person'.
		var myBalanceMethod = john.askTeller(); // write in variable a private method 'returnBalance'
		var myBalance = myBalanceMethod(); // call method
		console.log(myBalance);
	} example2();

	// EXAMPLE #3 using password
	function example3() {
		function Person(first,last,age) {
			this.firstname = first;
			this.lastname = last;
			this.age = age;
			var bankBalance = 7500;

			this.askTeller = function(password) {
				if (password == 1234) return bankBalance;
				else return "Wrong password.";
			};
		}

		var john = new Person('John','Smith',30);
		/* the variable myBalance should access askTeller() with a password as an argument  */
		var myBalance = john.askTeller(1234);
		console.log(myBalance + '\t password is correct');
	} example3();

	/* SUMMARY:
	Public properties can be accessed from outside the class
	Private properties can only be accessed from within the class
	
	Using constructor notation, a property declared as this.property = "someValue;" will be public, 
	whereas a property declared with var property = "hiddenValue;" will be private.

	*/
} //aboutPrivate();
// ======================= END of Introduction to OOP section ==============================


function understandArguments() { // understanding "arguments" object
	/* The arguments object is a local variable available within all functions.*/
	function test(a) {
		console.log(arguments.length); // Use arguments.length to determine the number of arguments passed to the function
		console.log(a, arguments[1], arguments[2], arguments[3]);
		console.log(typeof arguments); // 'object'
		console.log(typeof arguments[2]) // 'number'
		console.log(typeof arguments[3]);
	}
	test('first', 'second', 3);
	console.log(test.length + ' - how many arguments has a function');	// To determine the number of parameters in the function signature. 

	//EXAMPLE #2
	var vasya = {
		age: 21,
		name: 'Вася',
		surname: 'Петров'
	};

	var user = {
		isAdmin: false,
		isEmailConfirmed: true
	};

	var student = {
		university: 'My university'
	};

	function copy () { // добавить к vasya свойства из user и student
		for (var n = 1; n < arguments.length; n++) {
			for (var key in arguments[n]) {
				arguments[0][key] = arguments[n][key];
			}
		}
	}

	copy(vasya, user, student);

	//alert( vasya.isAdmin ); // false
	//alert( vasya.university ); // My university
	//console.log(vasya);

	//EXAMPLE #3 Именованные аргументы
	function showWarning(options) {
		var width = options.width || 300;
		var height = options.height || 100;
		var contents = options.contents || 'Предупреждение';
		console.log(width);
		console.log(height);
		console.log(contents);
	}
	showWarning( {contents:"Вы вызвали функцию"} );

	//EXAMPLE #4 Task:
	/* Как в функции отличить отсутствующий аргумент от undefined?
	выведите 1, если первый аргумент есть, и 0 - если нет*/
	/* my solution:
	function f(x) {
  		if (arguments.length == 1) console.log(1 + ' the first argument equal to the undefined');
  		else console.log(0 + ' function didn\'t get any argument');
	}
	*/
	// best solution:
	function f(x) {
		arguments.length ? console.log(1 + ' the first argument equal to the undefined') : console.log(0 + ' function didn\'t get any argument');
	}

	f(undefined); // 1
	f(); // 0

	//EXAMPLE #5 Task:
	// Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:
	function sum() {
		var counter = 0;
		for (var n = 0; n < arguments.length; n++) {
			counter += arguments[n];
		}
		return counter;
	} console.log(sum(4,5,1,3) + ' Friday') // should be 13;
} //understandArguments();

function useLet() { // keyword 'let'
	// Example with 'var' keyword
	var a = 1;
	if(true){
	    var a = 2;
	    console.log('a = ' + a);//2
	}
	console.log('a = ' + a);//2

	// Example with 'let' keyword
	var b = 1;
	if(true){
	    let b = 2;
	    console.log('b = ' + b);//2
	}
	console.log('b=' + b + ' b = 1, becouse we using \' let in if blok {} ');//1
} //useLet();

function interestingExample() { //interesting example
	var a = 1; 
	function b() { 
		//{ function(){} }
		a = 10;
		console.log(a); // 10  
		return; 
		function a() {};
	} 
	b(); 
	console.log(a);//  1, but not 10, why? because of hoisting! 
} //interestingExample();


// ==============================

function studyingClosures() {

	function makeCounter() {
  		var currentCount = 1;

		return function() { // (**)
			return currentCount++;// Сначала возвращает потом увеличивает на единицу! Потому что оператор инкремента стоит после переменной.
		};
	}

	var counter = makeCounter(); // (*)

	// каждый вызов увеличивает счётчик и возвращает результат
	alert( counter() ); // 1
	alert( counter() ); // 2
	alert( counter() ); // 3

	// создать другой счётчик, он будет независим от первого
	var counter2 = makeCounter();
	alert( counter2() ); // 1
} //studyingClosures()

function functionAsObject() {
	// EXAMPLE #1 =======================================================================
	studyingClosures.test = "You can add a property to a function like to an object"
	console.log (studyingClosures.test);

	// EXAMPLE #2 =======================================================================
	function makeCounter() {
		function counter() {
			return counter.currentCount++; // return a property of the 'counter()' object
		};
	counter.currentCount = 1;

	return counter;
	}
	var counter = makeCounter();
	alert( counter() ); // 1
	alert( counter() ); // 2

	// EXAMPLE #3 =======================================================================
	function a2() {
		var a = 4;
	}

	a2.test = 4;
	console.log (++a2.test); // 5;
	try {
		++a; // Error: a is not defined
	}
	catch (err) {
		console.log ('Error: a is not defined');
	}
} //functionAsObject();

function studyIAFE() { // Immediately Invoked Anonymous Function Expression

	/* A function expression can be used as a IIFE (Immediately Invoked Function Expression) 
	which runs as soon as it is defined. */

	(function() { console.log('Hello World'); } ) (); // ( function(){} ) ();

	(function() { console.log('Hello World'); } () ); // ( function(){}() );

	(function(b) { console.log(b); } ) ('Hello World'); // ( function(param){} ) ();

	(function(b) { console.log(b); } ('Hello World') ); // ( function(param){} () );

	(function(b) { console.log(b + arguments[1]); } ('Hello', ' World') ); // all functions in JavaScript have a build-in 'arguments' object.
} //studyIAFE();

// ==============================


function newFunction () { // understanding 'new Function' working with 'LexicalEnvironment'

	var a = 1;

	function getFunc() {
			var a = 2;

			var func = new Function('', 'alert(a)');

			return func;
	}
	try {
		getFunc()(); 
	}
	catch(err) {

		/* Error "a is not defined", because when we use the 'new Function' syntax a special property [[Scope]] refer to the window.
		To check that you can declare the "var a = 1" in global area, and result will be "1" */
		console.log(err);
	}
} //newFunction();





















