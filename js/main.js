/*** SCROLL HEADER ***/
const header = document.querySelector('header');


/*** MOBILE HEADER ***/
if(document.getElementById("open-mHeader") && document.getElementById("main-header")){
   const mobileHBtn = document.getElementById("open-mHeader");
   const mainHeader = document.getElementById("main-header");
   mobileHBtn.onclick = () => mainHeader.classList.toggle("mobile-header");
}

window.addEventListener('scroll', function(){
  window.scrollY > 30 ? header.classList.add('headerscroll') : header.classList.remove('headerscroll');
});

function truncateWords(text, wordsCount){
  return text.split(' ').slice(0,wordsCount).join(' ');
}

/*
###############
banner-section
###############
*/
let index = 0;
const bannerSection = document.querySelector(".banner-section");
const bannerSlides = document.querySelectorAll('.banner-section .banner-slide-item');

if(bannerSection){
function hideAllSlides(){
  bannerSlides.forEach(slide => {
    slide.style.display = "none";
  });
}

hideAllSlides();

if (index >= 0 && index < bannerSlides.length) {bannerSlides[index].style.display = "flex";}

function prevB(){
  index = (index - 1 + bannerSlides.length) % bannerSlides.length;
  hideAllSlides();
  bannerSlides[index].style.display = "flex";
}

function nextB(){
  index = (index + 1) % bannerSlides.length;
  hideAllSlides();
  bannerSlides[index].style.display = "flex";
}


let bannerSliderInterval = setInterval(nextB, 4000);

window.addEventListener('scroll', function(){
  if(window.scrollY > 10){
    clearInterval(bannerSliderInterval);
  } else if(window.scrollY === 0){
    clearInterval(bannerSliderInterval);
    bannerSliderInterval = setInterval(nextB, 4000);
  }
});

bannerSection.addEventListener('mouseenter', function(){
  clearInterval(bannerSliderInterval);
});

bannerSection.addEventListener('mouseleave', function(){
  clearInterval(bannerSliderInterval);
  bannerSliderInterval = setInterval(nextB, 4000);
});

document.querySelectorAll('.banner-section .banner-slide-item .col-left h2').forEach((h2) => {
  h2.textContent = truncateWords(h2.textContent, 5);
});

document.querySelectorAll('.banner-section .banner-slide-item .col-left p').forEach((p) => {
  p.textContent = truncateWords(p.textContent, 20);
});
}

/*
###############
offers-section
###############
*/
function createOneGroupedProducts(productsSelector){

  const productItems = Array.from(productsSelector);
  const groupedProducts = {};

  // Group products by their class names
  productItems.forEach(productItem => {
    const className = productItem.classList[1]; // Assumes 'product-item 20%' format
    if (!groupedProducts[className]) {
        groupedProducts[className] = [];
    }
    groupedProducts[className].push(productItem);
  });
   
  for (const [className, products] of Object.entries(groupedProducts)) { // Create the offersblock and items divs
        const offersBlock = document.createElement('div');
              offersBlock.className = `offersblock offersblock${className.replace('%', '')}`;

        products.forEach((product) => {
          offersBlock.appendChild(product);
        });

        document.querySelector(".offers-section .col-left .inner-col").appendChild(offersBlock);
    
  }
}

function createTwoGroupedProducts(productsSelector){

  const productItems = Array.from(productsSelector);
  const groupedProducts = {};

  // Group products by their class names
  productItems.forEach(productItem => {
    const className = productItem.classList[1]; // Assumes 'product-item 20%' format
    if (!groupedProducts[className]) {
        groupedProducts[className] = [];
    }
    groupedProducts[className].push(productItem);
  });
   
  for (const [className, products] of Object.entries(groupedProducts)) { // Create the offersblock and items divs
        const offersBlock = document.createElement('div');
              offersBlock.className = `offersblock offersblock${className.replace('%', '')}`;

        let itemsBlock = document.createElement('div');
            itemsBlock.className = 'items';
        let itemCount = 0;


        products.forEach((product, index) => {
          itemsBlock.appendChild(product);
          itemCount++;
  
          if (itemCount === 10 || index === products.length - 1) {
              offersBlock.appendChild(itemsBlock);
              itemsBlock = document.createElement('div');
              itemsBlock.className = 'items';
              itemCount = 0;
          }
        });

        document.querySelector(".offers-section .col-right .inner-col").appendChild(offersBlock);
    
  }
}

