// see if two strings are only one edit away from each other
function oneEditAway (str1, str2) {
  let counter = 0;
  let j = 0;
  // return true if both strings are equal to each other
  if (str1 === str2) {
    return true
  }

  // if two strings have same length, only one character can be different
  if (str1.length === str2.length) {
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[j]) {
        counter++;
      }
      j++;
    }

    //return false if counter is more than 1;
    if (counter > 1) {
      return false;
    } else {
      return true;
    }
  }

  // if two string lengths are more than one apart, return false
  if (str1.length + 1 < str2.length || str2.length + 1 < str1.length) {
    return false;
  }

  // now we are assuming strings are one length apart, there can be one character difference or a space
  if (str1.length > str2.length) {
    var long = str1;
    var short = str2;
  } else {
    var long = str2;
    var short = str1;
  }

  for (let i = 0; i < long.length; i++) {
    if (long[i] !== short[j]) {
      counter++;
      j--;
    }
    j++;

    if (counter > 1) {
      return false;
    } 
  }



  return true;
}

console.log(oneEditAway('pale', 'ple')) // true
console.log(oneEditAway('pales', 'pale')) // true
console.log(oneEditAway('pale', 'bale')) // true
console.log(oneEditAway('pale', 'bake')) // false
console.log(oneEditAway('hello', 'hi')) // false
console.log(oneEditAway('hello', 'hello')) // true