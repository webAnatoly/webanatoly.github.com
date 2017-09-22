if (!Element.prototype.remove) { // The Polyfill of ChildNode.remove() method for IE11-
  Element.prototype.remove =  function() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);  
    }
  }
}
