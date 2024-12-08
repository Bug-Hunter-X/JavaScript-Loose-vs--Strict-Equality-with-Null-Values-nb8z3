function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; //Standard addition
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5));   // Output: 10

function bar(a, b) {
  if (a == null || b == null) {
    return 0; // Handle null values
  }
  return a + b; //Standard addition
}

console.log(bar(null, 5)); //Output: 0
console.log(bar(5, null)); //Output: 0
console.log(bar(5, 5));   // Output: 10

function foobar(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b;
}

console.log(foobar(null, 5)); // Output: 0
console.log(foobar(5, null)); // Output: 0
console.log(foobar(5, 5));   // Output: 10