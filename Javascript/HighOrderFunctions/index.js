// This property is a function which takes a function as an argument and return other function
// Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions

function greaterThan(number1) {
    return number2 => number2 > number1
}

const greaterThan10 = greaterThan(10);

console.log(greaterThan10(9));
console.log(greaterThan(11)(9));

function noisy(fn) {
    return (...numbers) => fn(...numbers);
}

console.log(noisy(Math.min)(2, 4, 5));

// Eloquent js exercises

// Flattening

let arrays = [[1, 2, 3], [4, 5], [6]];

const flattenArray = (acc, element) => [...acc, ...element];

console.log(arrays.reduce(flattenArray, []));

// My Own loop

const loop = (value, fn, update, body) => {
    if (!fn(value)) {
        return;
    }

    body(value);
    loop(update(value), fn, update, body);
}

loop(['oops', 'gasp', 'shout', 'sun'], n => n.length > 0, n => n.slice(1), (string) => string[0].length !== 4 && console.log(string[0]));

// Other kind of loop
const vowel = ['a', 'e', 'i', 'o', 'u'];

const text = "You may already be recognizing a lot of repeated code. There’s a pattern forming here that could be abstracted into a more generalized solution. These two functions have a whole lot in common. They both iterate over a list and filter it on a given condition.";

const howManyWordStartsWithVowel = (arrayString, quantity) => {
    if (arrayString.length === 0) {
        console.log(quantity);
        return;
    }

    if (vowel.includes(arrayString[0][0].toLowerCase())) quantity++;

    howManyWordStartsWithVowel(arrayString.slice(1), quantity);
}

howManyWordStartsWithVowel(text.split(' '), 0);

console.log(text.split(' ').reduce((acc, current) => vowel.includes(current[0].toLowerCase()) ? acc += 1 : acc, 0));

// All arrow function

const isGreaterThan = number1 => number2 => number1 > number2;

console.log(isGreaterThan(2)(32), 'isGreaterThan');
