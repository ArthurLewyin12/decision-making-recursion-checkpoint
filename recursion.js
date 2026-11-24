// nth Fibonacci number: fib(0) = 0, fib(1) = 1, fib(n) = fib(n - 1) + fib(n - 2)
function fibonacci(n) {
  if (n <= 1) return n; // base cases: 0 and 1
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Palindrome: first we keep only letters and digits in lowercase,
// then we compare the first and last characters and recurse on the middle
function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return checkPalindrome(clean);
}

function checkPalindrome(s) {
  if (s.length <= 1) return true; // base case: empty string or one character
  if (s[0] !== s[s.length - 1]) return false;
  return checkPalindrome(s.slice(1, -1));
}

// Power: base^exponent = base * base^(exponent - 1)
function power(base, exponent) {
  if (exponent === 0) return 1; // base case: anything to the power 0 is 1
  if (exponent < 0) return 1 / power(base, -exponent); // negative exponent
  return base * power(base, exponent - 1);
}

// ----- Tests -----

const check = (label, actual, expected) => {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "OK  " : "FAIL"} ${label}: ${JSON.stringify(actual)}`);
};

console.log("=== Fibonacci ===");
check("fib(0)", fibonacci(0), 0);
check("fib(1)", fibonacci(1), 1);
check("fib(6)", fibonacci(6), 8);
check("fib(10)", fibonacci(10), 55);
const firstTen = [];
for (let i = 0; i < 10; i++) firstTen.push(fibonacci(i));
check("first 10 numbers", firstTen, [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);

console.log("\n=== Palindrome checker ===");
check('"racecar"', isPalindrome("racecar"), true);
check('"A man, a plan, a canal: Panama"', isPalindrome("A man, a plan, a canal: Panama"), true);
check('"Was it a car or a cat I saw?"', isPalindrome("Was it a car or a cat I saw?"), true);
check('"hello"', isPalindrome("hello"), false);
check('""', isPalindrome(""), true);

console.log("\n=== Power function ===");
check("2^10", power(2, 10), 1024);
check("5^3", power(5, 3), 125);
check("7^0", power(7, 0), 1);
check("2^-2", power(2, -2), 0.25);
