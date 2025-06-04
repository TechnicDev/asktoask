// themeToggle.js
// Dark mode toggle functionality

// Detect system preference
function prefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
// Set dark mode
function setDarkMode(on) {
    document.body.classList.toggle('dark-mode', on);
    document.getElementById('darkToggle').textContent = on ? '☀️' : '🌙';
    localStorage.setItem('darkMode', on ? '1' : '0');
}
// On load, set mode from localStorage or system
(function() {
    const saved = localStorage.getItem('darkMode');
    const dark = saved === null ? prefersDark() : saved === '1';
    setDarkMode(dark);
})();
// Toggle button
document.getElementById('darkToggle').onclick = function() {
    setDarkMode(!document.body.classList.contains('dark-mode'));
};