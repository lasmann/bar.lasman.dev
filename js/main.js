
console.log('Have fun!');


/* Glitch neon sign on load */

window.addEventListener("DOMContentLoaded", (event) => {
  const neonsigns = document.querySelectorAll('.neon-on-load');

  setTimeout(function(){
   
    neonsigns.forEach(sign => {
      sign.classList.toggle('neon');

      /* Glitch effect */
      setTimeout(function(){
        sign.classList.toggle('neon');
      },50);

      setTimeout(function(){
        sign.classList.toggle('neon');
      },100);

      setTimeout(function(){
        sign.classList.toggle('neon');
      },200);

      setTimeout(function(){
        sign.classList.toggle('neon');
      },400);
    });
  },300);
});



/* Show recipe on doubleclick */

const recipies = document.querySelectorAll('.card__recipe');

recipies.forEach(name => {
	name.addEventListener("dbltap", event => {
		name.nextElementSibling.classList.toggle('show');
	});
});



/* Toggle neon sign on click */

const neonsigns = document.querySelectorAll('.neon-on-tap');

neonsigns.forEach(sign => {
	sign.addEventListener("tap", event => {
		sign.classList.toggle('neon');

    /* Glitch effect */
    setTimeout(function(){
      sign.classList.toggle('neon');
    },50);

    setTimeout(function(){
      sign.classList.toggle('neon');
    },100);

    setTimeout(function(){
      sign.classList.toggle('neon');
    },200);

    setTimeout(function(){
      sign.classList.toggle('neon');
    },400);
	});
});




const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');
let isTouching = false;
let scrollTimeout;

function changeLinkState() {
  const middleOfViewport = window.innerHeight / 2; // Middle of the viewport

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - middleOfViewport;
    const sectionBottom = sectionTop + section.clientHeight;

    const isLinkActive = navLinks[index].classList.contains('active');

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom && !isLinkActive && !isTouching) {
      navLinks.forEach((link) => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }
  });
}

function scrollToActiveLink() {
  const activeLink = document.querySelector('nav a.active');
  if (activeLink) {
    activeLink.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function delayedChange() {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    changeLinkState();
    scrollToActiveLink();
  }, 100); // Adjust the delay time as needed (e.g., 150ms)
}

changeLinkState(); // Call initially to set active link on page load
scrollToActiveLink(); // Scroll to the active link on page load

window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  delayedChange();
});

// Set flag for touch events
window.addEventListener('touchstart', () => {
  isTouching = true;
  console.log('true');
});

window.addEventListener('touchend', () => {
  isTouching = false;
  console.log('false');
});




/* Filter by ingredient type */

// let ingredients = [];

// recipies.forEach(recipie => {
//   console.log(recipie.innerHTML.split(', '));
// 	ingredients.push(recipie.innerHTML.split(', '));
// });

// console.log(ingredients);
