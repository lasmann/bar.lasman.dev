
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

function changeLinkState() {
  const middleOfViewport = window.innerHeight / 2; // Middle of the viewport

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - middleOfViewport;
    const sectionBottom = sectionTop + section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      navLinks.forEach((link) => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }
  });
}

function scrollToActiveLink() {
  const activeLink = document.querySelector('nav a.active');
  if (activeLink) {
    setTimeout(function(){
      activeLink.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 10)
    
  }
}

changeLinkState(); // Call initially to set active link on page load
scrollToActiveLink(); // Scroll to the active link on page load

window.addEventListener('scroll', () => {
  changeLinkState();
  scrollToActiveLink(); // Scroll to the active link on scroll
});


/* Filter by ingredient type */

// let ingredients = [];

// recipies.forEach(recipie => {
//   console.log(recipie.innerHTML.split(', '));
// 	ingredients.push(recipie.innerHTML.split(', '));
// });

// console.log(ingredients);
