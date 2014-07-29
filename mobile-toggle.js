// mobileToggle.js: It's a toggle switch for a mobile menu
// MIT license http://www.opensource.org/licenses/mit-license.php/
// @author Matthew A. K. Smith http://www.akselkreismedia.com

 (function( $ ){

  $.fn.mobileToggle = function() {

  	// Todo - Add class to attach the menu stuff to as an option for the plugin.
  	// Todo - Add animated icon types as options for the plugin - Hamburger and Arrow to start.

  	// General Vars
		var mainMenu				=		'.'+this.attr('class'),
				wrapperName			=		'menu-wrapper',
				wrapperClass		= 	'.'+wrapperName,
				toggleName 			= 	'mobile-menu-toggle',
				toggleClass			= 	'.'+toggleName,
				subToggleName		=		'sub-menu-toggle',
				subToggleClass	= 	'.'+subToggleName;

		// Vars for menu Toggles
		var hamburgerMarkup		=		'<div class="bar top"></div><div class="bar middle"></div><div class="bar bottom"></div>';
				arrowMarkup		=		'<div class="bar left"></div><div class="bar center"></div><div class="bar right"></div>';

		$(this).wrap('<div class="'+wrapperName+'"></div>');
		$('<a class="'+toggleName+' toggle">'+hamburgerMarkup+'</a>').prependTo(wrapperClass);

		// Toggle Main Menu On/Off
		$(toggleClass).click(function(e){
			e.preventDefault();
			$(toggleClass).toggleClass('active');
			$('.menu').toggleClass('active');
		});

		//Add toggle to all nested UL's
		$('<a class="'+subToggleName+' toggle">'+hamburgerMarkup+'</a>').insertBefore('ul ul');

		// Toggle Sub Menu(s) On/Off
		$(subToggleClass).click(function(e){
			e.preventDefault();
			$(this).toggleClass('active');
			$(this+' + ul').toggleClass('active');
		});

  };

})( jQuery );
