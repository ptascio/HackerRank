// Shashank likes strings in which consecutive characters are different. For example, he likes ABABA, while he doesn't like ABAA. Given a string containing characters  and  only, he wants to change it into a string he likes. To do this, he is allowed to delete the characters in the string.
//
// Your task is to find the minimum number of required deletions.
//
// Input Format
//
// The first line contains an integer , i.e. the number of test cases.
// The next  lines contain a string each.
//
// Output Format
//
// For each test case, print the minimum number of deletions required.
//
// Constraints
//
//
//  length of string
//
// Sample Input
//
// 5
// AAAA
// BBBBB
// ABABABAB
// BABABA
// AAABBB
// Sample Output
//
// 3
// 4
// 0
// 0
// 4
function processData(input) {
    //Enter your code here
    let inputArray = input.split('\n');
    inputArray.splice(0, 1);

    function countDiffs(string){
        let count = 0;
        for(let i = 1; i < string.length; i++){
            if (string[i-1] === string[i]){
            count+=1;
            }
        }
        console.log(count);
    }

    function processDiffs(array){
        array.forEach((str) => {
        countDiffs(str);
    });
    }

    processDiffs(inputArray);
} 
