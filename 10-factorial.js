function factorial(n) {
  const num = parseInt(n, 10);
  if (isNaN(num) || num <= 0) return 1;
  return num * factorial(num - 1);
}

const input = process.argv[2];
console.log(factorial(input));