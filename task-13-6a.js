// Input: an array of numbers
// Output: the second smallest number
// Returns: a number


function findSecondSmallest(numbers) {
  let smallest = Infinity;
  let secondSmallest = Infinity;


  for(const number of numbers){

    if(number < smallest){
        
        secondSmallest = smallest;
        smallest = number;

    }else if(number > smallest && number < secondSmallest ){

        secondSmallest = number;

    }
    
}
 
  return secondSmallest;
}
 

console.log("Expected:",findSecondSmallest([10, 5, 8, 20, 15])); // Expected: 8


/* 
Output 
Expected: 8

*/
