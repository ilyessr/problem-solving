/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
The order of the elements may be changed. 
Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. 
The remaining elements of nums are not important as well as the size of nums.
Return k.

https://leetcode.com/problems/remove-element

*/

function removeElement(nums: number[], val: number): number {
  // Index for elements not equal to val
  let j: number = 0;

  let initialSize = nums.length;

  // Update the array in-place
  for (let i = 0; i < initialSize; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
  }

  // Adjust the length of the array to contain only valid values
  nums.length = j;

  return j;
}

let nums1 = [3, 2, 2, 3];
let val1 = 3;
let result1 = removeElement(nums1, val1);
console.log(result1 === 2); // true
console.log(nums1); // [2, 2]

let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;
let result2 = removeElement(nums2, val2);
console.log(result2 === 5); // true
console.log(nums2); // [0, 1, 3, 0, 4]
