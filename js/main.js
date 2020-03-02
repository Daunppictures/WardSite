/* Burger */
$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

const sr = ScrollReveal();

sr.reveal('.main__img', {
  origin: 'left',
  distance: '200px',
  duration: 2000,

  scale: 0.5,
  reset: true
});