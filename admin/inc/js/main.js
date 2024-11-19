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

if(window.location.pathname.split('/').pop().split('.')[0] !== "login"){
   loadHtml('#header', headerContent, "header");
}

$('body').css('paddingTop', $('.header').innerHeight() - 1);

/*
======================================
######## LOGIN & REGISTER PAGE #######
======================================
*/
/* #### Add Tags to Textarea #### */
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

// Show Register & Login Form
if(document.querySelector("#login-section")){

  const registerForm = document.querySelector("#login-section .register-form");
  const loginForm = document.querySelector("#login-section .login-form");
  const goToRegisterFormBtn = document.querySelector('#login-section #goToRegisterFormBtn');
  const goToLoginFormBtn = document.querySelector('#login-section #goToLoginFormBtn');

  registerForm.style.display = "none";

  goToRegisterFormBtn.addEventListener('click', function(){
    registerForm.style.display = "block";
    loginForm.style.display = "none";
  });

  goToLoginFormBtn.addEventListener('click', function(){
    registerForm.style.display = "none";
    loginForm.style.display = "block";
  });

  /** Register Steps **/
  const registerphase1 = document.getElementById("registerphase1");
  const registerphase2 = document.getElementById("registerphase2");
  const registerphase3 = document.getElementById("registerphase3");
  const Rstep1 = document.querySelector("#login-section #Rstep1");
  const Rstep2 = document.querySelector("#login-section #Rstep2");
  const Rstep3 = document.querySelector("#login-section #Rstep3");

  const submitRphase1 = document.querySelector("#login-section .submitregisterphase1");
  const backRphase2 = document.querySelector("#login-section .backregisterphase2");
  const submitRphase2 = document.querySelector("#login-section .submitregisterphase2");
  const backRphase3 = document.querySelector("#login-section .backregisterphase3");

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

  /** Add Certifications & Skills Fields **/
  const certificationsContainer = document.getElementById('certificationsContainer');
  const skillsContainer = document.getElementById('skillsContainer');
  const addCertificationBtn = document.querySelector('#login-section .addCertificationBtn');
  const deleteCertificationBtn = document.querySelector('#login-section .add-delete-btns .deleteCertificationBtn');
  const maximumCertificationMsg = document.getElementById('maximumCertificationMsg');
  const addSkillsBtn = document.getElementById('addSkillsBtn');
  const deleteSkillsBtn = document.getElementById('deleteSkillsBtn');
  const submitRegister = document.querySelector('#login-section .submit-register');

  let certificationCounter = 0;
  let certificationNo = 1;

  addCertificationBtn.addEventListener('click', function () { // Certification
      const newCertificationField = document.createElement('div');
      newCertificationField.className = 'certification-form';

      newCertificationField.innerHTML = `
          <h2 class="block-title3 d-flex-r-bt-c">Certification ${certificationNo}<hr></h2>

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
            <div class="input-holder col-lg-11 col-md-10 col-sm-10"><input type="text" name="certification[${certificationCounter}][edescription]" placeholder="I Succeed In Php Diploma From Egyptian Technology Center" autocomplete="off" class="input-control"/></div>
          </div>
      `;

      certificationsContainer.appendChild(newCertificationField);
      certificationCounter++;
      certificationNo++;

      if(certificationCounter > 0){
        addCertificationBtn.innerHTML = `add more certification`;
        deleteCertificationBtn.style.display = 'block';
      }

      if(certificationCounter === 1){
        submitRphase2.innerHTML = `submit certification`;
      }

      if(submitRphase2 && certificationCounter > 1){
        submitRphase2.innerHTML = `submit certifications`;
      }

      if (certificationCounter === 4) {
          addCertificationBtn.disabled = true;
          maximumCertificationMsg.style.display = 'block';
      }

  });

  deleteCertificationBtn.addEventListener('click', function () {
      if (certificationCounter > 0) {
          const lastCertificationField = certificationsContainer.lastElementChild;
          certificationsContainer.removeChild(lastCertificationField);
          certificationCounter--;
          certificationNo--;

          if (certificationCounter === 0) {
              deleteCertificationBtn.style.display = 'none';
              addCertificationBtn.innerHTML = 'Add Certification';
          }

          if(submitRphase2 && certificationCounter === 0) {submitRphase2.innerHTML = `submit without certification`;}

          if(submitRphase2 && certificationCounter === 1) {submitRphase2.innerHTML = `submit certification`;}

          if(submitRphase2 && certificationCounter > 1) {submitRphase2.innerHTML = `submit certifications`;}

          if (certificationCounter < 4) {
              addCertificationBtn.disabled = false;
              maximumCertificationMsg.style.display = 'none';
          }
      }
  });
  
  let skillsCounter = 0;

  addSkillsBtn.addEventListener('click', function () { // Skills
      const skillsform = document.createElement('form');
      skillsform.className = 'skills-form';

      skillsform.innerHTML = `
          <div class="block-title2 d-flex-r-bt-c"><hr><h2>Add skills</h2><hr></div>

          <div class="skills-blocks d-flex-r-st-st">

            <div class="computer-skills-block block d-flex-c-st-st">  <!-- Computer Skills -->
              <label class="control-label">Computer Skills</label>
              <textarea name="computerskills" id="computerSkillsTextarea"></textarea>
              <input type="text" value="" maxlength="28" class="computerSkillsInput input-control" onkeydown="if(event.keyCode === 13) {addTag(null, '#skillsContainer .computerSkillsInput', '#skillsContainer #computerSkillsTextarea'); return false;}">
              <button type="button" class="btn2" onclick="addTag(null, '#skillsContainer .computerSkillsInput', '#skillsContainer #computerSkillsTextarea')">add skill</button>
            </div>

            <div class="personal-skills-block block d-flex-c-st-st">  <!-- Personal Skills -->
              <label class="control-label">Personal Skills</label>
              <textarea name="personalskills" id="personalSkillsTextarea"></textarea>
              <input type="text" value="" maxlength="28" class="personalSkillsInput input-control" onkeydown="if(event.keyCode === 13) {addTag(null, '#skillsContainer .personalSkillsInput', '#skillsContainer #personalSkillsTextarea'); return false;}">
              <button type="button" class="btn2" onclick="addTag(null, '#skillsContainer .personalSkillsInput', '#skillsContainer #personalSkillsTextarea')">add skill</button>
            </div>

          </div>
      `;
      skillsContainer.appendChild(skillsform);
      skillsCounter++;

      if(skillsCounter > 0) {deleteSkillsBtn.style.display = `block`;
                             addSkillsBtn.style.display = `none`;
                             submitRegister.value = `register`;}

      if(skillsCounter === 0) {addSkillsBtn.style.display = `block`;
                               deleteSkillsBtn.style.display = `none`;}
  });

  deleteSkillsBtn.addEventListener('click', function () {
      if (skillsCounter > 0) {
          const lastSkillsField = skillsContainer.lastElementChild;
          skillsContainer.removeChild(lastSkillsField);
          skillsCounter--;

          addSkillsBtn.style.display = `none`;
          
          if (skillsCounter === 0) {addSkillsBtn.style.display = `block`;
                                    deleteSkillsBtn.style.display = `none`;}

          if (submitRegister && skillsCounter === 0) {submitRegister.value = `register without skills`;}
      }
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
  
        // var errorContainer = document.getElementById("error-container");
        //     errorContainer.innerHTML = errorMessage;
        //     errorContainer.classList.add("error-alert");
   
        // for (var i=0; i<errors.length; i++) {
        //      // errorContainer.children[i].classList.add("error-object");
   
        //      var errorElement = document.createElement("div");
        //      errorElement.classList.add("error-object");
        //      errorElement.innerHTML = errors[i];
        //      errorContainer.appendChild(errorElement);
        // }
  
        return false;
    }
  
    return true;
  
  }
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

if(window.location.pathname.split('/').pop().split('.')[0] !== "login"){
   loadHtml('#aside', asideContent, "aside");
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

if(collapsibleProfileBtn){
collapsibleProfileBtn.addEventListener("click", function() {
  this.classList.toggle("active");
  let editProfileData = document.querySelector(".profile-page .edit-profile-data");
  if (editProfileData.style.display === "block") {
      editProfileData.style.display = "none";
  } else {
      editProfileData.style.display = "block";
  }
});
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

// Appear Multiple Buttons & Select all items
document.querySelectorAll(".manage-table-form").forEach((managetable) => {
const firstHeadCheckBoxes = managetable.querySelector("#first-head-checkbox");
const secondHeadCheckBoxes = managetable.querySelector("#second-head-checkbox");
const checkboxes = managetable.querySelectorAll("input[name='checkbox[]']");
const submitBttnsHolder = managetable.querySelector(".submit-buttons-holder");

if (firstHeadCheckBoxes && secondHeadCheckBoxes){
    
    function checkedCheckBoxes(){
      const selectedCheckBoxes = Array.from(checkboxes).filter(checkboxes => checkboxes.checked);
      if(selectedCheckBoxes.length > 1){
         submitBttnsHolder.style.display = "flex";
      } else {
        submitBttnsHolder.style.display = "none";
      }
    }

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener("change", checkedCheckBoxes);
    });

    firstHeadCheckBoxes.addEventListener("change", () => {
      checkboxes.forEach(checkbox => checkbox.checked = firstHeadCheckBoxes.checked);
      secondHeadCheckBoxes.checked = firstHeadCheckBoxes.checked;
      checkedCheckBoxes();
    });

    secondHeadCheckBoxes.addEventListener("change", () => {
      checkboxes.forEach(checkbox => checkbox.checked = secondHeadCheckBoxes.checked);
      checkboxes.checked = secondHeadCheckBoxes.checked;
      firstHeadCheckBoxes.checked = secondHeadCheckBoxes.checked;
      checkedCheckBoxes();
    });
}
});

