// Given two strings,  and , determine if they share a common substring.
//
// Input Format
//
// The first line contains a single integer, , denoting the number of  pairs you must check.
// Each pair is defined over two lines:
//
// The first line contains string .
// The second line contains string .
// Constraints
//
//  and  consist of lowercase English letters only.
// Output Format
//
// For each  pair of strings, print YES on a new line if the two strings share a common substring; if no such common substring exists, print NO on a new line.
//
// Sample Input
//
// 2
// hello
// world
// hi
// world
// Sample Output
//
// YES
// NO
// Explanation
//
// We have  pairs to check:
//
// , . The substrings  and  are common to both  and , so we print YES on a new line.
// , . Because  and  have no common substrings, we print NO on a new line.

function processData(input) {
    //Enter your code here
    let arrayInput = input.split('\n');
    let number = arrayInput.shift();
    for(let i = 0; i < arrayInput.length; i+=2){
        if (checkStrings(arrayInput[i], arrayInput[i+1])){
            console.log("YES");
        }else {
            console.log("NO");
        }
    }

}

function checkStrings(string1, string2){
    let stringObj = {};
    for(let i = 0; i < string1.length; i++){
      if (!stringObj.hasOwnProperty(string1[i])){
          stringObj[string1[i]] = true;
      }
    }
      for(let j = 0; j < string2.length; j++){
            if (stringObj.hasOwnProperty(string2[j])){
                return true;
            }
        }
  return false;
}
