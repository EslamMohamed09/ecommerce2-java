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

function loadHtml(selector, htmlContent, type){
  document.querySelector(selector).innerHTML = htmlContent;

  if(type === "header"){document.dispatchEvent(new Event("headerLoaded"))}
}

/*** SCROLL HEADER ***/
const header = document.querySelector('header');

// header code:
if(header){

  document.addEventListener('headerLoaded', () => {

    const loginDrawerBtn = document.getElementById("login-btn");
    const closeLoginDrawerBtn = document.getElementById("close-login-drawer-btn");
    const loginDrawer = document.getElementById("login-drawer");

    loginDrawerBtn.addEventListener("click", function(){
      loginDrawer.classList.add("openingLoginDrawer");
    });

    closeLoginDrawerBtn.addEventListener("click", function(){
      loginDrawer.classList.remove("openingLoginDrawer");
    });

    document.querySelectorAll('header .main-header .middle-nav .buttons .service-button .value span').forEach((span) => {
      let number = span.textContent.trim();

      if(/^\d{3,}$/.test(number)){

        if (window.innerWidth < 490) {
            span.parentElement.style.padding = '4px 2px 4px 1.5px';
        } else {
          span.parentElement.style.padding = '6px 2px 5.5px';
        }

      } else if(/^\d{2}$/.test(number)) {

        if (window.innerWidth < 490) {
            span.parentElement.style.padding = '4px 2.5px 4px 3.5px';
        } else {
          span.parentElement.style.padding = '5px 3.5px';
        }

      } else {

        if (window.innerWidth < 490) {
            span.parentElement.style.padding = '3px 4px';
        } else {
          span.parentElement.style.padding = '5px';
        }

      }
    });

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

  });

  loadHtml("header", headerContent, "header");

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
// slider code
let index = 0;
const bannerSection = document.querySelector(".banner-section");
const bannerSlides = document.querySelectorAll('.banner-section .banner-slide-item');
const loginDrawer = document.getElementById("login-drawer");
const loginDrawerBtn = document.getElementById("login-btn");
const closeLoginDrawerBtn = document.getElementById("close-login-drawer-btn");

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

function stopSlider(){
  clearInterval(bannerSliderInterval);
}

function startSlider(){
  clearInterval(bannerSliderInterval);
  bannerSliderInterval = setInterval(nextB, 4000);
}

window.addEventListener('scroll', function(){ // Stop Banner Slider
  if(window.scrollY > 10){
    stopSlider();
  } else if(window.scrollY === 0){
    startSlider();
  }
});

bannerSection.addEventListener('mouseenter', function(){
  stopSlider()
});

bannerSection.addEventListener('mouseleave', function(){
  startSlider()
});

function checkLoginDrawer(){
  if(loginDrawer.classList.contains("openingLoginDrawer")){
    clearInterval(bannerSliderInterval);
  } else {
    clearInterval(bannerSliderInterval);
    bannerSliderInterval = setInterval(nextB, 4000);
  }
}

loginDrawerBtn.addEventListener("click", stopSlider);
closeLoginDrawerBtn.addEventListener("click", startSlider);

document.querySelectorAll('.banner-section .banner-slide-item .left-block h2').forEach((h2) => {
  h2.textContent = truncateWords(h2.textContent, 5);
});

document.querySelectorAll('.banner-section .banner-slide-item .left-block p').forEach((p) => {
  p.textContent = truncateWords(p.textContent, 20);
});

}

/* 
 ##########################
 #### POPULAR PRODUCTS ####
 ##########################
*/
document.querySelectorAll('.popular-products-section .product-item .product-name').forEach((title) => {
  title.textContent = truncateWords(title.textContent, 4);
});

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

