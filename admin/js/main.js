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