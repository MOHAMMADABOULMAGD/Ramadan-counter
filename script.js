// تاريخ بداية رمضان
var ramadanStartDate = new Date("March 11, 2024").getTime();

// تحديث العداد
function updateCountdown() {
    var now = new Date().getTime();
    var timePassed = now - ramadanStartDate;
    var absoluteTimePassed = Math.abs(timePassed);

    if (absoluteTimePassed >= 30 * 24 * 60 * 60 * 1000) {
        // إذا مر أكثر من 30 يومًا، قم بتغيير النص إلى انتهى رمضان منذ
        var countdownElement = document.getElementById("countdown");
        countdownElement.innerHTML = "انتهى رمضان منذ";
        return;
    }

    var timeRemaining = ramadanStartDate - now;

    var days = Math.floor(absoluteTimePassed / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    var countdownElement = document.getElementById("countdown");
    var countdownPrefix = (timePassed >= 0) ? "بدأ رمضان" : "باقي على رمضان";
    countdownElement.innerHTML = countdownPrefix;

    // التحديث كل ثانية
    setTimeout(updateCountdown, 1000);
}

// استدعاء تحديث العداد لأول مرة
updateCountdown();
