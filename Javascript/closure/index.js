// A closure is a way of accessing a variable outside its scope. Formally, a closure is a technique for implementing lexically scoped named binding

// Every function in JavaScript maintains a reference to its outer lexical environment. This reference is used to configure the execution context created when a function is invoked. This reference enables code inside the function to "see" variables declared outside the function, regardless of when and where the function is called.

function foo() {
    const secret = Math.trunc(Math.random() * 100);

    return function inner() {
        console.log('secret - ', secret);
    }
}

const f = foo();
f()

//
const curry = (fn) => {
    const args = []
    return function inner(arg) {
        if(args.length === fn.length) return fn(...args)
        args.push(arg);
        return inner
    }
}

const add = (a, b) => a + b 

const addCury = curry(add)
console.log(addCury(3)(8)());

//
let namespace = {};

(function foo(n) {
    const numbers = []
    const format = (n) => Math.trunc(n)
    const tick = () => numbers.push(Math.random() * 100)
    const toString = () => numbers.map(format)
    n.counter = {
        tick,
        toString
    } 
}(namespace))

const counter = namespace.counter;
counter.tick()
counter.tick()
counter.tick()
console.log(counter.toString())

//
function janeDoe() {
    let x = 42;
    const inner = () => console.log(x);
    x++
    return inner;
}

const innerX = janeDoe();
innerX()

//
function createObj() {
    let x = 42;
    return {
        log() {console.log('create Obj', x)},
        increment() {x++},
        update(value) {x = value},
    }
}
const o = createObj()
o.increment()
o.log()
o.update(6)
o.log()
const n = createObj()
n.increment()
n.log()
n.update(9)
n.log()

//careful using var
function alertUsingVar() {
    var result = []
    for (var i = 0; i < 3; i++) {
        result.push(function inner() { console.log(i) } )
    }
    return result
}

const result = alertUsingVar()

for (var i = 0; i < 3; i++) {
    result[i]() 
}