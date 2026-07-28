// Input: a number
// Output: product of its digits
// Returns: a number

 
function productOfDigits(num) {
  let str = num.toString();
  let total = 1;
  // TODO: loop through each character, convert to number, and multiply

  for(const digits of str){

    let digitStrToNum = Number(digits);

    total = total * digitStrToNum;
        

  }
 
  return total;
}
 
console.log("Expected:",productOfDigits(123));  // Expected: 6
console.log("Expected:",productOfDigits(4040)); // Expected: 0


/* 
Output

Expected : 6
Expected : 0
*/