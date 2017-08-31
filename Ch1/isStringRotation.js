function isStringRotation (s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  return (s1 + s2).includes(s2);
}

console.log(isStringRotation('waterbottle', 'erbottlewat')) // true
console.log(isStringRotation('aaa', 'aaaa')) // false
console.log(isStringRotation('aaa', 'aaa')) // true