let isUnique = function (string) {
  // no additional data structure approach
  // O^2 time complexity
  
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) return false;
    }
  }
  
  return true;
}

let string = 'hello';
console.log(isUnique(string)) // false;

string = 'asdfghjlk';
console.log(isUnique(string)) // true;

string = '12345';
console.log(isUnique(string)) // true;
