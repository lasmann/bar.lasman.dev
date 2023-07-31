
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



/* Filter by ingredient type */

// let ingredients = [];

// recipies.forEach(recipie => {
//   console.log(recipie.innerHTML.split(', '));
// 	ingredients.push(recipie.innerHTML.split(', '));
// });

// console.log(ingredients);
