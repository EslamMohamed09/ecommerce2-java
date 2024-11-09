function loadHtml(selector, htmlContent, type){
  document.querySelector(selector).innerHTML = htmlContent;

  if(type === "header"){document.dispatchEvent(new Event("headerLoaded"));}
  if(type === "aside"){document.dispatchEvent(new Event("asideLoaded"));}
}

document.addEventListener('headerLoaded', () => {
  const themeToggler = document.getElementById("theme-toggler");
  const adjustIcon = document.getElementById("adjust-icon");
  const moonIcon = document.getElementById("moon-icon");

  function saveTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme-variable');
        moonIcon.classList.add('active');
        adjustIcon.classList.remove('active');
    } else {
      document.body.classList.remove('dark-theme-variable');
      adjustIcon.classList.add('active');
      moonIcon.classList.remove('active');
    }
  }

  saveTheme(localStorage.getItem('ecommerce2-dashboard-theme'));

  themeToggler.addEventListener("click", () => {
      document.body.classList.toggle('dark-theme-variable');
      
      themeToggler.querySelector('.fa-moon').classList.toggle('active');
      themeToggler.querySelector('.fa-adjust').classList.toggle('active');

      const currentTheme = document.body.classList.contains('dark-theme-variable') ? 'dark' : 'light';
      localStorage.setItem('ecommerce2-dashboard-theme', currentTheme);
  });

  if(document.querySelector('.header')){
    let dropmenu = document.querySelector('.header .right-header .content .drop-menu');
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

/** Add Certifications & Skills Fields **/
if(document.getElementById('addCertificationBtn') && document.getElementById('deleteCertificationBtn')){
  document.addEventListener("DOMContentLoaded", function () {
       const certificationsContainer = document.getElementById('certificationsContainer');
       const skillsContainer = document.getElementById('skillsContainer');
       const addCertificationButton = document.getElementById('addCertificationBtn');
       const deleteCertificationButton = document.getElementById('deleteCertificationBtn');
       const maxCertificationMessage = document.getElementById('maxCertificationMessage');
       const submitRphase2 = document.getElementById('submitregisterphase2');
       const addSkillsButton = document.getElementById('addSkillsBtn');
       const deleteSkillsButton = document.getElementById('deleteSkillsBtn');
       const submitRegister = document.getElementById('submit-register');

       let certificationCounter = 0;
       let certificationNo = 1;

       addCertificationButton.addEventListener('click', function () { // Certification
           const newCertificationField = document.createElement('div');
           newCertificationField.className = 'add-certification-form';

           newCertificationField.innerHTML = `
               <div class="sub-heading"> <h3 class="sub-title">Certification ${certificationNo}</h3> <i class="fas fa-star"></i> </div>

               <div class="double-input-box d-flex-r-bt-c">
                   
                   <div class="input-box row">
                     <label class="control-label col-lg-2 col-md-2 col-sm-3">Title</label>
                     <div class="inputt col-lg-10 col-md-10 col-sm-9"><input type="text" name="certification[${certificationCounter}][etitle]" placeholder="Bachelor Of Arts" autocomplete="off" class="input-control"/></div>
                   </div>

                   <div class="input-box row">
                     <label class="control-label col-lg-2 col-md-2 col-sm-3">Duration</label>
                     <div class="inputt col-lg-10 col-md-10 col-sm-9"><input type="text" name="certification[${certificationCounter}][eduration]" placeholder="2013 - 2018" autocomplete="off" class="input-control"/></div>
                   </div>

               </div>

               <div class="description-input-box row">
                  <label class="control-label col-lg-1 col-md-2 col-sm-2">Description</label>
                  <div class="inputt col-lg-11 col-md-10 col-sm-10"><input type="text" name="certification[${certificationCounter}][edescription]" placeholder="I Succeed In Php Diploma From Egyptian Technology Center" autocomplete="off" class="input-control"/></div>
               </div>
           `;

           certificationsContainer.appendChild(newCertificationField);
           certificationCounter++;
           certificationNo++;

           if(certificationCounter > 0){
              addCertificationButton.innerHTML = `add more certification`;
              deleteCertificationButton.style.display = 'block';
           }

           if(certificationCounter === 1){
              submitRphase2.innerHTML = `submit certification`;
           }

           if(submitRphase2 && certificationCounter > 1){
              submitRphase2.innerHTML = `submit certifications`;
           }

           if (certificationCounter === 4) {
               addCertificationButton.disabled = true;
               maxCertificationMessage.style.display = 'block';
           }

       });

       deleteCertificationButton.addEventListener('click', function () {
           if (certificationCounter > 0) {
               const lastCertificationField = certificationsContainer.lastElementChild;
               certificationsContainer.removeChild(lastCertificationField);
               certificationCounter--;
               certificationNo--;

               if (certificationCounter === 0) {
                   deleteCertificationButton.style.display = 'none';
                   addCertificationButton.innerHTML = 'Add Certification';
               }

               if(submitRphase2 && certificationCounter === 0) {submitRphase2.innerHTML = `submit without certification`;}

               if(submitRphase2 && certificationCounter === 1) {submitRphase2.innerHTML = `submit certification`;}

               if(submitRphase2 && certificationCounter > 1) {submitRphase2.innerHTML = `submit certifications`;}

               if (certificationCounter < 4) {
                   addCertificationButton.disabled = false;
                   maxCertificationMessage.style.display = 'none';
               }
           }
       });

       
       let skillsCounter = 0;

       addSkillsButton.addEventListener('click', function () { // Skills
           const skillsform = document.createElement('form');
           skillsform.className = 'skills-form';

           skillsform.innerHTML = `
               <div class="block-title2 d-flex-r-bt-c"><hr><h2>Add skills</h2><hr></div>

               <div class="skills-blocks d-flex-r-st-st">

                 <div class="computer-skills-block block d-flex-c-st-st">  <!-- Computer Skills -->
                   <label>Computer Skills</label>
                   <textarea name="skills[computerskills]" id="computerSkillsTextarea"></textarea>
                   <input type="text" maxlength="28" onkeydown="if(event.keyCode === 13) {addTag(null, 'computerSkillsInput', 'computerSkillsTextarea'); return false;}" class="input-control" id="computerSkillsInput">
                   <button type="button" onclick="addTag(null, 'computerSkillsInput', 'computerSkillsTextarea')" class="btn2">add skill</button>
                 </div>

                 <div class="personal-skills-block block d-flex-c-st-st">  <!-- Personal Skills -->
                   <label>Personal Skills</label>
                   <textarea name="skills[personalskills]" id="personalSkillsTextarea"></textarea>
                   <input type="text" maxlength="28" onkeydown="if(event.keyCode === 13) {addTag(null, 'personalSkillsInput', 'personalSkillsTextarea'); return false;}" class="input-control" id="personalSkillsInput">
                   <button type="button" onclick="addTag(null, 'personalSkillsInput', 'personalSkillsTextarea')" class="btn2">add skill</button>
                 </div>

               </div>
           `;

           skillsContainer.appendChild(skillsform);
           skillsCounter++;

           if(skillsCounter > 0) {addSkillsButton.style.display = `none`;
                                  deleteSkillsButton.style.display = `block`;}

           if(submitRegister && skillsCounter > 0) {submitRegister.value = `register`;}

           if(skillsCounter === 0) {addSkillsButton.style.display = `block`;
                                    deleteSkillsButton.style.display = `none`;}
       });

       deleteSkillsButton.addEventListener('click', function () {
           if (skillsCounter > 0) {
               const lastSkillsField = skillsContainer.lastElementChild;
               skillsContainer.removeChild(lastSkillsField);
               skillsCounter--;

               addSkillsButton.style.display = `none`;
               
               if (skillsCounter === 0) {addSkillsButton.style.display = `block`;
                                         deleteSkillsButton.style.display = `none`;}

               if (submitRegister && skillsCounter === 0) {submitRegister.value = `register without skills`;}
           }
       });

  });
}

/*
======================
######## ASIDE #######
======================
*/
document.addEventListener('asideLoaded', () => {
  
  const currentPage = window.location.pathname.split('/').pop();

  document.querySelectorAll('#aside .aside-list li .sidebar-link').forEach(function(item) {
    const itemHref = item.getAttribute('href');

    if (itemHref === currentPage) {
        item.classList.add('active');
    }
  });

  /*** BIG & SMALL ASIDE ***/
  if(document.getElementById("aside") && document.getElementById("asidebutton")){
     const asideMenu = document.getElementById("aside");
     const asideButton = document.getElementById("asidebutton");
     const asideButton2 = document.getElementById("asidebutton2");
     let isToggledByButton = false;

      function updateAsideMenuClass(){
        if(!isToggledByButton){
          if(window.innerWidth < 711){
             asideMenu.classList.add("smallaside");
          } else {
            asideMenu.classList.remove("smallaside");
          }
        }
      }

      updateAsideMenuClass();

      window.addEventListener("resize", updateAsideMenuClass);

      asideButton.addEventListener('click', function(){
        asideMenu.classList.toggle("smallaside");
        isToggledByButton = asideMenu.classList.contains("smallaside");
        if (asideMenu.classList.length === 0) {asideMenu.removeAttribute("class");}
      });

      asideButton2.addEventListener('click', function(){
        asideMenu.classList.toggle("smallaside");
        isToggledByButton = asideMenu.classList.contains("smallaside");
        if (asideMenu.classList.length === 0) {asideMenu.removeAttribute("class");}
      });

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
filterWithTabs($('.profile-page .profile-data .tabs-area li'), $('.profile-page .profile-data .info-cards .info-card'));
filterWithTabs($('.home-page .right-aside .all-users-block .buttons li'), $('.home-page .right-aside .all-users-block .items'));

/**** Collapsible in Profile Page ****/
const collapsibleProfileBtn = document.getElementById("edit-profile-collapsible");

collapsibleProfileBtn.addEventListener("click", function() {
  this.classList.toggle("active");
  let editProfileData = document.querySelector(".profile-page .edit-profile-data");
  if (editProfileData.style.display === "block") {
      editProfileData.style.display = "none";
  } else {
      editProfileData.style.display = "block";
  }
});

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

