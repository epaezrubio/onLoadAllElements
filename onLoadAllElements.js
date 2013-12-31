window[addEventListener ? 'addEventListener' : 'attachEvent']( addEventListener ? 'load' : 'onload', function() {
	var e = document.querySelectorAll("[onload]:not(body):not(frame):not(frameset):not(iframe):not(img):not([type='image']):not(link):not(script):not(style)");
	for (var i = 0; i < e.length; i++) {
		console.log(e[i]);
		var script = e[i].getAttribute("onload").replace(new RegExp("(?!A-z0-9)this(?![A-z0-9])", "g"), "e[" + i + "]");;
		eval(script);
	}
})
