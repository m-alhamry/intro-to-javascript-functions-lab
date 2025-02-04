/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
        return x;
    } else {
        return y;
    }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

function isAdult(age) {
    if (typeof (age) !== 'number' || isNaN(age) || age < 0) {
        return 'Invalid input: Please provide a valid non-negative number.';
    }
    return age >= 18 ? "Adult" : "Minor";
}

console.log('Exercise 2 Result:', isAdult(17.9));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

function isCharAVowel(char) {
    if (typeof char !== 'string' || char.length !== 1) {
        return 'Invalid input: Please provide a single character.';
    }
    const vowels = "aeiouAEIOU";
    return vowels.includes(char);
}

console.log('Exercise 3 Result:', isCharAVowel("ae"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

function generateEmail(name, domain) {
    const nameValidChars = /^[a-zA-Z0-9._%+-]+$/;
    const domainValidChars = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    //Test if the name contains invalid characters
    if (!nameValidChars.test(name)) {
        return 'Invalid input: The name part of the email contains invalid characters.';
    }

    //Test if the domain is invalid
    if (!domainValidChars.test(domain)) {
        return 'Invalid input: The domain part of the email is invalid.';
    }

    return `${name}@${domain}`;
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

function greetUser(name, timeOfDay) {
    const times = ['morning', 'afternoon', 'evening'];
    name = name.trim();

    if (typeof name !== 'string') {
        return 'Invalid input: Please provide a valid name.';
    }

    if (!times.includes(timeOfDay)) {
        return 'Invalid input: Time of day must be "morning", "afternoon", or "evening".';
    }

    return `Good ${timeOfDay}, ${name}!`;
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree(num1, num2, num3) {
    //Do validation here, insure all three inputs are valid number

    return Math.max(num1, num2, num3);
}

console.log('Exercise 6 Result:', maxOfThree(15, 20, 81));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

function calculateTip(billAmount, tipPercentage) {
    //Do validation here, insure the two inputs are valid
    return (billAmount * tipPercentage) / 100;
}

console.log('Exercise 7 Result:', calculateTip(50, 20));

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

function convertTemperature(temp, scale) {
    //Do validation here, insure the two inputs are valid

    if (scale === 'C') {
        // Convert Celsius to Fahrenheit
        return (temp * 9/5) + 32;
    } else if (scale === 'F') {
        // Convert Fahrenheit to Celsius
        return (temp - 32) * 5/9;
    } else {
        return "Please provide a valid scale ('C' for Celsius or 'F' for Fahrenheit).";
    }
}

console.log('Exercise 8 Result:', convertTemperature(32, "K"));

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

function basicCalculator(num1, num2, operation) {
    //Do validation here, insure the two inputs are valid

    if(operation === 'add') {
        return num1 + num2;
    } else if(operation === 'subtract') {
        return num1 - num2;
    }  else if(operation === 'multiply') {
        return num1 * num2;
    }  else if(operation === 'divide') {
        if (num2 === 0) {
            return 'Invalid input: Cannot divide by zero.';
        }
        return num1 / num2;
    } else {
        return "Invalid input: Please provide a valid operation ('add', 'subtract', 'multiply', or 'divide).";
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

// ################# Level Up exercises #################

/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

function calculateGrade(score) {
    // validate the score here. score must be a number, and score must be >= 0 and <= 100.
    
    if(score >= 90) {
        return 'A';
    } else if(score >= 80) {
        return 'B';
    } else if(score >= 70) {
        return 'C';
    } else if(score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log('Exercise 10 Result:', calculateGrade(79));
