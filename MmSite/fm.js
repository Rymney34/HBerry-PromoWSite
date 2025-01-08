const images = document.querySelectorAll('.slider-img');
const lastButton = document.querySelector('.last');
const nextButton = document.querySelector('.next');

let imageIndex = 0;

  function show() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    imageIndex++;
    if (imageIndex > images.length) {
        imageIndex = 1;
    }
    images[imageIndex - 1].style.display = "block"; 
}

setInterval(show, 8500);

lastButton.addEventListener('click', () => {
    imageIndex = (imageIndex - 2 + images.length) % images.length;
    show();
});

nextButton.addEventListener('click', () => {
    show();
});
