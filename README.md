# JavaScript Beginner's Guide

![JS image](Screenshot_20250120-055547_1.png)

## Introduction

Welcome to this extensive guide built for the aspiring JavaScript beginner. It is an endeavor to put forth a very clear and precise primer on JavaScript. This would be needed by beginners who could be familiar with either HTML5 and CSS or complete beginners in the development of web pages.

## What is JavaScript?
JavaScript is a versatile programming language. This makes it one of the most popular and it greatly helps deliver dynamic applications to the web and interactive web pages. The major application of it is to add client-side functionality to web pages, which can range from simple animations and pop-ups to complex data-driven applications and real-time updates.

## Why Learn JavaScript?
JavaScript is an important skill for any beginner developer. Its advantages include:

- Increased interactivity of the web page
- Dynamic User Experiences
- Real-time Data Updates
- Cross-platform
- Large Community Support and Resources

## Getting Started
This guide will take you through the basics of JavaScript; it goes into the essential areas of variables, data types, functions, loops, and so much more. It also goes over popular frameworks and libraries to develop robust and efficient web applications.

## Prerequisites
Although prior knowledge of HTML5 and CSS is helpful, it's by no means required. Therefore, is this designed to be friendly to the beginner who may have experience in a number of different areas and otherwise. 

## Let's Get Started!
Welcome to the world of JavaScript where you'll learn how to create dynamic, interactive web experiences. I hope this guide will be well on your way to becoming proficient in JavaScript.

## Printing to the Console

![the console on chrome browser](the-console-panel-next-t-9c932aff8f795.png)

This means to display output of one's code on a specific interface called the console. 

### What is the console?
The console is like a message board where your computer can display messages. In the context of JavaScript, the console is where you can see the results of your code. You can access the console on any IDE such as VS Code or simple using your browser by right clicking and selecting *inspect*. Head over to console. This can be done on any web page but for practice always use a new tab or an empty HTML file. 

### What is console.log()?
`console.log()` is a special command in JavaScript that allows developers to send messages to the console. Think of it like sending a note to the message board.

### How do you use console.log()?
To use `console.log()`, you simply type it into your code, followed by the message you want to send to the console. If the message consists of words always embed them in quotes if they are numbers, no need, if arithmetic expressions, no need also but if both words and numbers then we use what is called *String Concatenation*. It will be explained better, much later. 

Some examples:
```
console.log("Hello, World!");

console.log(5);

console.log(1+3);
```

When you run these code snippets, the messages will be:

Hello, World!
5
4

These will appear in the console.

Id you noticed, every line or console.log ended with a semicolon ---> `;`. So everytime you use a `console.log` , end it with a semicolon. 

### Why is console.log() useful?
`console.log()` is useful because it allows you to see what's happening in your code. You can use it to:

- Test whether your code is working correctly
- Display messages to the user
- Debug your code (find and fix errors)
_________

### Giveaway Exercises

1. Print your name to the console
2. Display the sum of your age and your favorite number
3. To the console result the difference between this year and your year of birth
4. Display to the console the title of your favorite movie
5. Print the quotient of 15 and 3 to the console  

## Numbers and Math in JavaScript

Let's focus on numbers now and later we talk about letters, words and statements. JavaScript provides various ways to work with numbers and perform mathematical operations. Let's head on to knowing the types of numbers in JavaScript. 

### Number Types
JavaScript has two main number types. Don't get confused, it's the same as in Mathematics. We have *whole numbers* and *fractions* or specifically let's stick to *decimals* or *decimal numbers*. That said:

1. *Integers*: Whole numbers, either positive, negative, or zero (e.g., `1`, `-5`, `0`).
2. *Floating-Point Numbers*: Decimal numbers (e.g., `3.14`, `-0.5`).

### Mathematical Operations
JavaScript supports basic arithmetic operations:

*Addition (+)*
```
console.log(5 + 3);  // sum = 8
```

*Subtraction (-)*
```
console.log(10 - 4);  // difference = 6
```

*Multiplication* (*)
```
console.log(7 * 2) ;  // product = 14
```

