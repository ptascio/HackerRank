// John has discovered various rocks. Each rock is composed of various elements, and each element is represented by a lower-case Latin letter from 'a' to 'z'. An element can be present multiple times in a rock. An element is called a gem-element if it occurs at least once in each of the rocks.
//
// Given the list of  rocks with their compositions, display the number of gem-elements that exist in those rocks.
//
// Input Format
//
// The first line consists of an integer, , the number of rocks.
// Each of the next  lines contains a rock's composition. Each composition consists of lower-case letters of English alphabet.
//
// Constraints
//
// Each composition consists of only lower-case Latin letters ('a'-'z').
//  length of each composition
//
// Output Format
//
// Print the number of gem-elements that are common in these rocks. If there are none, print 0.
//
// Sample Input
//
// 3
// abcdde
// baccd
// eeabg
// Sample Output
//
// 2
// Explanation
//
// Only "a" and "b" are the two kinds of gem-elements, since these are the only characters that occur in every rock's composition.

function processData(input) {
    //Enter your code here
    let array = input.split('\n');
    let numbertohit = parseInt(array.shift());
    var sortedArray = [];
    let letterObj = {};
    let gemcount = 0;
    for (let i = 0; i < array.length; i++){
        let newWord = array[i].split('').sort();
        Array.from(new Set(newWord));
        let unique = [...new Set(newWord)].join('');
        sortedArray.push(unique);
    }
    sortedArray.sort(function(a, b) {
                    return a.length - b.length;
                    });


    let wordtocheck = sortedArray.shift();

    for (let j = 0; j < wordtocheck.length; j++){
      letterObj[wordtocheck[j]] = 1;
      for (let x = 0; x < sortedArray.length; x++){
         if (sortedArray[x].includes(wordtocheck[j])){
           letterObj[wordtocheck[j]] +=1;
         }
      }
    }
    for (var key in letterObj){
      if (letterObj[key] === numbertohit){
        gemcount++;
      }
    }
    console.log(gemcount);
} 
