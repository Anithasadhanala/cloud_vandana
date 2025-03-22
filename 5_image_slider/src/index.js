// Array of image URLs
const images = [
    "https://img.freepik.com/free-photo/deer-lying-pasture_1161-252.jpg?ga=GA1.1.1352472964.1742628958&semt=ais_keywords_boost",
    "https://img.freepik.com/free-photo/amazing-bengal-tiger-nature_475641-1231.jpg?ga=GA1.1.1352472964.1742628958&semt=ais_keywords_boost",
    "https://img.freepik.com/free-photo/beautiful-view-pink-flamingo-lake_181624-50736.jpg?ga=GA1.1.1352472964.1742628958&semt=ais_keywords_boost",
    "https://img.freepik.com/free-photo/beautiful-shot-zebras-group-green-field_181624-47659.jpg?ga=GA1.1.1352472964.1742628958&semt=ais_keywords_boost"
];

let currentIndex = 0;

const sliderImage = document.getElementById("sliderImage");

sliderImage.src = images[currentIndex];

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    sliderImage.src = images[currentIndex];
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImage.src = images[currentIndex];
});
