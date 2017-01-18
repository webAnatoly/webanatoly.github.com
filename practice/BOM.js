; 'use strict';
// Detecting The Browser

var browsers = {

	// Opera 8.0+
	isOpera: (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0,

	// Firefox 1.0+
	isFirefox: typeof InstallTrigger !== 'undefined',

	// Safari 3.0+ "[object HTMLElementConstructor]" 
	isSafari: Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification),

	// Internet Explorer 6-11
	isIE: /*@cc_on!@*/false || !!document.documentMode,

	// Edge 20+
	// isEdge: !this.isIE && !!window.StyleMedia, // doesn't work properly in the IE 11

	// Chrome 1+
	isChrome: !!window.chrome && !!window.chrome.webstore,

	// Blink engine detection
	// isBlink: (this.isChrome || this.isOpera) && !!window.CSS // I don't understand this yet

};

for (var key in browsers) {
	console.log(key + ": " + browsers[key]);
	if (browsers[key] == true) {
		var detectedBrowser = key;
	}
}

document.getElementById('yourBrowser').innerHTML = 'Your browser is ' + detectedBrowser.substring(2);

