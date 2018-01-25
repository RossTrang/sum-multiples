/* Sum all numbers below 1000 which are divisible
   by 3 or 5. Part of The Odin Project (JavaScript)
   course. Problem posed by Project Euler. */

// Declare variables
var num = 1;
var Div3 = 0;
var isDiv3;
var Div5 = 0;
var isDiv5;
var divisible;
var sumTotal = 0;

/* The Maths: Divide [num] by 3 and store the answer.
   Do the same for dividing by 5. Now check if the
   result is a whole number. If either is true, make
   [divisible] = true. Finally, add [num] to the running
   total and increment by 1. */

do {

    Div3 = num / 3;
    Div5 = num / 5;
    isDiv3 = Number.isInteger(Div3);
    isDiv5 = Number.isInteger(Div5);
    divisible = isDiv3 || isDiv5;
    if (divisible) { sumTotal += num; }
    num ++;

} while (num < 1000);

// Output result

console.log(`Sum total of all multiples of 3 or 5 below 1000 is: ${sumTotal}`);