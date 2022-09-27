validateSring = '      ';

// typeof(validateSring) === 'string' && validateSring.trim().length > 0 ?  console.log(`it's a string`) : console.log('failed')

objectLiteral = new String('Jah')

// turnery expression returns nothing
// typeof(objectLiteral) === 'string' || String.prototype.isPrototypeOf(objectLiteral) ? 'am a string' : console.log(`I am an`, typeof(objectLiteral)) 

/** Returns expected result */
// if (typeof(objectLiteral === 'string' || String.prototype.isPrototypeOf(objectLiteral))) {
//   console.log('I am a string')
// }
// else {
//   console.log('Am an Object')
// }

let rueMoney = 3367573.4688;
const formatter = new Intl.NumberFormat('ru', {style: 'currency', currency: 'RUB'});

console.log(formatter.format(rueMoney))

let hamburger = String.fromCodePoint(0x1F354)
console.log(`I eat ${hamburger} some times. Char length is ${hamburger.length}`)

// finding difference in days
// const getDays = day => {
//   let today = new Date();
//   let oneDay = 24 * 60 * 60 * 1000 // hour * minute * seconds * miliseconds

//   let days = Math.round(Math.abs((today - day) / oneDay));
//   return days; 
// }

let a = 'hello';
let b = 'Hello';

// a.localeCompare(b, undefined, {sensitivity: 'accent'}) === 0 ? `${a} and ${b} are the same` : 'Not the same string'

// if (a.localeCompare(b, undefined, {sensitivity: 'accent'}) === 0 ) {
//   console.log(`${a} and ${b} are the same` );
// }
// else {
//   console.log('Not the same string')
// }

const favoriteName = 'Jesus';
const searchTest = ' I love Jesus';
console.log(searchTest.includes(favoriteName));
// console.log(searchTest.indexOf(favoriteName));

// Regular Expression
const search = 'programming books';

const setence = 'I like to read a lot of programming books';
const newSentencce =  setence.replace(search, 'technology books');
// console.log(newSentencce)

// search for particular words to split
/* const sentence = 'This is one sentence. This is a sentence with a list of items:' + 'cherries, oranges, apples, bananas. That was the list of items.';
const start = sentence.indexOf(':');
console.log(start);

const end = sentence.indexOf('.', start + 1);
console.log(end);

const list = sentence.slice(start + 1, end) ;
console.log(list);

const fruits = list.split(',').map(f => f.trim());
console.log(fruits)
*/

const searchString = 'Now is the time and this is the time and that is the time';
const regex = /t\w*e/g;
const swap = 'time';
const matches = searchString.matchAll(regex);
const matchedResult = [ ...matches];
console.log(matchedResult)
const newrhymes = searchString.replaceAll(regex, swap)
console.log(newrhymes)
