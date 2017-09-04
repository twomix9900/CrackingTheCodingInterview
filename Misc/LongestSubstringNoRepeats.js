// Given a string, find the length of the longest substring without repeating characters.
// Examples:
// Given "abcabcbb", the answer is "abc", which the length is 3.
// Given "bbbbb", the answer is "b", with the length of 1.
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
  var container = {};
  var max = 0;

  for (let i = 0; i < s.length; i++) {
    if (typeof container[s[i]] === 'undefined') {
      container[s[i]] = i;
    } else if (typeof container[s[i]] !== 'undefined') {
      for (let j = 0; j < i; j++) {
        container[s[j]] < container[s[i]] ? delete container[s[j]] : null;
      }
      container[s[i]] = i;
    } 
    Object.keys(container).length > max ? max = Object.keys(container).length : null; 
  }
  return max;
};

console.log(lengthOfLongestSubstring('abcabcbb')) // 3 (abc)
console.log(lengthOfLongestSubstring('bbbbb')) // 1 (b)
console.log(lengthOfLongestSubstring('pwwkew')) // 3 (wke)
console.log(lengthOfLongestSubstring('aab')) // 2 (ab)
console.log(lengthOfLongestSubstring('dvdf')) // 3 (vdf)
console.log(lengthOfLongestSubstring('tmmzuxt')) // 5 (mzuxt)
console.log(lengthOfLongestSubstring("abcabcbb")) // 3 (abc)