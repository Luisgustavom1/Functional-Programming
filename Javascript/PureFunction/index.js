// Pure functions characteristics
// 1 - No side effects
// 2 - Given the same inputs must return the same result (Same inputs, same outputs ever)

function sum(num1, num2) {
    return num1 + num2;
}

function getNowDay() {
    // Impure function, because it depends on the current date
    return new Date().getDay();
}

function innerText(text) {
    // Impure function, because it changes the state of screen, video when render the new text in the screen
    console.log(text);
}

const usersLogged = [];

const saveCurrentUser = (id) => {
    // Impure function, because it changes the value of external variable
    usersLogged.push(id)
    return usersLogged;
}

const setPrice = (item, price) => Object.assign(item, { price });

const addToCart = (cart, item) => {
    const cartUpdate = Object.assign([], cart);
    cartUpdate.push(item);
    return cartUpdate;
//   cart.push(item); Essa solução é impura, pois altera o array original passado por argumento
//   return cart;
};

const initialCart = [{ price: 48, item: '1' }, { price: 49, item: '2' }];

console.log(initialCart, 'antes');

const itemWithPrice = setPrice({ item: '3' }, 50)
const newCart = addToCart(initialCart, itemWithPrice);

console.log(initialCart, 'depois');

console.log(newCart);