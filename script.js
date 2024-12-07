// Countdown Timer for December 1, 2024
const countdownElements = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds")
};

const targetDate = new Date("December 31, 2024 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        countdownElements.days.innerHTML = "00";
        countdownElements.hours.innerHTML = "00";
        countdownElements.minutes.innerHTML = "00";
        countdownElements.seconds.innerHTML = "00";
        return;
    }

    countdownElements.days.innerHTML = String(Math.floor(timeLeft / (1000 * 60 * 60 * 24))).padStart(2, '0');
    countdownElements.hours.innerHTML = String(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    countdownElements.minutes.innerHTML = String(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    countdownElements.seconds.innerHTML = String(Math.floor((timeLeft % (1000 * 60)) / 1000)).padStart(2, '0');
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Subscription Form Handler
document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;

    if (validateEmail(email)) {
        alert("Thank you for subscribing!");
        this.reset();
    } else {
        alert("Please enter a valid email address.");
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