*Division (/)*
```
console.log(9 / 3) ;  // quotient = 3
```

*Modulus (%)*
```
console.log(17 % 5);  // remainder = 2
```

*Exponentiation* (**)
```
console.log(2 ** 3);  // result = 8
```

Modulus: display ls remainder

Exponent: displays the result of the first number with an index of the second

### Order of Operations
JavaScript follows the standard order of operations (PEMDAS):

1. *P*arentheses: Evaluate expressions inside parentheses first.
2. *E*xponents: Evaluate any exponential expressions next.
3. *M*ultiplication and *D*ivision: Evaluate multiplication and division operations from left to right.
4. *A*ddition and *S*ubtraction: Finally, evaluate any addition and subtraction operations from left to right.

Example
```
console.log(2 + 3 * 4 ** 2 - 10 / 2);
```

To evaluate this expression, follow the order of operations:

1. Exponents: `4 ** 2 = 16`
2. Multiplication: `3 * 16 = 48`
3. Addition: `2 + 48 = 50`
4. Division: `10 / 2 = 5`
5. Subtraction: `50 - 5 = 45`

Therefore, `result` equals `45`.

## Variables in JavaScript

Variables are containers or boxes that store values. Think of them as a place with space which can be empty or not or simply can hold values of any kind if defined rightly. In JavaScript, you can declare variables using the `let`, `const`, or `var` keywords.

### Defining Variables
Declaring variables is the first step of creating/defining a variable by writing the keyword followed by the variable name.

Then assigning/initializing the variable is the next step. However, when defining a variable to be empty for whatever purpose, it's not assigned to any value. 
Let's examine the keywords used to declare or create variables in JavaScript. 

*let*
`let` is used to declare variables that can be reassigned.

```
let name = 'John Doe';
console.log(name); // Output: John Doe
name = 'Jane Doe';
console.log(name); // Output: Jane Doe
```

*const*
`const` is used to declare variables that cannot be reassigned.

```
const PI = 3.14;
console.log(PI); // Output: 3.14
PI = 2.71; // Error: Assignment to constant variable.
```

*var*
`var` is used to declare variables that can be reassigned. However, `var` has function scope, whereas `let` and `const` have block scope.

```
var name = 'John Doe';
console.log(name); // Output: John Doe
name = 'Jane Doe';
console.log(name); // Output: Jane Doe
```

