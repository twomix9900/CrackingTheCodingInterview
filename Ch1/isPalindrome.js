function isPalimdrome (string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }

  return true;
}

console.log(isPalimdrome('abcdcba')) // true
console.log(isPalimdrome('abccba')) // true
console.log(isPalimdrome('hello world')) // false
console.log(isPalimdrome('ABCcba')) // false
console.log(isPalimdrome(' abccaba ')) // false