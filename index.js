let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
};


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
}


const sr = scrollReveal ({
  distance: "65px",
  duration: 2600,
  delay: 450,
  reset: true
})

sr.reveal('.sliders', {delay:200, origin: 'top'});
sr.reveal('.formBox', {delay:300, origin: 'left'});
sr.reveal('.posts', {delay:400, origin: 'right'});
sr.reveal('.wrapper', {delay:500, origin: 'bottom'});