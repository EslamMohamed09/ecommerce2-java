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

    const currentPage = window.location.pathname.split('/').pop();

    document.querySelectorAll('#aside .aside-list li .sidebar-item').forEach(function(item) {
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

// put active btn on aside
// document.querySelectorAll('#left-aside .aside-list li .sidebar-item').foreach(function (item) {
// 	item.addEventListener('click', function(){
//         $(this).addClass('active').siblings().removeClass('active');
//     }) ;
// });



// console.log($('#aside .sidebar .aside-list li'));