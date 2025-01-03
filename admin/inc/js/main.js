document.addEventListener("DOMContentLoaded", () => {

  const preloader = document.createElement('div');
        preloader.classList.add('loader7');

  preloader.innerHTML = `
    <div class="loader7-container">
      <div class="loader7-block">
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
      </div>
    </div>
  `;
  document.body.insertBefore(preloader, document.body.firstChild);

  preloader.style.display = "flex";

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
  const addCertificationBtn = document.querySelector('.addCertificationBtn');
  const deleteCertificationBtn = document.querySelector('.add-delete-btns .deleteCertificationBtn');
  const maximumCertificationMsg = document.getElementById('maximumCertificationMsg');
  const addSkillsBtn = document.querySelector('.addSkillsBtn');
  const deleteSkillsBtn = document.querySelector('.deleteSkillsBtn');
  const submitRegister = document.querySelector('#login-section .submit-register');

  let certificationCounter = 0;
  let certificationNo = 1;

  addCertificationBtn.addEventListener('click', function () { // Certification
      const newCertificationField = document.createElement('div');
      newCertificationField.className = 'certification-block';

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
          addCertificationBtn.style.cursor = "not-allowed";
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

  document.querySelectorAll('#main-aside .main-aside-menu li .sidebar-link').forEach(function(item) {
    const itemHref = item.getAttribute('href');
    if (itemHref === currentPage) {item.classList.add('active');}
  });

    /*** BIG & SMALL ASIDE ***/
    const asideMenu = document.getElementById("main-aside");
    const sectionContainer = document.querySelector(".section-container");
    const asideComponent = document.querySelector("header .asidecomponent");
    const asideButton = document.getElementById("asidebutton");
    const asideButton2 = document.getElementById("asidebutton2");

    let isToggledByButton = false;

    function updateAsideMenuClass(){
      if(!isToggledByButton){
        if(window.innerWidth < 768){
            asideMenu.classList.add("smallaside");
            asideButton.style.transform = "rotate(180deg)";
        } else {
          asideMenu.classList.remove("smallaside");
          asideButton.style.transform = "rotate(0deg)";
        }
      }

      handleSectionMargin();
    }

    function toggleSmallAside(){
      asideMenu.classList.toggle("smallaside");
      isToggledByButton = asideMenu.classList.contains("smallaside");
      if (asideMenu.classList.contains("smallaside")) {
          asideButton.style.transform = "rotate(180deg)";
      } else {
        asideButton.style.transform = "rotate(0deg)";
      }
      if (asideMenu.classList.length === 0) {asideMenu.removeAttribute("class");}
      handleSectionMargin();
    }

    function handleSectionMargin(){
      const mainAsideWidth = asideMenu.offsetWidth;
      if(window.innerWidth > 768){
        sectionContainer.style.marginLeft = `${mainAsideWidth}px`;
        if (asideMenu.classList.contains("smallaside")){sectionContainer.style.marginLeft = '4.3rem';}
      } else {
        sectionContainer.style.marginLeft = '4.3rem';
      }
    }

    updateAsideMenuClass();
    handleSectionMargin();

    window.addEventListener("resize", updateAsideMenuClass);
    asideComponent.addEventListener('click', toggleSmallAside);
    asideButton2.addEventListener('click', toggleSmallAside);
    
    asideMenu.addEventListener("transitionend", handleSectionMargin);
    sectionContainer.addEventListener("transitionend", handleSectionMargin);
});


if(window.location.pathname.split('/').pop().split('.')[0] !== "login"){
   loadHtml('#main-aside', asideContent, "aside");
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

// Appear Multiple Buttons & Select all items
function attachCheckboxListeners(){
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
}

/** pagination **/
function pagination(data, itemsPerPage, renderContent, paginationContainer) {
  const totalPages = Math.ceil(data.length / itemsPerPage);

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

function truncateWords(text, wordsCount){
  return text.split(' ').slice(0,wordsCount).join(' ');
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

if(document.querySelector('.customers-page')){
fetch('pages/customers.json').then(response => response.json())
.then(data => {
  const customers = data.customers;
  const manageCustomersTable = document.querySelector('.customers-page #manage-customers-table');
  const paginationContainer = document.querySelector('.manage-table-form .pagination');
  const customersCountElement = document.querySelector('.customers-page .table-details .counting .no');
        customersCountElement.textContent = customers.length;

  function renderCustomersTable(customers){
    manageCustomersTable.innerHTML = '';

    customers.forEach((customer) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><input type="checkbox" name="checkbox[]" id="cu-name-${customer.id}"></td>
        <td>
          <label for="cu-name-${customer.id}">${customer.fullname}</label>
          <div class="buttons">
            <a href="editcustomer.html" target="_blank">edit</a>|
            <a href="#" class="confirm">delete</a>
          </div>
        </td>
        <td>${customer.email}</td>
        <td>${customer.phone_no}</td>
        <td><img src="${customer.cust_image}" alt=""></td>
        <td>${customer.gender}</td>
        <td>${customer.country}</td>
        <td>${customer.city}</td>
        <td>${customer.postalcode}</td>
        <td>${customer.question}</td>
        <td>${customer.date}</td>
        <td>${customer.id}</td>
      `;
      manageCustomersTable.appendChild(row);
    });
    attachCheckboxListeners();
  }

  pagination(customers, 10, renderCustomersTable, paginationContainer);
}).catch(error => console.error('Error loading JSON:', error));
}

/*
 ===============================
 ######## CATEGORIES PAGE ######
 ===============================
*/
if(document.querySelector('.category-page')){
fetch('pages/categories.json').then(response => response.json())
.then(data => {
  const categories = data.categories;
  const categoriesMap = new Map(categories.map(cat => [cat.id, cat]));
  const manageCategoriesTable = document.querySelector('.category-page #manage-category-table');
  const paginationContainer = document.querySelector('.manage-table-form .pagination');

  function getCategoryDetails(category) {
    if (!category.parent_id) {return { parentName: 'no parent', level: 1 };}
    const parentCategory = categoriesMap.get(category.parent_id);
    const parentDetails = getCategoryDetails(parentCategory);
    return { parentName: parentCategory.name, level: parentDetails.level + 1 };
  }

  function renderCategoryContent(currentCategories) {
    manageCategoriesTable.innerHTML = '';

    currentCategories.forEach((category) => {
      const { parentName, level } = getCategoryDetails(category);

      const row = document.createElement('tr');
      row.innerHTML = `
        <td><input type="checkbox" name="checkbox[]" id="cat-name-${category.id}"></td>
        <td>
          <label for="cat-name-${category.id}">${category.name}</label>
          <div class="buttons">
            <a href="#">edit</a> | <a href="#">delete</a>
          </div>
        </td>
        <td><img src="${category.Image}" alt="${category.name}" width="50"></td>
        <td>${parentName}</td>
        <td class="level-${level}">level ${level}</td>
        <td>${category.id}</td>
      `;
      manageCategoriesTable.appendChild(row);
    });
    attachCheckboxListeners();
  }

  pagination(categories, 10, renderCategoryContent, paginationContainer);
}).catch(error => console.error('Error loading JSON:', error));
}

/*
 =============================
 ######## MESSAGES PAGE ######
 =============================
*/
if(document.querySelector('.messages-page')){
  const buttonsAsideMenuLists = document.querySelectorAll('.messages-page .buttons-aside .buttons-aside-menu .menu-list');
  let buttonsAsideProfileDropmenu = document.querySelector('.messages-page .buttons-aside .buttons-aside-profile-image .buttons-aside-dropmenu');
  const buttonsAsideProfileImg = document.querySelector('#buttonsAsideProfileimg');
  const chatDepartmentsBtns = document.querySelectorAll('.messages-page .chat-block .chat-departments button');
  const contactedPersonsLists = document.querySelectorAll('.messages-page .chat-block .contacted-persons .contacted-persons-menu li');
  const conversations = document.querySelectorAll('.messages-page .chat-block .conversation .main-conversation .conversation-wrapper');
  const conversationItemDropdownToggle = document.querySelectorAll('.messages-page .conversation .conversation-item .conversation-item-dropdown-toggle');
  const startChat = document.querySelector('.messages-page .chat-block .conversation .main-conversation .start-chat');

  buttonsAsideMenuLists.forEach((buttonsAsideMenuList) => {
    buttonsAsideMenuList.addEventListener('click', () => {
      buttonsAsideMenuLists.forEach((item) => {
        item.classList.remove('active');
      });
      buttonsAsideMenuList.classList.add('active');
    });
  });

  buttonsAsideProfileImg.onclick = (event) => {
    event.stopPropagation();
    buttonsAsideProfileDropmenu.classList.toggle('dropactive');
  };

  chatDepartmentsBtns.forEach((button) => {
    button.addEventListener('click', function(){
      chatDepartmentsBtns.forEach((button) => button.classList.remove('active'));
      button.classList.add('active');
    });
  });

  contactedPersonsLists.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
  
      conversations.forEach((box) => {
        if (box.classList.contains(filter)) {
            box.style.display = 'block';
        } else {
          box.style.display = 'none';
        }
      });

      startChat.style.display = 'none';
      contactedPersonsLists.forEach((btn) => btn.classList.remove('button-active'));
      button.classList.add('button-active');
    });
  });

  document.body.addEventListener('click', (event) => {
    if (!buttonsAsideProfileImg.contains(event.target) && !buttonsAsideProfileDropmenu.contains(event.target)) {
        buttonsAsideProfileDropmenu.classList.remove('dropactive');
    }
  });
  
  conversationItemDropdownToggle.forEach((item) => {
    item.addEventListener('click', function(event){
      event.stopPropagation();
      const isActive = this.parentElement.classList.contains('active');
      const dropdownMenu = this.nextElementSibling;

      conversationItemDropdownToggle.forEach((toggle) => {
        toggle.parentElement.classList.remove('active');
        toggle.nextElementSibling.style.top = '';
        toggle.nextElementSibling.style.bottom = '';
      });

      if (!isActive) {
          this.parentElement.classList.add('active');

          const rect = dropdownMenu.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          if(rect.bottom > viewportHeight){
             dropdownMenu.style.top = 'auto';
             dropdownMenu.style.bottom = '100%';
          } else {
            dropdownMenu.style.top = '100%';
            dropdownMenu.style.bottom = 'auto';
          }
        } else {
          document.querySelectorAll('.conversation-item.active').forEach((item) => {
            item.classList.remove('active');
          });
    
          parent.classList.add('active');
        }
    });

    // item.parentElement.addEventListener('mouseleave', () => {
    //   item.parentElement.classList.remove('active');
    // });
  });

  
  document.body.addEventListener('click', (event) => {
    conversationItemDropdownToggle.forEach((item) => {
      if (!item.contains(event.target) && !item.parentElement.contains(event.target)) {
          item.parentElement.classList.remove('active');
      }
    });
  });

  const conversationFormInput = document.querySelector('.messages-page .conversation-form-input');
  conversationFormInput.addEventListener('input', function () {
      this.style.height = 'auto';
      this.style.height = this.scrollHeight + 'px';
  });
}

/*
 =============================
 ######## PRODUCTS PAGE ######
 =============================
*/
if(document.querySelector('.products-page')){

fetch('pages/products.json').then(response => response.json())
.then(data => {
  const products = data.products;
  const productstbody = document.querySelector('.products-page #products-tbody');
  const productsPagePaginationContainer = document.querySelector('.products-page .pagination');

  function renderProductsTable(products){
    productstbody.innerHTML = '';

    products.forEach((product) => {
      const row = document.createElement('tr');
      const truncateTitle = truncateWords(product.title, 4);
      row.innerHTML = `
        <td>
          <label class="checkbox-product">
            <input type="checkbox" name="checkbox[]">
            <span class="checkmark"></span>
          </label>
        </td>
        <td>
          <div class="product-field d-flex-r-st-c">
            <a href="#" class="image"><img src="${product.image[0]}" alt=""></a>
            <a href="#" class="product-title">${truncateTitle}</a>
          </div>
        </td>  
        <td>${product.id}</td>
        <td>${product.instock}</td>
        <td>${product.salePrice}</td>
        <td>
          <div class="rating d-flex-r-c-c"><i class="fas fa-star"></i><span>${product.rating}</span></div>
        </td>
        <td>sheduled</td>
        <td>watches</td>
        <td>
          <div class="action-buttons d-flex-r-c-c">
            <button class="view"><i class="fas fa-eye"></i></button>
            <button class="edit"><i class="far fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
          </div>
        </td>
      `;
      productstbody.appendChild(row);
    });
  }

  pagination(products, 10, renderProductsTable, productsPagePaginationContainer);
}).catch(error => console.error('Error loading JSON:', error));


}


/*
 =============================
 ######### USERS PAGE ########
 =============================
*/
if(document.querySelector('#users-page')){

fetch('pages/users.json').then(response => response.json())
.then(data => {
  const users = data.users
  const manageUsersTable = document.querySelector('#users-page #manage-users-table');
  const usersCountElement = document.querySelector('#users-page .table-details .counting .no');
        usersCountElement.textContent = users.length;
  const paginationContainer = document.querySelector('.manage-table-form .pagination');
    
  function renderUsersTable(users){
    manageUsersTable.innerHTML = '';
    users.forEach((user) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <tr>
          <td><input type="checkbox" id="user-${user.id}" name="checkbox[]" class="checkboxinput"></td>
          <td>
            <label for="user-${user.id}">${user.username}</label>
            <div class="buttons"> 
              <a href="edituser.html" target="_blank">edit</a>|
              <a href="#" class="confirm">delete</a>| 
              <i class="fas fa-check"></i>
            </div> 
          </td>
          <td>${user.email}</td>
          <td>${user.fullname}</td>
          <td><p style="color:green;">${user.groupId}</p></td>
          <td><p class="activated">${user.regStatus}</p></td>
          <td>${user.date}</td>
          <td>${user.id}</td>
        </tr>
      `;
      manageUsersTable.appendChild(row);
    });
    attachCheckboxListeners();
  }

  pagination(users, 10, renderUsersTable, paginationContainer);
}).catch(error => console.error('Error loading JSON:', error));

  const certificationsContainer = document.getElementById('certificationsContainer');
  const skillsContainer = document.getElementById('skillsContainer');
  const addCertificationBtn = document.querySelector('.addCertificationBtn');
  const deleteCertificationBtn = document.querySelector('.add-delete-btns .deleteCertificationBtn');
  const maximumCertificationMsg = document.getElementById('maximumCertificationMsg');
  const addSkillsBtn = document.querySelector('.addSkillsBtn');
  const deleteSkillsBtn = document.querySelector('.deleteSkillsBtn');

  let certificationCounter = 0;
  let certificationNo = 1;

  addCertificationBtn.addEventListener('click', function () { // Certification
      const newCertificationField = document.createElement('div');
      newCertificationField.className = 'certification-block';

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

      if (certificationCounter === 4) {
          addCertificationBtn.disabled = true;
          addCertificationBtn.style.cursor = "not-allowed";
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
                             addSkillsBtn.style.display = `none`;}

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
      }
  });

}
