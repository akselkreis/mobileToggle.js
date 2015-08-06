// mobileToggle.js: It's a toggle switch for a mobile menu
// MIT license http://www.opensource.org/licenses/mit-license.php/
// @author Matthew A. K. Smith http://www.akselkreismedia.com
(function( $ ){

	$.fn.mobileToggle = function() {

		// Todo - Add class to attach the menu stuff to as an option for the plugin.
		// Todo - Add animated icon types as options for the plugin - Hamburger and Arrow to start.

		// General Vars
		var container 			= 	this,
			mainMenu			=	'.'+this.attr('class'),
			wrapperName			=	'menu-wrapper',
			wrapperClass		= 	'.'+wrapperName,
			toggleName 			= 	'mobile-menu-toggle',
			toggleClass			= 	'.'+toggleName,
			subToggleName		=	'sub-menu-toggle',
			subToggleClass		= 	'.'+subToggleName;

		// Vars for menu Toggles
		var arrowClass			=		'arrow';
			hamburgerClass		=		'hamburger';
			plusClass			=		'plus';
			circleClass			=		'circle';
			triangleClsas		=		'triangle';
			buttonMarkup		=		'<div class="bar top"></div><div class="bar middle"></div><div class="bar bottom"></div>';

		$(this).wrap('<div class="'+wrapperName+'"></div>');
		$('<a class="'+toggleName+' toggle">'+buttonMarkup+'</a>').prependTo(wrapperClass);

		// Toggle Main Menu On/Off
		$(toggleClass).click(function(e){
			e.preventDefault();
			$(toggleClass).toggleClass('active');
			$(container).toggleClass('active');
			//console.log(this);
		});

		//Add toggle to all nested UL's
		$('<a class="'+subToggleName+' toggle">'+buttonMarkup+'</a>').insertBefore('ul ul');

		// Toggle Sub Menu(s) On/Off
		$(subToggleClass).click(function(e){
			e.preventDefault();
			$(this).toggleClass('active');
			$(this+' + ul').toggleClass('active');
		});

	};

})( jQuery );