const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((cards) => {
  cards.forEach((card) => {
    card.target.classList.toggle("show", card.isIntersecting);
  });
});

cards.forEach((card) => {
  observer.observe(card);
});
