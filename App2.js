import {camelToSnake,removeDuplicateChars,countOccurrences,deepClone,reverseString,mergeArrays,calculateTotalMarks,capitalizeWords,addZeros,generatePattern,findSecondLargest,flattenArray,snakeToCamel,bubbleSort,findSecondMaxMin,customSortedArray,factorial,filterNumericPalindromes,removeMiddleElement,findMissingNumbers,countMaxPrefixSuffix,sumNumbersBetweenChars,addZerosAfterThreeValues,countRepeatedCharacters,flattenArray,findMaxNumber,removeDuplicateArrays,printNumbersWithDelay,removeDuplicates ,doubleArrayElements,findMaxAndMin,filterAndMapPeople,isPalindrome} from "./App.js";



// Question 01:-Input a = [2,3,4,5,3,3,5,2,5,3] and Output [4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 5, 5, 5 ,5, 2, 2]  
//description:- Analyze the given input and output, write a program accordingly

let a1 = [2, 3, 4, 5, 3, 3, 5, 2, 5, 3]
customSortedArray(a1);
console.log(customSortedArray(a1)); 

// Question 02:-Find a = [3,7,8,6,2,5] maximum and minimum ------------------

let a2 = [3, 7, 8, 6, 2, 5];
let result = findMaxAndMin(a2);
console.log("Maximum:", result.max);
console.log("Minimum:", result.min);

// Question 03: Given an array of objects representing people with their names and ages, use filter to get only the people who are 18 or older, and then use map to create an array of their names
// Description: - Filter the array of people to get only those who are 18 or older, and then map their names to create an array of names.

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 16 },
    { name: "Eve", age: 20 }
];

console.log(filterAndMapPeople(people));


// Question 04: Write a function that takes an array of numbers and returns a new array where each element is doubled using the map method.
// Description: - Use the map method to double each element of the array and return the new array.

const numbers = [1, 2, 3, 4, 5];
console.log(doubleArrayElements(numbers));


// Question 05: Write a program to print numbers 1-10 with a delay of 1 second between each number.
// Description: - Use setTimeout to print numbers with a delay.

printNumbersWithDelay();

// Question 06: Write a function to check if a given string is a palindrome.
// Description: - Compare the given string with its reverse to check if it's a palindrome.

const str1 = "racecar";
const str2 = "hello";

console.log(isPalindrome(str1)); // Output: true
console.log(isPalindrome(str2)); // Output: false



// Question 07: Write a function to remove duplicate elements from an array without using default functions.
// Description: - Iterate through the array and build a new array with unique elements.

const array1 = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(array1)); // Output: [1, 2, 3, 4, 5]

// Question 08: Write a function to find the maximum number in an array.
// Description: - Iterate through the array to find the maximum number.

const array2 = [5, 8, 2, 10, 3];
console.log(findMaxNumber(array2)); // Output: 10


// Question 09: Write a function to remove duplicate arrays from an array of arrays.
// Description: - Iterate through the array of arrays and filter out duplicate arrays.

const arrayOfArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [1, 2, 3],
    [7, 8, 9],
    [4, 5, 6]
];

console.log(removeDuplicateArrays(arrayOfArrays)); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]


// Question 10: Write a function to flatten a nested array.
// Description: - Use recursion to flatten each nested array element.

const nestedArray = [1, [2, [3, 4]], 5, [6, 7]];
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6, 7]

// Question 11: Write a function to count repeated characters in a string and print in a string format.
// Description: - Iterate through the string and count the occurrences of each character.

const str3 = "hello world";
console.log(countRepeatedCharacters(str3)); // Output: "l:3 o:2"




// Question 12: Write a program to add zeros after every 3 values in an array.
// Description: - Iterate through the array and add zeros after every 3rd value.

const array5 = [1, 2, 3, 4, 5, 6, 6, 7, 8];
console.log(addZerosAfterThreeValues(array5)); // Output: [1, 2, 3, 0, 4, 5, 6, 0, 6, 7, 8, 0]

