var ramadanStartDate = new Date("March 1, 2025").getTime();

function updateCountdown() {
  var now = new Date().getTime();
  var distance = ramadanStartDate - now;

  if (distance <= 0) {
    var elapsed = now - ramadanStartDate;
    var countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = "بدأ رمضان منذُ " + formatTime(elapsed);
  } else {
    var countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = "باقي على رمضان " + formatTime(distance);
  }

  setTimeout(updateCountdown, 1000);
}

function formatTime(ms) {
  var days = Math.floor(ms / (1000 * 60 * 60 * 24));
  var hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((ms % (1000 * 60)) / 1000);

  var hoursLabel = (hours > 3 && hours < 10) ? "ساعات" : "ساعة";
  var minutesLabel = (minutes > 3 && minutes < 11) ? "دقائق" : "دقيقة";
  var secondsLabel = (seconds > 10 && seconds <= 60) ? "ثوانٍ" : "ثانية";

  return `${days} يوم و ${hours} ${hoursLabel} و ${minutes} ${minutesLabel} و ${seconds} ${secondsLabel}`;
}

updateCountdown();
