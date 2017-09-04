// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

function twoSum (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }

  return null;
}

// a more optimized solution
function twoSum(nums, target) {
  var result = []
  nums.forEach(function(num, i) {
    var diff = target - num
    var k = nums.indexOf(diff)
    if (k > -1 && k !== i) {
       result[0] = i
       result[1] = k
       return true
    }
  })
  return result
}

console.log(twoSum([1, 2, 3, 4], 5)) // 0, 3
console.log(twoSum([10, 20, 11111, 2], 9))