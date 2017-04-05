// Given a square matrix of size , calculate the absolute difference between the sums of its diagonals.
// Input Format
// The first line contains a single integer, . The next  lines denote the matrix's rows, with each line containing space-separated integers describing the columns.
//
// Output Format
// Print the absolute difference between the two sums of the matrix's diagonals as a single integer.
// Sample Input
// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output
// 15
// Explanation
// The primary diagonal is:
// 11
//       5
//             -12
//
// Sum across the primary diagonal: 11 + 5 - 12 = 4
// The secondary diagonal is:
//             4
//       5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15
var n = 3;
var array = [
  [11, 2, 4],
  [4, 5, 6],
  10, 8 , -12
];

function main(a) {
    var firstsum = 0;
    var secsum = 0;
    var middle = Math.floor(n/2);
   for(let i = 0; i < a.length; i++){
     firstsum+=a[i][i];
   }
   let j = n-1;
   for(let i = 0; i < a.length; i++){
     secsum+=a[j][i];
     j-=1;
   }
   console.log(Math.abs(firstsum - secsum));
}
main(array);
