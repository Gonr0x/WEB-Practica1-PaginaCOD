
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
const items = document.querySelectorAll(".carousel-item");

function showSlide(n) {
    items.forEach(item => item.classList.remove("active")); // Ocultar todos
    items[n].classList.add("active"); // Mostrar el actual
}

function nextSlide() {
    index = (index + 1) % items.length; // Avanza y vuelve al inicio si es necesario
    showSlide(index);
}

// Cambia cada 5 segundos
setInterval(nextSlide, 5000);
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

$(document).ready(function () {
    let index = 0;
    let items = $(".carousel-item");

    function showSlide(n) {
        items.removeClass("active");
        $(items[n]).addClass("active");
    }

    function nextSlide() {
        index = (index + 1) % items.length;
        showSlide(index);
    }

    setInterval(nextSlide, 5000); // Cambia cada 5 segundos
});

//Formulario
$(document).ready(function () {
    const modal = $("#signup-modal");

    // Mostrar modal al hacer clic en "Sign Up"
    $(".signup").click(function (event) {
        event.preventDefault();
        modal.fadeIn(); // Animación de entrada
    });

    // Cerrar modal al hacer clic en la "×"
    $(".close").click(function () {
        modal.fadeOut(); // Animación de salida
    });

    // Cerrar modal al hacer clic fuera del contenido
    $(window).click(function (event) {
        if ($(event.target).is(modal)) {
            modal.fadeOut();
        }
    });

    // Manejar el envío del formulario
    $("#modalRegisterForm").submit(function (event) {
        event.preventDefault();
        alert("¡Registro exitoso!");
        modal.fadeOut();
    });
});