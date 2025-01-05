document.addEventListener("DOMContentLoaded", () => {

  const preloader = document.createElement('div');
        preloader.classList.add('loader17');

  preloader.innerHTML = `
    <div class="loader17-container">
      <svg class="loader17-block" height="128px" width="128px" viewBox="0 0 128 128">
          <defs>
            <linearGradient y2="1" x2="1" y1="0" x1="0" id="pl-grad">
              <stop stop-color="#000" offset="0%"></stop>
              <stop stop-color="#fff" offset="100%"></stop>
            </linearGradient>
            <mask id="pl-mask">
              <rect fill="url(#pl-grad)" height="128" width="128" y="0" x="0"></rect>
            </mask>
          </defs>
          <g fill="var(--blue5)">
            <g class="pl1__g">
              <g transform="translate(20,20) rotate(0,44,44)">
                <g class="pl1__rect-g">
                  <rect height="40" width="40" ry="8" rx="8" class="pl1__rect"></rect>
                  <rect transform="translate(0,48)" height="40" width="40" ry="8" rx="8" class="pl1__rect"></rect>
                </g>
                <g transform="rotate(180,44,44)" class="pl1__rect-g">
                  <rect height="40" width="40" ry="8" rx="8" class="pl1__rect"></rect>
                  <rect transform="translate(0,48)" height="40" width="40" ry="8" rx="8" class="pl1__rect"></rect>
                </g>
              </g>
            </g>
          </g>
          <g mask="url(#pl-mask)" fill="hsl(343,90%,50%)">
            <g class="pl1__g">
              <g transform="translate(20,20) rotate(0,44,44)">
                <g class="pl1__rect-g">
                  <rect height="40" width="40" ry="8" rx="8" class="pl1__rect"></rect>
                  <rect transform="translate(0,48)" height="40" width="40" ry="8" rx="8" class="pl1__rect"></rect>
                </g>
                <g transform="rotate(180,44,44)" class="pl1__rect-g">
                  <rect height="40" width="40" ry="8" rx="8" class="pl1__rect"></rect>
                  <rect transform="translate(0,48)" height="40" width="40" ry="8" rx="8" class="pl1__rect"></rect>
                </g>
              </g>
            </g>
          </g>
      </svg>
    </div>
  `;
  document.body.insertBefore(preloader, document.body.firstChild);

  preloader.style.display = "block";

  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.style.opacity = "0";
      preloader.style.transition = "opacity 0.5s ease";

      preloader.addEventListener("transitionend", () => {
        preloader.remove();
      });
    }, 500);
  });
});

/*** SCROLL HEADER ***/
const header = document.querySelector('header');

if(header){

  /*** MOBILE HEADER ***/
  if(document.getElementById("open-mHeader") && document.getElementById("main-header")){
    const mobileHBtn = document.getElementById("open-mHeader");
    const mainHeader = document.getElementById("main-header");
    mobileHBtn.onclick = () => mainHeader.classList.toggle("mobile-header");
  }

  window.addEventListener('scroll', function(){

    if (window.scrollY > 30){
        document.querySelector("header .top-nav").style.display = 'none';
        document.querySelector(".main-header").style.boxShadow = '0 0.4rem 1.5rem rgba(0, 247, 255, 0.356)';
    } else {
      document.querySelector("header .top-nav").style.display = 'flex';
      document.querySelector(".main-header").style.boxShadow = 'none';

    }
    
  });

  document.body.style.paddingTop = `${header.offsetHeight}px`;

}

function eyeFunction(eyeIcon) {
  const passInput = eyeIcon.previousElementSibling;
  const eyeIcons = eyeIcon.querySelectorAll(".fa-eye, .fa-eye-slash");

  if (passInput.type === 'password') {
      passInput.type = 'text';
      eyeIcons[0].style.display = "block";
      eyeIcons[1].style.display = "none";
  } else {
    passInput.type = 'password';
    eyeIcons[0].style.display = "none";
    eyeIcons[1].style.display = "block";
  }
}

function truncateWords(text, wordsCount){
  return text.split(' ').slice(0,wordsCount).join(' ');
}

/* 
 ########################
 #### BANNER SECTION ####
 ########################
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

window.addEventListener('scroll', function(){// Stop Banner Slider
  if(window.scrollY > 10){
     clearInterval(bannerSliderInterval);
  } else if(window.scrollY === 0){
    clearInterval(bannerSliderInterval);
    bannerSliderInterval = setInterval(nextB, 4000);
  }
});

if(header){

  const loginDrawerBtn = document.getElementById("login-btn");
  const loginDrawer = document.getElementById("login-drawer");
  const closeLoginDrawerBtn = document.getElementById("close-login-drawer-btn");

  loginDrawerBtn.addEventListener("click", function(){
    loginDrawer.classList.add("openingLoginDrawer");
    clearInterval(bannerSliderInterval); // Stop Banner Slider
  });

  closeLoginDrawerBtn.addEventListener("click", function(){
    loginDrawer.classList.remove("openingLoginDrawer");
    clearInterval(bannerSliderInterval);
    bannerSliderInterval = setInterval(nextB, 4000);
  });

}

bannerSection.addEventListener('mouseenter', function(){
  clearInterval(bannerSliderInterval);
});

bannerSection.addEventListener('mouseleave', function(){
  clearInterval(bannerSliderInterval);
  bannerSliderInterval = setInterval(nextB, 4000);
});

document.querySelectorAll('.banner-section .banner-slide-item .left-block h2').forEach((h2) => {
  h2.textContent = truncateWords(h2.textContent, 5);
});

document.querySelectorAll('.banner-section .banner-slide-item .left-block p').forEach((p) => {
  p.textContent = truncateWords(p.textContent, 20);
});

}

/* 
 ########################
 #### OFFERS SECTION ####
 ########################
*/
const firstDesiredDiscounts = ["10%", "15%"];
const secondDesiredDiscounts = ["20%", "25%", "30%", "35%"];

function generateStarRating(rating) {
  let starsHTML = '';
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  for (let i=0; i<fullStars; i++) { starsHTML += '<i class="fas fa-star"></i>'; }

  if (halfStar) { starsHTML += '<i class="fas fa-star-half-alt"></i>'; }

  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  for (let i=0; i<emptyStars; i++) { starsHTML += '<i class="far fa-star"></i>'; }

  return starsHTML;
}

