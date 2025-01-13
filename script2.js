// script.js
const form = document.getElementById('avistamiento-form');
const confirmacion = document.getElementById('confirmacion');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío real del formulario
    confirmacion.classList.remove('d-none'); // Mostrar mensaje de confirmación
    form.reset(); // Limpiar los campos del formulario
});

document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("audioPlayer");
    audio.volume = 0.5;
    audio.play().catch(error => console.error("La reproducción automática fue bloqueada:", error));
});