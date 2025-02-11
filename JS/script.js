
document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.querySelector(".btn");
    if (playButton) {
        playButton.addEventListener("click", function(event) {
            event.preventDefault(); // Evitar comportamiento por defecto
            window.location.href = "../indexGame.html";
        });
    }
});
