/// <reference types="../@types/jquery" />
"use strict";
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
const mealDetails = document.getElementById( "mealDetails" );

let nameInputFocus = false;
let emailInputFocus = false;
let phoneInputFocus = false;
let ageInputFocus = false;
let passwordInputFocus = false;
let repasswordInputFocus = false;
let submitBtn;

function navLinks () {
	if ( !isOpened ) {
		$( "#navBar ul li" ).animate( { top: 300 }, 500 );
	} else {
		for ( let i = 0; i < 5; i++ ) {
			$( "#navBar ul li" )
				.eq( i )
				.animate( { top: 0 }, ( i + 5 ) * 100 );
		}
	}
}
function openSideNav () {
	$( "#openCloseBtn" ).removeClass( "fa-bars" );
	$( "#openCloseBtn" ).addClass( "fa-x" );
	$( "#navBar" ).animate( { left: 0 }, 500 );
	isOpened = true;
	navLinks();
}
function closeSideNav () {
	$( "#openCloseBtn" ).removeClass( "fa-x" );
	$( "#openCloseBtn" ).addClass( "fa-bars" );
	$( "#navBar" ).animate( { left: -innerNavWidth }, 500 );
	isOpened = false;
	navLinks();
}

$( "#openCloseBtn" ).on( "click", function () {
	if ( !isOpened ) {
		openSideNav();
	} else {
		closeSideNav();
	}
} );
searchListItem.addEventListener( "click", function () {
	closeSideNav();
	searchBox.innerHTML = `<div class="py-[1.5rem] gap-6 grid justify-items-center md:grid-cols-2">
				<input id="searchByMealName" onkeyup=searchContentByName(this.value) type="text" placeholder="Search by Name" class="bg-main-black">
				<input id="searchByMealFLetter" onkeyup=searchContentByFLetter(this.value) maxlength="1" type="text"
					placeholder="Search By First Letter" class="bg-main-black">
			</div>`;
	dataRow.innerHTML = ``;
	contactUs.innerHTML = ``;
	mealDetails.innerHTML = ``;
} );
contactListItem.addEventListener( "click", function () {
	closeSideNav();
	dataRow.innerHTML = ``;
	searchBox.innerHTML = ``;
	mealDetails.innerHTML = "";
	contactUs.innerHTML = `
	<div class="container h-screen w-3/4 mx-auto text-center">
					<div class="relative top-1/2 -translate-y-1/2">
						<div class="grid md:grid-cols-2 py-5 gap-6 w-full">
							<div>
								<input id="nameInput" onkeyup="inputsValidation()" type="text"
									class="form-control text-black w-full placeholder:text-placeholder-color "
									placeholder="Enter Your Name">
								<div id="nameAlert" class="alert alert-danger hidden  w-100 mt-2 ">
									Special characters and numbers not allowed
								</div>
							</div>
							<div>
								<input id="emailInput" onkeyup="inputsValidation()" type="email"
									class="form-control text-black w-full placeholder:text-placeholder-color "
									placeholder="Enter Your Email">
								<div id="emailAlert" class="alert alert-danger hidden  w-100 mt-2 ">
									Email not valid *exemple@yyy.zzz
								</div>
							</div>
							<div>
								<input id="phoneInput" onkeyup="inputsValidation()" type="text"
									class="form-control text-black w-full placeholder:text-placeholder-color "
									placeholder="Enter Your Phone">
								<div id="phoneAlert" class="alert alert-danger hidden  w-100 mt-2 ">
									Enter valid Phone Number
								</div>
							</div>
							<div>
								<input id="ageInput" onkeyup="inputsValidation()" type="number"
									class="form-control text-black w-full placeholder:text-placeholder-color"
									placeholder="Enter Your Age">
								<div id="ageAlert" class="alert alert-danger hidden  w-100 mt-2 ">
									Enter valid age
								</div>
							</div>
							<div>
								<input id="passwordInput" onkeyup="inputsValidation()" type="password"
									class="form-control text-black w-full placeholder:text-placeholder-color "
									placeholder="Enter Your Password">
								<div id="passwordAlert" class="alert hidden alert-danger w-100 mt-2 ">
									Enter valid password *Minimum eight characters, at least one letter and
									one number:*
								</div>
							</div>
							<div>
								<input id="repasswordInput" onkeyup="inputsValidation()" type="password"
									class="form-control text-black w-full  placeholder:text-placeholder-color "
									placeholder="Repassword">
								<div id="repasswordAlert" class="alert hidden alert-danger w-100 mt-2 ">
									Enter valid repassword
								</div>
							</div>
						</div>
						<button id="submitBtn"
							class="px-2 disabled btn btn-outline-danger">Submit</button>

					</div>
				</div>
	`;
	submitBtn = document.getElementById( "submitBtn" );

	document.getElementById( "nameInput" ).addEventListener( "focus", () => {
		nameInputFocus = true;
	} );

	document.getElementById( "emailInput" ).addEventListener( "focus", () => {
		emailInputFocus = true;
	} );

	document.getElementById( "phoneInput" ).addEventListener( "focus", () => {
		phoneInputFocus = true;
	} );

	document.getElementById( "ageInput" ).addEventListener( "focus", () => {
		ageInputFocus = true;
	} );

	document.getElementById( "passwordInput" ).addEventListener( "focus", () => {
		passwordInputFocus = true;
	} );

	document.getElementById( "repasswordInput" ).addEventListener( "focus", () => {
		repasswordInputFocus = true;
	} );
} );
categoriesListItem.addEventListener( "click", function () {
	closeSideNav();
	dataRow.innerHTML = ``;
	searchBox.innerHTML = ``;
	contactUs.innerHTML = ``;
	mealDetails.innerHTML = ``;
	fetchCategories();
} );
areaListItem.addEventListener( "click", function () {
	closeSideNav();
	dataRow.innerHTML = ``;
	searchBox.innerHTML = ``;
	contactUs.innerHTML = ``;
	mealDetails.innerHTML = ``;
	fetch();
} );
ingredientsListItem.addEventListener( "click", function () {
	closeSideNav();
	dataRow.innerHTML = ``;
	searchBox.innerHTML = ``;
	contactUs.innerHTML = ``;
	mealDetails.innerHTML = ``;

	fetchIngredients();
} );

