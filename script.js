// SLIDESHOW
var currentSlide = 0;
var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var nextBtn = document.querySelector(".nextBtn");
var prevBtn = document.querySelector(".prevBtn");

function init(n) {
    for(var i=0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
        for(var j=0; j < dots.length; j++)
        {
            dots[j].classList.remove("active");
        }
    }
    slides[n].style.display = "block";
    dots[n].classList.add("active");
}
init(currentSlide);
//When the Next Button is Pressed
nextBtn.addEventListener("click", () => {
    if (currentSlide >= slides.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++; 
        slides[currentSlide].classList.add("nextBtnSlide");
    }
    
    init(currentSlide);
});
//When the Previous Button is Pressed
prevBtn.addEventListener("click", () => {
    if (currentSlide <= 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide--;
        slides[currentSlide].classList.add("prevBtnSlide");
    }
    init(currentSlide);
});

// DISABLE SCROLL WHEN HAMBURGER MENU IS CLICK IN MOBILE VIEW
/*var html = document.querySelector("html");
var body = document.querySelector("body");
var segmentBtn = document.querySelector(".mdi-segment");
var closeBtn = document.querySelector(".mdi-close");

segmentBtn.addEventListener("click", () => {
    html.classList.add("disableScroll");
    body.classList.add("disableScroll");
});

closeBtn.addEventListener("click", () => {
    html.classList.remove("disableScroll");
    body.classList.remove("disableScroll");
});*/

//SCROLL EFFECTS ON NAVIGATION BAR
var navBar = document.querySelector(".header-container");
var navList = document.querySelector(".nav-list");
var navListA = navList.getElementsByTagName("a");
var navList = document.querySelector(".nav-list");

if (window.pageYOffset >= 100) {
    // navBar.classList.add("sticky");
} else {
    // navBar.classList.remove("sticky");
}

// GO BACK UP
var goUpBtn = document.querySelector(".mdi-arrow-up-circle");
goUpBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

// ANIMATION REVEALED ON SCROLL
window.addEventListener("scroll", () => {
    //SLIDE FROM ABOVE/UP
    var reveals = document.querySelectorAll('.revealUp');
    for (var i=0; i<reveals.length;i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('activeScrollUp');
        } else {
            reveals[i].classList.remove('activeScrollUp');
        }
    }
    //SLIDE FROM BELOW/BOTTOM
    var reveals = document.querySelectorAll('.revealDown');
    for (var i=0; i<reveals.length;i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('activeScrollDown');
        } else {
            reveals[i].classList.remove('activeScrollDown');
        }
    }
    //SLIDE FROM THE LEFT HAND SIDE
    var reveals = document.querySelectorAll('.revealLeft');
    for (var i=0; i<reveals.length;i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('activeScrollLeft');
        } else {
            reveals[i].classList.remove('activeScrollLeft');
        }
    }
    //SLIDE FROM THE RIGHT HAND SIDE
    var reveals = document.querySelectorAll('.revealRight');
    for (var i=0; i<reveals.length;i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('activeScrollRight');
        } else {
            reveals[i].classList.remove('activeScrollRight');
        }
    }
})