// Problem #1 Hello World
let greeting:string   // Declared Veriable greeting Whith string Value annotaion
greeting = "Hello,World!" // Initialized
console.log(greeting);  // Printing greeting

// Problem #2 Basic Math
let num1:number = 4
let num2:number = 2
num1 + num2;    //Calculating sum
num1 - num2;    //Calculating difference
num1 * num2;    //Calculating product
num1 / num2;    //Calculating quotient

// Problem #3 Swaping value
let a = 1; // Defininng variable "a"
let b = 2; // Defining variable "b"
console.log(`value of first variable is ${a} and second variable is ${b}`);
a = a * b; // to swap value of a with b
b = a / b; // to swap value of b with a 
a = a / b; // to swap value of b with a 
console.log(`After the swap, first variable is ${a} and second is ${b}`);
//Problem #4 Type Annotaion(Typescript)
let message : string; // Decclaring string variable
message = "Hello, TypeScript!";
console.log(message); // Output: Hello, TypeScript!
// Now let's try assigning a number to it
// message = 42; // This will cause a compile-time error

//Problem #5 Modulus Operator
let remainder = num1 % num2;
console.log("The remainder of", num1, "divided by", num2, "is", remainder);
// using modulus operator to find the remainder of two numbers

//Problem #6 Increment Challenge
let counter = 0; // Declaring a variable

// Method 1: Using the ++ increment operator
counter++;
console.log("After incrementing using ++ operator:", counter)
// Method 2: Using the += compound assignment operator
counter += 1;
console.log("After incrementing using += operator:", counter);
counter = counter + 1; // Incrementing the value by 1 
console.log("counter += 1:", counter);

//Problem #7 Logical Gates
let aa = true,
 bb = false,
 cc = true;

// AND gate: true if both operands are true, false otherwise
let andResult = aa && bb && cc;
console.log("AND gate result:", andResult); // Output: false

// OR gate: true if at least one operand is true, false otherwise
let orResult = aa || bb || cc;
console.log("OR gate result:", orResult); // Output: true

// NOT gate: negates the boolean value
let notResultA = !aa;
console.log("NOT gate result for 'aa':", notResultA); // Output: false

let notResultB = !bb;
console.log("NOT gate result for 'bb':", notResultB); // Output: true

let notResultC = !cc;
console.log("NOT gate result for 'cc':", notResultC); // Output: false

//Problem #8 Compound Assignment
let num = 10;  // Declaring the variable

// Using += to add a value to num
num += 5; // Equivalent to: num = num + 5
console.log("After += operation:", num); // Output: 15

// Using -= to subtract a value from num
num -= 3; // Equivalent to: num = num - 3
console.log("After -= operation:", num); // Output: 12

// Using *= to multiply num by a value
num *= 2; // Equivalent to: num = num * 2
console.log("After *= operation:", num); // Output: 24

// Using /= to divide num by a value
num /= 4; // Equivalent to: num = num / 4
console.log("After /= operation:", num); // Output: 6

//Problem #9 Even or Odd

let numx = 8; // You can assign any number to 'numx'

// Check if the number is even or odd
if (numx % 2 === 0) {
    console.log(numx + " is even.");
} 
else {
    console.log(numx + " is odd.");
}

//Problem #10 Voting eligibility
let age; 
let currentYear = 2024;
let yearBorn = 2000;
age = currentYear - yearBorn; // determining how old.
if(age >= 18){   
    console.log(`Yes. You're eligible to vote`) // Declaring eligible because 18 or older. 
}
else{
    console.log(`Sorry. you are not eligible to vote`) // Declaring ineligible because not 18 or older.
}
// Probelm #11 ssign a grade based on a numerical score
let score =85; // Assume the score is already assigned a numerical value

if (score >= 90) { // Greater than and equal too
  console.log("Grade: A"); 
} else if (score >= 80) {  // Greater than and equal too
  console.log("Grade: B");
} else if (score >= 70) {  // Greater than and equal too
  console.log("Grade: C");
} else if (score >= 60) { // Greater than and equal too
  console.log("Grade: D"); 
} else {
  console.log("Grade: F"); // Less than or equal too 59 is grade (F)
}
// Problem #12  Find the maximum of three numbers.
let x =30, y =20, z =10; // Assume the values of x, y, and z are already assigned

// Compare the numbers to find the maximum
if (x >= y && x >= z) {
  console.log("The largest number is x.");
} else if (y >= x && y >= z) {
  console.log("The largest number is y.");
} else {
  console.log("The largest number is z.");
}
