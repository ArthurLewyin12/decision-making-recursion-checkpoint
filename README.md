# Decision Making and Recursive Algorithms

This repo contains my checkpoint on decision making and recursion (Low-Level Design and Design Patterns). I did it in JavaScript (Node.js), and I picked all three tasks in each part.

## Decision making (`decision-making.js`)

- **Leap year checker**: `isLeapYear(year)` uses an if / else if chain. A year divisible by 400 is a leap year, one divisible by 100 is not, and otherwise it has to be divisible by 4.
- **Ticket pricing**: `getTicketPrice(age)` returns $10 for children (12 and under), $15 for teenagers (13 to 17) and $20 for adults (18 and over).
- **Weather clothing adviser**: `getClothingAdvice(temperature, isRaining)` first turns the temperature into a category (cold, cool, mild or hot) with if-else, then uses a `switch` to pick the advice. If it's raining, it adds a reminder to take an umbrella.

After the tests, the program asks the user for a year, an age, the temperature and whether it's raining, and answers each one. Wrong inputs (letters, empty answer, negative age) are handled.

## Recursion (`recursion.js`)

- **Fibonacci**: `fibonacci(n)` returns n when n is 0 or 1 (base cases), otherwise `fibonacci(n - 1) + fibonacci(n - 2)`.
- **Palindrome checker**: `isPalindrome(str)` removes spaces and punctuation and puts everything in lowercase. Then it compares the first and last characters and calls itself on the middle of the string. An empty string or a single character is a palindrome (base case).
- **Power function**: `power(base, exponent)` returns 1 when the exponent is 0 (base case), otherwise `base * power(base, exponent - 1)`. It also works with negative exponents (2^-2 = 0.25).

## How to run it

```bash
node decision-making.js
node recursion.js
```

## Output

`node recursion.js`:

```
=== Fibonacci ===
OK   fib(0): 0
OK   fib(1): 1
OK   fib(6): 8
OK   fib(10): 55
OK   first 10 numbers: [0,1,1,2,3,5,8,13,21,34]

=== Palindrome checker ===
OK   "racecar": true
OK   "A man, a plan, a canal: Panama": true
OK   "Was it a car or a cat I saw?": true
OK   "hello": false
OK   "": true

=== Power function ===
OK   2^10: 1024
OK   5^3: 125
OK   7^0: 1
OK   2^-2: 0.25
```

`node decision-making.js` (with 2024, 15, 8 and yes as answers):

```
=== Leap year checker ===
OK   2024: true
OK   2023: false
OK   1900: false
OK   2000: true

=== Ticket pricing ===
OK   age 8: 10
OK   age 12: 10
OK   age 13: 15
OK   age 17: 15
OK   age 18: 20
OK   age 45: 20

=== Weather clothing adviser ===
2°C, raining  -> Wear a warm coat, a scarf and gloves. It's raining, take an umbrella or a raincoat.
12°C, dry     -> Wear a jacket or a sweater.
20°C, raining -> A t-shirt with a light jacket is enough. It's raining, take an umbrella or a raincoat.
30°C, dry     -> Wear a t-shirt, shorts and don't forget a cap.

=== Try it yourself ===
Enter a year: 2024
2024 is a leap year.
Enter your age: 15
Your ticket costs $15.
Current temperature (°C): 8
Is it raining? (yes/no): yes
Wear a jacket or a sweater. It's raining, take an umbrella or a raincoat.
```
