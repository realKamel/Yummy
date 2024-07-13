/// <reference types="../@types/jquery" />
"use strict"
let isOpened = true;
function sideNavBarAction () {
	$( '#innerNavBar' ).animate( { width: 'toggle' }, 500 );
	isOpened = !isOpened;
};
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
} )