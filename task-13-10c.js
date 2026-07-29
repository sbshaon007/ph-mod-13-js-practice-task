// Input: an array of numbers
// Output: array with duplicates removed
// Returns: an array
 
function removeDuplicates(numbers) {
  let unique = [];

for (const number of numbers){

    if(unique.includes(number) === false){

        unique.push(number);

    }
}
  
 
  return unique;
}
 
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected: [1, 2, 3, 4, 5]


/* 
Output

[ 1, 2, 3, 4, 5 ]
*/
