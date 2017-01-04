'use strict';

var a = 'Hello World';
var rus = 'Проверка поддержки русского языка. Если Вы видите это сообщение, значит кириллица отображается корректно';
console.log(rus);


/* 1st method:
You can declare and initialize a Date object in four ways. In the ﬁ rst method, you simply declare a new 
Date object without initializing its value. In this case, the date and time value will be set to the current 
date and time on the PC on which the script is run.*/

function getCurrentDate(){
    var theDate1 = new Date();
    document.getElementById('currentDate').innerHTML = theDate1;  
}

/* 2nd method:
Secondly, you can deﬁ ne a Date object by passing the number of milliseconds since January 1, 1970, at 
00:00:00 GMT. In the following example, the date is 31 January 2000 00:20:00 GMT (that is, 20 minutes 
past midnight).
It’s unlikely that you’ll be using this way of deﬁ ning a Date object very often, but this is how JavaScript 
actually stores the dates.*/

function getDateMilliseconds(){
    var millDate = new Date(949278000000);
    document.getElementById('millisecondsDate').innerHTML = millDate;
} 

/* 3rd method:
The other formats for giving a date are simply for convenience.
Next, you can pass a string representing a date, or a date and time. In the following example, you have 
“31 January 2010”. */

function getDateThird(){
    var thirdDate = new Date('01 01 2017');
    document.getElementById('thirdDate').innerHTML = thirdDate;
}


/* 4th method:
In the fourth and ﬁnal way of deﬁning a Date object, you initialize it by passing the following param-
eters separated by commas: year, month, day, hours, minutes, seconds, and milliseconds. For example:
var theDate4 = new Date(2010,0,31,15,35,20,20);
This date is actually 31 January 2010 at 15:35:20 and 20 milliseconds. You can specify just the date part if 
you wish and ignore the time. */

function getDate4(){
    var Date4 = new Date(2017,0,1, 19,40,20,20);
    document.getElementById('Date4').innerHTML = Date4;
}

var currentDate = new Date(); // this is the global current date that we'll use in our following functions

function getCurrentDay() {
    console.log("Current Day: " + currentDate.getDate());
    document.getElementById('day').innerHTML = currentDate.getDate();
}

function getDayOfWeek() {
    var weekDays = {
        '0': 'Sunday',
        '1': 'Monday',
        '2': 'Tuesday',
        '3': 'Wednesday',
        '4': 'Thursday',
        '5': 'Friday',
        '6': 'Saturday'
    };
    document.getElementById('day_of_week').innerHTML = currentDate.getDay() + ' ' + (weekDays[currentDate.getDay()]);
}

function getNumberOfMonth() {
    var rusMonths = {
        0: 'Январь',
        1: 'Февраль',
        2: 'Март',
        3: 'Апрель',
        4: 'Май',
        5: 'Июнь',
        6: 'Июль',
        7: 'Август',
        8: 'Сентябрь',
        9: 'Октябрь',
        10: 'Ноябрь',
        11: 'Декабрь'
    };
    document.getElementById('number_of_month').innerHTML = currentDate.getMonth() + ' ' + rusMonths[currentDate.getMonth()];
}

function getYear() {
    document.getElementById('full_year').innerHTML = currentDate.getFullYear();
}

function getCurrentReadableDate() {
    document.getElementById('readable_date').innerHTML = currentDate.toDateString();
}

// Setting Date Values

function setMyDate() {
    currentDate.setDate(10);
    document.getElementById('1').innerHTML = currentDate;
}

function setMyMonth() {
    currentDate.setMonth(1); // it's will be February.
    document.getElementById('2').innerHTML = currentDate;
}

function setMyYear() {
    currentDate.setFullYear(1982);
    document.getElementById('3').innerHTML = currentDate;
}

/* Note that for security reasons, there is no way for web-based JavaScript to change the current date and 
time on a user’s computer.*/

function addingDate() {
    var nowDate = new Date();
    var currentDay = nowDate.getDate();
    nowDate.setDate(currentDay + 28);
}

// Getting Time Values
/*The methods you use to retrieve the individual pieces of time data work much like the get methods for 
date values. The methods you use here are:
getHours()
getMinutes()
getSeconds()
getMilliseconds()
toTimeString()*/

function gettingTime() {
    var myHour = currentDate.getHours();
    var myMinute = currentDate.getMinutes();
    var mySeconds = currentDate.getSeconds();
    var milliSec = currentDate.getMilliseconds();
    var myTimeString = currentDate.toTimeString();
    console.log("Hours: " + myHour + ', ' + "Minutes: " + myMinute + ', ' + "Seconds: " + mySeconds + ', ' + 'Milliseconds: ' + milliSec);
    console.log(myTimeString);
}

/* Setting Time Values
When you want to set the time in your Date objects, you have a series of methods similar to those used 
for getting the time:
setHours()
setMinutes()
setSeconds()
setMilliseconds()
*/

function settingTime() {
    currentDate.setHours(9);
    currentDate.setMinutes(57);
    console.log(currentDate);
    //currentDate.setMinutes(64);
    //console.log(currentDate);
    var tempMinutes = currentDate.getMinutes();
    currentDate.setMinutes(tempMinutes + 64);
    console.log(currentDate);
} 









