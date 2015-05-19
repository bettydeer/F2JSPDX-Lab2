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

// We're going to use this special assert method again to
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
*/
var hour = 0;

function Blob(population, peoplePerHour) {
  this.population = population;
  this.peoplePerHour = peoplePerHour;

  this.hoursToOoze = function(population, peoplePerHour) {
    var eatenPeople = 1;

    while (population > 0) {
      eatenPeople = (eatenPeople + hour) * peoplePerHour;
      population -= eatenPeople;
      hour += 1;

      if (population < 0) {
        hour -= 1;
      }
    }
    return hour;
  };
}

var blob = new Blob(0, 1);
var blob1 = new Blob(1000, 1);
var blob2 = new Blob(1500, 1);
var blob3x = new Blob(1000, 3);
var blob100k = new Blob(100000, 1);
// console.log(blob2.hoursToOoze(this.population, this.peoplePerHour));

function hoursSpentInDowington() {
  var peopleLeft = 1000;
  var hour2 = 0;
  var eatenPeople = 1 ;

  while (peopleLeft > 0) {
    eatenPeople = eatenPeople + hour2;
    peopleLeft -= eatenPeople;
    hour2 += 1;

    if (peopleLeft < 0) {
      hour2 -= 1;
    }
  }
  return hour2;
}

//console.log(hoursSpentInDowington());
//console.log(blob1.hoursToOoze(1000,1));

//assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");

 // assert(blob1.hoursToOoze(1000, 1) === hoursSpentInDowington(),
 //   "hoursSpentInDowington should match hoursToOoze\"s result for 1000");

// assert(blob2.hoursToOoze(1500, 1) === 20,
//    "blob.hoursToOoze(1500,1) should return 20");

// assert(blob3x.hoursToOoze(1000, 3) === 5,
//    "blob3x.hoursToOoze(1000, 3) should return 5");

// assert(blob100k.hoursToOoze(100000, 1) === 84,
//    "blob.110k.hoursToOoze(100000, 1) should return 84");

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
//assert(blob)
//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: "nuqneH",  // home planet is Qo"noS
  romulan: "Jolan\"tru", // home planet is Romulus
  "federation standard": "hello" // home planet is Earth
};

var hello = {
  klingon: "nuqneH",  // home planet is Qo"noS
  romulan: "Jolan\"tru", // home planet is Romulus
  "federation standard": "Hello" // home planet is Earth
};

function SentientBeing(language, planet) {
  this.language = language;
  this.planet = planet;
}

SentientBeing.prototype.sayHello = function(sb) {
  console.log(hello[this.language], this.language);
  return hello[sb.language];
};

function Klingon () {
  SentientBeing.call( this, "klingon", "Qo'nos");
}

Klingon.prototype = Object.create( SentientBeing.prototype);
Klingon.prototype.constructor = Klingon;

var klingon = new Klingon();

function Romulan () {
  SentientBeing.call( this, "romulan", "Jolan\'tru" );
}

Romulan.prototype = Object.create( SentientBeing.prototype);
Romulan.prototype.constructor = Romulan;

var romulan = new Romulan ();

function Human() {
  SentientBeing.call( this, "federation standard", "Earth");
}

Human.prototype = Object.create( SentientBeing.prototype);
Human.prototype.constructor = Human;

var human = new Human ();

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor

// sb is a SentientBeing object

    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    //TODO: put this on the SentientBeing prototype

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

assert((new Human()).sayHello(new Klingon()) === "nuqneH",
  "the klingon should hear nuqneH");

assert((new Human()).sayHello(new Romulan()) === 'Jolan\"tru',
 'the Romulan should hear Jolan\"tru');

assert((new Klingon()).sayHello(new Human()) === "Hello",
 "the Human should hear federation standard");

assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\"tru',
 'the Romulan should hear Jolan\"tru');

assert((new Romulan()).sayHello(new Klingon()) === "nuqneH",
 "the klingon should hear nuqneH");

assert((new Romulan()).sayHello(new Human()) === "Hello",
 "the Human should hear federation standard");

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one
//*********************************************************

function lastLetterSort(testString) {
  return testString.sort(function(a, b) {
    return a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1);
  });
}

var sorted = lastLetterSort ( [ "blue", "red", "green" ] );

assertDeepEqual (
  sorted, [ "red", "blue", "green" ],
  "array not sorted by last letter"
);

var testArray = [ 4, 6, 9, 2, 3 ];

function sumArray(numberArray) {
  sum = 0;
  for ( i = 0; i < numberArray.length; i++ ) {
    sum += numberArray[i];
  }
  return sum;
}

sumArray(testArray);

arrayOfArrays = [ [ 2, 8, 11, 8 ], [ 5, 10, 15, 25 ], [ 3, 9, 9, 3 ] ];

function sumSort(arrayOfArrays) {
  return arrayOfArrays.sort(function(a, b) {
    return sumArray(a) - sumArray(b);

    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
  });
}

assertDeepEqual(sumSort(arrayOfArrays), ([ [ 3, 9, 9, 3 ],
 [ 2, 8, 11, 8 ], [ 5, 10, 15, 25 ] ]),
"sumSort function doesnt work");

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
