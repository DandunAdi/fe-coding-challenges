const exploreBtn = document.querySelectorAll(".explore-button");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal-close");

exploreBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.toggle("hidden");
  });
});

modalCloseBtn.addEventListener("click", () => {
  modal.classList.toggle("hidden");
});
