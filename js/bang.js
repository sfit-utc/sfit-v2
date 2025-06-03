const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg"
];

let current = 0;
const mainImg = document.getElementById("main-img");

mainImg.addEventListener("click", () => {
  current = (current + 1) % images.length;
  mainImg.src = images[current];
});
