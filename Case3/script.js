const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg"
];

let currentIndex = 0;

const sliderImage = document.getElementById("slider-image");
const counterText = document.getElementById("counter");

function updateSlider() {
    sliderImage.src = images[currentIndex];
    counterText.textContent = `Изображение ${currentIndex + 1} из ${images.length}`;
}

document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});