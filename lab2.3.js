// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}


function assertDeepEqual(actual, expected, failureMessage) {
  try {
    console.log( JSON.stringify(actual));
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

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one
//*********************************************************

//testString = ['blue', 'red', 'green'];
function lastLetterSort (testString){
  return testString.sort(function(a, b) {
    return a.charCodeAt(a.length-1) - b.charCodeAt(b.length-1);
  });
}

var sorted = lastLetterSort( [ 'blue', 'red', 'green' ] );

assertDeepEqual(
  sorted, [ 'red', 'blue', 'green' ],
  'array not sorted by last letter'
);



var testArray = [4,6,9,2,3];
// testArray.forEach(sumArray);

function sumArray(numberArray) {
  sum = 0;
  for (i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
  }
  return sum;
}

sumArray(testArray);

arrayOfArrays = [[2,8,11,8],[5,10,15,25],[3,9,9,3]];


function sumSort(arrayOfArrays) {
  return arrayOfArrays.sort(function(a,b) {
    return sumArray(a) - sumArray(b);

    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
  });
}


assertDeepEqual(sumSort(arrayOfArrays), ([ [ 3, 9, 9, 3 ],
 [ 2, 8, 11, 8 ], [ 5, 10, 15, 25 ] ]),
"sumSort function doesnt work");

