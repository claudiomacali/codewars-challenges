/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!
*/

function createPhoneNumber(numbers) {
  const phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  let strNumber = numbers.toString().replaceAll(',', '');
  return phoneRegex.test(strNumber)
    ? `(${strNumber.substring(0, 3)}) ${strNumber.substring(
        3,
        6,
      )}-${strNumber.substring(6)}`
    : false;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
