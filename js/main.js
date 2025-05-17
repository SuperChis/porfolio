// Menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

const images = [
  './img/banner1.jpg',
  './img/banner2.jpg',
  './img/banner3.jpg'
];

let currentIndex = 0;
const bannerImage = document.getElementById('bannerImage');

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  bannerImage.src = images[currentIndex];
}, 5000); // Thay đổi hình ảnh mỗi 5 giây

document.addEventListener("DOMContentLoaded", function () {
  const letterPopup = document.getElementById("letterPopup");
  const hiddenImageContainer = document.getElementById("hiddenImageContainer");

  // Khi click vào thư
  letterPopup.addEventListener("click", function () {
    letterPopup.style.display = "none";
    hiddenImageContainer.classList.remove("hidden");
  });

  // Khi click vào hình ảnh hiện ra => ẩn lại
  hiddenImageContainer.addEventListener("click", function () {
    hiddenImageContainer.classList.add("hidden");
    letterPopup.style.display = "none";
  });
});
