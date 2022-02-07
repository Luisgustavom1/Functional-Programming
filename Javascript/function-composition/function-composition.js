// Function composition is the process of combining two or more functions to produce a new function. 
// Composing functions together is like snapping together a series of pipes for our data to flow through.

const compose = (...fns) => initalArgs => fns.reduceRight((args, fn) => fn(args), initalArgs);
const sum = x => x + 2;
const double = y => y * 2;
console.log(compose(double, sum)(3));

const pipe = (...fns) => initialArg => fns.reduce((args, fn) => fn(args), initialArg)
console.log(pipe(double, sum)(3));

// const validatePasswordNoFunctionalProgramming = (password) => {
//     if (!password) {
//         return false;
//     }

//     if (password.length < 6) {
//         return false;
//     }

//     if (password.length > 10) {
//         return false;
//     }

//     if (typeof password !== 'string') {
//         return false;
//     }

//     if (password === 'senha') {
//         return false;
//     }

//     return true;
// }

// const validatePasswordWithFunctionalProgramming = () => {} 

// Passar a funçã acima para funcional

const is = type => value => typeof value === type;
const isString = is('string');

const convert = hasBeenConvertType => value => hasBeenConvertType(value);
const convertToString = convert(String);

const sumBy = x => y => x + y;
const sumBy3 = sumBy(3);

const multiplyBy = x => y => x * y;
const multiplyBy7 = multiplyBy(7);

const curriyngAndPipe = pipe(sumBy3, multiplyBy7, convertToString, isString)(1);
console.log('curriyngAndPipe', curriyngAndPipe);