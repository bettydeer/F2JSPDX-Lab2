
//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: "nuqneH",  // home planet is Qo"noS
  romulan: "Jolan\"tru", // home planet is Romulus
  "federation standard": "hello" // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

function SentientBeing (homePlanet, language) {
  this.homePlanet = homePlanet;
  this.language = language;

  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
}

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function (sb) {
    console.log( hello[ this.language ] );
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    //TODO: put this on the SentientBeing prototype
    return hello[sb.language];
}

function Human () {
   SentientBeing.call( this, 'earth', 'federation standard' );
}

Human.prototype = Object.create( SentientBeing.prototype );
Human.prototype.constructor = Human;

var human = new Human();

function Klingon () {
    SentientBeing.call( this, 'Qo"noS', 'klingon');
}

Klingon.prototype = Object.create(SentientBeing.prototype);
Klingon.prototype.constructor = Klingon;

var klingon = new Klingon();

function Romulan (){
  SentientBeing.call( this, 'Romulus', 'romulan');
}

Romulan.prototype = Object.create(SentientBeing.prototype);
Romulan.prototype.constructor = Romulan;

var romulan = new Romulan();

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

assert((new Human()).sayHello(new Klingon()) === "nuqneH",
  "the klingon should hear nuqneH");

assert((new Human()).sayHello(new Romulan()) === "Jolan\"tru",
  "the Romulan should hear Jolan\"tru");

assert((new Klingon()).sayHello(new Human()) === "hello",
  "the Human should hear hello");

assert((new Klingon()).sayHello(new Romulan()) === "Jolan\"tru",
  "the Romulan should hear Jolan\"tru");

assert((new Romulan()).sayHello(new Human()) === "hello",
  "the human should hear hello");

assert((new Romulan()).sayHello(new Klingon()) === "nuqneH",
  "the Klingon should hear nuqneH");

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.



/* helper method for assertions */

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}
