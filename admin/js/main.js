// convert color mode
const themeToggler = document.getElementById("theme-toggler");
themeToggler.addEventListener("click", () => {
    document.body.classList.toggle('dark-theme-variable');
    
    themeToggler.querySelector('.fa-moon').classList.toggle('active');
    themeToggler.querySelector('.fa-adjust').classList.toggle('active');
    
});

$('body').css('paddingTop', $('.header').innerHeight() - 1);


function loadHtml(selector, htmlContent){
    document.querySelector(selector).innerHTML = htmlContent;
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