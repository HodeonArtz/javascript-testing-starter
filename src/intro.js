// Lesson: Writing your first tests
export function max(a, b) {
  return a > b ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}

export function calculateAverage(numbers) {
  if (numbers.length === 0) return NaN;

  const sum = numbers.reduce((sum, currNumber) => sum + currNumber, 0);
  return sum / numbers.length;
}

export function calculateFactorial(n) {
  if (n < 0) return undefined;
  if (n < 1) return 1;
  return n * calculateFactorial(n - 1);
}
