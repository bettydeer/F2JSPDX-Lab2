
function Superhero ( cape, city, nemisis ) {
	this.cape = cape;
	this.city = city;
	this.nemisis = nemisis;
}

Superhero.prototype.saveTheDay = function () {
	return [ 'hero with cape of', this.cape,
		'saves', this.city, 'from',
		this.nemisis ].join(' ');
};

function Sidekick ( cape, superhero ) {
	this.superhero = superhero;
	Superhero.call( this, cape, superhero.city, superhero.nemisis );
}

Sidekick.prototype = Object.create( Superhero.prototype );
Sidekick.prototype.constructor = Sidekick;

Sidekick.prototype.saveTheDay = function () {
	return 'I helped ' + Superhero.prototype.saveTheDay.call( this );
}

Sidekick.prototype.sayCachePhrase = function () {
	return 'I love ' + this.superhero.cape;
}


// var superman = new Superhero( 'red', 'ny', 'lex luther' );
// var barman = new Superhero( 'black', 'gotham', 'joker' );
var bikewoman = new Superhero( 'blue', 'portland', 'car');
var beerboy = new Sidekick( 'green', bikewoman );

console.log( bikewoman.saveTheDay() );
console.log( beerboy.saveTheDay() );