/* =======================search=================== */
function displayContent ( data ) {
	let content = ``;
	for ( const iterator of data ) {
		content += `<div onclick="fetchDetails('${ iterator.idMeal }')" class="rounded-md cursor-pointer relative overflow-hidden group/card">
					  <div class="absolute duration-500 rounded-md size-full bg-card-background bg-opacity-50 p-2 text-black flex items-center top-[100%] group-hover/card:top-0">
						  <h3>${ iterator.strMeal }</h3>
					  </div>
					  <img class="w-full rounded-md" src="${ iterator.strMealThumb }" alt>
				  </div>`;
	}
	dataRow.innerHTML = content;
	$( "#inner-loading" ).fadeOut( 300 );
}
async function searchContentByName ( meal ) {
	try {
		closeSideNav();
		console.log( meal );
		$( "#inner-loading" ).fadeIn( 300 );
		let response = await fetch(
			`https://www.themealdb.com/api/json/v1/1/search.php?s=${ meal }`
		);
		let res = await response.json();
		displayContent( res.meals );
	} catch ( error ) {
		console.log( error );
	}
}
async function searchContentByFLetter ( letter ) {
	try {
		closeSideNav();
		$( "#inner-loading" ).fadeIn( 300 );
		if ( letter.length === 1 ) {
			let response = await fetch(
				`https://www.themealdb.com/api/json/v1/1/search.php?f=${ letter }`
			);
			let res = await response.json();
			displayContent( res.meals );
		}
	} catch ( error ) {
		console.log( error );
	}
}

/* =================Categories==================== */
function displayCategories ( list ) {
	let content = ``;
	console.log( "display is working fine", list );
	for ( const iterator of list ) {
		content += `<div onclick="fetchCategoryMeals('${ iterator.strCategory
			}')" class="rounded-md cursor-pointer relative overflow-hidden group/card">
					<div class="absolute duration-500 rounded-md size-full bg-card-background bg-opacity-50 p-2 text-black  text-center top-[100%] group-hover/card:top-0">
						<h3 class="w-full mb-2">${ iterator.strCategory }</h3>
                        <p>${ iterator.strCategoryDescription
				.split( " " )
				.slice( 0, 20 )
				.join( " " ) }</p>
					</div>
					<img class="w-full rounded-md" src="${ iterator.strCategoryThumb }" alt>
				</div>`;
	}
	dataRow.innerHTML = content;
	$( "#inner-loading" ).fadeOut( 300 );
}
async function fetchCategoryMeals ( category ) {
	try {
		dataRow.innerHTML = ``;
		$( "#inner-loading" ).fadeIn( 300 );

		let response = await fetch(
			`https://www.themealdb.com/api/json/v1/1/filter.php?c=${ category }`
		);
		response = await response.json();

		displayContent( response.meals.slice( 0, 20 ) );
		$( "#inner-loading" ).fadeOut( 300 );
	} catch ( error ) {
		console.log( error );
	}
}
async function fetchCategories () {
	try {
		$( "#inner-loading" ).fadeIn( 300 );
		let response = await fetch(
			`https://www.themealdb.com/api/json/v1/1/categories.php`
		);
		let data = await response.json();
		displayCategories( data.categories );
	} catch ( error ) {
		console.log( error );
	}
}