createOneGroupedProducts(document.querySelectorAll('.offers-section .col-left .inner-col .product-item'));
createTwoGroupedProducts(document.querySelectorAll('.offers-section .col-right .inner-col .product-item'));


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.offers-section .product-item h5').forEach(h5 => {
    h5.textContent = truncateWords(h5.textContent, 3);
  });
});

$(document).ready(function(){

  function sliderWithFilterTabs(tabs, blocks, secondClassBlock){

    $(tabs).first().addClass('active');
    $(blocks).hide();
    $(blocks).first().show();

    $(tabs).click(function() {
      var offerClass = secondClassBlock + $(this).attr('class').replace('%', '');
      $(tabs).removeClass('active');
      $(this).addClass('active');
      $(blocks).hide().removeClass('active');
      $(offerClass).show().addClass('active');
    });

    $(blocks).each(function() {
      $(this).addClass('owl-carousel');
      $(this).owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        items:1
      });
    });
    
  }

  sliderWithFilterTabs('.offers-section .col-left .tabs li', '.offers-section .col-left .inner-col > div', '.offersblock');

  sliderWithFilterTabs('.offers-section .col-right .tabs li', '.offers-section .col-right .inner-col > div', '.offersblock');

  $('.brand-slider').owlCarousel({
    autoplay:true,
    loop:true,
    nav:false,
    dots:false,
    items:5,
    smartSpeed:1000,
    autoplayTimeout:7000,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        550:{
            items:3
        },
        700:{
            items:4
        },
        1000:{
            items:5
        }
    }
  });

});

/*
###################
month deal section
###################
*/
if(document.querySelector(".month-deal-section")){
let monthDealSliders = document.querySelectorAll(".month-deal-section .product-card .image img");
let monthDealCurrentSlide = 1;
let monthDealPrevBtn = document.querySelector(".month-deal-section .product-card .col-left .arrows .arrow-left");
let monthDealNextBtn = document.querySelector(".month-deal-section .product-card .col-left .arrows .arrow-right");
let paginationIndicators = document.createElement("ul");

for(let i=1; i<=monthDealSliders.length; i++){
    let paginationIndicator = document.createElement('li');
        paginationIndicator.setAttribute('data-index', i);
    paginationIndicators.appendChild(paginationIndicator);
}

document.querySelector(".month-deal-section .product-card .col-left .indicators").appendChild(paginationIndicators);

let monthDealPaginationDots = document.querySelectorAll(".month-deal-section .product-card .col-left .indicators ul li");

function monthDealPrevSlide(){
  if(monthDealPrevBtn.classList.contains('disabled')){

     return false;

  } else {
    monthDealCurrentSlide--;
    monthDealSliderChecker();
  }
}

function monthDealNextSlide(){
  if(monthDealNextBtn.classList.contains('disabled')){

     return false;

  } else {
    monthDealCurrentSlide++;
    monthDealSliderChecker();
  }
}

monthDealPrevBtn.onclick = monthDealPrevSlide;
monthDealNextBtn.onclick = monthDealNextSlide;

function monthDealSliderChecker(){

  monthDealSliders.forEach((slider) => {
    slider.classList.remove('active');
  });

  monthDealPaginationDots.forEach((dot) => {
    dot.classList.remove('active');
  });

  monthDealSliders[monthDealCurrentSlide - 1].classList.add("active");
  monthDealPaginationDots[monthDealCurrentSlide - 1].classList.add("active");

  if(monthDealCurrentSlide == 1) {
     monthDealPrevBtn.classList.add("disabled");
  } else {
    monthDealPrevBtn.classList.remove("disabled");
  }

  if(monthDealCurrentSlide == monthDealSliders.length) {
     monthDealNextBtn.classList.add("disabled");
  } else {
    monthDealNextBtn.classList.remove("disabled");
  }

}

monthDealSliderChecker();

monthDealPaginationDots.forEach((dot) => {
  dot.onclick = function (){
    monthDealCurrentSlide = parseInt(this.getAttribute('data-index'));
    monthDealSliderChecker();
  }
});
}


