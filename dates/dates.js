const today =  new Date();
console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDay());
console.log(today.getDate());
console.log(today.getHours());
console.log(today.getMinutes().toString().padStart(2, '0'));
console.log(today.getSeconds());
console.log(today.getMilliseconds());
console.log(today.getTime());
console.log(today.getTimezoneOffset());

// Manipulating Date
const originalDate = new Date();
console.log(originalDate)
const futureDate = new Date(originalDate.getTime())
futureDate.setDate(originalDate.getDate() + 36)
console.log(futureDate)
console.log(originalDate)

// comparing two dates
const dayA = new Date();
const dayB = new Date();

console.log(dayA === dayB) // This points to a reference
console.log(dayA.getTime() === dayB.getTime()) // Comparing milliseconds.

// You need to calculate how many days, hours, or minutes separate two dates.
const oldDate = new Date(2021, 1, 1);
const newerDate = new Date(2021, 10, 1);
const differenceInMilliseconds = newerDate - oldDate;

const millisecondsPerDay = 1000*60*60*24;
let differenceInDays = differenceInMilliseconds / millisecondsPerDay;
// Only count whole days
differenceInDays = Math.trunc(differenceInDays);
console.log(differenceInDays);

/*
// This only works in the browser
// Get a DOMHighResTimeStamp object that represents the start time
const startTime = window.performance.now();
// (Do a time consuming task here.)
// Get a DOMHighResTimeStamp object that represents the end time
const endTime = window.performance.now();
// Find the elapsed time in milliseconds
const elapsedMilliseconds = endTime - startTime;
*/

// You want to create a formatted string based on a Date object
const date = new Date(2021, 0, 1, 10, 30);
let dateString;
dateString = date.toString();
// 'Fri Jan 01 2021 10:30:00 GMT-0500 (Eastern Standard Time)'
dateString = date.toTimeString();
// '10:30:00 GMT-0500 (Eastern Standard Time)'
dateString = date.toUTCString();
// 'Fri, 01 Jan 2021 15:30:00 GMT'
dateString = date.toDateString();
// 'Fri Jan 01 2021'
dateString = date.toISOString();
// '2021-01-01T15:30:00.000Z'
dateString = date.toLocaleDateString();
console.log(dateString);
// '1/1/2021, 10:30:00 AM'
dateString = date.toLocaleTimeString();
// '10:30:00 AM'


// formatting adate to your own specification 
const dateNow = new Date(2021, 10, 1);
// Ensure dateNow numbers less than 10 are padded with an initial 0.
const day = dateNow.getDate().toString().padStart(2, '0');
// Ensure months are 0-padded and add 1 to convert the month from its
// 0-based JavaScript representation
const month = (dateNow.getMonth()+1).toString().padStart(2, '0');
// The year is always 4-digit
const year = dateNow.getFullYear();
const customDateString = `${year}.${month}.${day}`;
// now customDateString = '2021.11.01'
console.log(customDateString);

// Using the Intl.DateTimeFormat object to perform the date conversion.
const dateIntl = new Date(2020, 11, 20, 3, 0, 0);
// Use the standard US dateIntl format
console.log(new Intl.DateTimeFormat('en-US').format(dateIntl)); // '12/20/2020'
// Use the standard UK dateIntl format
console.log(new Intl.DateTimeFormat('en-GB').format(dateIntl));// '20/12/2020'
// Use the standard Japanese dateIntl format
console.log(new Intl.DateTimeFormat('ja-JP').format(dateIntl));// '2020/12/20'

// Adding the week and Month in German
const dateIntlInGerman = new Date(2020, 11, 20);
const formatterIntlInGerman  = new Intl.DateTimeFormat('de-DE',
{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
const dateStringIntlInGerman  = formatterIntlInGerman.format(dateIntlInGerman);
console.log(dateIntlInGerman) // now dateString = 'Sonntag, 20. Dezember 2020'

// These options also give you the ability to add time information to your string with the hour, minute, and second properties, which can be set to:
const dateIntlAddTime = new Date(2022, 11, 20, 9, 30);
const formatterIntlAddTime = new Intl.DateTimeFormat('en-US',
{ year: 'numeric', month: 'numeric', day: 'numeric',
hour: 'numeric', minute: 'numeric' });
const dateStringIntlAddTime = formatterIntlAddTime.format(dateIntlAddTime);
console.log(dateIntlAddTime) // now dateString = '12/20/2022, 9:30 AM
