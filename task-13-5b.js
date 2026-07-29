// Input: a sentence (string)
// Output: the shortest word
// Returns: a string
 
function findShortestWord(sentence) {

  let words = sentence.split(" ");
  let shortest = words[0];
  
  for (const word of words){

    if(word.length < shortest.length){

        shortest = word;
    }
    
  }
 
  return shortest;
}
 
console.log("Expected:",findShortestWord("JavaScript fun language")); // Expected: "a"


/* |
Output
Expected: a

*/