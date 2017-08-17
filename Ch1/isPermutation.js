let isPermutation = function (str1, str2) {
  // return false if two strings don't have same length
  if (str1.length !== str2.length) return false;

  // sort then compare the strings
  let sort1 = str1.split('').sort().join();
  let sort2 = str2.split('').sort().join();
  
  for (let i = 0; i < str1.length; i++) {
    if (sort1[i] !== sort2[i]) return false;
  }

  return true;
}

console.log(isPermutation('abc', 'cba')) // true
console.log(isPermutation('abcda', 'a')) // false
console.log(isPermutation('dog', 'god')) // true
