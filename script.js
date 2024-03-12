// تاريخ بداية رمضان
var ramadanStartDate = new Date("March 11, 2024").getTime();

// تحديث العداد
function updateCountdown() {
    var now = new Date().getTime();
    var timePassed = now - ramadanStartDate;
    
    if (timePassed >= 30 * 24 * 60 * 60 * 1000) {
        // إذا مر أكثر من 30 يومًا، قم بتغيير النص إلى انتهى رمضان منذ
        var countdownElement = document.getElementById("countdown");
        countdownElement.innerHTML = "انتهى رمضان منذ";
        return;
    }

    var timeRemaining = ramadanStartDate - now;

    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    var daysText = "يوم";

    var hoursText = "ساعة";
    if (hours > 3 && hours < 10) {
        hoursText = "ساعات";
    }

    var minutesText = "دقيقة";
    if (minutes > 3 && minutes < 11) {
        minutesText = "دقائق";
    }

    var secondsText = "ثوانٍ";
    if (seconds > 10 && seconds <= 60) {
        secondsText = "ثانية";
    }

    var countdownElement = document.getElementById("countdown");
    var countdownPrefix = (timePassed >= 0) ? "بدأ رمضان منذ" : "باقي على رمضان";
    countdownElement.innerHTML = countdownPrefix + " " + days + " " + daysText + " و " + hours + " " + hoursText + " و " + minutes + " " + minutesText + " و " + seconds + " " + secondsText;

    // التحديث كل ثانية
    setTimeout(updateCountdown, 1000);
}

// استدعاء تحديث العداد لأول مرة
updateCountdown();
