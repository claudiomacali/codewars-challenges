/*

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/
function solution(string) {
  let words = string.split(/(?=[A-Z])/);

  return words.join(' ');
}
console.log(solution('camelCasingTest'));
