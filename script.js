/* =========================================
   ANIMATION DES IMAGES AU SCROLL
   ========================================= */

/*
    On récupère toutes les images des sections.
*/

const images = document.querySelectorAll(".section img");


/*
    IntersectionObserver permet de savoir quand
    un élément entre dans la partie visible de l'écran.

    C'est plus simple et plus léger que de surveiller
    manuellement chaque mouvement de la souris.
*/

const observer = new IntersectionObserver((elements) => {

    elements.forEach((element) => {

        if (element.isIntersecting) {

            /*
                Les sections "image-gauche" arrivent
                depuis la gauche.
            */

            if (element.target.parentElement.classList.contains("image-gauche")) {

                element.target.style.animation = "gauche 1s ease-out forwards";

            }

            /*
                Les sections "image-droite" arrivent
                depuis la droite.
            */

            else {

                element.target.style.animation = "droite 1s ease-out forwards";

            }

            /*
                On arrête d'observer l'image après
                sa première apparition.
            */

            observer.unobserve(element.target);
        }

    });

});


/*
    On démarre l'observation de chaque image.
*/

images.forEach((image) => {

    observer.observe(image);

});



/* surprise :D */

const surprise = document.querySelector("#surprise");
const feux = document.querySelector("#feux");


/* Liste des GIF disponibles */

const gifs = [
    "feux1.gif",
    "feux2.gif",
    "feux3.gif"
];


surprise.addEventListener("click", () => {
    feux.innerHTML = "";
    feux.classList.add("visible");

    const nombre = Math.floor(Math.random() * 4) + 2;

    for (let i = 0; i < nombre; i++) {
        const feu = document.createElement("img");
        feu.src = gifs[Math.floor(Math.random() * gifs.length)];
        feu.style.left = Math.random() * 80 + 10 + "%";
        feu.style.top = Math.random() * 60 + 10 + "%";
        feu.style.animationDelay =
            Math.random() * 1.2 + "s";
        feux.appendChild(feu);
        setTimeout(() => {
            feu.remove();
        }, 7000);
    }
    setTimeout(() => {
        feux.classList.remove("visible");
    }, 7000);

});