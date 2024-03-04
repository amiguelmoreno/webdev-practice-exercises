document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".carousel-slides");
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;

  const showSlide = (index) => {
    currentIndex =
      index >= slides.length ? 0 : index <= 0 ? slides.length - 1 : index;
    const translateValue = -currentIndex * 100 + "%";
    container.style.transform = `translateX(${translateValue})`;
  };

  const showNextSlide = () => showSlide(currentIndex + 1);
  const showPrevSlide = () => showSlide(currentIndex - 1);

  // Event listeners for buttons
  prevBtn.addEventListener("click", showPrevSlide);
  nextBtn.addEventListener("click", showNextSlide);

  // Optional: Auto play the carousel
  // setInterval(showNextSlide, 3000); // Change slide every 3 seconds
});
