// Input: a string
// Output: true or false
// Returns: a boolean


function isPalindrome(str) {

    let reverseStr = '';

    for (const chars of str) {

        reverseStr = chars + reverseStr;

    }

    if (str === reverseStr) {

        return true;

    } else {

        return false;

    }

}

console.log(isPalindrome("level")); // Expected: true
console.log(isPalindrome("hello")); // Expected: false


/* 
Output

true
false

*/