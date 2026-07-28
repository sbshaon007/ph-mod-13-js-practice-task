// Input: a number
// Output: the number with digits reversed
// Returns: a number

// let num = 1234;

// let str = num.toString();

// let reversed = "";


// for (let i = str.length - 1; i >= 0; i--) {

//     let currentElement = str[i];

//     reversed = reversed + currentElement;

// }

// let reversedNum = Number(reversed);

// console.log(reversed);

// console.log(reversedNum);




function reverseNumber(num) {

    let str = num.toString();

    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {

        let currentElement = str[i];

        reversed = reversed + currentElement;

    }

    let reversedNum = Number(reversed);

    return reversedNum;


}

console.log("Expected:",reverseNumber(1234)); // Expected: 4321
console.log("Expected:",reverseNumber(7));    // Expected: 7


/* 
output

Expected: 4321
7
*/