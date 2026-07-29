// Input: an array of numbers
// Output: the average of all numbers
// Returns: a number
 
function averageOfArray(numbers) {

  let total = 0;

for(const number of numbers){

    total = total + number;

}

let average = total / numbers.length;

 
  return average;

}
 
console.log("Expected:",averageOfArray([2, 4, 6])); // Expected: 4


/* 
Output
Expected: 4

*/