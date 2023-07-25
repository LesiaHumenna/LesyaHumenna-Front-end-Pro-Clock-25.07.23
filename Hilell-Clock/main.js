const clockEl = document.getElementById("clock");
const meetingTime = document.getElementById("meeting-time");
const hoursEl = document.querySelector(".clock-hour");
const minutesEl = document.querySelector(".clock-min");
const secondsEl = document.querySelector(".clock-sec");
const set = document.getElementById('set');
const clear = document.getElementById('clear');

function addZeroClock(number) {
  return number < 10 ? "0" + number : number;
}
let clockId = setInterval(() => {
  const now = new Date();
  let h = addZeroClock(now.getHours());
  let m = addZeroClock(now.getMinutes());
  let s = addZeroClock(now.getSeconds());

  let prevHours = null;
  let prevMinutes = null;
  let prevSeconds = null;

  const hours = now.getHours();
  if (hours !== prevHours) {
    hoursEl.textContent = `${h}:`;
    prevHours = hours;
  }
  const minutes = now.getMinutes();
  if (minutes !== prevMinutes) {
    minutesEl.textContent = `${m}:`;
    prevMinutes = minutes;
  }
  const second = now.getSeconds();
  if (second !== prevSeconds) {
    secondsEl.textContent = s;
    prevSeconds = second;
  }
}, 1000);

let timeInterval;
meetingTime.addEventListener("change", (e) => {
  clearInterval(timeInterval);
  let now = Date.now();
  console.log(now);
  const meetingTime = new Date(e.target.value);
  const timerMsc = meetingTime.getTime();
  console.log(meetingTime.getTime());

  timeInterval = setInterval(() => {
    now = Date.now();
    let diff = Math.floor((timerMsc - now) / 1000);
    console.log(diff);
    let days;
  }, 1000);
});

function addTimer(){
    timeInterval = setTimeout(() =>{
        console.log(' timeInterval');
    }, 1000);
}
function clearTimer(){
    clearTimeout( timeInterval);
}