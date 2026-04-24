/*
===========================================================================
 EXCLUSIVE ON themeforest.net
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Template Name   : Mandy - Responsive Personal Portfolio Template
 Author          : mital_04
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Copyright (c) 2017 - Mandy - Responsive Personal Portfolio Template
===========================================================================
*/

(function($){

	$(document).ready(function() {
		/* ---------------------------------------------- /*
		 * Header Scroll 
		/* ---------------------------------------------- */
		$('.navbar').onePageNav({
			currentClass: 'current',
			changeHash: false,
			scrollSpeed: 750,
			filter: ':not(.external)'
		});

		/* ---------------------------------------------- /*
		 * Home Banner Scroll 
		/* ---------------------------------------------- */
		$(".lets-talk").click(function() {
		    $('html,body').animate({
		        scrollTop: $("#contact").offset().top},
		        'slow');
		});

		/* ---------------------------------------------- /*
	     * Portfolio Filter
	    /* ---------------------------------------------- */
	      /*var containerEl = document.querySelector('.portfolio-filter');
	      var mixer = mixitup(containerEl);*/
	    /* ---------------------------------------------- /*
	     * Portfolio Filter End
	    /* ---------------------------------------------- */

		/* ---------------------------------------------- /*
		 * Screenshots Slider
		/* ---------------------------------------------- */
		$('.screenshots-slider').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:false,
		    center:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:3
		        }
		    }
		})

		/* ---------------------------------------------- /*
		 * Testimonial Slider
		/* ---------------------------------------------- */
		$('.testimonial-slider').owlCarousel({
		    loop: true,
		    margin: 10,
		    nav:false,
		    items:1
		})

	}); // Document Get Ready End here
	
	/* ---------------------------------------------- /*
	 * home Banner
	/* ---------------------------------------------- */
	/*$(".home-banner").height($(window).height());

	$(window).resize(function(){
		$(".home-banner").height($(window).height());
	});*/

})(jQuery);