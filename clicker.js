let button = document.getElementById('clicker');

// clickSpeed is in milliseconds
let clickSpeed = 2;

let clicker = 
	setInterval(function () {
		button.click();
	}, clickSpeed);

function stopInterval() {
	clearInterval(clicker);
}

setTimeout(stopInterval, 10000);
