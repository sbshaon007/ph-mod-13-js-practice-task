// Input: a number
// Output: true or false
// Returns: a boolean
 
function isPerfectSquare(num) {
    
    if(num < 0){

        return false; 
    
    }
  
    for (let i = 1; i * i <= num; i++){
        
        if( i * i === num){
            
            return true;

        }

        } 
        
  
        return false;
    }

     
 

 
console.log(isPerfectSquare(16)); // Expected: true
console.log(isPerfectSquare(20)); // Expected: false


/* 
Output

true
false
*/
