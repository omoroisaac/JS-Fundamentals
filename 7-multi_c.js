function add(a, b) {
  return a + b;
}

const [a, b] = process.argv.slice(2).map(Number);
console.log(isNaN(a) || isNaN(b) ? 'Arguments must be integers' : add(a, b));