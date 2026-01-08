

const menu = document.getElementById('mobile-menu');  
const sidemenu = document.getElementById('sidemenu'); 

menu.addEventListener('click', function() {
    sidemenu.classList.toggle('show');  
});

function closemenu() {
    sidemenu.classList.remove('show');  
}