
  
  const images = document.querySelectorAll('.slider-img');
  const lastButton = document.querySelector('.last');
  const nextButton = document.querySelector('.next');
 
  let imageIndex = 0;
  let defaultImgInPortfolio = 8;

  const pathArray = [
    "\\sliderImages\\003.jpg",
    "\\sliderImages\\DSC_0070.jpg",
    "\\sliderImages\\DSC_0046.jpg",
    "\\sliderImages\\00009.jpg",
    "\\sliderImages\\34.jpg",
  
    "\\sliderImages\\someimg.jpg",
    "\\sliderImages\\DSC_0580 (2).jpg",

    "\\sliderImages\\09.jpg",
    "\\sliderImages\\DSC_0571-1.jpg",
    "\\sliderImages\\01.jpg",
    "\\sliderImages\\IMG_0058.JPG",
    "\\sliderImages\\DSC_0100.jpg",
    "\\sliderImages\\DSC_0221.jpg",
    "\\sliderImages\\DSC_0372.jpg",
    "\\sliderImages\\DSC_0326.jpg",
    "\\sliderImages\\20.jpg",
    
    ,

    ]


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


  const portfolioBlock = document.querySelector('.images-block')
  const loadMoreButton = document.querySelector('.buttonLM')

  const portfolioItem = (path) => {

    const image = document.createElement('div')
    image.classList.add('image')

    const portImg = document.createElement('img')
    portImg.classList.add('portImg')

    const imgWrapper = document.createElement('div')
    imgWrapper.classList.add('img-wrapper')

    portImg.src = path
    portImg.alt = path

    imgWrapper.appendChild(portImg)
    image.appendChild(imgWrapper)
    portfolioBlock.appendChild(image)

  }


  const portfolioFiller = (count = 8) => {

    for (let i = 0; i < count; i++) {
        portfolioItem(pathArray[i])
    }
  }

  portfolioFiller()

loadMoreButton.addEventListener('click', ()=>{
    defaultImgInPortfolio += 8
    console.log(pathArray.length, defaultImgInPortfolio)
    if(pathArray.length >= defaultImgInPortfolio){
        portfolioBlock.innerHTML = ''
        portfolioFiller(defaultImgInPortfolio)
    } else {
        loadMoreButton.style.visibility = 'hidden'

    }
})


const burger = document.querySelector('.burger');

burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
})

document.getElementById('burger-checkbox').addEventListener('change', function() {
    if (this.checked) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
})

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('burger-checkbox').checked = false;
        document.body.style.overflow = 'auto';
    });
});