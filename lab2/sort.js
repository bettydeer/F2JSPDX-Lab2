//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one
//*********************************************************


/* PART 1 */

function lastLetterSort(stringArray) {
  stringArray.sort(function(a,b){
    var lastLetterofA = a[a.length-1];
    var lastLetterofB = b[b.length-1];
    if (lastLetterofA < lastLetterofB) return -1
    if (lastLetterofA === lastLetterofB) return 0;
    if (lastLetterofA > lastLetterofB) return 1;
  });
  return stringArray;

}

assertDeepEqual(
  lastLetterSort( [ 'blue', 'red', 'green' ] ),
  [ 'red', 'blue', 'green' ],
  'array not sorted by last letter'
);


/* PART 2 */

var arrayOfArrays = [ [ 1, 4, 3 ], [ 6, 2, 3 ], [ 3, 9 ], [ 0, 1 ] ]

function sumArray(numberArray) {
  var sum = 0;
  numberArray.forEach(function(number){
    sum = sum + number;
  });

  // TODO: implement me using forEach
  return sum;
}

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(a, b) {
    var sumA = sumArray(a);
    var sumB = sumArray(b);
    if (sumA > sumB) return +1;
    if (sumA < sumB) return -1;
    if (sumA === sumB) return 0;

    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
  });
  return arrayOfArrays;
}

// write an assertion that tests the above code
assertDeepEqual(
    sumSort(arrayOfArrays),
    [  [0, 1 ], [ 1, 4, 3 ], [ 6, 2, 3 ], [ 3, 9 ] ],
    "array not in sorted order"
    );




// assert methods //

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

// Use this method to test to arrays when they are not
// the same arrays but content should be equal
function assertDeepEqual(actual, expected, failureMessage) {
  try {
    if ( JSON.stringify(actual) !== JSON.stringify(expected) ) {
      throw new Error( failureMessage );
    }
  }
  catch (err) {
    console.log('assertion failure: ', err,
                '\nexpected:', expected,
                '\nactual:', actual);
  }
}

