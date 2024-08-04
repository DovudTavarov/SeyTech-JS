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
