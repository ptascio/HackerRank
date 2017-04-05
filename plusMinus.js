// Given an array of integers, calculate which fraction of its elements are positive, which fraction of its elements are negative, and which fraction of its elements are zeroes, respectively. Print the decimal value of each fraction on a new line.
//
// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.
//
// Input Format
//
// The first line contains an integer, , denoting the size of the array.
// The second line contains  space-separated integers describing an array of numbers .
//
// Output Format
//
// You must print the following  lines:
//
// A decimal representing of the fraction of positive numbers in the array.
// A decimal representing of the fraction of negative numbers in the array.
// A decimal representing of the fraction of zeroes in the array.
// Sample Input
//
// 6
// -4 3 -9 0 4 1
// Sample Output
//
// 0.500000
// 0.333333
// 0.166667
// Explanation
//
// There are  positive numbers,  negative numbers, and  zero in the array.
// The respective fractions of positive numbers, negative numbers and zeroes are ,  and , respectively.

let n = 6;
let arr = [-4, 3, -9, 0, 4, 1];

function main() {
    let negs = 0;
    let pos = 0;
    let zeros = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]<0){
            negs+=1;
        }else if (arr[i] > 0){
            pos+=1;
        }else {
            zeros+=1;
        }

    }
        negs/=n;
        pos/=n;
        zeros/=n;
        console.log(pos.toFixed(6));
        console.log(negs.toFixed(6));
        console.log(zeros.toFixed(6));
}
main();
