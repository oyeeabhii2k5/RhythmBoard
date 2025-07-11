// === Clock ===
function updateTime() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  const date = now.toDateString();
  document.getElementById("time").innerText = time;
  document.getElementById("date").innerText = date;
}
setInterval(updateTime, 1000);
updateTime();

// === Task List ===
function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  if (taskInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.innerText = taskInput.value;
    li.onclick = () => li.remove(); // remove on click
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

// === Notes Auto-Save ===
const notes = document.getElementById("notes");
notes.value = localStorage.getItem("notes") || "";
notes.addEventListener("input", () => {
  localStorage.setItem("notes", notes.value);
});

// === Music Player Song Switcher ===
function changeSong(songFile) {
  const player = document.getElementById("audio-player");
  player.src = `music/${songFile}`;
  player.play();
}

// === Theme Toggle ===
const themeBtn = document.getElementById("toggle-theme");
const body = document.body;

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
  }
}

function toggleTheme() {
  body.classList.toggle("dark");
  const theme = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
}

themeBtn.addEventListener("click", toggleTheme);
loadTheme();

// === Animate Circular Progress Bars ===
document.querySelectorAll('.circle').forEach(circle => {
  const percent = circle.getAttribute('data-percent');
  const svg = circle.querySelector('svg');

  const progress = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  progress.classList.add("progress");
  progress.setAttribute("cx", "50");
  progress.setAttribute("cy", "50");
  progress.setAttribute("r", "40");
  progress.setAttribute("fill", "none");
  progress.setAttribute("stroke-width", "10");

  svg.appendChild(progress);

  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (percent / 100) * circumference;

  progress.style.strokeDasharray = circumference;
  progress.style.strokeDashoffset = circumference;

  setTimeout(() => {
    progress.style.strokeDashoffset = offset;
  }, 500);
});