// 1. Set the variable `givenName` to the string "Addison".
let givenName = "Addison";

// 2. Set the variable candies equal to 20, the variable people to 6, and the variable leftover equal
// to the remainder of dividing 20 by 6.
let candies = 20;
let people = 6;
let leftover = candies % people;

// 3. Create a function called greeting that returns "Hello, <name>!",
// where <name> is the name given as an argument to the function.
function greeting(name) {
	let myGreeting = `Hello, ${name}!`;
    return myGreeting;
}

// 4. Create a function called isOdd that, given a number, will
// return true if it is odd and false if it is not. An odd number is a
// number which, when divided by 2, has a remainder of 1 or -1.
function isOdd(number) {
    let remainder = number % 2;

    if (remainder === 1 || remainder === -1) {
        return true;
    }

    return false;
}

// 5. Create a function called isEven that, given a number, will
// return true if it is even and false if it is not. An even number is a
// number which, when divided by 2, has a remainder of 0.
function isEven(number) {
	return (number % 2 === 0 ? true : false);
}

// 6. Create a function called fahrenheitToCelsius that takes a
// Fahrenheit temperature as an argument and returns the
// temperature in Celsius.
function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * (5/9);
	return celsius;
}

// 6. Create a function called celsiusToFahrenheit that takes a
// Celsius temperature as an argument and returns the
// temperature in Fahrenheit.
function celsiusToFahrenheit(celsius) {
    let fahrenheit =  (celsius * (9/5) + 32);
	return fahrenheit;
}

// 7. Create a function called fahrenheitToKelvin that takes a
// Fahrenheit temperature as an argument and returns the
// temperature in Kelvin. This function must use your previous
// fahrenheitToCelsius function.
// Absolute zero (0 K) is equivalent to −273.15 C.
// 1 degree Kelvin equals 1 degree Celsius.
function fahrenheitToKelvin(fahrenheit) {
	let kelvin = fahrenheitToCelsius(fahrenheit) + 273.15;
	return kelvin;
}

// 8. Create a function called lesser that takes two numbers as
// arguments and returns the lesser of them. This function should
// use an if/else statement.
function lesser(numberOne, numberTwo) {
	let lesser = (numberOne < numberTwo ? numberOne : numberTwo);
	return lesser;
}

// 9. Create a function called multigreeting that takes a name
// and a language code and returns a version of "Hello, <name>!"
// in the specified language. The supported languages and their
// translations are below.
//
// en - Hello, <name>!
// es - ¡Hola, <name>!
// fr - Bonjour, <name>!
// ht - Bonjou, <name>!
//
// If any other language code is used, return nothing.

function multigreeting(name, language) {
    if (language === "en") {
        return `Hello, ${name}!`;
    }
	
	if (language === "es") {
        return `¡Hola, ${name}!`;
    }
	
	if (language === "fr") {
        return `Bonjour, ${name}!`;
    }
	
	if (language === "ht") {
        return `Bonjou, ${name}!`;
    }
}

// 10. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum(array) {
    let total = 0;

    for (let num of array) {
        total += num;
    }

    return total;
}

// 11. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.
function average(numbers) {
    var average = undefined;

	if (numbers.length > 0) {
        average = sum(numbers) / numbers.length;
    }

	return average;
}

// 12. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimum(numbers) {
    let minNumber = numbers[0];

    for (let number of numbers) {
        if (minNumber > number) { 
			minNumber = number;
		}
    }
	
	return minNumber;
}

// 13. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

function selectionSort(unsortedArray) {
	var unsorted = unsortedArray.slice(0);
	var minNumber = unsorted[0];
	var indexOfMinNumber = 0;
	var sorted = [];

	if (unsortedArray.length >= 0 && unsorted.length <= 1) {
		return unsortedArray;
	}

	while (sorted.length != unsortedArray.length) {
    	for (var index = 0; index < unsorted.length; index++) {
			var number = unsorted[index];

        	if (minNumber > number) { 
				minNumber = number;
				indexOfMinNumber = index;
			}
        }
		
        sorted.unshift(minNumber);
		unsorted = unsorted.splice(indexOfMinNumber);
	}

    return sorted;
}




// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// let arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.