/* =====================Area================== */
function displayArea ( list ) {
	let content = ``;
	for ( const iterator of list ) {
		content += `<div onclickfetch('${ iterator.strArea }')" class="rounded-md cursor-pointer relative text-center mt-5 overflow-hidden group/card">
					<i class="fa-solid fa-house-laptop fa-4x"></i>
                         <h3>${ iterator.strArea }</h3>
				</div>`;
	}
	$( "#inner-loading" ).fadeOut( 300 );
	dataRow.innerHTML = content;
}
async function fetchAreaMeals ( area ) {
	try {
		$( "#inner-loading" ).fadeOut( 300 );
		dataRow.innerHTML = ``;

		let response = await fetch(
			`https://www.themealdb.com/api/json/v1/1/filter.php?a=${ area }`
		);
		let data = await response.json();

		displayContent( data.meals.slice( 0, 20 ) );
	} catch ( error ) {
		console.log( error );
	}
}
async function fetchArea () {
	try {
		$( "#inner-loading" ).fadeIn( 300 );
		let response = await fetch(
			`https://www.themealdb.com/api/json/v1/1/list.php?a=list`
		);
		let data = await response.json();
		console.log( data.meals );
		displayArea( data.meals );
	} catch ( error ) {
		console.log( error );
	}
}

/* ===================Ingredients=================== */
function displayIngredients ( list ) {
	let content = ``;

	for ( const iterator of list ) {
		content += `

                <div onclick="fetchIngredientsMeals('${ iterator.strIngredient
			}')" class="rounded-md cursor-pointer relative text-center mt-5 overflow-hidden group/card">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${ iterator.strIngredient }</h3>
                        <p>${ iterator.strDescription
				.split( " " )
				.slice( 0, 20 )
				.join( " " ) }</p>
        </div>
        `;
	}
	$( "#inner-loading" ).fadeOut( 300 );
	dataRow.innerHTML = content;
}
async function fetchIngredients () {
	try {
		$( "#inner-loading" ).fadeIn( 300 );

		let response = await fetch(
			`https://www.themealdb.com/api/json/v1/1/list.php?i=list`
		);
		response = await response.json();
		console.log( response.meals );

		displayIngredients( response.meals.slice( 0, 20 ) );
	} catch ( error ) {
		console.log( error );
	}
}
async function fetchIngredientsMeals ( ingredients ) {
	try {
		$( "#inner-loading" ).fadeIn( 300 );

		let response = await fetch(
			`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ ingredients }`
		);
		response = await response.json();

		displayContent( response.meals.slice( 0, 20 ) );
	} catch ( error ) {
		console.log( error );
	}
}

