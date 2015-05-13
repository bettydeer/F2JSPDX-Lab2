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

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/
function Blob(name) {
    this.name = name;
}

var blob = new Blob("blobber");
var dowingtonPopulation = 1000, hours = 0, rate = 1;

while (dowingtonPopulation > 0) {
  dowingtonPopulation -= rate;
  hours++;
  rate++;
}

var hoursSpentInDowington = hours; // TODO: assign me the value of the
                           // above calculation

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

function hoursToOoze(population, peoplePerHour) {
  // TODO: implement me based on the instructions above. Be sure to then assign me to the Blob's prototype.
    //this.rate = rate;
  var hours = 0;
  while (population > 0) {
    population -= peoplePerHour;
    hours++;
    peoplePerHour++;
  }
  return hours;
}
Blob.prototype.hoursToOoze = hoursToOoze;

assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\"s result for 1000");

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
assert(blob.hoursToOoze(20, 1) === 6, "hours should be 6");
assert(blob.hoursToOoze(22, 1) === 7, "hours should be 7");
assert(blob.hoursToOoze(100, 2) === 13, "hours should be 13");

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

function SentientBeing (home, language) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.home = home;
  this.language = language;
}

// sb is a SentientBeing object
function sayHello (sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    //TODO: put this on the SentientBeing prototype
    console.log("The speaker says " + hello[this.language]);

    return hello[sb.language];
}
SentientBeing.prototype.sayHello = sayHello;

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).
function Klingon () {
  SentientBeing.call( this, "Qo\"noS", "klingon");
}
Klingon.prototype = Object.create(SentientBeing.prototype);
Klingon.prototype.constructor = Klingon;

function Human () {
  SentientBeing.call( this, "Earth", "federation standard");
}
Human.prototype = Object.create(SentientBeing.prototype);
Human.prototype.constructor = Human;

function Romulan () {
  SentientBeing.call( this, "Romulus", "romulan");
}
Romulan.prototype = Object.create(SentientBeing.prototype);
Romulan.prototype.constructor = Romulan;

var klingon = new Klingon();
var human = new Human();
var romulan = new Romulan();

// Changing asserts to 1) use object created above instead of creating new object
//    in each assert and 2) use hello object to get languages
//assert((new Human()).sayHello(new Klingon()) === "nuqneH",
//  "the klingon should hear nuqneH");
assert(human.sayHello(klingon) === hello[klingon.language],
  "the klingon should hear ".concat(hello[klingon.language]));

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert(human.sayHello(romulan) === hello[romulan.language],
  "the romulan should hear ".concat(hello[romulan.language]));
assert(klingon.sayHello(human) === hello[human.language],
  "the human should hear ".concat(hello[human.language]));
assert(klingon.sayHello(romulan) === hello[romulan.language],
  "the romulan should hear ".concat(hello[romulan.language]));
assert(romulan.sayHello(human) === hello[human.language],
  "the human should hear ".concat(hello[human.language]));
assert(romulan.sayHello(klingon) === hello[klingon.language],
  "the klingon should hear ".concat(hello[klingon.language]));

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
  lastLetterSort( [ "Alex", "Mike", "Graham", "Gia", "Elias" ] ),
  [ "Gia", "Mike", "Graham", "Elias", "Alex" ],
  "array not sorted by last letter"
);
assertDeepEqual(
  lastLetterSort( [ "Kentucky", "Louisiana", "Texas", "Washgington", "Oregon", "Delaware", "Wyoming", "Mississippi" ] ),
  [ "Louisiana", "Delaware", "Wyoming", "Mississippi", "Washgington", "Oregon", "Texas", "Kentucky" ],
  "array not sorted by last letter"
);

function sumArray(numberArray) {

  // TODO: implement me using forEach
  var sum = 0;
  numberArray.forEach(function(element) {
    sum += element;
  });

  return sum;
}

assert(sumArray( [ 100, 200, 300, 400, 500, 600 ] ) === 2100, "Array sum should be 2100");
assert(sumArray([ 1, 1, 1, 1, 1, 1 ]) === 6, "Array sum should be 6");

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
  sumSort( [ [ 2, 2 ], [ 1, 1 ] ] ),
  [ [ 1, 1 ], [ 2, 2 ] ],
  "arrays not sorted by sum"
);

assertDeepEqual(
  sumSort( [ [ 200, 3300 ], [ 1, 1, 1, 1 ], [ 2, 3, 4, 5 ], [ 2 ] ] ),
  [ [ 2 ], [ 1, 1, 1, 1 ], [ 2, 3, 4, 5 ], [ 200, 3300 ] ],
  "arrays not sorted by sum"
);
//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
