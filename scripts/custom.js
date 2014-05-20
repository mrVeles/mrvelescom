var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
if(iOS == false) {
	var video = document.getElementsByTagName('video')['0'];
	video.setAttribute('poster', 'img/poster.svg');
}