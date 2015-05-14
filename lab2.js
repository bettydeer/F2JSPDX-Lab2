/*********************************************************
LAB 2: SORTING AND CAMPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js

*********************************************************/
// SETUP
//*********************************************************

// We"re going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

function assertDeepEqual(actual, expected, failureMessage) {
  try {
    if ( JSON.stringify(actual) !== JSON.stringify(expected) ) {
      throw new Error( failureMessage );
    }
  }
  catch (err) {
    console.log("assertion failure: ", err,
                "\nexpected:", expected,
                "\nactual:", actual);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

 persons consumed  |  rate of consumption
 ------------------|---------------------
        0          |       1/hour
        1          |       2/hour
        2          |       3/hour
        3          |       4/hour

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

function Blob( consumed, rate ) {
  this.consumed = consumed;
  this.rate = rate;
}

var blob = new Blob( 0, 1 );

var numHours = 0;

while ( blob.consumed < 1000 ) {
  blob.consumed = blob.consumed + blob.rate;
  blob.rate = blob.consumed + 1;
  numHours++;
}

console.log("The blob consumed Dowington in " + numHours + " hours.");

var hoursSpentInDowington; // TODO: assign me the value of the
                           // above calculation

hoursSpentInDowington = numHours;

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

function hoursToOoze(population, peoplePerHour) {
  // TODO: implement me based on the instructions above. Be sure to then assign me to the Blob"s prototype.
  var hoursNeeded = 0,
      peopleConsumed = 0;

  while ( peopleConsumed < population ) {
    peopleConsumed = peopleConsumed + peoplePerHour;
    peoplePerHour = peopleConsumed + 1;
    hoursNeeded++;
  }

  return hoursNeeded;
}

Blob.prototype.hoursToOoze = hoursToOoze;

assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\"s result for 1000");

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

assert(blob.hoursToOoze(3, 1) === 2, "3 people should be consumed in 2 hours");
assert(blob.hoursToOoze(2000, 1) === hoursSpentInDowington + 1, "after Dowington, an extra 1000 people should take one extra hour");
assert(blob.hoursToOoze(1000, 1000) === 1, "if the numbers are the same, the blob eats the whole population in the first hour.");

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
  // TODO: specify a home planet and a language
  // you"ll need to add parameters to this constructor
  this.homePlanet = homePlanet;
  this.language = language;
}

// sb is a SentientBeing object
function sayHello (sb) {
  // TODO: say hello prints out (console.log"s) hello in the
  // language of the speaker, but returns it in the language
  // of the listener (the sb parameter above).
  // use the "hello" object at the beginning of this exercise
  // to do the translating
  console.log(hello[this.language]);
  return hello[sb.language];

  // TODO: put this on the SentientBeing prototype
}

SentientBeing.prototype.sayHello = sayHello;

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

function Klingon () {
  this.homePlanet = "Qo\"noS";
  this.language = "klingon";
  SentientBeing.call(this.homePlanet, this.language);
}

Klingon.prototype = Object.create(SentientBeing.prototype);
Klingon.prototype.constructor = Klingon;

function Human () {
  this.homePlanet = "Earth";
  this.language = "federation standard";
  SentientBeing.call(this.homePlanet, this.language);
}

Human.prototype = Object.create(SentientBeing.prototype);
Human.prototype.constructor = Human;

function Romulan () {
  this.homePlanet = "Romulus";
  this.language = "romulan";
  SentientBeing.call(this.homePlanet, this.language);
}

Romulan.prototype = Object.create(SentientBeing.prototype);
Romulan.prototype.constructor = Romulan;

assert((new Human()).sayHello(new Klingon()) === "nuqneH",
  "the klingon should hear nuqneH");
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert((new Romulan()).sayHello(new Klingon()) === "nuqneH",
  "the klingon should hear nuqneH");
assert((new Human()).sayHello(new Romulan()) === "Jolan\"tru",
  "the romulan should hear Jolan\"tru");
assert((new Klingon()).sayHello(new Romulan()) === "Jolan\"tru",
  "the romulan should hear Jolan\"tru");
assert((new Romulan()).sayHello(new Human()) === "hello",
  "the human should hear hello");
assert((new Klingon()).sayHello(new Human()) === "hello",
  "the human should hear hello");

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one
//*********************************************************
function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // read this: http://www.w3schools.com/jsref/jsref_sort.asp
    return a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1);
  }
  stringArray.sort(byLastLetter);
  return stringArray;
}

assertDeepEqual(
  lastLetterSort( [ "blue", "red", "green" ] ),
  [ "red", "blue", "green" ],
  "array not sorted by last letter"
);
assertDeepEqual(
  lastLetterSort( [ "sally", "tom", "bob", "joe" ] ),
  [ "bob", "joe", "tom", "sally" ],
  "array not sorted by last letter"
);

function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach
  numberArray.forEach(function addThis(element, index, array) {
    sum += element;
  });

  return sum;
}

assert(sumArray([ 1, 2, 3 ]) === 6, "1+2+3 should equal 6");
assert(sumArray([ 2, 4, 6, 8, 10 ]) === 30, "2+4+6+8+10 should equal 30");

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(a, b) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
    return sumArray(a) - sumArray(b);
  });
  return arrayOfArrays;
}

assertDeepEqual(
  sumSort( [ [ 4, 5, 6 ], [ 7, 8, 9 ], [ 1, 2, 3 ] ] ),
  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
  "array not sorted by sum of array"
);
assertDeepEqual(
  sumSort( [ [ 3, 5, 7 ], [ 2, 3 ], [ 1 ] ] ),
  [ [ 1 ], [ 2, 3 ], [ 3, 5, 7 ] ],
  "array not sorted by sum of array"
);

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
