console.log("Hi");
console.log("how are you buddy");
let myName = "anika";
console.log("Hi,I am", myName);
let myID = "s12345";
console.log("Hi,my student id is", myID);
// i am declaring a variable called myName
myName = "abcd";
console.log("Hi,I am", myName);
let myNewName = prompt("What is your name");
console.log("Hello, myNewName");
let myNewName = "Melbourne";
console.log("Hello", myNewName);
let myCity = "Perth";
console.log("Hello", myNewName, myCity);

// if you know the value is not going to change, define it using const
// or else use let
{
  let a = 10;
  console.log("Hello", a);
}
console.log("Hello", a);

// week 6
let a = 10;
let b = 20;
function add(val1, val2) {
  // fucntion can also be function subtract
  // val1-val2
  let sum = val1 + val2;
  console.log(sum);
  return sum;
}
let total = add(10, 20);
console.log(total);
total = add(a, b);
console.log(total);
total = subtract(a, b);
console.log(total);
