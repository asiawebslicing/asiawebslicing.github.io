const card = document.querySelectorAll(".card");

const hoverIcon = [4, 5, 6];

card.forEach((item, index) => {
  const btn = item.querySelectorAll(".btn");
  const image = item.querySelectorAll(".card__icon");

  item.addEventListener("mouseenter", () => {
    item.classList.add("card-hover");
    btn[0].classList.add("btn-outline-white");
  });
  item.addEventListener("mouseleave", () => {
    item.classList.remove("card-hover");
    btn[0].classList.remove("btn-outline-white");
  });
});
