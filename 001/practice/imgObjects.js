
var myImages = new Array('yellow.gif','red.gif','black.gif','blue.gif');
var imgIndex = prompt('Enter a number from 0 to 3','');
document.images['img1'].src = myImages[imgIndex];

/* The links Collection
For each hyperlink element <a/> deﬁ ned with an href attribute, the browser creates an a object. The most 
important property of the a object is the href property, corresponding to the href attribute of the tag. Using 
this, you can ﬁ nd out where the link points to, and you can change this even after the page has loaded.
The collection of all a objects in a page is contained within the links collection, much as the img 
objects are contained in the images collection, as you saw earlier.
*/

/* TASK: 
1. Connect to a hyperlink’s click event to randomly change the image loaded in a page. 
2. Don't allow the link "<a href=https://github.com>" to go to the github.com */

function changeImg (event) {
	event.preventDefault(); // prevent a default behavior of an "<a></a>" element.
	var n = Math.round(Math.random() * 3);
	document.images[0].src = myImages[n];
}


document.getElementById('myLink').addEventListener('click', changeImg);
document.getElementById('linkImg').addEventListener('click', changeImg);



