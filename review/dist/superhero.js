'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Superhero = (function () {
	function Superhero(cape, city, nemisis) {
		_classCallCheck(this, Superhero);

		this.cape = cape;
		this.city = city;
		this.nemisis = nemisis;
		this.blah = 'lue';
	}

	_createClass(Superhero, [{
		key: 'saveTheDay',
		value: function saveTheDay() {
			return ['hero with cape of', this.cape, 'saves', this.city, 'from', this.nemisis].join(' ');
		}
	}]);

	return Superhero;
})();

var Sidekick = (function (_Superhero) {
	function Sidekick(cape, superhero) {
		_classCallCheck(this, Sidekick);

		_get(Object.getPrototypeOf(Sidekick.prototype), 'constructor', this).call(this, cape, superhero.city, superhero.nemisis);
		this.superhero = superhero;
	}

	_inherits(Sidekick, _Superhero);

	_createClass(Sidekick, [{
		key: 'saveTheDay',
		value: function saveTheDay() {
			return 'I helped ' + _get(Object.getPrototypeOf(Sidekick.prototype), 'saveTheDay', this).call(this, this);
		}
	}, {
		key: 'sayCachePhrase',
		value: function sayCachePhrase() {
			return 'I love ' + this.superhero.cape;
		}
	}]);

	return Sidekick;
})(Superhero);

var superman = new Superhero('red', 'ny', 'lex luther');
var barman = new Superhero('black', 'gotham', 'joker');
var bikewoman = new Superhero('blue', 'portland', 'car');
var beerboy = new Sidekick('green', bikewoman);

console.log(bikewoman.saveTheDay());
console.log(beerboy.saveTheDay());
console.log(beerboy.sayCachePhrase());
