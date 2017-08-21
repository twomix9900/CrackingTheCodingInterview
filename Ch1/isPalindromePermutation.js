function isPP (string) {
  // going to ignore upper/lower cases and spaces for this problem

  let result = string.replace(/ /g, '').toLowerCase().split('').sort();
  let counter = 0;

  for (let i = 0; i < result.length; i += 2) {
    if (result[i] !== result[i + 1]) {
      counter++;
      i--;
    }
  }

  if (counter > 1) {
    return false;
  }

  return true;
}

console.log(isPP('Tact Coa')) // true
console.log(isPP('abcb')) // false