/* ==================MealDetails=================== */
function displayMealDetails ( meal ) {
	closeSideNav();
	dataRow.innerHTML = ``;
	searchBox.innerHTML = ``;
	contactUs.innerHTML = ``;
	let tags = [];

	if ( meal.strTags !== null ) {
		tags = meal.strTags.split( "," );
	};
	let tagsStr = ``;
	if ( tags.length > 0 ) {
		for ( const iterator of tags ) {
			tagsStr += ` <li class="alert alert-danger m-2 p-1">${ iterator }</li>`;
		}
	}

	let ingredients = "";
	for ( let i = 1; i <= 20; i++ ) {
		let ingredient = meal[ `strIngredient${ i }` ];
		let measure = meal[ `strMeasure${ i }` ];

		if ( ingredient ) {
			let listItem = `<li class="alert alert-info m-2 p-1">${ measure } ${ ingredient }</li>`;
			ingredients += listItem;
		}
	}

	let content = `<div class="grid grid-cols-12 gap-6">
						<div class="col-span-4 rounded-lg">
							<div class="rounded-lg w-full">
								<img src="${ meal.strMealThumb }" class="rounded-lg w-full" alt>
								<h2 class="mb-0 font-medium leading-[1.2] text-[2rem]">${ meal.strMeal }</h2>
							</div>
						</div>
						<div class="col-span-8 ">
							<h2 class="mb-2 font-medium leading-[1.2] text-[2rem]">Instructions</h2>
							<p class="mt-0 mb-[1rem]">
							${ meal.strInstructions }
							</p>
							<h3 class="mb-2"><span class="mb-2 font-bold">Area :</span> ${ meal.strArea }</h3>
							<h3 class="mb-2"><span class="mb-2 font-bold">Category :</span> ${ meal.strCategory }</h3>
							<h3 class="mb-2">Recipes :</h3>
							<ul class="mb-4 mt-0 flex  flex-wrap ps-0 mx-0 justify-items-start">
								<li class="alert alert-info m-2 p-1">1 cup Lentils</li>
								${ ingredients }
							</ul>
							<h3 class="mb-2">Tags :</h3>
							<ul class="mb-4 flex flex-wrap">
								<li class="alert alert-danger m-2 p-1">Soup</li>
								${ tagsStr }
								</ul>
							<a target="_blank"
								href="${ meal.strSource }"
								class="btn btn-success">Source</a>
							<a target="_blank" href="${ meal.strYoutube }"
								class="btn btn-danger">Youtube</a>
						</div>
					</div>`;
	mealDetails.innerHTML = content;
	$( "#inner-loading" ).fadeOut( 300 );
}
async function fetchDetails ( ID ) {
	try {
		$( "#inner-loading" ).fadeIn( 300 );
		let response = await fetch(
			`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ ID }`
		);
		let data = await response.json();
		displayMealDetails( data.meals[ 0 ] );
	} catch ( error ) {
		console.log( error );
	}
}

/* =====================Validation==================== */
function nameValidation () {
	return /^[a-zA-Z ]+$/.test( document.getElementById( "nameInput" ).value );
}

function emailValidation () {
	return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		document.getElementById( "emailInput" ).value
	);
}

function phoneValidation () {
	return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
		document.getElementById( "phoneInput" ).value
	);
}

function ageValidation () {
	return /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(
		document.getElementById( "ageInput" ).value
	);
}

function passwordValidation () {
	return /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(
		document.getElementById( "passwordInput" ).value
	);
}

function repasswordValidation () {
	return (
		document.getElementById( "repasswordInput" ).value ===
		document.getElementById( "passwordInput" ).value
	);
}

function toggleAlert ( elementId, isValid ) {
	const element = document.getElementById( elementId );
	element.classList.toggle( "block", !isValid );
	element.classList.toggle( "hidden", isValid );
}
function inputsValidation () {
	const validations = [
		{
			focused: nameInputFocus,
			isValid: nameValidation,
			alertId: "nameAlert",
		},
		{
			focused: emailInputFocus,
			isValid: emailValidation,
			alertId: "emailAlert",
		},
		{
			focused: phoneInputFocus,
			isValid: phoneValidation,
			alertId: "phoneAlert",
		},
		{
			focused: ageInputFocus,
			isValid: ageValidation,
			alertId: "ageAlert",
		},
		{
			focused: passwordInputFocus,
			isValid: passwordValidation,
			alertId: "passwordAlert",
		},
		{
			focused: repasswordInputFocus,
			isValid: repasswordValidation,
			alertId: "repasswordAlert",
		},
	];
	let allValid = 0;
	for ( const validation of validations ) {
		if ( validation.focused ) {
			let valid = validation.isValid();
			toggleAlert( validation.alertId, valid );
			allValid += validation.isValid();
		}
	}
	if ( allValid === 6 ) {
		submitBtn.classList.remove( "disabled" );
	} else {
		submitBtn.classList.add( "disabled" );
	}
}

/* ===================================Main================================== */
closeSideNav();
jQuery( function () {
	searchContentByName( "" ).then( () => {
		$( "#loading-screen" ).fadeOut( 500 );
		$( "#loading-screen" ).remove();
		$( "body" ).css( "overflow", "visible" );
	} );
} );
