// Alice has a binary string, B, of length n. She thinks a binary string is beautiful if and only if it doesn\'t contain the substring "010".
//
// In one step, Alice can change a  to a  (or vice-versa). Count and print the minimum number of steps needed to make Alice see the string as beautiful.
//
// Input Format
//
// The first line contains an integer,  (the length of binary string ).
// The second line contains a single binary string, , of length .
//
// Constraints
//
// Each character in .
// Output Format
//
// Print the minimum number of steps needed to make the string beautiful.
//
// Sample Input 0
//
// 7
// 0101010
// Sample Output 0
//
// 2
// Sample Input 1
//
// 5
// 01100
// Sample Output 1
//
// 0
// Sample Input 2
//
// 10
// 0100101010
// Sample Output 2
//
// 3


function minSteps(n, B){
    // Complete this function
    let count = 0;
    function splicer(string){
        let arrSt = string.split('');
        for(let i = 0; i < arrSt.length; i++){
            let newString = arrSt.slice(i, i+3);

             if (checkArr(newString)){
                 arrSt[i+2] = '1';
                 count+=1;
            }
     }
  return count;
}

function checkArr(array){
  let stringArr = array.join('');
  if(stringArr === '010'){
    return true;
  }
  return false;
}
return splicer(B);
}

function main() {
    var n = parseInt(readLine());
    var B = readLine();
    var result = minSteps(n, B);
    process.stdout.write(""+result+"\n");

}
