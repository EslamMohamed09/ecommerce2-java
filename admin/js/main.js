function loadHtml(selector, htmlContent, type){
  document.querySelector(selector).innerHTML = htmlContent;

  if(type === "header"){document.dispatchEvent(new Event("headerLoaded"));}
  if(type === "aside"){document.dispatchEvent(new Event("asideLoaded"));}
}

document.addEventListener('headerLoaded', () => {
  // convert color mode
  const themeToggler = document.getElementById("theme-toggler");
  themeToggler.addEventListener("click", () => {
      document.body.classList.toggle('dark-theme-variable');
      
      themeToggler.querySelector('.fa-moon').classList.toggle('active');
      themeToggler.querySelector('.fa-adjust').classList.toggle('active');
  });

  if(document.querySelector('.header')){
    let dropmenu = document.querySelector('.header .profile .drop-menu');
    let rightheader = document.querySelector('.header .right-header');
    const profileImg = document.querySelector('#profile-img');

    profileImg.onclick = (event) => {
      event.stopPropagation(); // Prevents the click event from propagating to the document body
      dropmenu.classList.toggle('dropactive');
      rightheader.classList.remove('dropactive');
    };
    document.body.addEventListener('click', (event) => { // Add click event listener to the document body
      if (!profileImg.contains(event.target) && !dropmenu.contains(event.target)) {// Check if the clicked element is not the image or the dropdown menu
        dropmenu.classList.remove('dropactive');
      }
    });
  }
});

loadHtml('#header', headerContent, "header");

$('body').css('paddingTop', $('.header').innerHeight() - 1);

/*
 ======================================
 ######## LOGIN & REGISTER PAGE #######
 ======================================
*/
// Show Register & Login Form
$(document).ready(function(){
  const registerForm = $(".register-form");
  const loginForm = $(".login-form");

  registerForm.hide();

  $("#register-link").click(function(){
    registerForm.show();
    loginForm.hide();
  });

  $("#login-link").click(function(){
    loginForm.show();
    registerForm.hide();
  });
});

/** Register Steps **/
document.addEventListener("DOMContentLoaded", function () {
  const registerphase1 = document.getElementById("registerphase1");
  const registerphase2 = document.getElementById("registerphase2");
  const registerphase3 = document.getElementById("registerphase3");

  const Rstep1 = document.getElementById("Rstep1");
  const Rstep2 = document.getElementById("Rstep2");
  const Rstep3 = document.getElementById("Rstep3");

  const submitRphase1 = document.getElementById("submitregisterphase1");
  const backRphase2 = document.getElementById("backregisterphase2");
  const submitRphase2 = document.getElementById("submitregisterphase2");
  const backRphase3 = document.getElementById("backregisterphase3");

  submitRphase1.addEventListener("click", function () {
      registerphase1.classList.remove("active");
      registerphase2.classList.add("active");
      Rstep1.classList.remove("active");
      Rstep2.classList.add("active");
  });

  backRphase2.addEventListener("click", function () {
      registerphase2.classList.remove("active");
      registerphase1.classList.add("active");
      Rstep2.classList.remove("active");
      Rstep1.classList.add("active");
  });

  submitRphase2.addEventListener("click", function () {
      registerphase2.classList.remove("active");
      registerphase3.classList.add("active");
      Rstep2.classList.remove("active");
      Rstep3.classList.add("active");
  });

  backRphase3.addEventListener("click", function () {
      registerphase3.classList.remove("active");
      registerphase2.classList.add("active");
      Rstep3.classList.remove("active");
      Rstep2.classList.add("active");
  });
});

