/*

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
https://leetcode.com/problems/rotate-array

*/

// Complexité O(n x k) car la boucle s'exécute k fois, et que chaque itération coûte O(n)
// function rotate(nums: number[], k: number): void {
//   for (let i = 0; i < k; i++) {
//     const elementToAdd = nums.pop();
//     if (elementToAdd) {
//       nums.unshift(elementToAdd);
//     }
//   }
// }
//
//

// Reversal Algorithm for Array Rotation
function rotate(nums: number[], k: number): void {
  const n = nums.length;
  k = k % n; // Minimise rotation

  function reverse(array: number[], start: number, end: number) {
    while (start < end) {
      [array[start], array[end]] = [array[end], array[start]];
      //   const temp = array[start];
      //   array[start] = array[end];
      //   array[end] = temp;
      start++;
      end--;
    }
  }

  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);
}

// Tests
let nums: number[], k: number, expected: number[];

nums = [1, 2, 3, 4, 5, 6, 7];
k = 3;
expected = [5, 6, 7, 1, 2, 3, 4];
rotate(nums, k);
console.log(JSON.stringify(nums) === JSON.stringify(expected));

nums = [-1, -100, 3, 99];
k = 2;
rotate(nums, k);
expected = [3, 99, -1, -100];
console.log(JSON.stringify(nums) === JSON.stringify(expected));
