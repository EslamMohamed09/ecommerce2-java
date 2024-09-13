/*** SCROLL HEADER ***/
const header = document.querySelector('header');


/*** MOBILE HEADER ***/
if(document.getElementById("open-mHeader") && document.getElementById("main-header")){
   const mobileHBtn = document.getElementById("open-mHeader");
   const mainHeader = document.getElementById("main-header");
   mobileHBtn.onclick = () => mainHeader.classList.toggle("mobile-header");
}

const firstSection = document.querySelector('section');

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

/*
#################
 QUICK VIEW MODAL
#################
*/
if(document.getElementById('quick-view-modal')){
  const smallImgs = document.querySelectorAll('.quick-view-modal .product-container .col-left .small-images .small-image img');
  const bigImg = document.querySelector('.quick-view-modal .product-container .col-left .big-image img');
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
###############
 SINGLE PAGE
###############
*/
const smallImages = document.querySelectorAll('.product-container .col-left .small-images .small-image img');
const bigImage = document.querySelector('#single-page .product-container .col-left .big-image img');
const lens = document.querySelector('#single-page .product-container .col-left .big-image .lens');
const magnifierImage = document.querySelector('#single-page .product-container .col-right .content .magnifier-img');

if(smallImages && bigImage){

for(let i=0; i<smallImages.length; i++){
    smallImages[i].onclick = function(){
      bigImage.src = smallImages[i].src;
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

magnify(bigImage);

document.querySelector("#single-page .product-container .col-right .b-btn").addEventListener('click', function(){
  const singlepProductContainer = document.querySelector("#single-page .product-container");
  const productIdV = singlepProductContainer.querySelector('.id').textContent;
  const productTitleV = singlepProductContainer.querySelector('h1').textContent;
  const productImageV = singlepProductContainer.querySelector(".big-image img").getAttribute('src');
  const productDescriptionV = singlepProductContainer.querySelector('.description').textContent;
  const productBrandV = singlepProductContainer.querySelector('.brand').textContent.split(': ')[1];
  const productStockV = singlepProductContainer.querySelector('.col-right #instock').textContent;
  const productAboutV = singlepProductContainer.querySelector('.about-this-item').textContent;
  const oldPriceV = singlepProductContainer.querySelector('.oldprice').textContent;
  const priceV = singlepProductContainer.querySelector('.price').textContent;
  const sizeV = singlepProductContainer.querySelector('.size').textContent;
  const colorV = singlepProductContainer.querySelector('.col-right #selected-color').textContent;
  const quantityV = singlepProductContainer.querySelector('.col-right #pro-quantity-no').textContent;

  const product = {
    id: productIdV,
    title: productTitleV,
    image: productImageV,
    description: productDescriptionV,
    brand: productBrandV,
    stock: productStockV,
    about: productAboutV,
    oldPrice: oldPriceV,
    price: priceV,
    size: sizeV,
    color: colorV,
    quantity: quantityV
  };

  let productCart = JSON.parse(localStorage.getItem('product-cart')) || [];
  productCart.push(product);
  localStorage.setItem('product-cart', JSON.stringify(productCart));

  alert('Product added to cart');

});

}

const selectedColor = document.querySelector(".color-block #selected-color");
const colorCircles = document.querySelectorAll(".color-block .color-circle");

colorCircles.forEach((colorCircle) => {
  colorCircle.addEventListener('click', function(){
    selectedColor.textContent = this.style.backgroundColor;
  });
});

if(document.querySelector(".product-container .col-right")){
const maxQuantity = parseInt(document.querySelector(".product-container .col-right #instock").textContent);
const productPrice = parseFloat(document.querySelector(".product-container .col-right .product-price .price").textContent.replace('$', '').trim());
const decreaseQuantityBtn = document.querySelector(".product-container .col-right .product-quantity-block .decrease-quantity-btn");
const increaseQuantityBtn = document.querySelector(".product-container .col-right .product-quantity-block .increase-quantity-btn");
const proQuantityElement = document.querySelector(".product-container .col-right .product-quantity-block #pro-quantity-no");
const subtotalElement = document.querySelector(".product-container .col-right .product-quantity-block #subtotal");

let proQuantityNumber = parseInt(proQuantityElement.textContent.trim());

decreaseQuantityBtn.addEventListener('click', function(){
  if(proQuantityNumber > 1){
     proQuantityNumber -= 1;
     proQuantityElement.textContent = proQuantityNumber;
     subtotalElement.textContent = `$${proQuantityElement.textContent * productPrice.toFixed(2)}`;
  }
});

increaseQuantityBtn.addEventListener('click', function(){
  if(proQuantityNumber < maxQuantity){
     proQuantityNumber += 1;
     proQuantityElement.textContent = proQuantityNumber;
     subtotalElement.textContent = `$${proQuantityElement.textContent * productPrice.toFixed(2)}`;
  }
});
}

/*
###########
 CART PAGE
###########
*/
if(document.querySelector(".cart-page")){

// Function to render the cart items
function renderCartItems() {
  const cartItems = JSON.parse(localStorage.getItem('product-cart')) || [];
  const cartTableBody = document.getElementById('cart-items');

  cartTableBody.innerHTML = '';

  if (cartItems.length === 0) {
    cartTableBody.innerHTML = '<tr><td colspan="5">Your cart is empty</td></tr>';
    return;
  }

  cartItems.forEach((product, index) => {
    const price = parseFloat(product.price.replace('$', ''));
  
    const total = price * product.quantity;
  
    const productRow = `
      <tr>
        <td> <!-- Product -->
          <div class="product-card d-flex-r-st-st">
            <div class="image">
              <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="content d-flex-c-st-st">
              <h5>${product.title}</h5>
              <p>${product.color} / ${product.size}</p>
              <p>Brand: ${product.brand}</p>
              <span id="instock">${product.stock} in stock</span>
            </div>
          </div>
        </td>
        <td><p class="price">$${price.toFixed(2)}</p></td>
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
        <td><p class="total-price">$${total.toFixed(2)}</p></td>
        <td><i class="fas fa-times" onclick="removeProduct(${index})"></i></td>
      </tr>
    `;
  
    cartTableBody.innerHTML += productRow;
  });
  
}

function updateQuantity(index, action) {
  const cartItems = JSON.parse(localStorage.getItem('product-cart')) || [];

  if (action === 'increase') {
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

// Initialize cart rendering on page load
document.addEventListener('DOMContentLoaded', renderCartItems);


const productRows = document.querySelectorAll(".cart-page .col-left table tbody tr");
const subtotalProductsPrice = document.querySelector(".cart-page .col-right .calculate-block #subtotal");
const total = document.querySelector(".cart-page .col-right .checkout-block #total");
const shippingInfo = document.querySelector(".cart-page .progress-bar-block .shipping-case p");

let initialSubtotal = 0;
let shippingFee = 10;
const maxTotal = 5000;

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

function updateShippingMessage(subtotal){
  if(subtotal >= maxTotal){
     shippingInfo.textContent = "Your order now includes free shipping!";
  } else {
    shippingInfo.innerHTML = `only <span id="remaining-free">${(maxTotal - subtotal).toFixed(2)}</span> away from free shipping`;
  }
}

updateShippingMessage(initialSubtotal);

productRows.forEach((row) => {

  const decQuantityBtn = row.querySelector(".product-quantity-btns .decrease-quantity-btn");
  const proQuantity = row.querySelector(".product-quantity-btns #pro-quantity-no");
  const incQuantityBtn = row.querySelector(".product-quantity-btns .increase-quantity-btn");
  const avInStock = parseInt(row.querySelector("#instock").textContent);
  const proPrice = parseFloat(row.querySelector(".price").textContent.replace('$', '').trim());
  const totalPriceProduct = row.querySelector(".total-price");

  let proQuantityNum = parseInt(proQuantity.textContent.trim());

  decQuantityBtn.addEventListener('click', function(){
    if(proQuantityNum > 1){
      proQuantityNum -= 1;
      proQuantity.textContent = proQuantityNum;
      totalPriceProduct.textContent = `$${proQuantity.textContent * proPrice.toFixed(2)}`;
      
      let subtotal = 0;
      productRows.forEach(row => {
        subtotal += parseFloat(row.querySelector(".total-price").textContent.replace('$', '').trim());
      });

      subtotalProductsPrice.textContent = `$${subtotal.toFixed(2)}`;

      if (subtotal >= maxTotal) {
          shippingFee = 0;
      } else {
        shippingFee = 10;
      }

      total.textContent = `$${(subtotal + shippingFee).toFixed(2)}`;

      updateShippingMessage(subtotal);

      updateProgressBar(subtotal);
    }
  });

  incQuantityBtn.addEventListener('click', function(){
    if(proQuantityNum < avInStock){
      proQuantityNum += 1;
      proQuantity.textContent = proQuantityNum;
      totalPriceProduct.textContent = `$${proQuantity.textContent * proPrice.toFixed(2)}`;
      
      let subtotal = 0;
      productRows.forEach(row => {
        subtotal += parseFloat(row.querySelector(".total-price").textContent.replace('$', '').trim());
      });

      subtotalProductsPrice.textContent = `$${subtotal.toFixed(2)}`;

      if (subtotal >= maxTotal) {
        shippingFee = 0;
      } else {
        shippingFee = 10;
      }

      total.textContent = `$${(subtotal + shippingFee).toFixed(2)}`;
      
      updateShippingMessage(subtotal);

      updateProgressBar(subtotal);
    }
  });

});

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

updateProgressBar(initialSubtotal);

}


/*
##############
 CHECKOUT PAGE
##############
*/
if(document.querySelector(".checkout-page")){
 const deliveryChecks = document.querySelectorAll(".checkout-page .col-left .delivery-block .check-parent .check");
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
}