const timer = document.getElementById("timer");
const countdown = document.getElementById("countdown");
const celebration = document.getElementById("celebration");

// Birthday details
const birthMonth = 11; // December (0-based)
const birthDay = 30;

function getNextBirthday() {
  const now = new Date();
  let year = now.getFullYear();
  let birthday = new Date(year, birthMonth, birthDay, 0, 0, 0);

  if (now > birthday) {
    birthday = new Date(year + 1, birthMonth, birthDay, 0, 0, 0);
  }
  return birthday;
}

const targetDate = getNextBirthday().getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdown.classList.add("hidden");
    celebration.classList.remove("hidden");
    startConfetti();
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

function startConfetti() {
  const duration = 6 * 1000;
  const end = Date.now() + duration;

  const interval = setInterval(() => {
    confetti({
      particleCount: 100,
      spread: 120,
      startVelocity: 40,
      gravity: 0.8,
      ticks: 300,
      origin: {
        x: Math.random(),
        y: Math.random() * 0.5
      }
    });

    if (Date.now() > end) {
      clearInterval(interval);
    }
  }, 500);
}


