/* Scrol Header */
window.onscroll=function(){
    rolagem()
}

function rolagem(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.getElementsByTagName("header")[0].style.padding="1px 1px"
        document.getElementById("logo").style.width="25%"
        document.getElementById("header").style.backgroundColor="var(--VerdeEscuro-cor)"
        document.getElementById("nav-bg").style.top="50px"
        document.getElementById("nav-bg").style.backgroundColor="var(--VerdeEscuro-cor)"
    }
    else{
        document.getElementsByTagName("header")[0].style.padding="20px 10px"
        document.getElementById("logo").style.width="35%"
        document.getElementById("header").style.backgroundColor="var(--Verde-cor)"
        document.getElementById("nav-bg").style.top="79px"
        document.getElementById("nav-bg").style.backgroundColor="var(--Verde-cor)"
    }
}


/* Carousel Time */
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }
    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].classList.add("current-item");
  });
});

setInterval(timer, 7500);
function timer(){
    currentItem += 1

    if (currentItem >= maxItems) {
        currentItem = 0;
      }
    if (currentItem < 0) {
        currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].classList.add("current-item");
}



/* Animação */
const target = document.querySelectorAll('[data-anime]');
const AnimationClass = 'animate';

function animeScroll(){
  const windowTop = window.scrollY + ((window.innerHeight * 5) / 6);
  target.forEach( function(_element) {
    if((windowTop) > _element.offsetTop){
      _element.classList.add(AnimationClass);
    } else{
      _element.classList.remove(AnimationClass);
    }

    console.log(_element.offsetTop);

  })

}

animeScroll();

window.addEventListener('scroll', function(){
  animeScroll();
});



/* Menu active */

window.addEventListener("scroll", navHighlighter);

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

function navHighlighter(){
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
};



/* Menu responsivo */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.menu');
const navbg = document.querySelector('.nav-bg');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});
