
function createSuperhero ( cape, city, nemisis ) {

	var hero = {};
	hero.cape = cape;
	hero.city = city;
	hero.nemisis = nemisis;
	hero.saveTheDay = saveTheDay;

	return hero;
}

function saveTheDay () {
	return [ 'hero with cape of', this.cape,
		'saves', this.city, 'from',
		this.nemisis ].join(' ');
}

var superman = createSuperhero( 'red', 'ny', 'lex luther' );
var batman = createSuperhero( 'black', 'gotham', 'joker' );
var bikewoman = createSuperhero( 'blue', 'portland', 'car');

console.log( bikewoman.saveTheDay() );
console.log( bikewoman.saveTheDay() === bikewoman.saveTheDay() );
