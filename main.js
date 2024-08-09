/* The Fortune Teller */
const numOfChild = 2;
const partnerName = "Olha";
const geoLocation = "Philly";
const jobTitle = "Developer";

console.log(
  `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numOfChild} kids.`
);

/* The Age Calculator */
const currentYear = 2024;
const birthYear = 1997;
const currentAge = currentYear - birthYear;
console.log(`He is ${currentAge} years old`);

/* The Temperature Converter */

function celToFahren(cel) {
  return (cel * 9) / 5 + 32;
}
let weatherTodayByFahren = celToFahren(Math.floor(Math.random() * 50));

function fahrenToCel(fahren) {
  return ((fahren - 32) * 5) / 9;
}
let weatherTodayByCel = fahrenToCel(Math.floor(Math.random() * 100));

console.log(
  `It is ${weatherTodayByFahren}°F today. That's ${weatherTodayByCel}°C.`
);

/* The Fortune Teller: With Functions! */

function tellFortune(numOfChild, partName, geoLocation, jobTitle) {
  return `You will be a ${jobTitle} in ${geoLocation}, and married to ${partName} with ${numOfChild} kids.`;
}

console.log(tellFortune(2, "Olha", "Philly", "Developer"));
console.log(tellFortune(3, "Anna", "New York", "Draver"));
console.log(tellFortune(1, "Lana", "San Jose", "Actor"));

/* What number is bigger? */

function whichNumLarger(num1, num2) {
  if (num1 > num2) {
    return `Number ${num1} is larger`;
  } else if (num1 < num2) {
    return `Number ${num2} is larger`;
  } else if (num1 === num2) {
    return "Error";
  }
}

console.log(whichNumLarger(20, 10));
console.log(whichNumLarger(15, 30));
console.log(whichNumLarger(50, 50));

/* Pluralize */

function pluralize(num, word) {
  if (num === 1) {
    return `${num} ${word}`;
  } else {
    return `${num} ${word}s`;
  }
}

console.log(pluralize(1, "cat"));
console.log(pluralize(3, "sheep"));
console.log(pluralize(10, "geese"));

/* Even/Odd Counter */

for (let num = 0; num < 20; num++) {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  }
}

/* The Calculator */

function squareNumber(num) {
  return num * num;
}
let result = squareNumber(3);
console.log(`The result of squaring the number 3 is ${result}.`);

function halfNumber(num) {
  return num / 2;
}
let result2 = halfNumber(5);
console.log(`Half of 5 is ${result2}.`);

function percentOf(num1, num2) {
  return (num1 / num2) * 100;
}
let result3 = percentOf(10, 20);
console.log(`10 is ${result3}% of 20`);

function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}
let result4 = areaOfCircle(2);
console.log(`The area for a circle with radius 2 is ${result4}`);
