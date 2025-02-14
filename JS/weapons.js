
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".carousel").forEach(carousel => {
        let images = carousel.querySelectorAll("img");
        let index = 0;

        function updateSelection() {
            images.forEach(img => img.classList.remove("selected"));
            images[index].classList.add("selected");
        }

        carousel.querySelector(".arrow-up").addEventListener("click", function () {
            if (index > 0) {
                index--;
                updateSelection();
            }
        });

        carousel.querySelector(".arrow-down").addEventListener("click", function () {
            if (index < images.length - 1) {
                index++;
                updateSelection();
            }
        });

        updateSelection();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".carousel").forEach(carousel => {
        let images = carousel.querySelectorAll("img");
        let index = 0;

        function updateSelection() {
            images.forEach(img => img.classList.remove("selected"));
            images[index].classList.add("selected");
        }

        carousel.querySelector(".arrow-up").addEventListener("click", function () {
            if (index > 0) {
                index--;
                updateSelection();
            }
        });

        carousel.querySelector(".arrow-down").addEventListener("click", function () {
            if (index < images.length - 1) {
                index++;
                updateSelection();
            }
        });

        updateSelection();
    });

    // Boton de aleatorizar
    document.getElementById("randomize-btn").addEventListener("click", function () {
        document.querySelectorAll(".carousel").forEach(carousel => {
            let images = carousel.querySelectorAll("img");
            let randomIndex = Math.floor(Math.random() * images.length);

            images.forEach(img => img.classList.remove("selected"));
            images[randomIndex].classList.add("selected");
        });
    });
});