

function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
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

function Blob(population, peoplePerHour){
  this.population = population;
  this.peoplePerHour = peoplePerHour;

  this.hoursToOoze = function(population, peoplePerHour){
    var eatenPeople = 1;

    while (population > 0) {
      eatenPeople = (eatenPeople + hour) * peoplePerHour;
      population -= eatenPeople;
      hour += 1;

      if (population<0) {
        hour -=1;
      }
    }
    return hour;
  }
}

var blob = new Blob(0, 1);
var blob1 = new Blob(1000, 1);
var blob2 = new Blob(1500, 1);
var blob3x = new Blob(1000, 3);
var blob100k = new Blob(100000, 1);
// console.log(blob2.hoursToOoze(this.population, this.peoplePerHour));

function hoursSpentInDowington (){
  var peopleLeft = 1000;
  var hour2 = 0;
  var eatenPeople =1;

  while (peopleLeft>0) {
    eatenPeople = eatenPeople +hour2;
    peopleLeft -= eatenPeople;
    hour2 += 1;

    if (peopleLeft<0) {
      hour2 -=1;
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

