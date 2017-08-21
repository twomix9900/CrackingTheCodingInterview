// input: "Mr John Smith"
// output: "Mr%20John%20Smith"

function URLify (string) {
  // doing this without replace

  let result = string.split('');

  for (let i = 0; i < result.length; i++) {
    if (result[i] === ' ') {
      result[i] = '%20'
    }
  }

  return result.join('');
}

function URLify2 (string) {
  // shorter and cleaner version with replace
  return string.replace(/ /g, '%20')
}

console.log(URLify('Mr John Smith'))
console.log(URLify2('Mr John Smith')) //