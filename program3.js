// ---
// **Problem-3**:  With a single integer as the input, generate the following until a = x [series of numbers as shown in the below examples]

//     Output: (examples)
//         1) input a = 1, then output : 1
//         2) input a = 2, then output : 1
//         3) input a = 3, then output : 1, 3, 5
//         4) input a = 4, then output : 1, 3, 5
//         5) input a = 5, then output : 1, 3, 5, 7, 9
//         6) input a = 6, then output : 1, 3, 5, 7, 9
//         .
//         .
//         7) input a = x, then output : 1, 3, 5, 7, .......
// ---

// Importing the module
const readline = require("readline-sync");

// Enter the number
let num = Number(readline.question("Please enter a number:"));

const printNumCount = (num %2 == 0) ? num-1 : num;
// print all odd number numbers
for (let i = 0; i < printNumCount; ++i) {
  console.log(2*i + 1);
}