function blockSlider(options) {
    const {
        section = 'slider-section',
        containerSelector = '.slides-container',
        prevArrowSelector = '.arrow-left',
        nextArrowSelector = '.arrow-right',
        autoplaySpeed = 3000
    } = options;

    let sliderSection = document.querySelector(section);
    let sliderContainer = containerSelector instanceof Element ? containerSelector : document.querySelector(containerSelector);
    let currentIndex = 0;
    let slides;
    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;
    let autoSlideInterval;
    const gapSize = 0;

    function setupSlider() {
        slides = Array.from(sliderContainer.children).filter(slide => !slide.classList.contains('arrows') 
                                                                   && !slide.id.includes('sliderdots'));
        sliderContainer.style.display = 'flex';
        sliderContainer.style.overflow = 'hidden';
        updateSlidesToShow();
    }

    function updateSlidesToShow() {
        const wrapperWidth = sliderContainer.clientWidth;
        const slideWidth = wrapperWidth; // Full width for one slide
        Array.from(slides).forEach(slide => {
            slide.style.flex = `0 0 ${slideWidth}px`;
            slide.style.maxWidth = `${slideWidth}px`;
        });
    }

    function scrollToSlide() {
        const wrapperWidth = sliderContainer.clientWidth;
        const scrollPosition = currentIndex * wrapperWidth;

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
        
        if (currentIndex >= slides.length) {
            currentIndex = 0;
            sliderContainer.scrollTo({ left: 0 });
        }
    }

    function prevSlide() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        scrollToSlide();
    }

    function nextSlide() {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        scrollToSlide();
    }

    function attachEvents() {
        const prevButton = prevArrowSelector;
        const nextButton = nextArrowSelector;

        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);
        window.addEventListener('resize', updateSlidesToShow);

        sliderContainer.addEventListener('mousedown', startDrag);
        sliderContainer.addEventListener('mousemove', duringDrag);
        sliderContainer.addEventListener('mouseup', endDrag);
        sliderContainer.addEventListener('mouseleave', endDrag);
    }

    function startDrag(e) {
      isDragging = true;
      startX = e.clientX;
      scrollStart = sliderContainer.scrollLeft;
    }

    function duringDrag(e) {
      if (!isDragging) return;
      const dragDistance = e.clientX - startX;
      sliderContainer.scrollLeft = scrollStart - dragDistance;
    }

    function endDrag() {
      if (!isDragging) return;
      isDragging = false;

      const wrapperWidth = sliderContainer.clientWidth;
      const threshold = wrapperWidth / 4; // Drag sensitivity threshold
      const currentScroll = sliderContainer.scrollLeft;
      const targetScroll = currentIndex * wrapperWidth;

      if (Math.abs(currentScroll - targetScroll) > threshold) {
          if (currentScroll > targetScroll) {
              nextSlide();
          } else {
              prevSlide();
          }
      } else {
          scrollToSlide();
      }
    }

    setupSlider();
    updateSlidesToShow();
    attachEvents();
}

function filterTabs(tabs, blocks){

  if (tabs.length === 0 || blocks.length === 0) return;

  tabs[0].classList.add('active');
  blocks[0].style.display = "flex";

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      let offerClass = tab.getAttribute('class').replace('%', '');

      tabs.forEach((tab) => {tab.classList.remove('active')});
      blocks.forEach((block) => {block.style.display = "none";});

      tab.classList.add('active');
      
      blocks.forEach((block) => {
        if(block.classList.contains(`offersblock${offerClass}`)){block.style.display = "flex"}
      });

    });
  });
}

function createOneGroupedProducts(desiredProducts, desiredProductsContainer) {

  desiredProductsContainer.innerHTML = '';

  fetch('../admin/pages/products.json').then(response => response.json())
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

          const arrowsHolder = document.createElement('div');
                arrowsHolder.classList.add('arrows');
                arrowsHolder.innerHTML = `
                  <button class="prev-btn"><i class="fa fa-angle-left"></i></button>
                  <button class="next-btn"><i class="fa fa-angle-right"></i></button>
                `;

        offersBlock.appendChild(arrowsHolder);
          
        desiredProductsContainer.appendChild(offersBlock);
      }

      const offersBlock = document.querySelectorAll('.offers-section .left-block .inner-col .offersblock');

      offersBlock.forEach((block) => {
        blockSlider({
          section:'.offers-section .left-block',
          containerSelector:block,
          prevArrowSelector:block.querySelector('.arrows .prev-btn'),
          nextArrowSelector:block.querySelector('.arrows .next-btn'),
        });
      });

      offersBlock.forEach((block) => {block.style.display = "none"});

      filterTabs(document.querySelectorAll('.offers-section .left-block .tabs li'), offersBlock);

  }).catch(error => {
    console.error('Error fetching products:', error);
  });
}

