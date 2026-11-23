const featuredImage = document.querySelector("#featured-image");
const featuredCount = document.querySelector("#featured-count");
const previousButton = document.querySelector(".gallery-prev");
const nextButton = document.querySelector(".gallery-next");

let currentIndex = 0;
const images = Array.from({ length: 10 }, (_, index) => `media${index + 1}.png`);

function showImage(index) {
    currentIndex = (index + images.length) % images.length;
    featuredImage.classList.add("is-changing");

    window.setTimeout(() => {
        featuredImage.src = images[currentIndex];
        featuredImage.alt = `Krusty Krab gallery image ${currentIndex + 1}`;
        featuredCount.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${images.length}`;
        featuredImage.classList.remove("is-changing");
    }, 180);
}

previousButton.addEventListener("click", () => {
    showImage(currentIndex - 1);
});

nextButton.addEventListener("click", () => {
    showImage(currentIndex + 1);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") showImage(currentIndex - 1);
    if (event.key === "ArrowRight") showImage(currentIndex + 1);
});