function checkErrors() {
  var errors = [];

  var username = document.getElementById("usernameinput");
  var password = document.getElementById("passinput");
  var fullname = document.getElementById("fullnameinput");
  var email = document.getElementById("emailinput");
  var whatsapp = document.getElementById("whatsinput");

  if(username && !username.validity.valid) {errors.push(username.title);}
  if(password && !password.validity.valid) {errors.push(password.title);}
  if(fullname && !fullname.validity.valid) {errors.push(fullname.title);}
  if(email && !email.validity.valid) {errors.push(email.title);}
  if(whatsapp && !whatsapp.validity.valid) {errors.push(whatsapp.title);}

  if(errors.length > 0) {
     var errorMessage = "Please fix the following errors:\n" + errors.join("\n");
     alert(errorMessage);

  //    var errorContainer = document.getElementById("error-container");
  //        errorContainer.innerHTML = errorMessage;
  //        errorContainer.classList.add("error-alert");

  //    for (var i=0; i<errors.length; i++) {
  //         // errorContainer.children[i].classList.add("error-object");

  //         var errorElement = document.createElement("div");
  //         errorElement.classList.add("error-object");
  //         errorElement.innerHTML = errors[i];
  //         errorContainer.appendChild(errorElement);
  //    }

     return false;
  }

  return true;

}

/******** ASIDE ********/
document.addEventListener('asideLoaded', () => {
  
  const currentPage = window.location.pathname.split('/').pop();

  document.querySelectorAll('#aside .aside-list li .sidebar-link').forEach(function(item) {
    const itemHref = item.getAttribute('href');

    if (itemHref === currentPage) {
        item.classList.add('active');
    }
  });

  /*** BIG & SMALL ASIDE ***/
  if(document.getElementById("aside") && document.getElementById("open-aside")){
      const mainAside = document.getElementById("aside");
      const smallasideBtn = document.getElementById("open-aside");
      const openasideBtn = document.getElementById("open-btn");

      // big aside in small screen
      const openAsideArr = [openasideBtn];
      const elemToggleFunc = function (elem) {elem.classList.toggle("active");}

      for (let i = 0; i < openAsideArr.length; i++) {
          openAsideArr[i].addEventListener("click", function () {
              elemToggleFunc(mainAside);
          });
      }

      // small aside in big screen
      const smallAsideArr = [smallasideBtn];
      const smallAsideFunc = function (elem) {elem.classList.toggle("smallaside");}

      for (let i = 0; i < smallAsideArr.length; i++) {
          smallAsideArr[i].addEventListener("click", function () {
              smallAsideFunc(mainAside);
          });
      }
  }

});

loadHtml('#aside', asideContent, "aside");

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

/*
 =============================
 ######## PROFILE PAGE #######
 =============================
*/
/*
 #### Profile-Data ####
*/
function filterWithTabs(tabButton, cardItem) {

  let firstFilterclick = tabButton.first().attr('filter-click');
  cardItem.not('.' + firstFilterclick).hide(0);
  cardItem.filter('.' + firstFilterclick).show(0);

  tabButton.click(function () {
    filterClick = $(this).attr('filter-click');
    cardItem.not('.' + filterClick).hide(0);
    cardItem.filter('.' + filterClick).show(0);
    $(this).addClass('button-active').siblings().removeClass('button-active');
  });
  tabButton.first().addClass('button-active');
}

// profile-info
filterWithTabs($('.main-profile-page .profile-data .tabs-area li'), $('.main-profile-page .profile-data .info-cards .info-card'));


/*
 #### Add Tags to Textarea ####
*/
function addTag(event, inputElement, textareaElement){
  if(event && event.keycode !== 13){return}

  const input = document.querySelector(inputElement);
  const textarea = document.querySelector(textareaElement);

  if(input.value.trim() !== ''){
     const P = document.createElement('div');
     P.className = 'tag';
     P.textContent = input.value.trim();

     textarea.value += `[${input.value.trim()}]`;
     textarea.appendChild(P);
     input.value = '';
  }

}


/*
 ===============================
 ######## CUSTOMERS PAGE #######
 ===============================
*/
if(document.getElementById("visaInput")){

  const VisaInput = document.getElementById("visaInput");

  VisaInput.addEventListener("input", function (event) {
      var inputValue = event.target.value.replace(/[^0-9]/g, "");

      var formattedValue = inputValue.replace(/(\d{4})(?=\d)/g, "$1-");

      event.target.value = formattedValue;
  });
}

