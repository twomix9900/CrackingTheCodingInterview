function stringCompression (string) {
  // compress string, if the compressed version is longer than original then just return the original
  var compressedStr = '';
  var container = {};

  for (let i = 0; i < string.length; i++) {
    container[string[i]] ? container[string[i]]++ : container[string[i]] = 1;
  }

  for (var j in container) {
    compressedStr = compressedStr + j + container[j]
  }

  return compressedStr.length >= string.length ? string: compressedStr;
}

console.log(stringCompression('aabbbcc')) // a2b3c2
console.log(stringCompression('hello')) // hello
console.log(stringCompression('aaaaaaaaa')) // a9