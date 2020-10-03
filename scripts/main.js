let myimg = document.querySelector('img');
	myimg.onclick = function() {
	let mysrc = myimg.getAttribute('src');
	if (mysrc === 'images/firefox.png') {
		myimg.setAttribute('src' , 'images/firefox2.jpg');
		}
	else {
		myimg.setAttribute('src' , 'images/firefox.png');
		}
}