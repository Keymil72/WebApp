// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function refreshTime() {
    const timeDisplay = document.getElementById("today justify-content-end");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " godz ");
    timeDisplay.textContent = formattedString;
}
setInterval(refreshTime, 1000);
