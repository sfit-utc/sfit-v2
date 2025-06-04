const root = document.documentElement;

const deputiesGap = parseInt(
  getComputedStyle(root).getPropertyValue("--deputies-gap").trim()
);

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".club-leaders-deputies");
  const members = slider.querySelectorAll(".club-leaders-member");

  let currentIndex = 0;

  const updateSlide = () => {
    // if (window.innerWidth >= 768) {
    if (window.innerWidth > 500) {
      slider.style.transform = "none";

      for (let i = 1; i <= 3; ++i) {
        document.getElementById(`deputy-${i}`).style.display = "block";
        if (members[i - 1].classList.contains("main")) {
          members[i - 1].classList.remove("main");
        }
      }
      return;
    }

    for (let i = 1; i <= 3; ++i) {
      document.getElementById(`deputy-${i}`).style.display = "none";
      if (members[i - 1].classList.contains("main")) {
        members[i - 1].classList.remove("main");
      }
    }

    console.log(currentIndex);
    document.getElementById(`deputy-${currentIndex + 2}`).style.display =
      "block";
    members[currentIndex + 1].classList.add("main");

    const offset = -currentIndex * (members[0].offsetWidth + deputiesGap);
    slider.style.transform = `translateX(calc(${offset}px))`;
  };

  let startX = 0;

  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", (e) => {
    const diffX = e.changedTouches[0].clientX - startX;

    if (Math.abs(diffX) > 50) {
      if (diffX < 0 && currentIndex < 1) {
        currentIndex++;
      } else if (diffX > 0 && currentIndex > -1) {
        currentIndex--;
      }
      updateSlide();
    }
  });

  window.addEventListener("resize", updateSlide);
  updateSlide();
});
