
document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.querySelector(".btn");
    if (playButton) {
        playButton.addEventListener("click", function(event) {
            event.preventDefault(); // Evitar comportamiento por defecto
            window.location.href = "indexGame.html";
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

$(document).ready(function() {
    $("#registroForm").submit(function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        let nombre = $("#nombre").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val();
        let confirmPassword = $("#confirmPassword").val();
        let isValid = true;

        // Limpiar mensajes de error
        $(".error").text("");

        // Validar nombre
        if (nombre === "") {
            $("#errorNombre").text("El nombre es obligatorio.");
            isValid = false;
        }

        // Validar email
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email === "") {
            $("#errorEmail").text("El correo es obligatorio.");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#errorEmail").text("El correo no es válido.");
            isValid = false;
        }

        // Validar contraseña
        if (password.length < 6) {
            $("#errorPassword").text("La contraseña debe tener al menos 6 caracteres.");
            isValid = false;
        }

        // Validar confirmación de contraseña
        if (confirmPassword === "") {
            $("#errorConfirmPassword").text("Confirma tu contraseña.");
            isValid = false;
        } else if (password !== confirmPassword) {
            $("#errorConfirmPassword").text("Las contraseñas no coinciden.");
            isValid = false;
        }

        // Si todo está bien, mostrar mensaje de éxito
        if (isValid) {
            $("#mensajeExito").fadeIn();
            setTimeout(() => $("#mensajeExito").fadeOut(), 3000);
            $("#registroForm")[0].reset();
        }
    });
});