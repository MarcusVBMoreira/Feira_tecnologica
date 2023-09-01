/* Scrol Header */

window.onscroll=function(){
    rolagem()
}
function rolagem(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.getElementsByTagName("header")[0].style.padding="1px 1px"
        document.getElementById("logo").style.fontSize="1px"
        document.getElementById("logo").style.width="20%"
        document.getElementById("header").style.backgroundColor="var(--VerdeEscuro-cor)"
        
    }else{
        document.getElementsByTagName("header")[0].style.padding="20px 10px"
        document.getElementById("logo").style.fontSize="20px"
        document.getElementById("logo").style.width="30%"
        document.getElementById("header").style.backgroundColor="var(--Verde-cor)"
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

