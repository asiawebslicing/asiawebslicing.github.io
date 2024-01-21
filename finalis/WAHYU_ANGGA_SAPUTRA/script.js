const menuIcon = document.getElementById("menu-icon"); const menuList = 
document.getElementById("menu-list"); menuIcon.addEventListener("click", () => { 
menuList.classList.toggle("hidden"); });  








let currentIndex=0;

function showSlide(index)
{
    const slider= document.quarySelector('.slider');
    const sliderWidth= document.quarySelector('.cardt').offsetWidth + 20;
    slider.style.transform='translateY(${-index * slideWidth})';
}
function nextSlide()
{
    const totalSlides= document.quarySelectorAll('.cardt').length;
    currentIndex = ( currentIndex - 1 + totalSlides);
    showSlide(currentIndex);
}
function nextSlide()
{
    const totalSlides= document.quarySelectorAll('.cardt').length;
    currentIndex = ( currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

