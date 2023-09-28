const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


const arrowright = document.querySelector(".arrow_right");
const arrowleft = document.querySelector(".arrow_left");

arrowright.addEventListener("click", function () {
    currentindex = (currentindex + 1) ;
    navcarrousel(currentindex, "right");
	console.log ("test arrow")},
),
arrowleft.addEventListener("click", function () {
    currentindex = (currentindex - 1);
    navcarrousel(currentindex, "left");
	console.log ("test arrow")}
);

let currentindex = 0;
const bannerimg = document.querySelector(".banner-img");
const dots = document.querySelectorAll(".dot");

function navcarrousel(index, direction) {
	const imagePath = "assets/images/slideshow/${slides[currentindex].image}";
    bannerimg.src = imagePath;
    bannerimg.alt = "slide ${currentindex + 1}";
	const tagLine = slides[currentindex].tagLine;
	document.querySelector("p").innerHTML = tagLine;
}

function navdots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}


