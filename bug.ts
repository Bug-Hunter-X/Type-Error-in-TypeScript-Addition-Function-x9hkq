function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, '10'); // Type Error
console.log(result); // This line will not be reached