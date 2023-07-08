/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
*/

function digitalRoot(n) {
  function root(n) {
    const convert = n
      .toString()
      .split('')
      .map((n) => Number(n));
    const result = convert.reduce((acc, current) => acc + current);
    return result;
  }
  result = root(n);
  while (result >= 10) {
    result = root(result);
  }
  return result;
}

console.log(digitalRoot(923455));
