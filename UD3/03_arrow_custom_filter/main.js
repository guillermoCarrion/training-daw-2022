const assert = require('assert').strict;


/*
function select(array, condition) {
    return array.filter(condition);
}

*/

let select = (array, condition) => array.filter(condition);

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29]

const pairs = (num) => num % 2 === 0;
const gt15 = (num) => num > 15;
const lt10 = (num) => num < 10;

// sólo pares
assert.deepStrictEqual(select(values, pairs), [2])

// mayores que 15
assert.deepStrictEqual(select(values, gt15), [17, 23, 29])

// menores de 10
assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7])