// Question 13: Write a JavaScript code to extract numbers between two characters in a string and add them all.
// Description: - Use regular expressions to extract numbers between two characters and sum them up.

const str5 = "a1bb23c45d105$9";
console.log(sumNumbersBetweenChars(str5)); // Output: 183 (1 + 23 + 45 + 105 + 9)


// Question 14: Write a program to find the count of the maximum prefix and suffix that are the same in a given string.
// Description: - Iterate through the string and compare prefixes with suffixes to find the maximum count.

const str4 = "aabcdaabc";
console.log(countMaxPrefixSuffix(str4)); // Output: 4

// Question 15: Write a program to find the missing numbers in an array containing numbers from 1 to 100.
// Description: - Compare the array with a reference array containing numbers from 1 to 100 to find the missing numbers.

const array = [1, 2, 3, 5, 10, 15, 20, 25, 30]; // Example array with missing numbers
console.log(findMissingNumbers(array)); // Output: [4, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24, 26, 27, 28, 29, 31, ..., 100]


// Question 16: Write a program to remove the middle element from an array, or if the middle element is not there, remove every element except the first and last ones.
// Description: - Determine if the array has an odd or even number of elements, then remove the middle element or all elements except the first and last ones accordingly.

const array4 = [1, 2, 3, 4, 5];
const array6 = [1, 2, 3, 4];

console.log(removeMiddleElement(array4)); // Output: [1, 2, 4, 5] (middle element removed)
console.log(removeMiddleElement(array6)); // Output: [1, 4] (all elements except first and last removed)


// Question 17: Write a function to calculate the factorial of a number.
// Description: - Use recursion to calculate the factorial of the number.

const num = 5; // Example number

console.log(factorial(num)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)

// Question 18: Write a function for input: ["1a1", "2aa3a", 'aabc31", "101", "1001", "a1", "3211", "11c"] and output [101, 1001, 3211]  
// Define the input array
const input = ["1a1", "2aa3a", "aabc31", "101", "1001", "a1", "3211", "11c"];

// Filter numeric palindromes from the input array
const output = filterNumericPalindromes(input);

// Print the output array
console.log(output); // Output: [101, 1001, 3211]

// Define the input string
const input2 = 'hellllooowwworrlddd';


//Questions 19:
// Define the input string
const input7 = "pwwkew";

// Find the length of the longest substring without repeating characters
const results = lengthOfLongestSubstring(input7);

// Print the result
console.log(results); // Output: 3


//Questions 20 :
// Define the input array
const input5 = [1, 2, 3, 4, 5];

// Reverse the array without using built-in functions
const result7 = reverseArray(input5);

// Print the reversed array
console.log(result7); // Output: [5, 4, 3, 2, 1]


// Question 21:
// Count the occurrences of each unique character in the string
const result2 = countUniqueCharacters(input2);

// Print the count of each unique character
console.log(result2);

// {
//     h: 1,
//     e: 1,
//     l: 4,
//     o: 3,
//     w: 3,
//     r: 2,
//     d: 3
//   }

// Question 22:

// Define the original array
const a = [1, 2, 3, 4, 5, 6];

// Rearrange the array as per the given pattern
const result1 = rearrangeArray(a);

// Print the rearranged array
console.log(result1); // Output: [6, 1, 5, 2, 4, 3]


// Question 23: Write a function to find the second maximum and minimum numbers in an array.
// Description: - Sort the array and select the second element from the start for the second minimum and the second element from the end for the second maximum.

const array3 = [5, 2, 9, 1, 6, 4, 8]; // Example array
const { secondMin, secondMax } = findSecondMaxMin(array3);
console.log("Second Minimum:", secondMin); // Output: 2
console.log("Second Maximum:", secondMax); // Output: 8


// Question 24: Write a function to sort an array without using built-in methods.
// Description: - Implement the Bubble Sort algorithm to sort the array.

const array7 = [5, 2, 9, 1, 6, 4, 8]; // Example array
console.log(bubbleSort(array7)); // Output: [1, 2, 4, 5, 6, 8, 9]


