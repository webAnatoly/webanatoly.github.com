;'use strict';

if (!Element.prototype.remove) { // The Polyfill of ChildNode.remove() method for IE11-
  Element.prototype.remove =  function() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);  
    }
  }
}

function removeAllChildren(element) { // Element.innerHTML doesn't work for tables in IE8- that is why a "try catch" construction is used here
  try {
    element.innerHTML = '';
  } catch (e) {
    console.log(e.name + " " + e.message);  
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }  
  }
}
