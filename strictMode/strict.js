'use strict';

function addRange (start, end) {
  let sum = 0;
  for (let i = start; i < end + 1; i++) {
    sum += i;
  }
  return sum;
}

// let startNum = 10;
// let endNum = 15;

startNum = 1;
endNum = 5;
console.log(addRange(startNum, endNum))