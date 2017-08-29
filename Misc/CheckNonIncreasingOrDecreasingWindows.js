// For this problem, you are given N days of average home sale price data, and a fixed window size K . For each window of K days, from left to right, find the number of increasing subranges within the window minus the number of decreasing subranges within the window.
// A window of days is defined as a contiguous range of days. Thus, there are exactly N-K+1 windows where this metric needs to be computed. An increasing subrange is defined as a contiguous range of indices [a,b], a < b , where each element is larger than the previous element. A decreasing subrange is similarly defined, except each element is smaller than the next.

// Constraints
// 1 ≤ N ≤ 200,000 days
// 1 ≤ K ≤ N days

// Input Format
// Your solution should accept an input file (input.txt) with the following contents: 

//  Line 1: Two integers, N and K.
//  Line 2: N positive integers of average home sale price, each less than 1,000,000.

// Output Format
// Your solution should output one integer for each window’s result, with each integer on a separate line, to an output file or to the console.

// Sample Input
// 5 3
// 188930 194123 201345 154243 154243

// Sample Output
// 3
// 0
// -1

// convert input string into array
function stringConverter (string) {
  return string.replace(/\n/g, " ").split(' ').map(Number);
}

function findSubsequents (input) {
  var arr = stringConverter(input).slice(2);
  var N = stringConverter(input)[0];
  var K = stringConverter(input)[1];
  
  function reallyFindSubsequents(N, K, arr) {
    let count = 0;
    let windowStart = 0;
    let windowEnd = K;

    for (let a = 0; a < N - K + 1; a++) {
      // all non-decreasing instances of a window
      for (let i = windowStart; i < windowEnd; i++) {
        for (let j = i + 1; j < windowEnd; j++) {
          if (arr[j] > arr[j - 1]) {
            count++;
          } else {
            // if subarray arr[i...j] is not strictly increasing, then subarrays after it cannot be increasing either
            break;
          }
        }
      }

      // all non-increasing instances of a window
      for (let i = windowStart; i < windowEnd; i++) {
        for (let j = i + 1; j < windowEnd; j++) {
          if (arr[j] < arr[j - 1]) {
            count--;
          } else {
            // if subarray arr[i...j] is not strictly decreasing, then subarrays after it cannot be increasing either
            break;
          }
        }
      }

      // output for each window, reset the count window indecies after
      console.log(count);
      count = 0;
      windowStart++;
      windowEnd++;
    }
  }

  reallyFindSubsequents(N, K, arr);
}

console.log(findSubsequents('5 3 188930 194123 201345 154243 154243')) // 3, 0 -1
console.log(findSubsequents('3 3 1 2 3')) // 3
console.log(findSubsequents('4 4 1 2 5 6')) // 4
console.log(findSubsequents('3 3 3 2 1')) // -3
console.log(findSubsequents('6 3 100 200 300 400 1 1')) // 3, 3, 0, -1
console.log(findSubsequents('7 4 100000 900 1 1 2 200000 200000')) // -3, 0, 3, 3