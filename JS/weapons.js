document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel");
    const randomBtn = document.getElementById("randomize-btn");

    // Función para seleccionar la imagen central de un carrusel
    function updateSelection(carousel) {
        const images = carousel.querySelectorAll("img");
        let middleIndex = Math.floor(images.length / 2);

        images.forEach(img => img.classList.remove("selected"));
        images[middleIndex].classList.add("selected");

        // Centrar el scroll en la imagen seleccionada
        carousel.scrollTop = images[middleIndex].offsetTop - (carousel.clientHeight / 2) + (images[middleIndex].clientHeight / 2);
    }

    // Hacer que los carruseles sean scrollables
    carousels.forEach(carousel => {
        carousel.addEventListener("scroll", () => {
            const images = Array.from(carousel.children);
            let closest = images.reduce((prev, curr) => {
                return Math.abs(curr.getBoundingClientRect().top - carousel.getBoundingClientRect().top) <
                       Math.abs(prev.getBoundingClientRect().top - carousel.getBoundingClientRect().top) ? curr : prev;
            });

            images.forEach(img => img.classList.remove("selected"));
            closest.classList.add("selected");
        });

        // Iniciar con una imagen seleccionada
        updateSelection(carousel);
    });

    // Botón de aleatorización
    randomBtn.addEventListener("click", () => {
        carousels.forEach(carousel => {
            const images = carousel.querySelectorAll("img");
            let randomIndex = Math.floor(Math.random() * images.length);

            images.forEach(img => img.classList.remove("selected"));
            images[randomIndex].classList.add("selected");

            // Desplazar el carrusel a la imagen aleatoria
            carousel.scrollTop = images[randomIndex].offsetTop - (carousel.clientHeight / 2) + (images[randomIndex].clientHeight / 2);
        });
    });
});