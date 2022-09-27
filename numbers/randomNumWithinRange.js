// Generating a random number between a range of number
// const randomNumber = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomNumber(7, 3))

// Generating an encrypted random number between a number range. The below code will not work in a node environment. 
// const randomBuffer = new Uint32Array(1);
// window.crypto.getRandomValues(randomBuffer);
// const randomFraction = randomBuffer[0] / (0xffffffff + 1);

// Generating an encrypted random number between a number range. The below code will work in a node environment by importing webcryto function the crypto package.
/* const crypto = require('crypto').webcrypto;
const randomBuffer =  new Uint32Array(1);
const uniqueRandom = crypto.getRandomValues(randomBuffer);
console.log(uniqueRandom);
const randomFraction = randomBuffer[0] / (0xffffffff + 1);
const randomNumber = (max, min) => Math.floor(randomFraction * (max - min + 1)) + min;
console.log(randomNumber(7, 3))
*/

/*
const fractionalNumber = 19.48938;

console.log(`Round method for ${ fractionalNumber} = ${Math.round(fractionalNumber)}`);
console.log(`Ceil method for ${fractionalNumber} = ${Math.ceil(fractionalNumber)}`);
console.log(`floor method for ${fractionalNumber} = ${Math.floor(fractionalNumber)}`);
// round to two decimal places
const numberToRound = fractionalNumber * (10**2);
let roundedNumber = Math.round(numberToRound);
roundedNumber = roundedNumber / (10**2);
console.log(roundedNumber);

// moving the decimal one places to the left and rounding up
const numberToRoundLeft = fractionalNumber * (10**-1);
let roundedNumberLeft = Math.round(numberToRoundLeft);
roundedNumberLeft = roundedNumberLeft / (10**-1);
console.log(roundedNumberLeft);
*/

// Converting a number to different bases
const baseNum = 77;
const octNum = baseNum.toString(8);
console.log(octNum);

const hexNum = baseNum.toString(16);
console.log(hexNum);

const biNum = baseNum.toString(2);
console.log(biNum);

console.log(BigInt(Number.MAX_SAFE_INTEGER) + 2n);
const bigIntCon = BigInt(Number.MAX_SAFE_INTEGER) + 2n;

// removing the n notating the number is a Big Int
console.log(bigIntCon.toString());