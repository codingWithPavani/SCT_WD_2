let timer;
let [seconds, minutes, hours] = [0, 0, 0];
let isRunning = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const resumeBtn = document.getElementById("resume"); // NEW
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const lapsList = document.getElementById("laps");

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

pauseBtn.style.display = "none";
resumeBtn.style.display = "none";
resetBtn.style.display = "none";
lapBtn.style.display = "none";

// Start
startBtn.onclick = () => {
  timer = setInterval(stopwatch, 1000);
  isRunning = true;
  startBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
  resetBtn.style.display = "inline-block";
  lapBtn.style.display = "inline-block";
};

// Pause
pauseBtn.onclick = () => {
  clearInterval(timer);
  isRunning = false;
  resumeBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
  lapBtn.style.display = "none";
};

// Resume
resumeBtn.onclick = () => {
  if (!isRunning) {
    timer = setInterval(stopwatch, 1000);
    isRunning = true;
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
    lapBtn.style.display = "inline-block"
    
    
  }
};

// Reset
resetBtn.onclick = () => {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  isRunning = false;
  updateDisplay();
  startBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
  resetBtn.style.display = "none";
  lapBtn.style.display = "none";
  

  lapsList.innerHTML = "";
};

// Lap
lapBtn.onclick = () => {
  if (isRunning) {
    const li = document.createElement("li");
    li.innerText = `Lap: ${display.innerText}`;
    lapsList.appendChild(li);
  }
};