function createTwoGroupedProducts(desiredProducts, desiredProductsContainer) {

  fetch('../admin/pages/products.json').then(response => response.json())
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

          const arrowsHolder = document.createElement('div');
                arrowsHolder.classList.add('arrows');
                arrowsHolder.innerHTML = `
                  <button class="prev-btn"><i class="fa fa-angle-left"></i></button>
                  <button class="next-btn"><i class="fa fa-angle-right"></i></button>
                `;

              offersBlock.appendChild(arrowsHolder);

        desiredProductsContainer.appendChild(offersBlock);
      }

      const offersBlock = document.querySelectorAll('.offers-section .right-block .inner-col .offersblock');

      offersBlock.forEach((block) => {
        blockSlider({
          section:'.offers-section .right-block',
          containerSelector:block,
          prevArrowSelector:block.querySelector('.arrows .prev-btn'),
          nextArrowSelector:block.querySelector('.arrows .next-btn'),
        });
      });

      offersBlock.forEach((block) => {block.style.display = "none"});

      filterTabs(document.querySelectorAll('.offers-section .right-block .tabs li'), offersBlock);

    }).catch(error => {
       console.error('Error fetching products:', error);
    });
}

if (document.querySelector(".offers-section")){
    createOneGroupedProducts(firstDesiredDiscounts, document.querySelector(".offers-section .left-block .inner-col"));
    createTwoGroupedProducts(secondDesiredDiscounts, document.querySelector(".offers-section .right-block .inner-col"));
}

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

if(document.querySelector('.brand-section')){
  infiniteScrollSlider({section:'.brand-section', containerSelector:'.brand-section .slider-wrapper'});
}

