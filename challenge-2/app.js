const pricingCards = document.querySelectorAll(".pricing .card");
// console.log(pricingCards);
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
