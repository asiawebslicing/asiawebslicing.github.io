const Toggle = document.getElementById("toggle");
const nav = document.querySelector('nav ul');

Toggle.addEventListener("click", () => {
    nav.classList.toggle("slide")
})