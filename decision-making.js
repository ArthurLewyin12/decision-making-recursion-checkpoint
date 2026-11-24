const readline = require("readline");

// Leap year: divisible by 4, but not by 100 unless also divisible by 400
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

// Ticket price depending on the age
function getTicketPrice(age) {
  if (age < 0) {
    return null;
  } else if (age <= 12) {
    return 10;
  } else if (age <= 17) {
    return 15;
  } else {
    return 20;
  }
}

// Clothing advice depending on the temperature (in °C) and the rain.
// The temperature is turned into a category, then a switch picks the advice.
function getClothingAdvice(temperature, isRaining) {
  let category;
  if (temperature < 5) category = "cold";
  else if (temperature < 15) category = "cool";
  else if (temperature < 25) category = "mild";
  else category = "hot";

  let advice;
  switch (category) {
    case "cold":
      advice = "Wear a warm coat, a scarf and gloves.";
      break;
    case "cool":
      advice = "Wear a jacket or a sweater.";
      break;
    case "mild":
      advice = "A t-shirt with a light jacket is enough.";
      break;
    case "hot":
      advice = "Wear a t-shirt, shorts and don't forget a cap.";
      break;
  }

  if (isRaining) {
    advice += " It's raining, take an umbrella or a raincoat.";
  }
  return advice;
}

// ----- Tests -----

const check = (label, actual, expected) => {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "OK  " : "FAIL"} ${label}: ${JSON.stringify(actual)}`);
};

console.log("=== Leap year checker ===");
check("2024", isLeapYear(2024), true);
check("2023", isLeapYear(2023), false);
check("1900", isLeapYear(1900), false);
check("2000", isLeapYear(2000), true);

console.log("\n=== Ticket pricing ===");
check("age 8", getTicketPrice(8), 10);
check("age 12", getTicketPrice(12), 10);
check("age 13", getTicketPrice(13), 15);
check("age 17", getTicketPrice(17), 15);
check("age 18", getTicketPrice(18), 20);
check("age 45", getTicketPrice(45), 20);

console.log("\n=== Weather clothing adviser ===");
console.log("2°C, raining  ->", getClothingAdvice(2, true));
console.log("12°C, dry     ->", getClothingAdvice(12, false));
console.log("20°C, raining ->", getClothingAdvice(20, true));
console.log("30°C, dry     ->", getClothingAdvice(30, false));

// ----- Interactive part -----

const rl = readline.createInterface({ input: process.stdin });
const lines = rl[Symbol.asyncIterator]();

async function ask(question) {
  process.stdout.write(question);
  const { value } = await lines.next();
  return value ?? "";
}

// An empty answer gives NaN instead of 0
const toNumber = (text) => (text.trim() === "" ? NaN : Number(text));

async function main() {
  console.log("\n=== Try it yourself ===");

  const year = toNumber(await ask("Enter a year: "));
  if (Number.isInteger(year)) {
    console.log(`${year} is ${isLeapYear(year) ? "" : "not "}a leap year.`);
  } else {
    console.log("This is not a valid year.");
  }

  const age = toNumber(await ask("Enter your age: "));
  const price = getTicketPrice(age);
  if (Number.isNaN(age) || price === null) {
    console.log("This is not a valid age.");
  } else {
    console.log(`Your ticket costs $${price}.`);
  }

  const temperature = toNumber(await ask("Current temperature (°C): "));
  const rain = (await ask("Is it raining? (yes/no): ")).trim().toLowerCase();
  if (Number.isNaN(temperature)) {
    console.log("This is not a valid temperature.");
  } else {
    console.log(getClothingAdvice(temperature, rain === "yes" || rain === "y"));
  }

  rl.close();
}

main();
