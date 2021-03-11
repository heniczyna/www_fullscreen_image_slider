// let for variables
let sliderImages = document.querySelectorAll(".slide"); //selects all elements with class "slide" (because there are more than one)
let arrowLeft = document.querySelector("#arrow-left"); //no "querySelectorAll" because it is only one element with "#arrow-left"
let arrowRight = document.querySelector("#arrow-right");
let current = 0;

// Clear all images
function reset(){
    for(let i=0; i < sliderImages.length; i++){
        sliderImages[i].style.display = "none";

    }
}

// Init slider
function startSlide(){
    reset();
    sliderImages[0].style.display = "block";
}

// Show previous
function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}

// Show next
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function(){
    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();
})

// Right arrow click
arrowRight.addEventListener("click", function(){
    if(current === sliderImages.length - 1){
        current = -1;
    }
    slideRight();
})

startSlide();