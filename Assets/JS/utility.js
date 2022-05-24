let elem = document.querySelector(".navbar");
function scrollAction(){
    console.log(window.scrollY);
    elem.classList.toggle("scroll-active",window.scrollY>0);
    if(window.scrollY > 0){
        elem.classList.add("scroll-active");
    }
    else{
        elem.classList.remove("scroll-active");
    }
}

let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.nav-menu');
let navbar = document.querySelector('.navbar');
//hamburger styling
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    navbar.classList.toggle('light-up');
});
document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    navbar.classList.toggle('light-up');
}));


