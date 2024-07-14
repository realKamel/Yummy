/// <reference types="../@types/jquery" />
"use strict"
/*
	isOpened is a flag to indicate if the navbar is opened or not
	only one function can change it and the rest of the code depends on this change
*/
let isOpened = true;
const innerNavWidth = $( "#innerNavBar" ).outerWidth( true );


/* Nav links items */
const searchListItem = document.getElementById( "searchListItem" );
const categoriesListItem = document.getElementById( "categoriesListItem" );
const areaListItem = document.getElementById( "areaListItem" );
const ingredientsListItem = document.getElementById( "ingredientsListItem" );
const contactListItem = document.getElementById( "contactListItem" );


const searchBox = document.getElementById( "searchBox" );

const dataRow = document.getElementById( "dataRow" );
const contactUs = document.getElementById( "contactUs" );

function navLinks () {
	if ( !isOpened ) {
		$( "ul li" ).animate( { top: 300 }, 500 );
	} else {
		for ( let i = 0; i < 5; i++ ) {
			$( "ul li" ).eq( i ).animate( { top: 0 }, ( i + 5 ) * 100 )
		};
	}
};
function sideNavBarAction () {
	if ( !isOpened ) {
		$( '#openCloseBtn' ).removeClass( "fa-bars" );
		$( '#openCloseBtn' ).addClass( "fa-x" );
		$( "#navBar" ).animate( { left: 0 }, 500 );
	} else {
		$( '#openCloseBtn' ).removeClass( "fa-x" );
		$( '#openCloseBtn' ).addClass( "fa-bars" );
		$( "#navBar" ).animate( { left: -innerNavWidth }, 500 );
	}
	isOpened = !isOpened;
	navLinks();
};

$( '#openCloseBtn' ).on( 'click', function () {
	sideNavBarAction();
} );

searchListItem.addEventListener( "click", function () {
	searchBox.innerHTML =
		`<div class="py-[1.5rem] gap-6 grid justify-items-center md:grid-cols-2">
				<input id="searchByMealName" type="text" placeholder="Search by Name" class="bg-main-black">
				<input id="searchByMealFLetter" maxlength="1" type="text"
					placeholder="Search By First Letter" class="bg-main-black">
			</div>`;
	sideNavBarAction();
	dataRow.innerHTML = ``;
	contactUs.innerHTML =``;
} );
contactListItem.addEventListener( "click", function () {
	contactUs.innerHTML =
		`
	<div class="container h-screen w-3/4 mx-auto text-center">
					<div class="mt-10 relative top-1/2 -translate-y-1/2">
						<div class="grid md:grid-cols-2 py-5 gap-6 w-full">
							<div>
								<input id="nameInput" onkeyup="inputsValidation()" type="text"
									class="form-control text-black w-full placeholder:text-placeholder-color "
									placeholder="Enter Your Name">
								<div id="nameAlert" class="alert-danger hidden  w-100 mt-2 ">
									Special characters and numbers not allowed
								</div>
							</div>
							<div>
								<input id="emailInput" onkeyup="inputsValidation()" type="email"
									class="form-control text-black w-full placeholder:text-placeholder-color "
									placeholder="Enter Your Email">
								<div id="emailAlert" class="alert-danger hidden  w-100 mt-2 ">
									Email not valid *exemple@yyy.zzz
								</div>
							</div>
							<div>
								<input id="phoneInput" onkeyup="inputsValidation()" type="text"
									class="form-control text-black w-full placeholder:text-placeholder-color "
									placeholder="Enter Your Phone">
								<div id="phoneAlert" class="alert-danger hidden  w-100 mt-2 ">
									Enter valid Phone Number
								</div>
							</div>
							<div>
								<input id="ageInput" onkeyup="inputsValidation()" type="number"
									class="form-control text-black w-full placeholder:text-placeholder-color"
									placeholder="Enter Your Age">
								<div id="ageAlert" class="alert-danger hidden  w-100 mt-2 ">
									Enter valid age
								</div>
							</div>
							<div>
								<input id="passwordInput" onkeyup="inputsValidation()" type="password"
									class="form-control text-black w-full placeholder:text-placeholder-color "
									placeholder="Enter Your Password">
								<div id="passwordAlert" class="alert-danger hidden  w-100 mt-2 ">
									Enter valid password *Minimum eight characters, at least one letter and
									one number:*
								</div>
							</div>
							<div>
								<input id="repasswordInput" onkeyup="inputsValidation()" type="password"
									class="form-control text-black w-full placeholder:text-placeholder-color "
									placeholder="Repassword">
								<div id="repasswordAlert" class="alert-danger hidden w-100 mt-2 ">
									Enter valid repassword
								</div>
							</div>
						</div>
						<button id="submitBtn"
							class="px-2 disabled btn btn-outline-danger">Submit</button>

					</div>
				</div>
	`;
	sideNavBarAction();
	dataRow.innerHTML = ``;
	searchBox.innerHTML =``;

} )
/* ===================================When page loads================================== */


/* function call to ensure the logic is executed when the page loads */
sideNavBarAction();

jQuery( function () {
	$( "#loading-screen" ).fadeOut( 500 );
	$( "#loading-screen" ).remove();
	$( "body" ).css( "overflow", "visible" )
} );

/* =================================== When page loads================================== */