/* 
 ##########################
 #### QUICK VIEW MODAL ####
 ##########################
*/
if(document.getElementById('quick-view-modal')){
  const smallImgs = document.querySelectorAll('.quick-view-modal .product-container .left-block .small-images-holder .small-image img');
  const bigImg = document.querySelector('.quick-view-modal .product-container .left-block .big-image-holder img');
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
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
  }

  async function loadProduct(productId){
    const response = await fetch('../admin/pages/products.json');
    if(!response.ok){throw new Error('Failed to load products')}
    const data = await response.json();

    const product = data.products.find(product => product.id === productId);
    if(!product){throw new Error('Product not found')}
    return product;
  }

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

        if(category.parent_id){
           return getParentCategories(category.parent_id, categories, parentCategories);
        }
    }

    return parentCategories;
  }

  async function displayParentCategories(){
    try {
      const categories = await loadCategories();
      const product = await loadProduct(getProductId());
      const categoryId = product.catId;
      const parentCategories = getParentCategories(categoryId, categories);

      let parentCategoriesHtml = parentCategories.map((parentCategory, index) => `
      <li class="d-flex-r-c-c">
        ${index !== 0 ? '<i class="fas fa-angle-left"></i>' : ''}
        <a href="category.html?id=${parentCategory.id}" class="catlink">${parentCategory.name}</a>
      </li>`).join('');
   
      const parentCategoriesHolder = document.querySelector('#single-page .product-container .left-block .parent-categories-holder');  
            parentCategoriesHolder.innerHTML = parentCategoriesHtml;
    } catch (error) {
      console.error('error loading parent categories:', error);
    }
  }

  displayParentCategories();

  function fetchProduct(productId){
    fetch('../admin/pages/products.json').then(response => response.json())
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
      document.querySelector("#single-page .product-container").innerHTML = 'Error loading product';
    });
  }

  if(getProductId()){
     fetchProduct(getProductId());
  } else {
    document.querySelector("#single-page .product-container").innerHTML = 'no product to view';
  }

  function displayProductDetails(product) {
    const productContainer = document.querySelector("#single-page .product-container");

    const smallImagesContainer = productContainer.querySelector(".left-block .small-images-holder");
    smallImagesContainer.innerHTML = '';

    if (product.image && Array.isArray(product.image)) {
        product.image.forEach((img) => {
          smallImagesContainer.innerHTML += `
            <div class="small-image">
              <img src="${img}" class="small-img" alt="Product Image">
            </div>`;
        });

      productContainer.querySelector(".left-block .big-image-holder img").src = product.image[0];
    }

    if (product.title) {productContainer.querySelector(".right-block .content h1").textContent = product.title}
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
    magnify(document.querySelector('#single-page .product-container .left-block .big-image-holder img'));
    flippingSizes();
    flippingColors();
    handleQuantity();
    addToCart();

  }

  function setupImageClickEvents() {
    const smallImages = document.querySelectorAll('.product-container .left-block .small-images-holder .small-image img');
    const bigImage = document.querySelector('#single-page .product-container .left-block .big-image-holder img');

    smallImages.forEach((smallImg) => {
      smallImg.addEventListener('click', function () {
        bigImage.src = smallImg.src;
      });
    });
  }

  function magnify(bigImage){
    const lens = document.querySelector('#single-page .product-container .left-block .big-image-holder .lens');
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
    const selectedColor = document.querySelector("#single-page .right-block .color-block #selected-color");
    const colorCircles = document.querySelectorAll("#single-page .right-block .color-block .color-circle");

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
      const productImageV = safeGetAttribute(".big-image-holder img", 'src');
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
if(document.querySelector(".category-page")){

  async function loadCategories(){
    const response = await fetch('../admin/pages/categories.json');
    if (!response.ok) {throw new Error('Failed to load categories');}
    const data = await response.json();
    return data.categories;
  }

  async function loadProducts(){
    const response = await fetch('../admin/pages/products.json');
    if(!response.ok){throw new Error('Failed to load products')}
    const data = await response.json();
    return data.products;
  }

  function getParentCategories(categoryId, categories, parentCategories = []){
    const category = categories.find(cat => cat.id === categoryId);

    if(category){
       parentCategories.unshift(category);

        if(category.parent_id){
           return getParentCategories(category.parent_id, categories, parentCategories);
        }
    }

    return parentCategories;
  }

  function getChildCategories(categoryId, categories) {
    return categories.filter(cat => cat.parent_id === categoryId);
  }

  function getLeafCategories(categoryId, categories) {
    let result = [];

    function findChildren(id){
      let children = categories.filter(cat => cat.parent_id === id);

      children.forEach(child => findChildren(child.id));

      if(children.length === 0){
         result.push(categories.find(cat => cat.id === id));
      }

    }

    findChildren(categoryId);
    return result;
  }

  function getCategoriesProducts(categoriesIds, products){
    return products.filter(product => categoriesIds.includes(product.catId));
  }

  function getSiblingCategories(categoryId, categories) {

    let category = categories.find(cat => cat.id === categoryId);
    
    if (!category || !category.parent_id) {return [];}

    // Get all categories with the same parent_id (siblings) and exclude the given category
    return categories.filter(cat => cat.parent_id === category.parent_id && cat.id !== categoryId);
  }

  function getCategoryProducts(categoryId, products){
    return products.filter(product => product.catId === categoryId);
  }

  function buildCategoryList(parentCategories, childCategories = []){
    const totalParentCategories = parentCategories.length;

    let parentCategoryHTML = parentCategories.map((parentCategory, index) => {
      if(index < totalParentCategories - 1){
         return `<li class="categorylist parentcategorylist"><a href="category.html?id=${parentCategory.id}" class="categorylink">${parentCategory.name}</a></li>`;
      } else {
        return `<li class="categorylist thiscategorylist">${parentCategory.name}</li>`;
      }
    }).join('');

    let childCategoryHTML = '';
    if (childCategories.length > 0) {
        childCategoryHTML = childCategories.map(childCategory => {
          return `<li class="childs-categorylist"><a href="category.html?id=${childCategory.id}" class="categorylink childs-categorylink">${childCategory.name}</a></li>`;
        }).join('');
    }
  
    return parentCategoryHTML + childCategoryHTML;
  }

  async function displayCategoriesAndProducts(){

    try {
    
      const params = new URLSearchParams(window.location.search);
      const currentCategoryId = params.get('id');

      if (!currentCategoryId) {
        console.error('No category ID found in URL');
        return;
      }

      const categories = await loadCategories();
      const products = await loadProducts();
      const parentCategories = getParentCategories(currentCategoryId, categories);
      const childCategories = getChildCategories(currentCategoryId, categories);
      const categoryProducts = getCategoryProducts(currentCategoryId, products);
      const leafCategories = getLeafCategories(currentCategoryId, categories);

      // print parent & child categories in filter block
      document.querySelector('.category-page .filter-block .categories-block .catmenu').innerHTML = buildCategoryList(parentCategories, childCategories);

      // print category title in information bar
      const thisCategoryElement = document.querySelector(".category-page .filter-block .categories-block .thiscategorylist");
      const currentCategoryName = thisCategoryElement.textContent.trim();
      document.querySelector(".category-page .category-information .category-title").textContent = currentCategoryName;

      if(childCategories.length > 0){
         thisCategoryElement.innerHTML += '<i class="fa fa-angle-down"></i>';
         thisCategoryElement.style.cssText = 'border-bottom-left-radius:0;border-bottom-right-radius:0;';

         const childsCount = document.createElement('span'); // print categories count
               childsCount.classList.add('childs-count');
               childsCount.textContent = `${childCategories.length} categories`;
         document.querySelector(".category-page .category-information .category-stats").appendChild(childsCount);

         let childCategoriesHtml = childCategories.map((childCategory) => { // create categories items with their childs
      
            const childCategoryChilds = getChildCategories(childCategory.id, categories);
    
            let childChildsFooterHtml = '';
            let hasChildClass = '';
    
            if (childCategoryChilds.length > 0) {
                hasChildClass = 'has-child-category';
                childChildsFooterHtml = `
                  <div class="cat-item-footer d-flex-c-st-st">
                    ${childCategoryChilds.map(childCategoryChild => `
                      <a href="category.html?id=${childCategoryChild.id}" class="category-btn">${childCategoryChild.name}</a>
                    `).join('')}
                  </div>`;
            }
    
            return `<div class="category-item ${hasChildClass}">
                      <a href="category.html?id=${childCategory.id}">
                        <div class="image d-flex-r-c-c"><img src="${childCategory.Image}" alt=""></div>
                        <h4>${childCategory.name}</h4>
                      </a>
                      ${childChildsFooterHtml}
                    </div>`
         }).join('');

         const categoryItemsContainer = document.createElement('div');
               categoryItemsContainer.classList.add('category-items-container');
               categoryItemsContainer.innerHTML = childCategoriesHtml;
         document.querySelector(".category-page .right-block").appendChild(categoryItemsContainer);

         const leafCategoriesIds = leafCategories.map(cat => cat.id);

         const categoriesProducts = getCategoriesProducts(leafCategoriesIds, products);

         let categoriesProductsHtml = categoriesProducts.map((product) => { // create categories products html

            let imageHtml = product.image.slice(0,2).map((imageSrc) => `<img src="${imageSrc}" alt="${product.title}">`).join('');

            let colorHtml = product.colors && product.colors.length > 0 
              ? `<ul class="colors-holder d-flex-r-st-c">
                    ${product.colors.slice(0,5).map((proColor) =>
                      `<li class="circle-outer"><div class="color-circle" style="background-color:${proColor};"></div></li>`
                    ).join('')}
                </ul>`
              :'';

            let truncateTitle = product.title.split(" ").slice(0,3).join(" ");

            let filterDescription = product.description ? product.description.replace(/[-:,]/g, "") :
                                    product.aboutThisItem ? product.aboutThisItem.replace(/[-:,]/g, "") : '';

            let descriptionHtml = filterDescription ? `<p>${filterDescription.split(" ").slice(0,5).join(" ")}...</p>` : '';

            let ratingHtml = '';
            if(product.rating){
              for (let i=1; i<=5; i++) {
                  if (i <= product.rating) {
                      ratingHtml += `<i class="fas fa-star"></i>`;
                  } else if (i - 0.5 === product.rating) {
                      ratingHtml += `<i class="fas fa-star-half-alt"></i>`;
                  } else {
                      ratingHtml += `<i class="far fa-star"></i>`;
                  }
              }
              ratingHtml = `<div class="ratings d-flex-r-st-st">${ratingHtml}</div>`
            }
           
            return `<div class="product-item">
                      <div class="image-holder d-flex-r-c-c">
                        ${imageHtml}
                      </div>
                      <div class="icons d-flex-c-bt-c">
                        <button type="button"><i class="far fa-heart" id="icon"></i></button>
                        <button type="button"><i class="fas fa-shopping-cart" id="icon"></i></button>
                      </div>
                      <div class="content d-flex-c-st-st">
                        ${colorHtml}
                        <a href="single.html" class="product-name">${truncateTitle}</a>
                        ${descriptionHtml}
                        ${ratingHtml}
                        <div class="price-holder d-flex-r-bt-c">
                          <strong class="oldprice">${product.price}</strong>
                          <strong class="price">${product.salePrice}</strong>
                        </div>
                      </div>
            </div>`

         }).join('');

         const categoriesProductsElement = document.createElement('div');
               categoriesProductsElement.classList.add('categories-products');
         const categoriesProductsContainer = document.createElement('div');
               categoriesProductsContainer.classList.add('categories-products-container');

        categoriesProductsContainer.innerHTML(categoriesProductsHtml);
        categoriesProductsElement.appendChild(categoriesProductsContainer);
        document.querySelector(".category-page .right-block").appendChild(categoriesProductsElement);
        
      }

      if (childCategories.length > 0 && categoryProducts.length > 0) { // print | if there are category childs & category products
          const separator = document.createElement('span');
                separator.classList.add('separator');
                separator.textContent = ' | ';
          document.querySelector(".category-page .category-information .category-stats").appendChild(separator);
      }

      if(categoryProducts.length > 0){

          const categoryProductsCount = document.createElement('span'); // print products count
                categoryProductsCount.classList.add('category-products-count');
                categoryProductsCount.textContent = `${categoryProducts.length} products`;
          document.querySelector(".category-page .category-information .category-stats").appendChild(categoryProductsCount);

          const paginationHolder = document.createElement('div');
                paginationHolder.classList.add('pagination-holder');
          const productsContainer = document.createElement('div');
                productsContainer.classList.add('products-container');
          const thisCategoryProducts = document.createElement('div');
                thisCategoryProducts.classList.add('this-category-products');
         
          function renderCategoryProducts(categoryProducts){
            let categoryProductsHtml = categoryProducts.map((product) => {

              let imageHtml = product.image.slice(0,2).map((imageSrc) => `<img src="${imageSrc}" alt="${product.title}">`).join('');

              let colorHtml = product.colors && product.colors.length > 0 
                ? `<ul class="colors-holder d-flex-r-st-c">
                      ${product.colors.slice(0,5).map((proColor) =>
                        `<li class="circle-outer"><div class="color-circle" style="background-color:${proColor};"></div></li>`
                      ).join('')}
                  </ul>`
                :'';

              let truncateTitle = product.title.split(" ").slice(0,3).join(" ");

              let filterDescription = product.description ? product.description.replace(/[-:,]/g, "") :
                                      product.aboutThisItem ? product.aboutThisItem.replace(/[-:,]/g, "") : '';

              let descriptionHtml = filterDescription ? `<p>${filterDescription.split(" ").slice(0,5).join(" ")}...</p>` : '';

              let ratingHtml = '';
              if(product.rating){
                for (let i=1; i<=5; i++) {
                    if (i <= product.rating) {
                        ratingHtml += `<i class="fas fa-star"></i>`;
                    } else if (i - 0.5 === product.rating) {
                        ratingHtml += `<i class="fas fa-star-half-alt"></i>`;
                    } else {
                        ratingHtml += `<i class="far fa-star"></i>`;
                    }
                }
                ratingHtml = `<div class="ratings d-flex-r-st-st">${ratingHtml}</div>`
              }

              return `<div class="product-item">
                        <div class="image-holder d-flex-r-c-c">
                          ${imageHtml}
                        </div>
                        <div class="icons d-flex-c-bt-c">
                          <button type="button"><i class="far fa-heart" id="icon"></i></button>
                          <button type="button"><i class="fas fa-shopping-cart" id="icon"></i></button>
                        </div>
                        <div class="content d-flex-c-st-st">
                          ${colorHtml}
                          <a href="single.html" class="product-name">${truncateTitle}</a>
                          ${descriptionHtml}
                          ${ratingHtml}
                          <div class="price-holder d-flex-r-bt-c">
                            <strong class="oldprice">${product.price}</strong>
                            <strong class="price">${product.salePrice}</strong>
                          </div>
                        </div>
              </div>`
            }).join('');
            productsContainer.innerHTML = categoryProductsHtml;
          }

          thisCategoryProducts.appendChild(productsContainer);
          thisCategoryProducts.appendChild(paginationHolder);

          pagination(categoryProducts, 45, renderCategoryProducts, paginationHolder);

          document.querySelector(".category-page .right-block").appendChild(thisCategoryProducts);

          selectProductColor();
      }

      // handle padding left to categories lists
      const categorylists = document.querySelectorAll(".category-page .filter-block .categories-block .categorylist");
      for(let i=0; i<categorylists.length; i++){
          categorylists[i].style.paddingLeft = ((i + 1) * 0.5) + "rem";
      }
      const lastCategoryList = categorylists[categorylists.length - 1];
      const lastCategoryListPaddingLeft = window.getComputedStyle(lastCategoryList).paddingLeft;
      const childsCategoryLists = document.querySelectorAll(".category-page .filter-block .categories-block .childs-categorylist");
      if(childsCategoryLists.length > 0){
         for (let j=0; j<childsCategoryLists.length; j++) {
              childsCategoryLists[j].style.paddingLeft = (parseFloat(lastCategoryListPaddingLeft) + 8) + "px";
         }
      }

    } catch (error) {
      console.error('Error loading categories:', error);
    }
  }

  displayCategoriesAndProducts();


  $('.category-page .category-page-container .right-block .categories-products .categoriesproducts1').owlCarousel({
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
  }); $('.category-page .right-block .categories-products .categoriesproducts1 .owl-nav').removeClass('disabled');

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

  document.querySelector(".main-header .middle-nav .buttons .cart-icon span").textContent = productsCartCount;
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

/*
 ######################
 ####### GLOBAL #######
 ######################
*/
function selectProductColor(){

  const productColors = document.querySelectorAll('.colors-holder .circle-outer .color-circle');
        
  productColors.forEach((productColor) => {
    productColor.addEventListener('click', function(){
      const productItem = this.closest('.product-item');
  
      productItem.querySelectorAll('.color-circle').forEach(productC => productC.classList.remove('checked'));
  
      this.classList.add('checked');
    });
  });

}

function pagination(data, itemsPerPage, renderContent, paginationContainer) {
  const totalPages = Math.ceil(data.length / itemsPerPage);

  if (totalPages <= 1) {
    paginationContainer.style.display = 'none'; 
    renderContent(data, 1);
    return;
  } else {
    paginationContainer.style.display = 'flex';
  }

  function renderPage(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const currentItems = data.slice(startIndex, endIndex);
    renderContent(currentItems, page);
  }

  function renderPagination(currentPage) {
    paginationContainer.innerHTML = '';

    const visiblePages = 3;
    const range = Math.min(visiblePages, totalPages);

    if (currentPage > 1) {
       const prevButton = createPaginationLink('Previous', currentPage - 1);
       prevButton.classList.add('previous');
       paginationContainer.appendChild(prevButton);
    }

    if (currentPage <= range) {
      for (let i = 1; i <= range; i++) {
        paginationContainer.appendChild(createPaginationLink(i, i, currentPage));
      }
      if (totalPages > visiblePages) {
        appendDots();
        paginationContainer.appendChild(createPaginationLink(totalPages, totalPages, currentPage));
      }
    } else if (currentPage > totalPages - range) {
      paginationContainer.appendChild(createPaginationLink(1, 1, currentPage));
      appendDots();
      for (let i = totalPages - range + 1; i <= totalPages; i++) {
        paginationContainer.appendChild(createPaginationLink(i, i, currentPage));
      }
    } else {
      paginationContainer.appendChild(createPaginationLink(1, 1, currentPage));
      appendDots();
      for (let i = currentPage - Math.floor(visiblePages / 2); i <= currentPage + Math.floor(visiblePages / 2); i++) {
        paginationContainer.appendChild(createPaginationLink(i, i, currentPage));
      }
      appendDots();
      paginationContainer.appendChild(createPaginationLink(totalPages, totalPages, currentPage));
    }

    if (currentPage < totalPages) {
       const nextButton = createPaginationLink('Next', currentPage + 1);
       nextButton.classList.add('next');
       paginationContainer.appendChild(nextButton);
    }
  }

  function createPaginationLink(text, page, currentPage) {
    const link = document.createElement('a');
    link.href = '#';
    link.className = 'pagination-link';
    link.textContent = text;
    if (page === currentPage) {
        link.classList.add('active');
    }
    link.addEventListener('click', (e) => {
      e.preventDefault();
      renderPage(page);
      renderPagination(page);
    });
    return link;
  }

  function appendDots() {
    const dots = document.createElement('span');
    dots.className = 'pagination-dots';
    dots.textContent = '....';
    paginationContainer.appendChild(dots);
  }

  renderPage(1);
  renderPagination(1);
}