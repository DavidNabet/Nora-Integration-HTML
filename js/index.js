console.log("use strict")

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var dots = document.querySelectorAll(".dots");
    if(n > dots.length)
        slideIndex = 1
    if(n < 1)
        slideIndex = dots.length
    
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" dots-active", "")
    }

    dots[slideIndex-1].className += " dots-active"
}