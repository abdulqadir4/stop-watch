let startTime;
let endTime;
let timer;
let elapsedTime = 0;

document.getElementById('start-btn').addEventListener('click', startTimer);
document.getElementById('stop-btn').addEventListener('click', stopTimer);
document.getElementById('reset-btn').addEventListener('click', resetTimer);

function startTimer() {
	startTime = parseInt(document.getElementById('start-input').value);
	endTime = parseInt(document.getElementById('end-input').value);
	timer = setInterval(() => {
		elapsedTime++;
		updateTime();
		if (elapsedTime >= endTime) {
			stopTimer();
		}
	}, 1000);
}

function stopTimer() {
	clearInterval(timer);
}

function resetTimer() {
	clearInterval(timer);
	elapsedTime = 0;
	updateTime();
}

function updateTime() {
	let seconds = elapsedTime % 60;
	let minutes = Math.floor(elapsedTime / 60) % 60;
	let hours = Math.floor(elapsedTime / 3600);

	hours = hours < 10? '0' + hours : hours;
	minutes = minutes < 10? '0' + minutes : minutes;
	seconds = seconds < 10? '0' + seconds : seconds;

	document.getElementById('time').innerHTML = hours + ':' + minutes + ':' + seconds;
}