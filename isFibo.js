// You are given an integer, . Write a program to determine if  is an element of the Fibonacci sequence.
//
// The first few elements of the Fibonacci sequence are . A Fibonacci sequence is one where every element is a sum of the previous two elements in the sequence. The first two elements are  and .
//
// Formally:
// Input Format
// The first line contains , number of test cases.
//  lines follow. Each line contains an integer .
//
// Output Format
// Display IsFibo if  is a Fibonacci number and IsNotFibo if it is not. The output for each test case should be displayed in a new line.
//
// Constraints
//
//
// Sample Input
//
// 3
// 5
// 7
// 8
// Sample Output
//
// IsFibo
// IsNotFibo
// IsFibo
// Explanation
//  is a Fibonacci number given by
//  is not a Fibonacci number
//  is a Fibonacci number given by

function processData(input) {
    //Enter your code here
    let fibs = [0, 1, 1];
    let isFib = 0;
    let fibArray = input.split('\n');
    fibArray.shift();

    for(let i = 0; i < fibArray.length; i++){
        if (checkFib(parseInt(fibArray[i]), fibs)){
            console.log('IsFibo');
        }else {
            console.log('IsNotFibo');
        }
    }

}

function checkFib(number, array){
    while(true){
        if (number === (array[array.length-2] + array[array.length-1]) || array.includes(number)){
            return true;
        } else if (array[array.length-1] > number) {
           return false;
        }
        else {
           array.push(parseInt(array[array.length-2]) + parseInt(array[array.length-1]));
        }
    }

}
