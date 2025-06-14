const images = [
  "./assets/images/bang/img1.jpg",
  "./assets/images/bang/img2.jpg",
  "./assets/images/bang/img3.jpg",
  "./assets/images/bang/img4.jpg",
  "./assets/images/bang/img5.jpg"
];

let current = 0;
const mainImg = document.getElementById("main-img");

mainImg.addEventListener("click", () => {
  current = (current + 1) % images.length;
  mainImg.src = images[current];
});
