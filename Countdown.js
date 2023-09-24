const timerDisplay = document.getElementById('timer-display');
const startButton = document.getElementById('start-button');
const timeButton = document.getElementById('time-button');

let countdown;
let seconds; // Define the 'seconds' variable outside the functions

function getTime() {
    seconds = parseInt(prompt('Please Enter the time in Seconds')); // Parse the input as an integer
    updateTimerDisplay(); // Update the display immediately
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function updateTimerDisplay() {
    timerDisplay.textContent = formatTime(seconds);
}

function startCountdown() {
    countdown = setInterval(function () {
        seconds--;

        if (seconds >= 0) {
            updateTimerDisplay();
        } else {
            clearInterval(countdown);
            timerDisplay.textContent = "Time's up!";
        }
    }, 1000);
}

// Attach event listeners
startButton.addEventListener('click', startCountdown);
timeButton.addEventListener('click', getTime);