function createOneGroupedProducts(desiredProducts, desiredProductsContainer) {

  desiredProductsContainer.innerHTML = '';

  fetch('/pages/products.json').then(response => response.json())
  .then(data => {
      const filteredProducts = data.products.filter(product => desiredProducts.includes(product.off));

      const groupedProducts = {};

      filteredProducts.forEach(product => {
        const discountClass = product.off.replace('%', '');
        if (!groupedProducts[discountClass]) {groupedProducts[discountClass] = [];}
        groupedProducts[discountClass].push(product);
      });

      for (const [discount, products] of Object.entries(groupedProducts)) {
          
         const offersBlock = document.createElement('div');
               offersBlock.className = `offersblock offersblock${discount}`;

          products.forEach((product) => {
            const productItem = document.createElement('div');
                  productItem.className = `product-item ${product.off}`;

                  const description = product.description
                                    ? product.description.slice(0, 17)
                                    : product.aboutThisItem
                                    ? product.aboutThisItem.slice(0, 17)
                                    : product.color;

                  const image1 = product.image?.[0] ?? 'default-image.jpg';
                  const image2 = product.image?.[1] ?? '';

                  productItem.innerHTML = `
                      <div class="image">
                        <img src="${image1}" alt="Product Image">
                        ${image2 ? `<img src="${image2}" alt="Product Image">` : ''}
                      </div>
                      <div class="icons">
                        <a href="#"><i class="far fa-heart"></i></a>
                        <a href="#"><i class="fas fa-cart-arrow-down"></i></a>
                      </div>
                      <div class="product-content d-flex-c-bt-st">
                        <a href="pages/single.html?id=${product.id}" class="product-title">
                          ${product.title.split(' ').slice(0, 3).join(' ')}
                        </a>
                        <p>${description}...</p>
                        <div class="ratings d-flex-r-st-st">
                          ${generateStarRating(product.rating)}
                        </div>
                        <div class="price d-flex-r-bt-c">
                          <strong>${product.price}</strong>
                          <strong>${product.salePrice}</strong>
                        </div>
                      </div>
                  `;

            offersBlock.appendChild(productItem);
          });
          
        desiredProductsContainer.appendChild(offersBlock);
      }

      const offersBlock = document.querySelectorAll('.offers-section .left-block .inner-col .offersblock');
            offersBlock.forEach((block) => {block.style.display = "none"});

      filterTabs(document.querySelectorAll('.offers-section .left-block .tabs li'), offersBlock);

  }).catch(error => {
    console.error('Error fetching products:', error);
  });
}

function createTwoGroupedProducts(desiredProducts, desiredProductsContainer) {
  desiredProductsContainer.innerHTML = ''; 

  fetch('/pages/products.json').then(response => response.json())
    .then(data => {
      const filteredProducts = data.products.filter(product => desiredProducts.includes(product.off));

      const groupedProducts = {};

      filteredProducts.forEach(product => {
        const discountClass = product.off.replace('%', '');
        if (!groupedProducts[discountClass]) {groupedProducts[discountClass] = [];}
        groupedProducts[discountClass].push(product);
      });

      for (const [discount, products] of Object.entries(groupedProducts)) {

          const offersBlock = document.createElement('div');
                offersBlock.className = `offersblock offersblock${discount}`;

          let itemsBlock = document.createElement('div');
              itemsBlock.className = 'items';

          products.forEach((product, index) => {
            const productItem = document.createElement('div');
                  productItem.className = `product-item ${product.off}`;

            const description = product.description
                              ? product.description.slice(0, 17)
                              : product.aboutThisItem
                              ? product.aboutThisItem.slice(0, 17)
                              : product.color;

            const image1 = product.image?.[0] ?? 'default-image.jpg';
            const image2 = product.image?.[1] ?? '';

            productItem.innerHTML = `
              <div class="image">
                <img src="${image1}" alt="Product Image">
                ${image2 ? `<img src="${image2}" alt="Product Image">` : ''}
              </div>
              <div class="icons">
                <a href="#"><i class="far fa-heart"></i></a>
                <a href="#"><i class="fas fa-cart-arrow-down"></i></a>
              </div>
              <div class="product-content d-flex-c-bt-st">
                <a href="pages/single.html?id=${product.id}" class="product-title">
                  ${product.title.split(' ').slice(0, 3).join(' ')}
                </a>
                <p>${description}...</p>
                <div class="ratings d-flex-r-st-st">
                  ${generateStarRating(product.rating)}
                </div>
                <div class="price d-flex-r-bt-c">
                  <strong>${product.price}</strong>
                  <strong>${product.salePrice}</strong>
                </div>
              </div>
            `;

            itemsBlock.appendChild(productItem);

            if ((index + 1) % 10 === 0 || index === products.length - 1) {
                offersBlock.appendChild(itemsBlock);
                itemsBlock = document.createElement('div');
                itemsBlock.className = 'items';
            }
          });

        desiredProductsContainer.appendChild(offersBlock);
      }

      const offersBlock = document.querySelectorAll('.offers-section .right-block .inner-col .offersblock');
            offersBlock.forEach((block) => {block.style.display = "none"});

      filterTabs(document.querySelectorAll('.offers-section .right-block .tabs li'), offersBlock);

    }).catch(error => {
       console.error('Error fetching products:', error);
    });
}

if (document.querySelector(".offers-section")){
    createOneGroupedProducts(firstDesiredDiscounts, document.querySelector(".offers-section .left-block .inner-col"));
    createTwoGroupedProducts(secondDesiredDiscounts, document.querySelector(".offers-section .right-block .inner-col"));

    function filterTabs(tabs, blocks){

      if (tabs.length === 0 || blocks.length === 0) return;

      tabs[0].classList.add('active');
      blocks[0].style.display = "block";

      tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
          let offerClass = tab.getAttribute('class').replace('%', '');

          tabs.forEach((tab) => {tab.classList.remove('active')});
          blocks.forEach((block) => {block.style.display = "none";});

          tab.classList.add('active');
          
          blocks.forEach((block) => {
            if(block.classList.contains(`offersblock${offerClass}`)){block.style.display = "block"}
          });

        });
      });
    }
}