// Question 25: Write a function to remove duplicate characters in a string.
// Description: - Iterate through the characters of the string and keep track of the characters encountered so far.

const str6 = "HelloWorld"; // Example string
console.log(removeDuplicateChars(str6)); // Output: "HeloWrd"0

// Question 26: Write a function to convert a string from snake_case to camelCase.
// Description: - Split the string by underscores, capitalize the first letter of each word after the first one, and then join the words together.

const snakeCaseStr = "hello_world"; // Example snake_case string
console.log(snakeToCamel(snakeCaseStr)); // Output: "helloWorld"



// Question 27: Write a function to flatten a nested array.
// Description: - Use recursion to iterate through each element of the array and flatten it.

const nestedArray1 = [1, [2, [3, 4], 5], 6, [7, 8]]; // Example nested array
console.log(flattenArray(nestedArray1)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]


// Question 29: Write a function to find the second largest number in a nested array.


// Description: - Recursively flatten the array and then find the second largest number from the flattened array.

const nestedArray3 = [[1, 2], [3, 4, [5, 6]], [7, [8, 9]]];
console.log(findSecondLargest(nestedArray3)); // Output: 8


// Question 30: Write a function to generate the specified pattern.
// 1
// 	2 9
// 	3 8 10
// 	4 7 11 14
// 	5 6 12 13 15
// Description: - Generate the pattern according to the given structure.

const n = 5; // Number of rows
console.log(generatePattern(n))

// Question 31: Write a function to add zeros after every 3 values in an array.
// Description: - Iterate through the array and insert zeros after every third element.

const array8 = [1, 2, 3, 4, 5, 6, 6, 7, 8]; // Example array
console.log(addZeros(array8)); // Output: [1, 2, 3, 0, 4, 5, 6, 0, 6, 7, 8]



// Question 32: Write a function to capitalize the first letter of each word in an array of strings.
// Description: - Iterate through each word in the array and capitalize the first letter of each word.

const words = ['abc', 'def', 'ghi']; // Example array of strings
console.log(capitalizeWords(words)); // Output: ['Abc', 'Def', 'Ghi']

// Question 33: Write a function to calculate the sum of total marks in an array of objects.
// Description: - Iterate through each object in the array and sum up the 'marks' property.

const marksArray = [
    { sub: 'Maths', marks: 60 },
    { sub: 'Science', marks: 70 },
    { sub: 'English', marks: 90 }
]; // Example array of objects

console.log(calculateTotalMarks(marksArray)); // Output: 220 (60 + 70 + 90)

// Question 34: Write a function to merge two arrays with extra zeros.
// Description: - Iterate over the arrays simultaneously, insert 0 in the output array if the element in 'a' does not exist in 'b'.

const a3 = [1, 2, 3, 4, 5];
const b = [5, 3, 7, 8, 9];
console.log(mergeArrays(a3, b)); // Output: [1, 2, 3, 0, 4, 5, 0, 6, 7, 8, 0]


// Question 35: Write a function to reverse a string without using built-in methods.
// Description: - Iterate through the string from end to start and append each character to a new string.

const str = "hello"; // Example string
console.log(reverseString(str)); // Output: "olleh"



// Question 36: Write a deep clone function to create a copy of a nested object or array without any reference to the original.
// Description: - Use recursion to handle nested objects and arrays.

const original = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'traveling'],
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const cloned = deepClone(original);
console.log(cloned);


// Question 37: Write a function to find how many times each element is repeated in an array.
// Description: - Iterate through the array and keep track of the count of each element using an object.

const array10 = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3];
console.log(countOccurrences(array10)); // Output: { '1': 3, '2': 3, '3': 3, '4': 2 }


// Question 38: Write a function to convert a string from camelCase to snake_case.
// Description: - Iterate through each character of the string, detect uppercase letters, and insert an underscore before them. Then, convert the string to lowercase.

const camelCaseStr = "helloWorld"; // Example camelCase string
console.log(camelToSnake(camelCaseStr)); // Output: "hello_world"
