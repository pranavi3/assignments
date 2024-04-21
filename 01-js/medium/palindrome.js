/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-zA-Z0-9]/g,"");
  //[^...] is a negated character set, meaning it matches anything not in the brackets.
  // a-zA-Z matches any uppercase or lowercase letter.
  // 0-9 matches any digit.
  // g is the global flag, meaning the replacement should occur throughout the entire string.
  for(let i=0; i<str.length/2; i++){
    if(str[i] != str[str.length-i-1])return false;
  }
  return true;
}

module.exports = isPalindrome;