### Variable Naming Rules
1. Variable names can contain letters (a-z, A-Z), numbers (0-9), and underscores (_), for example: person1, is_user_online, isAvailable.
2. Variable names cannot start with numbers that is `1num` will be invalid, instead use `num1`
3. Variable names cannot contain special characters (!, @, #, $, etc.) except for underscores (_).
4. Variable names are case-sensitive meaning `name` will be different from `Name`. 

Naming variables in JavaScript can be:
- Camel case: making ever initial letter capitalized. E.g `isUserOnline`
- Snake case: using underscore to join words. E.g is_user_online. 

### Variable Scope
- *Global Scope*: Variables declared outside of any function or block have global scope.
- *Function Scope*: Variables declared within a function have function scope.
- *Block Scope*: Variables declared within a block (e.g., `if`, `for`, `while`) have block scope.

### Variable Hoisting
JavaScript "hoists" variable declarations to the top of their scope. This means that variables are moved to the top of their scope, regardless of where they are actually declared.

```
console.log(name); // Output: undefined
var name = 'John Doe';
```

In this example, the `name` variable is hoisted to the top of its scope, so `console.log(name)` outputs `undefined` instead of throwing an error.

Conclusively, variables are a fundamental concept in JavaScript, and understanding how to declare, scope, and hoist them is crucial for writing effective code. By following the rules and best practices outlined in this explanation, you'll be well on your way to becoming a proficient JavaScript developer.

<font color="red">More on Scope and Hoisting later</font>

## Data Types in JavaScript

In JavaScript, a data type is a classification of data based on its format, size, and set of values it can hold. Think of it as a tree that can only be defined by its fruits. This is because JavaScript is a dynamically-typed language, which means that the data type of a variable is determined by its value, not by its declaration.

### Dynamic Typing
In JavaScript, you don't need to declare the data type of a variable before using it. Instead, the data type is determined by the value assigned to the variable. This is known as <font color="green">dynamic typing</font>.

```
let name = 'John Doe'; // string
console.log(typeof name); // Output: string

name = 25; // number
console.log(typeof name); // Output: number

name = true; // boolean
console.log(typeof name); // Output: boolean
```

As you can see, the data type of the `name` variable changes based on the value assigned to it.

### Primitive Data Types
JavaScript has five primitive data types:

1. *Number*: Represents a numerical value, e.g., `42` or `3.14`.
2. *String*: Represents a sequence of characters, e.g., `'hello'` or `"hello"`.
3. *Boolean*: Represents a logical value, e.g., `true` or `false`.
4. *Null*: Represents the absence of any object value, e.g., `null`.
5. *Undefined*: Represents an uninitialized or non-existent variable, e.g., `undefined`.

### Complex Data Types
In addition to primitive data types, JavaScript also has complex data types:

1. *Object*: Represents a collection of key-value pairs, e.g., `{ name: 'John Doe', age: 25 }`.
2. *Array*: Represents a collection of values, e.g., `[1, 2, 3]`.
3. *Function*: Represents a block of code that can be executed, e.g., `function greet() { console.log('Hello!'); }`.

### Type Checking
To check the data type of a variable in JavaScript, you can use the `typeof` operator.

```
let name = 'John Doe';
console.log(typeof name); // Output: string

let age = 25;
console.log(typeof age); // Output: number

let isAdmin = true;
console.log(typeof isAdmin); // Output: boolean
```

Understanding the different data types in JavaScript is essential for writing effective and efficient code. 

## Booleans and Conditional Statements in JavaScript

### Booleans
Booleans are a data type in programming that can have one of two values: `true` or `false`. They are commonly used to represent a condition or a decision that is tell if something is true or false, or permit an action as long as some condition is true or false.

#### Boolean Literals
Boolean literals are the actual values `true` and `false`. They are case-sensitive, so `True` and `False` are not valid boolean literals.

```
let isAdmin = true; // Valid
let isGuest = false; // Valid
let isRunning = True; // Invalid
let is Gone = False; // Invalid
```

#### Boolean Expressions
Boolean expressions are statements that evaluate to a boolean value. That is, any expression that outputs instead of an arithmetic result a boolean result. Usually using comparison and comparison operators. They can be used to make decisions in your code.

```
let age = 25;
let isAdult = age >= 18; // evaluates to true
```

## Conditional Statements
Conditional statements are used to execute different blocks of code based on conditions or decisions. There are several types of conditional statements in JavaScript.

#### If Statement
The `if` statement is used to execute a block of code if a condition is true.

```
let age = 25;
if (age >= 18) {
  console.log("You are an adult.");
}
```

#### If-Else Statement
The `if-else` statement is used to execute one block of code if a condition is true and another block of code if the condition is false.

```
let age = 25;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

#### If-Else-If Statement
The `if-else-if` statement is used to check multiple conditions and execute different blocks of code based on those conditions.

```
let age = 25;
if (age >= 18) {
  console.log("You are an adult.");
} else if (age >= 13) {
  console.log("You are a teenager.");
} else {
  console.log("You are a child.");
}
```

#### Switch Statement
The `switch` statement is used to execute different blocks of code based on the value of a variable or expression. Like saying we're considering what's in the variable *day*. In case - "Monday" do this, in case - "Tuesday", do that and so on. 

```
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Today is Monday.");
    break;
  case "Tuesday":
    console.log("Today is Tuesday.");
    break;
  default:
    console.log("Today is not Monday or Tuesday.");
}
```

#### %Ternary Operator
The ternary operator is a shorthand way of writing an `if-else` statement. It consists of three parts: the condition, the value if the condition is true, and the value if the condition is false.

```
let age = 25;
let status = age >= 18 ? "adult" : "minor";
console.log(status); // Output: adult
```

By mastering these concepts, you can write more efficient, effective, and decision-driven code.



