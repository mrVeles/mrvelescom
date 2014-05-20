var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
console.log(iOS);
if(iOS == true) {
	var link = document.createElement('link');
	link.setAttribute('rel', 'stylesheet');
	link.setAttribute('href', 'css/ios.css');
	document.getElementsByTagName('head')['0'].appendChild(link);
}