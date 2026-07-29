// Input: a sentence (string)
// Output: sentence with word order reversed
// Returns: a string


function reverseWords(sentence) {

  let reversedSentence = sentence.split(" ").reverse().join(" ");

  return reversedSentence;
 
}
 
console.log(reverseWords("hello world")); // Expected: "world hello"