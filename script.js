"use strict";

const imageContainer = document.querySelector(".images-container");
const totalImages = imageContainer.querySelectorAll("img").length;

const previousImg = document.getElementById("prev");
const nextImg = document.getElementById("next");

let imageCounter = 0;


const changeImage = function () {

  if (imageCounter > totalImages - 1)
    imageCounter = 0;
  else if (imageCounter < 0)
    imageCounter = totalImages - 1;

  const imageShift = imageCounter * 600;
  imageContainer.style.transform = `translateX(-${imageShift}px)`;

}

let imageAuto = setInterval(() => {
  imageCounter++;
  changeImage();
}, 2000);

const resetInterval = function () {
  clearInterval(imageAuto);
  imageAuto = setInterval(() => {
    imageCounter++;
    changeImage();
  }, 2000);
}

nextImg.addEventListener("click", function () {
  imageCounter++;
  changeImage();
  resetInterval();
});

previousImg.addEventListener("click", function () {
  imageCounter--;
  changeImage();
  resetInterval();
});