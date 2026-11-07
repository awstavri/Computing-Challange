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

let symbol = "#";

for (let i = 1; i <=7; i++) {
  console.log(symbol.repeat(i));
}

console.log("Checkpoint");


// By Three3
// • 3, 6, 9
// • 12, 15, 18
// • 21, 24, 27, 30
// • 33, 36, 39
// • 42, 45, 48
// • 51, 54, 57, 60
// • 63, 66, 69
// • 72, 75, 78
// • 84, 87, 90
// • 93, 96, 99

// By Five5
//• 5, 10, 15, 20
// • 25, 30, 35, 40
// • 45, 50, 55, 60
// • 65, 70, 75, 80
// • 85, 90, 95, 100

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizBuzz");
  }
  else if (i % 3 === 0){
    console.log("Fiz");
  }
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
}
console.log("Checkpoint");

let board = ""; // This will hold our entire chessboard text

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    // If the row + col is even, add a space. Otherwise, add a #
    if ((row + col) % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  // After finishing a row, add a newline character to go down
  board += "\n";
}

console.log(board);

console.log("Checkpoint");

console.log(Math.min(0,10));
console.log(Math.min(-10,0));

console.log("Checkpoint");

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  else if (number % 2 === 1) {
    return false;
  }
  else {
    return isEven(number - 2);
  }
}

console.log(isEven(50))
console.log(isEven(75));

console.log("Checkpoint");

console.log(sum(range(1,10)));




