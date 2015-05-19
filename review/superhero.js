
class Superhero {

	constructor ( cape, city, nemisis ) {
		this.cape = cape;
		this.city = city;
		this.nemisis = nemisis;
		this.blah = 'lue';
	}

	saveTheDay () {
		return [ 'hero with cape of',
			this.cape,
			'saves', this.city, 'from',
			this.nemisis ].join(' ');
	}
}

class Sidekick extends Superhero {

	constructor ( cape, superhero ) {
		super( cape, superhero.city, superhero.nemisis );
		this.superhero = superhero;
	}

	saveTheDay () {
		return 'I helped ' + super.saveTheDay( this );
	}

	sayCachePhrase () {
		return 'I love ' + this.superhero.cape;
	}
}

var superman = new Superhero( 'red', 'ny', 'lex luther' );
var barman = new Superhero( 'black', 'gotham', 'joker' );
var bikewoman = new Superhero( 'blue', 'portland', 'car');
var beerboy = new Sidekick( 'green', bikewoman );

console.log( bikewoman.saveTheDay() );
console.log( beerboy.saveTheDay() );
console.log( beerboy.sayCachePhrase() );
