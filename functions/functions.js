// create a function that can remember it's state
function outerFunction () {
  function innerFunction () {
    // dosomething
  }
  return innerFunction
}


const dayGreeting = greetingMaker('Good day');
const nightGreeter = greetingMaker('Good evening');

function greetingMaker(greetings) {
  function addName(name) {
    console.log(`${greetings} ${name}`);
  }
  return addName;
}

// Uncommenting the below code will cause an error
/* 
const dayGreeting = callGreeter('Good day');
const nightGreeter = callGreeter('Good evening');
*/

const callGreeter = function greetingMaker(greetings) {
  function addName(name) {
    console.log(`${greetings} ${name}`);
  }
  return addName;
}

dayGreeting('Gabriel');
nightGreeter('Dan');

// A generator function that returns multiple values

function* generateValues () {
  yield 9475438;
  yield 'Strings are alowed';
  yield ['you', 'are', 'kidding', 7]
  return console.log('Th end !!!!')
}

const generatedValues = [ ...generateValues()]
console.log(generatedValues.flat())

// Partial application 
function makeString(prefix, str, sufix) {
  return prefix + str + sufix;
}

function quoteString(str) {
  return makeString('"', str, '"');
}

function hyfinString(str) {
  return makeString('-', str, '-');
}

function namedEntity(str) {
  return makeString('&#', str, ';');
}

console.log(quoteString('Radushni'));
console.log(hyfinString('Tedy'));
console.log(namedEntity(186));

// more coincised partial function application
function partial(fn, ...argToApply) {
  return function (...resArgToApply) {
    return fn(...argToApply, ...resArgToApply)
  }
}

// function raiseToPower(number, exponent) {
//   return number**exponent
// }
// for higher order functions, the variables that are fixed come first and the one that changes comes last
function raiseToPower(exponent, number) {
  return number**exponent;
}

const cubeIt = partial(raiseToPower, 3) // 3 is the fied variable for a cube, that is why exnent comes first in the raiseToower function.
console.log(cubeIt(8))