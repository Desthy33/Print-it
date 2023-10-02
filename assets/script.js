// script.js
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

//Ajout des flèches sur le caroussel
const arrowright = document.querySelector(".arrow_right");
const arrowleft = document.querySelector(".arrow_left");

arrowright.addEventListener("click", function () {
    currentIndex = (currentIndex+1) % slides.length;
    console.log (currentIndex)
    updateCarousel();
});
arrowleft.addEventListener("click", function () {
    currentIndex = (currentIndex - 1);
    if (currentIndex <0){currentIndex = slides.length -1}
    updateCarousel();
});

//Ajout bannière et points
let currentIndex = 0;
const bannerImg = document.querySelector(".banner-img");
const dots = document.querySelector(".dots");

//Mise à jour des points sur les images
function updateDots() {
    dots.innerHTML="";
    for(let i=0;i<slides.length;i++){
        let dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === currentIndex) {
             dot.classList.add("dot_selected");
            }
        dots.appendChild(dot);
    }
}

//Défilement des images sur le carrousel
function updateCarousel() {
    bannerImg.src =  `./assets/images/slideshow/${slides[currentIndex].image}`;
    bannerImg.alt = `slide ${currentIndex + 1}`;
    updateDots();
    document.querySelector("p").innerHTML = slides[currentIndex].tagLine;
}

//Mise à jour des points
updateDots();