const slidesContainer = document.querySelector(".slides-container");
const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

nextButton.addEventListener("click", () => {
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  slidesContainer.scrollLeft -= slideWidth;
});

const nav_about = document.getElementById("nav-about");
const nav_project = document.getElementById("nav-project");
const about_section = document.getElementById("about-section");
const project_section = document.getElementById("project-section");
about_section.style.display = "none";
project_section.style.display = "none";

nav_about.addEventListener("click", () => {
  about_section.style.display = "flex";
  project_section.style.display = "none";
});
nav_project.addEventListener("click", () => {
  project_section.style.display = "block";
  about_section.style.display = "none";
});
