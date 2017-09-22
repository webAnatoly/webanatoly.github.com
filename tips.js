if (!Element.prototype.remove) { // The Polyfill for IE11-
  Element.prototype.remove =  function() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);  
    }
  }
}
