// Input: a string
// Output: the string without its first and last character
// Returns: a string
 
function removeFirstAndLast(str) {

  let portion = str.slice(1, str.length-1);

  return portion;

}


console.log("Expected:",removeFirstAndLast("hello")); // Expected: "ell"

/* 
Output

Expected: ell
*/


