const mainImage = document.getElementById("displayed-image");
const thumbnails = document.querySelectorAll(".thumbnails img");

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", () => {
    mainImage.src = thumbnail.src;
  });
});
