// Input: a number
// Output: array of odd numbers from 1 to n
// Returns: an array

 
function getOddNumbers(n) {
  
    let odds = [];
  
  for(let i = 1; i <= n; i++){

    let currentNumber = i;   
    
    if(currentNumber % 2 !== 0){

        odds.push(currentNumber);
    }


  }

  return odds;
}
 
console.log("Expected:",getOddNumbers(10)); // Expected: [1, 3, 5, 7, 9]


/* 
Output

Expected: [ 1, 3, 5, 7, 9 ]

*/
