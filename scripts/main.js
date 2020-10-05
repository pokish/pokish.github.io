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
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('please enter your name.') ;
	if (!myName) {
		setUserName();
		}
		else {
	localStorage.setItem('name' , myName);
	myHeading.textContent = 'Mozilla is cool, '+myName;
	}
 }
if (!localStorage.getItem('name')) {
	setUserName();
	  }
	else {
		let revisit = localStorage.getItem('name');
		myHeading.textContent = 'Mozilla is cool, '+revisit;
 }
 myButton.onclick = function() {
 	setUserName();
 }