
document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.querySelector(".btn");
    if (playButton) {
        playButton.addEventListener("click", function(event) {
            event.preventDefault(); // Evitar comportamiento por defecto
            window.location.href = "../indexGame.html";
        });
    }
});

let index = 0;
const images = document.querySelectorAll('.carousel img');
const dots = document.querySelectorAll('.dot');

function showImage(idx) {
    // Eliminar la clase "active" de todas las imágenes y puntos
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Añadir la clase "active" a la imagen y punto correspondiente
    images[idx].classList.add('active');
    dots[idx].classList.add('active');
}

// Al hacer clic en un punto, cambiar la imagen
dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        index = idx;
        showImage(index);
    });
});

// Inicializar el primer punto y la imagen activa
showImage(index)