// The act of a function calling itself, recursion is used to solve problems that contain smaller sub-problems
function factorial(n) {
    if (n === 0) return 1;
    return factorial(n - 1) * n; 
}
console.log(factorial(10));

const fibonnaci = (n) => n <= 2 ? 1 : fibonnaci(n - 1) + fibonnaci(n - 2);
console.log(fibonnaci(10));

const reduce = (fn, acc, [cur, ...rest]) => cur === undefined ? acc : reduce(fn, fn(acc, cur), rest);
console.log(reduce((a, b) => a * b, 1, [1, 2, 3, 4, 5, 6]));

function callStack(i) {
    if (i < 0) return;

    console.log('Before calling the function again ', i);
    callStack(i - 1);
    console.log('After calling the function again ', i);
}
callStack(4);