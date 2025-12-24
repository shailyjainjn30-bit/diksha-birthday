const targetDate = new Date("2003-12-30T00:00:00").getTime();

const timer = document.getElementById("timer");
const countdown = document.getElementById("countdown");
const celebration = document.getElementById("celebration");

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdown.classList.add("hidden");
    celebration.classList.remove("hidden");
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timer.innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
