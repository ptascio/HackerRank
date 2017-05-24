// A base-n number is a number that is made up of at most n symbols -
// Base-2 is a number with 0s and 1
// Base-10 is a number with digits in {0,1,2,3,4,5,6,7,8,9}
// Base-16 is a number with digits 0-9,A-F etc

// For this problem, you are required to do the following:
// Given a number X (X will be a number in a base between base-2 and base-16), find the minimum base that can be associated with X.
// Example: The minimum base associated 385 is base-9 (as it needs to have a base that supports the digit 8 which is its highest value digit). Similarly, the minimum base associated with B95 is base-12.

// Convert X from this base to a value X_10 in base-10.

// Do the same for another number Y and call its value in base-10 as Y_10

// Print out the sum of these two numbers in base-10, ie X_10 + Y_10

// Input Specifications

// Your program will take
// A number X in base-m (X >= 0, 2 ≤ m ≤ 16)

// A number Y in base-n (Y >= 0, 2 ≤ n ≤ 16)

// You can assume that X and Y when converted to base-10 will fit in a long long (C++).

// Output Specifications

// Based on the input, print out the sum of X_10 and Y_10

// Sample Input/Output

function findBase(num) {
  if (num.split("").includes("F")) {
    return convertToBase10(num, 16);
  }else if (num.split("").includes("E")){
    return convertToBase10(num, 15);
  }else if (num.split("").includes("D")){
    return convertToBase10(num, 14);
  }else if (num.split("").includes("C")){
    return convertToBase10(num, 13);
  }else if (num.split("").includes("B")){
    return convertToBase10(num, 12);
  }else if (num.split("").includes("A")){
    return convertToBase10(num, 11);
  }else if (num.split("").includes("9")){
    return convertToBase10(num, 10);
  }else if (num.split("").includes("8")){
    return convertToBase10(num, 9);
  }else if (num.split("").includes("7")){
    return convertToBase10(num, 8);
  }else if (num.split("").includes("6")){
    return convertToBase10(num, 7);
  }else if (num.split("").includes("5")){
    return convertToBase10(num, 6);
  }else if (num.split("").includes("4")){
   return convertToBase10(num, 5);
  }else if (num.split("").includes("3")){
   return convertToBase10(num, 4);
  }else if (num.split("").includes("2")){
   return convertToBase10(num, 3);
  }else if (num.split("").includes("1")){
  return  convertToBase10(num, 2);
  }
}
//B95
function convertToBase10(num, base){
  let solution = 0;
  let b = base;
  let n = (num.length - 1);
  for (var i = 0; i < num.length; i++){
    let checknum = checkNum(num[i]);
    solution += (checknum * (Math.pow(base, n)));
    n-=1;
  }
  return solution;
}

function checkNum(number){
  if (number === "A"){
    return 10;
  }else if (number === "B"){
    return 11;
  }else if (number === "C"){
    return 12;
  }else if (number === "D"){
    return 13;
  }else if (number === "E"){
    return 14;
  }else if (number === "F"){
    return 15;
  }else {
    return parseInt(number);
  }
}

let x = findBase("B95");
let y = findBase("101101");
console.log(x + y);
