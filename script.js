document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("audioPlayer");
    audio.volume = 0.5;
    audio.play().catch(error => console.error("La reproducción automática fue bloqueada:", error));
});