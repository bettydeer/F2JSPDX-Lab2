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
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    console.log("assertion failure: ", failureMessage);
  }
}
//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

 // Dowington, PA had 1000 citizens on the night the blob escaped
 // its meteorite. At first, the blob could only find and consume
 // Pennsylvanians at a rate of 1/hour. However, each time it digested
 // someone, it became faster and stronger: adding to its consumption
 // rate by 1 person/hour.

 // persons consumed  |  rate of consumption
 // ------------------|---------------------
 //        0          |       1/hour
 //        1          |       2/hour
 //        2          |       3/hour
 //        3          |       4/hour

 // TODO: First, make a constructor function, called Blob, that makes blobs.

function Blob (name) {
  this.name = name;
}

 // TODO: Next, create an instance of Blob named blob.

var blob = new Blob("blob");

 // TODO: Then, use a loop to calculate how long it took the blob to finish
 // with Dowington.

var hour = 1;
var peopleConsumed = 0;
var peoplePerHour = 1;
var population = 1000;

while (peopleConsumed <= 1000) {
    peopleConsumed += peoplePerHour;
    hour += 1;
    peoplePerHour += 1;
}

var hoursSpentInDowington =  function() {
  var hour = 1;
  var peopleConsumed = 0;
  var population = 1000;
  var peoplePerHour = 1;

  while (peopleConsumed <= population) {
    peopleConsumed += peoplePerHour;
    hour += 1;
    peoplePerHour += 1;
  }

  //technically, the people were fully consumed within the previous hour
  //hence, the function returns hour - 1;
  return (hour - 1);
}; // TODO: assign me the value of the
                           // above calculation

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.
  this.hour = 1;
  this.peopleConsumed = 0;
  this.population = population;
  this.peoplePerHour = peoplePerHour;

  while ((this.population !== 0) && (this.peopleConsumed <= this.population)) {
    this.peopleConsumed += this.peoplePerHour;
    this.hour += 1;
    this.peoplePerHour += 1;
  }

  return (this.hour - 1);
};

assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington(),
  "hoursSpentInDowington should match hoursToOoze's result for 1000");
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
assert(blob.hoursToOoze(10, 1) === 5, "hoursToOoze should equal 5");
assert(blob.hoursToOoze(50, 1) === 10, "hoursToOoze should equal 10");
assert(blob.hoursToOoze(100, 10) === 8, "hoursToOoze should equal 8");

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: "nuqneH",  // home planet is Qo"noS
  romulan: "Jolan'tru", // home planet is Romulus
  "federation standard": "hello" // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

function SentientBeing (homePlanet, language) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.homePlanet = homePlanet;
  this.language = language;
}

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function(sb) {
// TODO: say hello prints out (console.log's) hello in the
// language of the speaker, but returns it in the language
// of the listener (the sb parameter above).
// use the 'hello' object at the beginning of this exercise
// to do the translating
//TODO: put this on the SentientBeing prototype
    console.log(hello[this.language]);
    return hello[sb.language];
  };

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).
function Klingon (homePlanet, language) {
  SentientBeing.call(this, homePlanet, language);
  this.homePlanet = "Qo'nos";
  this.language = "klingon";
}

function Human (homePlanet, language)  {
  SentientBeing.call(this, homePlanet, language);
  this.homePlanet = "Earth";
  this.language = "federation standard";
}

function Romulan (homePlanet, language)  {
  SentientBeing.call(this, homePlanet, language);
  this.homePlanet = "Romulus";
  this.language = "romulan";
}

Klingon.prototype = Object.create( SentientBeing.prototype );
Klingon.prototype.constructor = Klingon;

Human.prototype = Object.create( SentientBeing.prototype );
Human.prototype.constructor = Human;

Romulan.prototype = Object.create( SentientBeing.prototype );
Romulan.prototype.constructor = Romulan;

assert((new Human()).sayHello(new Klingon()) === "nuqneH",
  "the klingon should hear nuqneH");

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert((new Romulan()).sayHello(new Klingon()) === "nuqneH",
  "the klingon should hear nuqneH");
assert((new Klingon()).sayHello(new Romulan()) === "Jolan'tru",
  "the romulan should hear Jolan'tru");
assert((new Human()).sayHello(new Romulan()) === "Jolan'tru",
  "the romulan should hear nuqneH");
assert((new Klingon()).sayHello(new Human()) === "hello",
  "the human should hear nuqneH");
assert((new Romulan()).sayHello(new Human()) === "hello",
  "the human should hear nuqneH");

  //*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one
//*********************************************************

function lastLetterSort(stringArray) {
    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // read this: http://www.w3schools.com/jsref/jsref_sort.asp
    stringArray.sort(function(a, b) {
      return a.charCodeAt(a.length - 1 ) - b.charCodeAt(b.length - 1);
    });
    return stringArray;
}

assertDeepEqual(lastLetterSort([ "blue", "green", "red", "pink" ]), [ "red", "blue", "pink", "green" ], "array should be sorted alphabetically by last letter");
assertDeepEqual(lastLetterSort([ "tigger", "piglet", "eeyore" ]), [ "eeyore", "tigger", "piglet" ], "array should be sorted alphabetically by last letter");

function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach
  numberArray.forEach (function(item) {
    sum += item;
  });
  return sum;
}

assert(sumArray( [ 1, 2, 3, 4, 5 ] ) ===  15, "should equal 15");
assert(sumArray( [ 3, 3, 3 ] ) === 9, "should equal 9");

function sumSort(arrayOfArrays) {

  arrayOfArrays.sort(function(a, b) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
     arrayOfArrays.forEach(function(item) {
          sumArray(item);
     });
    return sumArray(a) - sumArray(b);
  });

  return arrayOfArrays;
}

assertDeepEqual(sumSort([ [ 3, 4, 10, 17 ], [ 16, 7 ], [ 1, 1 ] ]), ([ [ 1, 1 ], [ 16, 7 ], [ 3, 4, 10, 17 ] ]),
              "should be ordered based on the sum of the numbers inside the array");
assertDeepEqual(sumSort([ [ 10, 9, 8 ], [ 2, 1, 6 ], [ 3, 2, 1 ] ]), ([ [ 3, 2, 1 ], [ 2, 1, 6 ], [ 10, 9, 8 ] ]),
              "should be ordered based on the sum of the numbers inside the array");
assertDeepEqual(sumSort([ [ 17, 2 ], [ 2, 2, 2 ], [ 3, 2 ] ]), ([ [ 3, 2 ], [ 2, 2, 2 ], [ 17, 2 ] ]),
              "should be ordered based on the sum of the numbers inside the array");

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
