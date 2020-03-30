/* Burger */

$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

/*Parallax */

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});

parallaxInstance.friction(0.2, 0.2);