const countdown = () => {
  const countDate = new Date("December 31, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const millisecond = 1;
  const second = 1000*millisecond;
  const minute = second*60;
  const hour = minute*60;
  const day = hour*24;
  const year = day*365;


  const textYear = Math.floor((gap/day)/365);
  const textDay = Math.floor((gap/day)%365);
  const textHour = Math.floor((gap%day)/hour);
  const textMinute = Math.floor((gap%hour)/minute);
  const textSecond = Math.floor((gap%minute)/second);
  const textMillisecond = Math.floor(gap%1000);

  document.querySelector(".year").innerText = textYear;
  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
  document.querySelector(".millisecond").innerText = textMillisecond;
  document.querySelector(".time-remain").innerText = "You  Have  " + textYear + "  years,  " + textDay + "  days  &  " + textHour + "  hours  left.";
}

setInterval(countdown, 1);
