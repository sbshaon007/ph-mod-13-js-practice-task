// Input: a string (lowercase letters only)
// Output: count of vowels
// Returns: a number

 
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;

 for(const letter of str){

    if(vowels.includes(letter)){    

        count++;

    }

}
 
  return count;
}
 
console.log("Expected: ",countVowels("javascript")); // Expected: 3


 /* 
 
 Output
 Expected:  3

 */
