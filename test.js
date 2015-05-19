

// for (peopleLeft=10; peopleLeft>0;) {
//   hour += 1;
//   peoplePerHour += 1;

//   console.log('peopleLeft--'+peopleLeft);
//   console.log('hour--'+hour);
//   console.log('peoplePerHour--' + peoplePerHour);
//   peopleLeft += (peopleLeft - peoplePerHour);
// console.log('peopleLeft--'+peopleLeft);
// console.log("END")
//   if (peopleLeft < 5){
//     console.log('no people left');
//     break;
//   }
// }

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

  this.hoursToOoze = function(peopleLeft, eatenPerHour){

    var eatenPeople = 1;

    while (peopleLeft > 0) {
      eatenPeople = (eatenPeople + hour) * eatenPerHour;
      peopleLeft -= eatenPeople;
      // console.log('hour='+hour + '  eatenPeople='
      //   +eatenPeople + '  peopleLeft='
      //   +peopleLeft);
      hour += 1;

      if (peopleLeft<0) {
        hour -=1;
        // console.log('everyone eaten in ' + hour +
        //   ' hours eatenPeople ' + this.population
        //   + '  peopleLeft=0');
      }
    }
    return hour;
  }
}


 //TODO: Next, create an instance of Blob named blob.

var blob = new Blob(0, 1);
var portland = new Blob(1000, 1)
var peopleLeft = blob.population;

//blob.hoursToOoze(0, 1);

console.log(blob.hoursToOoze());
assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");

blob.hoursToOoze(1000, 1);
console.log(blob.hoursToOoze());
//portland.hoursToOoze(1000,1);
// console.log(portland.hoursToOoze());


assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
   "hoursSpentInDowington should match hoursToOoze\"s result for 1000");

 //TODO: Then, use a loop to calculate how long it took the blob to finish
 //with Dowington.

function hoursSpentInDowington (){
  var peopleLeft = 1000;
  var hour = 0;
  var eatenPeople =1;

  while (peopleLeft>0) {
    eatenPeople = eatenPeople +hour;
    peopleLeft -= eatenPeople;
    // console.log('hour='+hour+'  eatenPeople='+eatenPeople +
    //   '  peopleLeft='+peopleLeft);
    hour += 1;

    if (peopleLeft<0) {
      hour -=1;
      // console.log('everyone eaten in ' + hour +
      //   ' hours eatenPeople ' + blob.population
      //   + '  peopleLeft=0000');
    }
  }
  return hour;
}

//hoursSpentInDowington();
console.log(hoursSpentInDowington());


// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

//function hoursToOoze(population, peoplePerHour) {
  // TODO: implement me based on the instructions above. Be sure to then assign
  //me to the Blob's prototype.
//}

// assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");
 // assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
 //   "hoursSpentInDowington should match hoursToOoze\"s result for 1000");


// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.




