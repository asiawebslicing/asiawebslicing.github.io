 //header scroll
 document.addEventListener('DOMContentLoaded', function () {
   var header = document.querySelector('.header');
 
   window.addEventListener('scroll', function () {
     if (window.scrollY > 200) {
       header.classList.add('scrl-header');
       header.classList.remove('transparent-header');
     } else {
       header.classList.remove('scrl-header');
       header.classList.add('transparent-header');
     }
   });
 });