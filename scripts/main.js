let myImage = document.querySelector('img');

myImage.onclick = function () {
	let mySrc = myImage.getAttribute('src');
	if (mySrc == 'images/tu.jpg') {
		myImage.setAttribute('src','images/pian.jpg');
	}else{
		myImage.setAttribute('src','images/tu.jpg');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
    }else{
  	localStorage.setItem('name', myName);
  	myHeading.textContent = '千与千寻太好看了，' + myName;
    }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '千与千寻太好看了，' + storedName;
}

myButton.onclick = function() {
   setUserName();
}