// $(document).ready(function(){

//   function sliderWithFilterTabs(tabs, blocks, secondClassBlock){

//     $(tabs).first().addClass('active');
//     $(blocks).hide();
//     $(blocks).first().show();

//     $(tabs).click(function() {
//       var offerClass = secondClassBlock + $(this).attr('class').replace('%', '');
//       $(tabs).removeClass('active');
//       $(this).addClass('active');
//       $(blocks).hide().removeClass('active');
//       $(offerClass).show().addClass('active');
//     });

//     $(blocks).each(function() {
//       $(this).addClass('owl-carousel');
//       $(this).owlCarousel({
//         loop:true,
//         margin:10,
//         nav:true,
//         dots:false,
//         items:1
//       });
//     });
    
//   }

//   sliderWithFilterTabs('.offers-section .left-block .tabs li', '.offers-section .left-block .inner-col > div', '.offersblock');
//   sliderWithFilterTabs('.offers-section .right-block .tabs li', '.offers-section .right-block .inner-col > div', '.offersblock');

// });



/* 
 ############################
 #### MONTH DEAL SECTION ####
 ############################
*/
if(document.querySelector(".month-deal-section")){
  let monthDealSliders = document.querySelectorAll(".month-deal-section .product-card .image img");
  let monthDealCurrentSlide = 1;
  let monthDealPrevBtn = document.querySelector(".month-deal-section .product-card .left-block .arrows .arrow-left");
  let monthDealNextBtn = document.querySelector(".month-deal-section .product-card .left-block .arrows .arrow-right");
  let paginationIndicators = document.createElement("ul");
  
  for(let i=1; i<=monthDealSliders.length; i++){
      let paginationIndicator = document.createElement('li');
          paginationIndicator.setAttribute('data-index', i);
      paginationIndicators.appendChild(paginationIndicator);
  }
  
  document.querySelector(".month-deal-section .product-card .left-block .indicators").appendChild(paginationIndicators);
  
  let monthDealPaginationDots = document.querySelectorAll(".month-deal-section .product-card .left-block .indicators ul li");
  
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

/* 
 ########################
 #### BRANDS SECTION ####
 ########################
*/
function infiniteScrollSlider(options) {
  const {
      section = 'slider-section',
      containerSelector = '.slides-container',
      slidesToShowDefault = 1,
      slidesToScrollDefault = 1,
      autoplaySpeed = 5000
  } = options;

  let sliderSection = document.querySelector(section);
  let sliderContainer = document.querySelector(containerSelector);
  let currentIndex = 0;
  let slidesToShow = slidesToShowDefault;
  let slidesToScroll = slidesToScrollDefault;
  let slides;
  let isDragging = false;
  let startX = 0;
  let scrollStart = 0;
  let autoSlideInterval;
  const gapSize = parseFloat(getComputedStyle(document.documentElement).fontSize) * 3;

  function setupSlider() {
      slides = sliderContainer.children;
      sliderContainer.style.display = 'flex';
      sliderContainer.style.overflow = 'hidden';
      updateSlidesToShow();
  }

  function setResponsive() {
      const responsiveSettings = [
          { breakpoint: 10, settings: { slidesToShow: 1, slidesToScroll: 1 }},
          { breakpoint: 360, settings: { slidesToShow: 2, slidesToScroll: 1 }},
          { breakpoint: 560, settings: { slidesToShow: 3, slidesToScroll: 1 }},
          { breakpoint: 720, settings: { slidesToShow: 4, slidesToScroll: 1 }},
          { breakpoint: 1000, settings: { slidesToShow: 5, slidesToScroll: 1 }},
          { breakpoint: 1600, settings: { slidesToShow: 6, slidesToScroll: 1 }},
          { breakpoint: 1800, settings: { slidesToShow: 7, slidesToScroll: 1 }}
      ];

      responsiveSettings.forEach(resp => {
          if (window.innerWidth >= resp.breakpoint) {
              slidesToShow = resp.settings.slidesToShow;
              slidesToScroll = resp.settings.slidesToScroll;
          }
      });
      updateSlidesToShow();
  }

  function updateSlidesToShow() {
      const wrapperWidth = sliderContainer.clientWidth;
      const slideWidth = (wrapperWidth - gapSize * (slidesToShow - 1)) / slidesToShow;
      
      Array.from(slides).forEach(slide => {
          slide.style.flex = `0 0 ${slideWidth}px`;
          slide.style.maxWidth = `${slideWidth}px`;
      });
  }

  function scrollToSlide() {
      const wrapperWidth = sliderContainer.clientWidth;
      const slideWidth = (wrapperWidth - gapSize * (slidesToShow - 1)) / slidesToShow;
      const scrollPosition = currentIndex * (slideWidth + gapSize);
      const targetScroll = sliderContainer.scrollLeft + slidesToScroll * (slideWidth + gapSize);
  
      function animateScroll(start, end, duration) {
          let startTime = null;
  
          function animation(currentTime) {
              if (!startTime) startTime = currentTime;
              const timeElapsed = currentTime - startTime;
              const run = easeInOutQuad(timeElapsed, start, end - start, duration);
              sliderContainer.scrollLeft = run;
  
              if (timeElapsed < duration) requestAnimationFrame(animation);
          }
  
          function easeInOutQuad(t, b, c, d) {
              t /= d / 2;
              if (t < 1) return c / 2 * t * t + b;
              t--;
              return -c / 2 * (t * (t - 2) - 1) + b;
          }
  
          requestAnimationFrame(animation);
      }
  
      animateScroll(sliderContainer.scrollLeft, scrollPosition, 700);
  }

  function prevSlide() {
      currentIndex -= slidesToScroll;
      if (currentIndex < 0) {
          currentIndex = slides.length - (slides.length % slidesToScroll || slidesToScroll);
      }
      scrollToSlide(true);
  }

  function nextSlide() {
      currentIndex += slidesToScroll;
      
      const totalRounds = Math.floor(slides.length / slidesToShow);
      const remainder = slides.length % slidesToShow;
      const lastRoundStartIndex = (totalRounds - 1) * slidesToShow + remainder;

      const wrapperWidth = sliderContainer.clientWidth;
      const slideWidth = (wrapperWidth - gapSize * (slidesToShow - 1)) / slidesToShow;

      if (currentIndex > lastRoundStartIndex) {
          for (let i=0; i<slidesToScroll; i++) {
              sliderContainer.appendChild(slides[0]);
          }
          sliderContainer.scrollLeft -= slidesToScroll * (slideWidth + gapSize);
          currentIndex -= slidesToScroll;
      }
      scrollToSlide();    
  }

  function attachEvents() {
      window.addEventListener('resize', setResponsive);

      sliderContainer.addEventListener('mousedown', startDrag);
      sliderContainer.addEventListener('mousemove', duringDrag);
      sliderContainer.addEventListener('mouseup', endDrag);
      sliderContainer.addEventListener('mouseleave', endDrag);

      sliderContainer.addEventListener('mouseover', () => clearInterval(autoSlideInterval));
      sliderContainer.addEventListener('mouseleave', autoSlide);

      sliderContainer.addEventListener('scroll', () => {
          const wrapperWidth = sliderContainer.clientWidth;
          const slideWidth = (wrapperWidth - gapSize * (slidesToShow - 1)) / slidesToShow;

          currentIndex = Math.round(sliderContainer.scrollLeft / (slideWidth + gapSize));
      });

      sliderSection.addEventListener('mouseover', () => clearInterval(autoSlideInterval));
      sliderSection.addEventListener('mouseleave', autoSlide);
  }

  function startDrag(e) {
      isDragging = true;
      startX = e.clientX;
      scrollStart = sliderContainer.scrollLeft;
  }

  function duringDrag(e) {
      if (!isDragging) return;
      const currentX = e.clientX;
      const dragDistance = currentX - startX;
      sliderContainer.scrollLeft = scrollStart - dragDistance;
  }

  function endDrag() {
      if (!isDragging) return;
      isDragging = false;
      const wrapperWidth = sliderContainer.clientWidth;
      const slideWidth = wrapperWidth / slidesToShow;
      const scrollLeft = sliderContainer.scrollLeft;

      // Snap to nearest slide after drag
      if (Math.abs(scrollLeft - currentIndex * slideWidth) > slideWidth / 2) {
          if (scrollLeft > currentIndex * slideWidth) {
              nextSlide();
          } else {
              prevSlide();
          }
      } else {
          scrollToSlide(true);
      }
  }

  function autoSlide() {
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(nextSlide, autoplaySpeed);
  }

  setupSlider();
  setResponsive();
  attachEvents();
  autoSlide();
}

infiniteScrollSlider({section:'.brand-section', containerSelector:'.brand-section .slider-wrapper'});

/* 
 ##########################
 #### QUICK VIEW MODAL ####
 ##########################
*/
if(document.getElementById('quick-view-modal')){
  const smallImgs = document.querySelectorAll('.quick-view-modal .product-container .left-block .small-images .small-image img');
  const bigImg = document.querySelector('.quick-view-modal .product-container .left-block .big-image img');
  const quickViewModal = document.getElementById('quick-view-modal');
  const quickViewBtn = document.querySelector('.quick-view-btn');
  const closeBtn = document.querySelector('.quick-view-modal #close-btn');
  
  quickViewBtn.addEventListener('click', function() {
    quickViewModal.style.display = 'block';
  });
  
  closeBtn.addEventListener('click', function() {
    quickViewModal.style.display = 'none';
  });
  
  smallImgs.forEach((smallImg) => {
    smallImg.onclick = function(){
      bigImg.src = smallImg.src;
    }
  });
  
}  

document.getElementById("current-year").textContent = new Date().getFullYear();

/* 
 ===========================
 ####### SINGLE PAGE #######
 ===========================
*/
if(document.querySelector("#single-page")){

  function getProductId(){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
  }

  function fetchProduct(productId){
    fetch('/pages/products.json')
    .then(response => response.json())
    .then(data => {
      const product = data.products.find(p => p.id == productId);
      if(product){
        displayProductDetails(product);
      } else {
        document.querySelector("#single-page .product-container");
      }
    })
    .catch(error => {
      console.error('Error fetching the product data:', error);
      document.querySelector("#single-page .product-container").innerHTML = 'Error loading product details';
    });
  }

  if(getProductId()){
     fetchProduct(getProductId());
  } else {
    document.querySelector("#single-page .product-container").innerHTML = 'no product to view';
  }

  function displayProductDetails(product) {
    const productContainer = document.querySelector("#single-page .product-container");

    const smallImagesContainer = productContainer.querySelector(".left-block .small-images");
    smallImagesContainer.innerHTML = '';

    if (product.image && Array.isArray(product.image)) {
        product.image.forEach((img) => {
          smallImagesContainer.innerHTML += `
            <div class="small-image">
              <img src="${img}" class="small-img" alt="Product Image">
            </div>`;
        });

      productContainer.querySelector(".left-block .big-image img").src = product.image[0];
    }

    if (product.title) {productContainer.querySelector(".right-block .content h1").textContent = product.title;}
    if (product.id){productContainer.querySelector(".right-block .content .description-block .id").textContent = product.id}

    if (product.description) {
        productContainer.querySelector(".right-block .content .description-block .description").textContent = product.description;
    } else {
      productContainer.querySelector(".right-block .content .description-block").style.display = "none";
    }

    if (product.brand) {
        productContainer.querySelector(".right-block .content .brand .brand-value").textContent = product.brand;
    } else {
      productContainer.querySelector(".right-block .content .brand").style.display = 'none';
    }

    if (product.instock) {productContainer.querySelector(".right-block .content .instock").textContent = product.instock;}
    if (product.aboutThisItem) {
        productContainer.querySelector(".right-block .content .about-item-block .about-this-item").textContent = product.aboutThisItem;
    } else {
      productContainer.querySelector(".right-block .content .about-item-block").style.display = "none";
    }

    if (product.price) {productContainer.querySelector(".right-block .content .oldprice").textContent = product.price;}
    if (product.salePrice) {productContainer.querySelector(".right-block .content .price").textContent = product.salePrice;}

    const sizeBlock = productContainer.querySelector(".right-block .content .size-block");
    const sizeElement = sizeBlock.querySelector(".size .size-value");
    const sizesContainer = sizeBlock.querySelector(".sizes");

    let hasSize = product.size || product.screenSize;
    let hasSizes = product.sizes && Array.isArray(product.sizes) && product.sizes.length > 0;

    if (hasSize) {sizeElement.textContent = product.size || product.screenSize} else {sizeElement.parentElement.style.display = 'none';}

    if (hasSizes) {
        sizesContainer.innerHTML = '';
        product.sizes.forEach((size) => {
          sizesContainer.innerHTML += `<span>${size}</span>`;
        });
    } else {
      sizesContainer.style.display = 'none';
    }

    if (!hasSize && !hasSizes) {sizeBlock.style.display = 'none';} else {sizeBlock.style.display = 'flex';}

    if (product.color) {productContainer.querySelector(".right-block .content .color-block #selected-color").textContent = product.color;}

    const colorsContainer = productContainer.querySelector(".right-block .content .colors");
          colorsContainer.innerHTML = '';

    if (product.colors && Array.isArray(product.colors)) {
        product.colors.forEach((color) => {

          let backgroundStyle = '';

          if (color.includes('x')) {
              const colorArray = color.split('x').map(c => c.trim());
            if (colorArray.length === 2) {
                backgroundStyle = `radial-gradient(${colorArray[0]}, ${colorArray[1]})`;
            } else {
              backgroundStyle = `radial-gradient(${colorArray.join(', ')})`;
            }
          } else {
            backgroundStyle = color;
          }

          colorsContainer.innerHTML += `<span class="color-circle" style="background:${backgroundStyle};"></span>`;
        });
    }

    productContainer.querySelector(".right-block .content .product-quantity-block #subtotal").textContent = product.salePrice;

    setupImageClickEvents();
    magnify(document.querySelector('#single-page .product-container .left-block .big-image img'));
    flippingSizes();
    flippingColors();
    handleQuantity();
    addToCart();

  }

  const smallImages = document.querySelectorAll('.product-container .left-block .small-images .small-image img');
  const bigImage = document.querySelector('#single-page .product-container .left-block .big-image img');
  const lens = document.querySelector('#single-page .product-container .left-block .big-image .lens');
  const magnifierImage = document.querySelector('#single-page .product-container .right-block .content .magnifier-img');

  function setupImageClickEvents() {
    const smallImages = document.querySelectorAll('.product-container .left-block .small-images .small-image img');
    const bigImage = document.querySelector('#single-page .product-container .left-block .big-image img');

    smallImages.forEach((smallImg) => {
      smallImg.addEventListener('click', function () {
        bigImage.src = smallImg.src;
      });
    });
  }

  function magnify(bigImage){
    const lens = document.querySelector('#single-page .product-container .left-block .big-image .lens');
    const magnifierImage = document.querySelector('#single-page .product-container .right-block .content .magnifier-img');

    if (bigImage && lens && magnifierImage) {
      lens.addEventListener('mousemove', (e) => moveLens(e, bigImage, lens, magnifierImage));
      bigImage.addEventListener('mousemove', (e) => moveLens(e, bigImage, lens, magnifierImage));
      bigImage.addEventListener('mouseout', () => leaveLens(lens, magnifierImage));
    }
  }

  function moveLens(e, bigImage, lens, magnifierImage){
    const bigImageRect = bigImage.getBoundingClientRect();
    let x = e.pageX - bigImageRect.left - lens.offsetWidth / 2;
    let y = e.pageY - bigImageRect.top - lens.offsetHeight / 2;

    x = Math.max(0, Math.min(x, bigImageRect.width - lens.offsetWidth));
    y = Math.max(0, Math.min(y, bigImageRect.height - lens.offsetHeight));

    lens.style.left = `${x}px`;
    lens.style.top = `${y}px`;

    const cx = magnifierImage.offsetWidth / lens.offsetWidth;
    const cy = magnifierImage.offsetHeight / lens.offsetHeight;

    magnifierImage.style.backgroundImage = `url('${bigImage.src}')`;
    magnifierImage.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
    magnifierImage.style.backgroundSize = `${bigImageRect.width * cx}px ${bigImageRect.height * cy}px`;

    lens.classList.add('active');
    magnifierImage.classList.add('active');
  }

  function leaveLens(lens, magnifierImage){
    lens.classList.remove('active');
    magnifierImage.classList.remove('active');
  }

  function flippingSizes(){
    document.querySelectorAll("#single-page .size-block .sizes span").forEach((size) => {
      size.addEventListener('click', function(){
        document.querySelector("#single-page .size-block .size .size-value").textContent = size.textContent;
      });
    });
  }

  function flippingColors() {
    const selectedColor = document.querySelector(".color-block #selected-color");
    const colorCircles = document.querySelectorAll(".color-block .color-circle");

    colorCircles.forEach((colorCircle) => {
      colorCircle.addEventListener('click', function() {
        const backgroundImage = this.style.backgroundImage;
        const backgroundColor = this.style.backgroundColor;

        if (backgroundImage && backgroundImage !== 'none' && backgroundImage !== 'initial') {
            const gradientColors = backgroundImage.match(/(rgba?\(.+?\)|#[0-9a-fA-F]{3,6}|\w+)/g);

            if (gradientColors && gradientColors.length > 1) {
                const filteredColors = gradientColors.filter(color => !['radial', 'gradient', 'linear'].includes(color));
                selectedColor.textContent = filteredColors.join(' x ');
            }
        } else if (backgroundColor && backgroundColor !== 'initial') {
          selectedColor.textContent = backgroundColor;
        } else {
          selectedColor.textContent = 'No valid color found';
        }

      });
    });
  }

  function handleQuantity() {
    const maxQuantity = parseInt(document.querySelector(".product-container .right-block .instock").textContent);
    const productPrice = parseFloat(document.querySelector(".product-container .right-block .product-price .price").textContent.replace('$', '').trim());
    const decreaseQuantityBtn = document.querySelector(".product-container .right-block .product-quantity-block .decrease-quantity-btn");
    const increaseQuantityBtn = document.querySelector(".product-container .right-block .product-quantity-block .increase-quantity-btn");
    const proQuantityElement = document.querySelector(".product-container .right-block .product-quantity-block #pro-quantity-no");
    const subtotalElement = document.querySelector(".product-container .right-block .product-quantity-block #subtotal");

    let proQuantityNumber = parseInt(proQuantityElement.textContent.trim());

    decreaseQuantityBtn.addEventListener('click', () => {
      if (proQuantityNumber > 1) {
        proQuantityNumber -= 1;
        proQuantityElement.textContent = proQuantityNumber;
        subtotalElement.textContent = `$${(proQuantityNumber * productPrice).toFixed(2)}`;
      }
    });

    increaseQuantityBtn.addEventListener('click', () => {
      if (proQuantityNumber < maxQuantity) {
        proQuantityNumber += 1;
        proQuantityElement.textContent = proQuantityNumber;
        subtotalElement.textContent = `$${(proQuantityNumber * productPrice).toFixed(2)}`;
      }
    });
  }

  function addToCart(){

    document.querySelector("#single-page .product-container .right-block .b-btn").addEventListener('click', function() {
      const singlepProductContainer = document.querySelector("#single-page .product-container");

      const safeTextContent = (selector) => {
        const element = singlepProductContainer.querySelector(selector);
        return element ? element.textContent.trim() : '';
      };

      const safeGetAttribute = (selector, attr) => {
        const element = singlepProductContainer.querySelector(selector);
        return element ? element.getAttribute(attr) : '';
      };

      const productIdV = safeTextContent('.id');
      const productTitleV = safeTextContent('h1');
      const productImageV = safeGetAttribute(".big-image img", 'src');
      const productBrandV = safeTextContent('.brand-value') || '';
      const productStockV = safeTextContent('.instock');
      const oldPriceV = safeTextContent('.oldprice');
      const salePriceV = safeTextContent('.price');
      const sizeV = safeTextContent('.size-value') || '';
      const colorV = safeTextContent('#selected-color');
      const quantityV = safeTextContent('#pro-quantity-no');

      const product = {
        id: productIdV,
        title: productTitleV,
        image: productImageV,
        brand: productBrandV,
        stock: productStockV,
        oldPrice: oldPriceV,
        salePrice: salePriceV,
        size: sizeV,
        color: colorV,
        quantity: quantityV
      };

      let productCart = JSON.parse(localStorage.getItem('product-cart')) || [];

      const existingProductIndex = productCart.findIndex(item => item.id === product.id);

      if(existingProductIndex > -1) {
        productCart[existingProductIndex] = product;
        alert('Product updated in cart');
      } else {
        productCart.push(product);
        alert('Product added to cart');
      }

      localStorage.setItem('product-cart', JSON.stringify(productCart));
    });

  }

}

/*
 ==============================
 ######## CATEGORY PAGE #######
 ==============================
*/
if(document.querySelector("#category-page")){

  async function loadCategories(){
    const response = await fetch('../admin/pages/categories.json');
    if (!response.ok) {throw new Error('Failed to load categories');}
    const data = await response.json();
    return data.categories;
  }

  function getParentCategories(categoryId, categories, parentCategories = []){
    const category = categories.find(cat => cat.id === categoryId);

    if(category){
       parentCategories.unshift(category);

       if(category.parentId){
          return getParentCategories(category.parentId, categories, parentCategories);
       }
    }

    return parentCategories;
  }

  function getChildCategories(categoryId, categories) {
    return categories.filter(cat => cat.parentId === categoryId);
  }

  function buildCategoryList(parentCategories, childCategories = []){
    const totalCategories = parentCategories.length;

    let parentCategoryHTML = parentCategories.map((parentCategory, index) => {
      if(index < totalCategories - 1){
         return `<li class="catlist"><a href="category.html?id=${parentCategory.id}" class="catlink">${parentCategory.name}</a></li>`;
      } else {
        return `<li class="catlist thiscat">${parentCategory.name}</li>`;
      }

    }).join('');

    let childCategoryHTML = '';
    if (childCategories.length > 0) {
        childCategoryHTML = childCategories.map(childCategory => {
          return `<li class="childs-catlist"><a href="category.html?id=${childCategory.id}" class="catlink childs-catlink">${childCategory.name}</a></li>`;
        }).join('');
    }
  
    return parentCategoryHTML + childCategoryHTML;

  }

  async function displayParentAndChildCategories(){

    try {
    
      const params = new URLSearchParams(window.location.search);
      const currentCategoryId = params.get('id');

      if (!currentCategoryId) {
        console.error('No category ID found in URL');
        return;
      }

      const categories = await loadCategories();

      const parentCategories = getParentCategories(currentCategoryId, categories);
      const childCategories = getChildCategories(currentCategoryId, categories);

      const categoryListHTML = buildCategoryList(parentCategories, childCategories);

      document.querySelector('#category-page .filter-col .parent-categories-block .catmenu').innerHTML = categoryListHTML;

      const thisCat = document.querySelector("#category-page .filter-col .parent-categories-block .thiscat");
      if(childCategories.length > 0){
         thisCat.innerHTML += '<i class="fa fa-angle-down"></i>';
         thisCat.style.cssText = 'border-bottom:1px solid var(--gray4);border-bottom-left-radius:0;border-bottom-right-radius:0;';
      }

    } catch (error) {
      console.error('Error loading categories:', error);
    }

    const catlist = document.querySelectorAll("#category-page .filter-col .parent-categories-block .catlist");
    for(let i=0; i<catlist.length; i++){
        catlist[i].style.paddingLeft = ((i + 1) * 0.5) + "rem";
    }

    const childsCatList = document.querySelectorAll("#category-page .filter-col .parent-categories-block .childs-catlist");
    const lastCatList = catlist[catlist.length - 1];
    const lastCatListPaddingLeft = window.getComputedStyle(lastCatList).paddingLeft;

    if(childsCatList.length > 0){
       for (let j=0; j<childsCatList.length; j++) {
            childsCatList[j].style.paddingLeft = (parseFloat(lastCatListPaddingLeft) + 8) + "px";
       }
    }
  }

  displayParentAndChildCategories();


  async function buildCategoryList2(){

    const params = new URLSearchParams(window.location.search);
    const currentCategoryId = params.get('id');

    const categories = await loadCategories();

    const childCategories = getChildCategories(currentCategoryId, categories)

    let childCategoriesHtml = childCategories.map((childCategory) => {
      
       const childCategoryItems = getChildCategories(childCategory.id, categories);

       let childFooterHtml = '';
       if (childCategoryItems.length > 0) {
           childFooterHtml = `
             <div class="cat-item-footer d-flex-c-st-st">
               ${childCategoryItems.map(childCategoryItem => `
                 <a href="category.html?id=${childCategoryItem.id}" class="category-btn">${childCategoryItem.name}</a>
               `).join('')}
             </div>`;
       }

       return `<div class="category-item">
                 <a href="category.html?id=${childCategory.id}">
                   <div class="image d-flex-r-c-c"><img src="${childCategory.Image}" alt=""></div>
                   <h4>${childCategory.name}</h4>
                 </a>
                 ${childFooterHtml}
               </div>`
    }).join('');

    return childCategoriesHtml;
  }

  async function displayCategoryItems() {
    const categoryItemsContainer = document.querySelector("#category-page .right-block .category-items");
  
    const childCategoriesHtml = await buildCategoryList2();
  
    categoryItemsContainer.innerHTML = childCategoriesHtml;

    const categoryItems = document.querySelectorAll('#category-page .right-block .category-item');

    categoryItems.forEach(function(categoryItem) {
      const catItemFooter = categoryItem.querySelector('#category-page .right-block .category-item .cat-item-footer');

      if(catItemFooter && catItemFooter.children.length > 0) {
         categoryItem.classList.add('has-childs-category');
      }
    });
  }
  
  displayCategoryItems();


  $('#category-page .category-page-container .right-block .categories-products .categoriesproducts1').owlCarousel({
    loop:true,
    autoplay:true,
    dots:false,
    center:false,
    margin:0,
    autoplayTimeout:9000,
    smartSpeed:1500,
    autoplayHoverPause:true,
    items:7, 
    nav:true,
    navText: ['<i class="fa fa-angle-left"></i>',
              '<i class="fa fa-angle-right"></i>',],
    responsive:{
      0:{items:1},
      320:{items:2},
      500:{items:3},
      1100:{items:4},
      1300:{items:5},
      1400:{items:6},
      1500:{items:7},
      1700:{items:8}
    }     
  }); $('#category-page .right-block .categories-products .categoriesproducts1 .owl-nav').removeClass('disabled');

  $('#category-page-categoriesproducts .categoriesproducts2-container').owlCarousel({
    loop:true,
    autoplay:true,
    dots:false,
    center:false,
    margin:35,
    autoplayTimeout:10000,
    smartSpeed:1500,
    autoplayHoverPause:true,
    items:9, 
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>',
             '<i class="fa fa-angle-right"></i>'],
    responsive:{
      0:{items:1},
      320:{items:2},
      500:{items:3},
      700:{items:4},
      1000:{items:5},
      1300:{items:6},
      1450:{items:7},
      1500:{items:8},
      1600:{items:9}
    },
  }); $('#category-page-categoriesproducts .categoriesproducts2-container .owl-nav').removeClass('disabled');

}

/* 
 =======================
 ###### CART PAGE ######
 =======================
*/
const maxTotal = 1000;

if(document.querySelector(".cart-page")){
  
  function renderCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('product-cart')) || [];
    const cartTableBody = document.getElementById('cart-items');

    cartTableBody.innerHTML = '';

    if (cartItems.length === 0) {cartTableBody.innerHTML = '<tr><td colspan="5">Your cart is empty</td></tr>';}

    cartItems.forEach((product, index) => {
      const itemPrice = parseFloat(product.salePrice.replace('$', ''));
    
      const itemtotal = itemPrice * product.quantity;
    
      const productRow = `
        <tr>
          <td> <!-- Product -->
            <div class="product-card d-flex-r-st-st">
              <div class="image">
                <img src="${product.image}" alt="${product.title}">
              </div>
              <div class="content d-flex-c-st-st">
                <h5>${product.title}</h5>
                <p>${product.color}${product.size ? ' / ' + product.size : ''}</p>
                <p>Brand: ${product.brand}</p>
                <span id="instock">${product.stock} in stock</span>
              </div>
            </div>
          </td>
          <td><p class="price">$${itemPrice.toFixed(2)}</p></td>
          <td> <!-- Quantity -->
            <div class="product-quantity-btns d-flex-r-st-c">
              <button type="button" class="pro-quantity-btn decrease-quantity-btn d-flex-r-c-c" onclick="updateQuantity(${index}, 'decrease')">
                <i class="fas fa-minus"></i>
              </button>
              <span id="pro-quantity-no">${product.quantity}</span>
              <button type="button" class="pro-quantity-btn increase-quantity-btn d-flex-r-c-c" onclick="updateQuantity(${index}, 'increase')">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </td>
          <td><p class="total-price">$${itemtotal.toFixed(2)}</p></td>
          <td><i class="fas fa-times" onclick="removeProduct(${index})"></i></td>
        </tr>
      `;

      cartTableBody.innerHTML += productRow;

    });

    document.querySelectorAll(".cart-page .left-block table tbody .product-card .content h5").forEach((h5) => {
      h5.textContent = truncateWords(h5.textContent, 7);
    });
    
    viewSubtotalandTotal();
    
  }

  function viewSubtotalandTotal(){

    if(document.querySelector(".cart-page .left-block table tbody tr .price")){
       const productRows = document.querySelectorAll(".cart-page .left-block table tbody tr");
       const subtotalProductsPrice = document.querySelector(".cart-page .right-block .calculate-block #subtotal");
       const total = document.querySelector(".cart-page .right-block .checkout-block #total");
   
       let initialSubtotal = 0;
       let shippingFee = 10;
       const maxTotal = 1000;
   
       productRows.forEach((row) => {
         const proQuantity = parseInt(row.querySelector(".product-quantity-btns #pro-quantity-no").textContent.trim());
         const proPrice = parseFloat(row.querySelector(".price").textContent.replace('$', '').trim());
         const totalPriceProduct = row.querySelector(".total-price");
   
         totalPriceProduct.textContent = `$${(proQuantity * proPrice).toFixed(2)}`;
   
         initialSubtotal += proQuantity * proPrice;
         
         if(initialSubtotal >= maxTotal){shippingFee = 0;}
   
       });
   
       subtotalProductsPrice.textContent = `$${initialSubtotal.toFixed(2)}`;
       total.textContent = `$${(initialSubtotal + shippingFee).toFixed(2)}`;
   
       updateShippingMessage(initialSubtotal);
       updateProgressBar(initialSubtotal);
    }
    
  }

  function updateQuantity(index, action) {
    const cartItems = JSON.parse(localStorage.getItem('product-cart')) || [];

    const stock = cartItems[index].stock;

    if (action === 'increase' && cartItems[index].quantity < stock) {
        cartItems[index].quantity++;
    } else if (action === 'decrease' && cartItems[index].quantity > 1) {
        cartItems[index].quantity--;
    }

    localStorage.setItem('product-cart', JSON.stringify(cartItems));
    renderCartItems();
  }

  function removeProduct(index) {
    const cartItems = JSON.parse(localStorage.getItem('product-cart')) || [];

    cartItems.splice(index, 1);
    localStorage.setItem('product-cart', JSON.stringify(cartItems));
    renderCartItems();
  }

  let initialSubtotal = 0;
  let shippingFee = 10;

  function updateShippingMessage(subtotal){
    const shippingInfo = document.querySelector(".cart-page .progress-bar-block .shipping-case p");

    if(subtotal >= maxTotal){
      shippingInfo.textContent = "Your order now includes free shipping!";
    } else {
      shippingInfo.innerHTML = `only <span id="remaining-free">${(maxTotal - subtotal).toFixed(2)}</span> away from free shipping`;
    }
  }

  function updateProgressBar(calculateTotal) {
    const progressPercentage = parseInt((calculateTotal / maxTotal) * 100);
    const progressBar = document.querySelector('.cart-page .progress-bar-block .filled-progress-bar');
    const progressIcon = document.getElementById('progress-icon');

    progressBar.style.width = `${Math.min(progressPercentage, 100)}%`;

    if (progressPercentage < 25) {
        progressBar.style.backgroundColor = 'var(--red8)';
    } else if (progressPercentage >= 25 && progressPercentage < 100) {
      progressBar.style.backgroundColor = 'orange';
    } else {
      progressBar.style.backgroundColor = 'var(--green10)';
    }

    progressIcon.style.left = `calc(${Math.min(progressPercentage, 100)}% - 1.5rem)`;
    
  }

  document.addEventListener('DOMContentLoaded', renderCartItems());
  
}

