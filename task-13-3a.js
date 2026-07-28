// Input: a number
// Output: product of its digits
// Returns: a number

 
function productOfDigits(num) {
  let str = num.toString();
  let total = 1;
  
  for(const digit of str){

    let digitStrToNum = Number(digit);

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