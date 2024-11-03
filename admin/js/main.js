// convert color mode
const themeToggler = document.getElementById("theme-toggler");
themeToggler.addEventListener("click", () => {
    document.body.classList.toggle('dark-theme-variable');
    
    themeToggler.querySelector('.fa-moon').classList.toggle('active');
    themeToggler.querySelector('.fa-adjust').classList.toggle('active');
    
});

$('body').css('paddingTop', $('.header').innerHeight() - 1);


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


/******** ASIDE ********/ 
function loadHtml(selector, htmlContent){
    document.querySelector(selector).innerHTML = htmlContent;

    const currentPage = window.location.pathname.split('/').pop();

    document.querySelectorAll('#aside .aside-list li .sidebar-link').forEach(function(item) {
      const itemHref = item.getAttribute('href');
  
      if (itemHref === currentPage) {
          item.classList.add('active');
      }
    });
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

