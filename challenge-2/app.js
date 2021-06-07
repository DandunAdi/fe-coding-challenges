const pricingCards = document.querySelectorAll(".pricing .card");
const buyButtons = document.querySelectorAll(".pricing-btn");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal-close");

// Pricing card active state when clicked
pricingCards.forEach((card) => {
  card.addEventListener("click", () => {
    deselectAllPricingCards();
    card.classList.add("active");
  });
});

const deselectAllPricingCards = () => {
  pricingCards.forEach((card) => {
    card.classList.remove("active");
  });
};

// Show modal popup on pricing button
buyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.toggle("hidden");
  });
});

// Close modal when button clicked
modalCloseBtn.addEventListener("click", () => {
  modal.classList.toggle("hidden");
});
