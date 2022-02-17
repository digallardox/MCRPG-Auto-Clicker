let button = document.getElementById('clicker');
let clickSpeed = 2;

let clicker = 
	setInterval(function () {
		button.click();
	}, clickSpeed);

function stopInterval() {
	clearInterval(clicker);
}

setTimeout(stopInterval, 10000);
