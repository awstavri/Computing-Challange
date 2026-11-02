console.log('Hello World!');

let x = 123;
let y = 321;

let z = x + y;

console.log(z);

if (z >= 10) {
  console.log("Big")
}
  else {
    console.log("Small")
  }

console.log("DataType of z: " + typeof(z));

var myArray = [];

var myArraySize = myArray.length;

console.log(myArraySize)

myArray.push(68, 89, 96, 77, 86);

let element0 = myArray[3]
let element1 = myArray[4]

console.log(element0)
console.log(element1)

console.log("Checkpont")

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

console.log("checkpoint")

let sum =0;
for (let i = 0; i < myArray.length; i++) {
  sum = sum + myArray[i];
}

let average = sum / myArray.length;
console.log("myArray avergae is: " + average)

console.log("Checkpoint");

myArray.sort((a, b) => a - b);

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

console.log("Checkpoint")

myArray.reverse( (a, b) => a - b);

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

console.log("Checkpoint");

function add(x, y) {
  return x + y;
}

console.log(add(x, y));

console.log("Checkpoint")

function add2(x, y, z=4) {
  for (let i = 0; i < z; i++) {
    x = x - y;
  }
  return x;
}

console.log(add2(1, 2));
console.log(add2(1,2, 3));
console.log(add2(4, 1));
console.log(add2(4, 2, 2));