if(header){
  let productsCart = JSON.parse(localStorage.getItem('product-cart')) || [];
  let productsCartCount = productsCart.length;

  document.querySelector(".main-header .upper .icons .cart-icon span").textContent = productsCartCount;
}

/* 
 ===========================
 ###### CHECKOUT PAGE ######
 ===========================
*/
if(document.querySelector(".checkout-page") || document.querySelector(".payment-section")){

 const deliveryChecks = document.querySelectorAll(".checkout-page .left-block .delivery-block .check-parent .check");
 deliveryChecks.forEach((deliveryCheck) => {
  deliveryCheck.addEventListener('click', function(){

    deliveryChecks.forEach((deliveryCheck) => {
      deliveryCheck.classList.remove('selectedcheck');
      const radioInput = deliveryCheck.querySelector('input[type="radio"]');
      radioInput.checked = false;
    });

    deliveryCheck.classList.add('selectedcheck');
    const radioInput = deliveryCheck.querySelector('input[type="radio"]');
    radioInput.checked = true;
  });
 });

 function renderItemsCheckout(){
  const cartItems = JSON.parse(localStorage.getItem('product-cart')) || [];
  const productsCheckoutContainer = document.querySelector(".checkout-page .right-block .products");
        productsCheckoutContainer.innerHTML = '';

        let initialSubtotal = 0;
        let shippingFee = 10;

  if(cartItems.length === 0){productsCheckoutContainer.innerHTML = 'theres is no product';}

  cartItems.forEach((product) => {
    totalPriceProduct = product.quantity * parseFloat(product.salePrice.replace('$', ''));

    const productItem = `
      <div class="product-item d-flex-r-bt-c">
        <div class="content d-flex-r-st-c">
          <div class="image">
            <div class="value"><span>${product.quantity}</span></div>
            <img src="${product.image}" alt="${product.title}">
          </div>
          <div class="details d-flex-c-st-st">
            <h5>${product.title}</h5>
            <p>${product.color}${product.size ? ' / ' + product.size : ''}</p>
          </div>
        </div>
        <p class="pro-price">$${totalPriceProduct.toFixed(2)}</p>
      </div>
    `;

    productsCheckoutContainer.innerHTML += productItem;

    initialSubtotal += product.quantity * parseFloat(product.salePrice.replace('$', ''));

  });

  document.querySelectorAll(".checkout-page .right-block .products .product-item .details h5").forEach((h5) => {
    h5.textContent = truncateWords(h5.textContent, 6);
  });

  const subtotalElement = document.querySelector(".checkout-page .right-block .discount-block .subtotal .value");
  const shippingElement = document.querySelector(".checkout-page .right-block .discount-block .shipping .value");
  const totalElement = document.querySelector(".checkout-page .right-block .discount-block .total .value");

        if(initialSubtotal >= maxTotal){shippingFee = 0}

        subtotalElement.textContent = `$${initialSubtotal}`;
        shippingElement.textContent = `$${shippingFee}`;
        totalElement.textContent = `$${initialSubtotal + shippingFee}`
   
 }

 renderItemsCheckout();

}

/*
 ======================
 #### PAYMENT PAGE ####
 ======================
*/
if(document.querySelector(".payment-section")){
   const cartItems = JSON.parse(localStorage.getItem('product-cart')) || [];
}