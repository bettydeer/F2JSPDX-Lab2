
var array = ['blue', 'green', 'red', 'yellow', 'purple', 'white', 'black'];

function randomString(array) {
  return array[Math.floor(Math.random() * array.length)];
}

console.log(randomString(array));
