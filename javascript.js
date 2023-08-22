

/******************* CAROUSEL FUNCTION ************************************* */

let slideIndex = 0;
let slideTimer;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";

    let opacity = 0;
    const duration = 1000; 

    const fadeIn = () => {
        if (opacity < 1) {
            opacity += 0.1; 
            slides[slideIndex - 1].style.opacity = opacity;
            requestAnimationFrame(fadeIn);
        }
    };

    setTimeout(fadeIn, duration / 10);

    clearTimeout(slideTimer);

    slideTimer = setTimeout(showSlides, 10000);
}

showSlides();
