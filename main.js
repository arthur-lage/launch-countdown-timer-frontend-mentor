let daysValue = document.querySelector("#days-value");
let hoursValue = document.querySelector("#hours-value");
let minutesValue = document.querySelector("#minutes-value");
let secondsValue = document.querySelector("#seconds-value");

let countdown = setInterval(() => {
  let countdownDate = new Date("Jun 1, 2021 16:00:00").getTime();
  let now = new Date().getTime();

  let distance = countdownDate - now;

  let day = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  day = day < 10 ? `0${day}` : day;
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  daysValue.innerHTML = day;
  hoursValue.innerHTML = hours;
  minutesValue.innerHTML = minutes;
  secondsValue.innerHTML = seconds;

  if (distance < 0) {
    daysValue.innerHTML = day;
    hoursValue.innerHTML = hours;
    minutesValue.innerHTML = minutes;
    secondsValue.innerHTML = seconds;
  }
}, 1000);