document.getElementById("current-year").textContent = new Date().getFullYear();

/*
###############
 SINGLE PAGE
###############
*/
const smallImage = document.querySelectorAll('#single-page .col-left .small-images .small-image img');
const bigImage = document.querySelector('#single-page .col-left .big-image img');
const lens = document.querySelector('#single-page .col-left .big-image .lens');
const magnifierImage = document.querySelector('#single-page .col-right .content .magnifier-img');

if(smallImage && bigImage){

for(let i=0; i<smallImage.length; i++){
   smallImage[i].onclick = function(){
     bigImage.src = smallImage[i].src;
   }
}

function magnify(bigImage){
  lens.addEventListener('mousemove', moveLens);
  bigImage.addEventListener('mousemove', moveLens);
  bigImage.addEventListener('mouseout', leaveLens);
}

function moveLens(e){
  let x, y, cx, cy;

  const bigImageRect = bigImage.getBoundingClientRect();

  x = e.pageX - bigImageRect.left - lens.offsetWidth / 2;
  y = e.pageY - bigImageRect.top - lens.offsetHeight / 2;

  let max_xpos = bigImageRect.width - lens.offsetWidth;
  let max_ypos = bigImageRect.height - lens.offsetHeight;

  if(x > max_xpos) x = max_xpos;
  if(x < 0) x = 0;

  if(y > max_ypos) y = max_ypos;
  if(y < 0) y = 0;

  lens.style.cssText = `top:${y}px;left:${x}px`;

  cx = magnifierImage.offsetWidth / lens.offsetWidth;
  cy = magnifierImage.offsetHeight / lens.offsetHeight;

  magnifierImage.style.backgroundImage = `url('${bigImage.src}')`;
  magnifierImage.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
  magnifierImage.style.backgroundSize = `${bigImageRect.width * cx}px ${bigImageRect.height * cy}px`;
  magnifierImage.style.backgroundRepeat = `no-repeat`;

  lens.classList.add('active');
  magnifierImage.classList.add('active');

}

function leaveLens(){
  lens.classList.remove('active');
  magnifierImage.classList.remove('active');
}

magnify(bigImage, magnifierImage);

}

const selectedColor = document.querySelector("#single-page .color-block #selected-color");
const colorCircles = document.querySelectorAll("#single-page .color-block .color-circle");

colorCircles.forEach((colorCircle) => {
  colorCircle.addEventListener('click', function(){
    selectedColor.textContent = this.style.backgroundColor;
  });
});

const maxQuantity = parseInt(document.querySelector("#single-page .product-container .col-right .instock").textContent);
const productPrice = parseInt(document.querySelector("#single-page .product-container .col-right .product-price .price").textContent);
const decreaseQuantityBtn = document.querySelector("#single-page .product-container .col-right .product-quantity-block .decrease-quantity-btn");
const increaseQuantityBtn = document.querySelector("#single-page .product-container .col-right .product-quantity-block .increase-quantity-btn");
const proQuantityElement = document.querySelector("#single-page .product-container .col-right .product-quantity-block #pro-quantity-no");
const subtotalElement = document.querySelector("#single-page .product-container .col-right .product-quantity-block #subtotal");

let proQuantityNumber = parseInt(proQuantityElement.textContent);

decreaseQuantityBtn.addEventListener('click', function(){
  if(proQuantityNumber > 1){
     proQuantityNumber -= 1;
     proQuantityElement.textContent = proQuantityNumber;
     subtotalElement.textContent =  `$${proQuantityElement.textContent * productPrice}`;
  }
});

increaseQuantityBtn.addEventListener('click', function(){
  if(proQuantityNumber < maxQuantity){
     proQuantityNumber += 1;
     proQuantityElement.textContent = proQuantityNumber;
     subtotalElement.textContent =  `$${proQuantityElement.textContent * productPrice}`;
  }
});