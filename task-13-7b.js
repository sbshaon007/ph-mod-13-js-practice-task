// Input: an array of numbers
// Output: array with only even numbers
// Returns: an array
 
function keepEvenNumbers(numbers) {
  let result = [];
  // TODO: loop and push only even numbers

  for(const number of numbers){

    if(number % 2 === 0){

        result.push(number);
    }

  }
 
  return result;
}
 
console.log(keepEvenNumbers([3, -5, 8, -1, 0])); // Expected: [8, 0]

/* 
Output
[ 8, 0 ]
*/
