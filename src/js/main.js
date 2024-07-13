/// <reference types="../@types/jquery" />
"use strict"
/*
	isOpened is a flag to indicate if the navbar is opened or not
	only one function can change it and the rest of the code depend on this change
*/
let isOpened = true;
let innerNavWidth = $( "#innerNavBar" ).outerWidth( true )


function navLinks () {
	if ( !isOpened ) {
		$( "ul li" ).animate( { top: 300 }, 500 );
	} else {
		for ( let i = 0; i < 5; i++ ) {
			$( "ul li" ).eq( i ).animate( {top: 0}, ( i + 5 ) * 100 )
		};
	}
};
function sideNavBarAction () {
	if ( !isOpened ) {
		$( "#navBar" ).animate( { left: 0 }, 500 );
	} else {
		$( "#navBar" ).animate( { left: -innerNavWidth }, 500 );
	}
	isOpened = !isOpened;
	navLinks();
};

/* function call to ensure the logic is executed when the page loads */
sideNavBarAction();


$( '#openCloseBtn' ).on( 'click', function () {
	if ( !isOpened ) {
		this.classList.remove( "fa-bars" );
		this.classList.add( "fa-x" );
	}
	else {
		this.classList.remove( "fa-x" );
		this.classList.add( "fa-bars" );
	}
	sideNavBarAction();
} );