// Calendar + Clock
function updateDateTime() {
  const dateEl = document.getElementById("date");
  const clockEl = document.getElementById("clock");

  const now = new Date();

  const dateString = now.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const timeString = now.toLocaleTimeString();

  dateEl.textContent = `Today is: ${dateString}`;
  clockEl.textContent = `Current Time: ${timeString}`;
}

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime();
