// script.js
function updateClock() {
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const year = now.getFullYear();
    const month = now.toLocaleString('default', { month: 'long' });
    const day = String(now.getDate()).padStart(2, '0');
    const weekday = now.toLocaleString('default', { weekday: 'long' });

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    dateElement.textContent = `${weekday}, ${month} ${day}, ${year}`;
}

setInterval(updateClock, 1000);
updateClock();
