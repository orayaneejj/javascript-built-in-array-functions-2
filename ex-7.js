function isPalindrome(string) {
  // Start coding here
  let reveseWord = string.split("").reverse().join("");
  let result = string === reveseWord ? true : false;
  return result;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
