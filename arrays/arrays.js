animals = ['Lion', 'Tiger', 'Leopard', 'Elephant', 'Giraff'];
animals.forEach(function(element, index, array) {
  console.log(`element is ${element}
  index is  ${index}
  array is ${array}`)
});

animals.forEach(animal => console.log(animal));

let array1 = ['Lion', 'Tiger', 'Leopard', 'Elephant', 'Giraff'];
let array2 = ['Lion', 'Tiger', 'Leopard', 'Elephant', 'Giraff'];
// let array2 = array1;

array1 === array2 ? console.log(true) : console.log(false);

for (let i = 0; i < array1.length; i++) {
  array1[i] === array2[i] ? console.log('true') : console.log('false');
}

console.log(array1.sort());

// distructuring my array
let [foo, bar, ...zoo ] = array1;
console.log(zoo)

// pass an array object as an argument to a function
const numbers = [2, 54, 64, 33, 75, 32, 13];
const maxNum = (arg) => console.log(Math.max(...arg));
maxNum(numbers)

// shalow copy of an array object
/* const objectOriginal = [{name: 'Gabriel', age: 8}, {name: 'Danil', age: 6}, {name: 'Dominica', age: 1}];
const wrongObjectCopy = [...objectOriginal];
const betterObjectCopy = objectOriginal.map(el => ({...el}) )
console.log(`Original object age for Gabriel and Danil before modification: Gab's ${objectOriginal[0].age}, Dan's age ${objectOriginal[1].age}
Copy object age for Gabriel and Danil before modification: Gab's age ${wrongObjectCopy[0].age}, Dan's age ${wrongObjectCopy[1].age}
Better object copy age for Gabriel and Danil before modification: Gab's age ${wrongObjectCopy[0].age}, Dan's age ${betterObjectCopy[1].age}`);
wrongObjectCopy[1].age = 7;
betterObjectCopy[0].age = 9;

console.log(`Original object age for Gabriel and Danil after modification: Gab's age ${objectOriginal[0].age}, Dan's age ${objectOriginal[1].age}
Copy object age for Gabriel and Danil after modification: Gab's age ${wrongObjectCopy[0].age}, Dan's age ${wrongObjectCopy[1].age}
Better object copy age for Gabriel and Danil after modification: Gab's age ${betterObjectCopy[0].age}, Dan's age ${betterObjectCopy[1].age}`);

*/

const duplicateNum = [2, 23, 54, 3, 23, 12, 12, 54, 70];
const uniqueArrays = [... new Set(duplicateNum)];
console.log(uniqueArrays.sort((a, b) => a - b));
console.log( `the total sum is : ${duplicateNum.reduce((acc, val) => acc + val , 0) }`);

// Using the reducer method to get the max value of an array
console.log(`The max value of the array is : ${duplicateNum.reduce((a, b) => a > b ? a : b)}`);

// Creating a map 
const products = new Map();
// Add three items
products.set('RU007', {name: 'Rain Racer 2000', price: 1499.99});
products.set('STKY1', {name: 'Edible Tape', price: 3.99});
products.set('P38', {name: 'Escape Vehicle (Air)', price: 2999.00});

// Check for two items using the item code
console.log(products.has('RU007')); // true
console.log(products.has('RU494')); // false
// Retrieve an item
const product = products.get('P38');
if (typeof product !== 'undefined') {
console.log(product.price); // 2999
}
// Remove the Edible Tape item
products.delete('STKY1');
console.log(products.size);
// 2
