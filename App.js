
// Question 01:-Input a = [2,3,4,5,3,3,5,2,5,3] and Output [3,3,3,3,5,5,5,2,2,]  

// Description: - The customSortedArray function takes an array input from an outer file and returns a sorted array.
export function customSortedArray(arr) {
    // Step 1: Count occurrences of each number
    const countMap = {};
    for (const num of arr) {
        countMap[num] = (countMap[num] || 0) + 1;
    }

    // Custom sorting algorithm
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            
            // Step 2: Define variables for current and next elements
            const a = arr[j], b = arr[j + 1];
            
            // Step 3: Get the count of occurrences for current and next elements
            const aCount = countMap[a], bCount = countMap[b];

            // Step 4: Compare counts of occurrences
            if (aCount !== bCount) {
               
                // Step 5: If counts are different, sort by count in descending order
                // If counts are equal, sort by value in descending order
                if (bCount > aCount || (bCount === aCount && b > a)) {
                    // Step 6: Swap elements if necessary to achieve the desired order
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            } else {
                
                // Step 7: If counts are equal, sort by value in descending order
                if (b > a) {
                    // Step 8: Swap elements if necessary to achieve the desired order
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
    }

    // Step 9: Return the sorted array
    return arr;
}

// Question02 Find a = [3,7,8,6,2,5] maximum and minimum ------------------
export function findMaxAndMin(arr) {
    if (arr.length === 0) {
        return { max: undefined, min: undefined };
    }
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return { max: max, min: min };
}

// Question 03: Given an array of objects representing people with their names and ages, use filter to get only the people who are 18 or older, and then use map to create an array of their names
// Description: - Filter the array of people to get only those who are 18 or older, and then map their names to create an array of names.

export function filterAndMapPeople(people) {
    // Step 1: Use filter to get only the people who are 18 or older
    const adults = people.filter(person => person.age >= 18);
    
    // Step 2: Use map to create an array of their names
    const adultNames = adults.map(person => person.name);
    
    // Step 3: Return the array of names
    return adultNames;
}

// Question 04: Write a function that takes an array of numbers and returns a new array where each element is doubled using the map method.
// Description: - Use the map method to double each element of the array and return the new array.

export function doubleArrayElements(arr) {
    // Step 1: Use the map method to double each element of the array
    const doubledArray = arr.map(num => num * 2);
    
    // Step 2: Return the new array with doubled elements
    return doubledArray;
}

// Question 05: Write a program to print numbers 1-10 with a delay of 1 second between each number.
// Description: - Use setTimeout to print numbers with a delay.

export function printNumbersWithDelay() {
    let count = 1;
    const interval = setInterval(() => {
        console.log(count);
        count++;
        if (count > 10) {
            clearInterval(interval);
        }
    }, 1000);
}

// Question 06: Write a function to check if a given string is a palindrome.
// Description: - Compare the given string with its reverse to check if it's a palindrome.

export function isPalindrome(str) {
    // Step 1: Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Step 2: Check if the clean string is equal to its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Question 07: Write a function to remove duplicate elements from an array without using default functions.
// Description: - Iterate through the array and build a new array with unique elements.

export function removeDuplicates(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

// Question 08: Write a function to find the maximum number in an array.
// Description: - Iterate through the array to find the maximum number.

export function findMaxNumber(arr) {
    if (arr.length === 0) {
        return null; // Return null for an empty array
    }

    let max = arr[0]; // Assume the first element as maximum
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

// Question 09: Write a function to remove duplicate arrays from an array of arrays.
// Description: - Iterate through the array of arrays and filter out duplicate arrays.

export function removeDuplicateArrays(arrays) {
    const uniqueArrays = [];
    const seenArrays = new Set();

    for (const array of arrays) {
        const arrayString = JSON.stringify(array);
        if (!seenArrays.has(arrayString)) {
            uniqueArrays.push(array);
            seenArrays.add(arrayString);
        }
    }

    return uniqueArrays;
}

// Question 10: Write a function to flatten a nested array.
// Description: - Use recursion to flatten each nested array element.

export function flattenArray(nestedArray) {
    const flattenedArray = [];

    for (const element of nestedArray) {
        if (Array.isArray(element)) {
            flattenedArray.push(...flattenArray(element));
        } else {
            flattenedArray.push(element);
        }
    }

    return flattenedArray;
}

// Question 11: Write a function to count repeated characters in a string and print in a string format.
// Description: - Iterate through the string and count the occurrences of each character.

export function countRepeatedCharacters(str) {
    const charCount = {};
    
    // Step 1: Count occurrences of each character
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Step 2: Create a string format of repeated characters and their counts
    let repeatedCharactersString = '';
    for (const char in charCount) {
        if (charCount[char] > 1) {
            repeatedCharactersString += `${char}:${charCount[char]} `;
        }
    }
    
    return repeatedCharactersString.trim();
}

// Question 12: Write a program to add zeros after every 3 values in an array.
// Description: - Iterate through the array and add zeros after every 3rd value.

export function addZerosAfterThreeValues(arr) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
        if ((i + 1) % 3 === 0 && i !== arr.length - 1) {
            newArr.push(0);
        }
    }

    return newArr;
}


// Question 13: Write a JavaScript code to extract numbers between two characters in a string and add them all.
// Description: - Use regular expressions to extract numbers between two characters and sum them up.

export function sumNumbersBetweenChars(str) {
    const regex = /(\d+)(?=[a-z])/g; // Regular expression to match numbers between two characters
    const matches = str.match(regex); // Extract numbers from the string

    let sum = 0;
    if (matches) {
        for (const match of matches) {
            sum += parseInt(match);
        }
    }

    return sum;
}

// Question 14: Write a program to find the count of the maximum prefix and suffix that are the same in a given string.
// Description: - Iterate through the string and compare prefixes with suffixes to find the maximum count.

export function countMaxPrefixSuffix(str) {
    let maxCount = 0;

    // Iterate through the string to find the maximum count
    for (let i = 0; i < str.length; i++) {
        const prefix = str.substring(0, i + 1);
        const suffix = str.substring(str.length - (i + 1));

        if (prefix === suffix) {
            maxCount = i + 1;
        }
    }

    return maxCount;
}

// Question 15: Write a program to find the missing numbers in an array containing numbers from 1 to 100.
// Description: - Compare the array with a reference array containing numbers from 1 to 100 to find the missing numbers.

export function findMissingNumbers(arr) {
    const referenceArray = Array.from({ length: 100 }, (_, i) => i + 1); // Reference array containing numbers from 1 to 100
    const missingNumbers = [];

    for (let i = 0; i < referenceArray.length; i++) {
        if (!arr.includes(referenceArray[i])) {
            missingNumbers.push(referenceArray[i]);
        }
    }

    return missingNumbers;
}

// Question 16: Write a program to remove the middle element from an array, or if the middle element is not there, remove every element except the first and last ones.
// Description: - Determine if the array has an odd or even number of elements, then remove the middle element or all elements except the first and last ones accordingly.

export function removeMiddleElement(arr) {
    const n = arr.length;

    if (n % 2 === 1) { // Odd number of elements
        const middleIndex = Math.floor(n / 2);
        arr.splice(middleIndex, 1); // Remove the middle element
    } else { // Even number of elements
        arr.splice(1, n - 2); // Remove all elements except the first and last ones
    }

    return arr;
}

// Question 17: Write a function to calculate the factorial of a number.
// Description: - Use recursion to calculate the factorial of the number.

export function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Factorial of 0 and 1 is 1
    } else {
        return n * factorial(n - 1); // Recursive call to calculate factorial
    }
}

// Question 18: Write a function for input: ["1a1", "2aa3a", 'aabc31", "101", "1001", "a1", "3211", "11c"] and output [101, 1001, 3211]  
// Define a function to filter numeric palindromes from an array of strings
export function filterNumericPalindromes(arr) {
    // Helper function to check if a number is a palindrome
    const isPalindrome = (num) => {
        const str = num.toString();
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    };

    // Filter numeric palindromes from the array
    const result = arr.filter(item => !isNaN(item) && isPalindrome(parseInt(item)));

}

// Question 19
// Define a function to find the length of the longest substring without repeating characters
export function lengthOfLongestSubstring(s) {
    const n = s.length;
    const charMap = {}; // Map to store the index of each character
    let maxLength = 0;
    let start = 0;

    // Iterate through the string with a sliding window
    for (let end = 0; end < n; end++) {
        const char = s[end];

        if (charMap[char] !== undefined) {
            // If the character is repeated, move the start of the window to the right of the previous occurrence
            start = Math.max(start, charMap[char] + 1);
        }

        // Update the index of the current character
        charMap[char] = end;

        // Update the maximum length of the substring without repeating characters
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Question 20
// Define a function to reverse an array without using built-in functions
export function reverseArray(arr) {
    const n = arr.length;
    const mid = Math.floor(n / 2);

    for (let i = 0; i < mid; i++) {
        // Swap elements from the start with elements from the end
        const temp = arr[i];
        arr[i] = arr[n - i - 1];
        arr[n - i - 1] = temp;
    }

    return arr;
}

// Question 21
// Define a function to count the occurrences of each unique character in the string
export function countUniqueCharacters(str) {
    const countMap = {}; // Object to store the count of each character

    // Iterate through the string and count occurrences of each character
    for (const char of str) {
        countMap[char] = (countMap[char] || 0) + 1;
    }

    return countMap;
}

// Question 22

// Define a function to rearrange the array as per the given pattern
export function rearrangeArray(a) {
    const n = a.length;
    const result = [];

    // Iterate from the end of the array
    for (let i = n - 1, j = 0; i >= 0; i--, j++) {
        // Add elements alternatively from the end and beginning of the original array
        if (j % 2 === 0) {
            result.push(a[i]);
        } else {
            result.push(a[j]);
        }
    }

    return result;
}

// Question 23:
export function findSecondMaxMin(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Second minimum is the second element from the start
    const secondMin = arr[1];

    // Second maximum is the second element from the end
    const secondMax = arr[arr.length - 2];

    return { secondMin, secondMax };
}

// Question 24: Write a function to sort an array without using built-in methods.
// Description: - Implement the Bubble Sort algorithm to sort the array.

export function bubbleSort(arr) {
    const n = arr.length;

    // Iterate through the array
    for (let i = 0; i < n - 1; i++) {
        // Last i elements are already in place, so we don't need to check them
        for (let j = 0; j < n - i - 1; j++) {
            // Swap if the element found is greater than the next element
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

// Question 25: Write a function to remove duplicate characters in a string.
// Description: - Iterate through the characters of the string and keep track of the characters encountered so far.

export function removeDuplicateChars(str) {
    let uniqueChars = '';

    // Iterate through the characters of the string
    for (let char of str) {
        // Add the character to the result string if it's not already present
        if (!uniqueChars.includes(char)) {
            uniqueChars += char;
        }
    }

    return uniqueChars;
}


// Question 26: Write a function to convert a string from snake_case to camelCase.
// Description: - Split the string by underscores, capitalize the first letter of each word after the first one, and then join the words together.

export function snakeToCamel(str) {
    const words = str.split('_');
    const camelCase = words.map((word, index) => {
        if (index === 0) {
            return word;
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    }).join('');
    
    return camelCase;
}

// Question 27: Write a function to flatten a nested array.
// Description: - Use recursion to iterate through each element of the array and flatten it.

export function flattenArray(arr) {
    let flattenedArray = [];

    arr.forEach(element => {
        if (Array.isArray(element)) {
            flattenedArray = flattenedArray.concat(flattenArray(element));
        } else {
            flattenedArray.push(element);
        }
    });

    return flattenedArray;
}

// Question 29: Write a function to find the second largest number in a nested array.
// Description: - Recursively flatten the array and then find the second largest number from the flattened array.

export function findSecondLargest(arr) {
    // Flatten the nested array
    const flattenedArray = arr.flat(Infinity);

    // Sort the flattened array in descending order
    const sortedArray = flattenedArray.sort((a, b) => b - a);

    let secondLargest = null;
    // Find the second largest number in the sorted array
    for (let i = 1; i < sortedArray.length; i++) {
        if (sortedArray[i] !== sortedArray[i - 1]) {
            secondLargest = sortedArray[i];
            break;
        }
    }

    return secondLargest;
}

// Question 30: Write a function to generate the specified pattern.
// Description: - Generate the pattern according to the given structure.

export function generatePattern(n) {
    // Initialize the pattern array
    const pattern = Array.from({ length: n }, () => []);

    let num = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            if (i % 2 === 0) {
                pattern[j][i - j] = num++;
            } else {
                pattern[i - j][j] = num++;
            }
        }
    }

    // Flatten the pattern array and join each row with a space
    const formattedPattern = pattern.map(row => row.join(' ')).join('\n');
    return formattedPattern;
}

// Question 31: Write a function to add zeros after every 3 values in an array.
// Description: - Iterate through the array and insert zeros after every third element.

export function addZeros(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i]);
        if ((i + 1) % 3 === 0 && i !== array.length - 1) {
            result.push(0);
        }
    }
    return result;
}

// Question 32: Write a function to capitalize the first letter of each word in an array of strings.
// Description: - Iterate through each word in the array and capitalize the first letter of each word.

export function capitalizeWords(array) {
    return array.map(word => word.charAt(0).toUpperCase() + word.slice(1));
}

// Question 33: Write a function to calculate the sum of total marks in an array of objects.
// Description: - Iterate through each object in the array and sum up the 'marks' property.

export function calculateTotalMarks(marksArray) {
    let totalMarks = 0;

    marksArray.forEach(obj => {
        totalMarks += obj.marks;
    });

    return totalMarks;
}


// Question 34: arrays, let a = [1,2,3,4,5] let b = [5,3,7,8,9]
	// Output: [1, 2,3,0,4,5,6,0,6,7,8,0]Write a function to merge two arrays with extra zeros.
// Description: - Iterate over the arrays simultaneously, insert 0 in the output array if the element in 'a' does not exist in 'b'.

export function mergeArrays(a, b) {
    const output = [];
    let indexB = 0;

    for (let i = 0; i < a.length; i++) {
        output.push(a[i]);

        if (a[i] !== b[indexB]) {
            output.push(0);
        } else {
            indexB++;
        }
    }

    return output;
}

// Question 35: Write a function to reverse a string without using built-in methods.
// Description: - Iterate through the string from end to start and append each character to a new string.

export function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Question 36: Write a deep clone function to create a copy of a nested object or array without any reference to the original.
// Description: - Use recursion to handle nested objects and arrays.

export function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) {
        // If obj is not an object or is null, return it as is
        return obj;
    }

    // Create an empty object or array to hold the cloned data
    const cloned = Array.isArray(obj) ? [] : {};

    // Recursively clone each property or element
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }

    return cloned;
}

// Question 37: Write a function to find how many times each element is repeated in an array.
// Description: - Iterate through the array and keep track of the count of each element using an object.

export function countOccurrences(array) {
    const occurrences = {};

    // Iterate through the array and count occurrences of each element
    array.forEach(element => {
        if (occurrences[element]) {
            occurrences[element]++;
        } else {
            occurrences[element] = 1;
        }
    });

    return occurrences;
}

// Question 38: Write a function to convert a string from camelCase to snake_case.
// Description: - Iterate through each character of the string, detect uppercase letters, and insert an underscore before them. Then, convert the string to lowercase.

export function camelToSnake(str) {
    let snakeCase = '';

    // Iterate through each character of the string
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        // Insert an underscore before uppercase letters
        if (char === char.toUpperCase() && i !== 0) {
            snakeCase += '_';
        }
        
        // Convert the character to lowercase and add it to the result string
        snakeCase += char.toLowerCase();
    }

    return snakeCase;
}

