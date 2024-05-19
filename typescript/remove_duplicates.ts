/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially.
The remaining elements of nums are not important as well as the size of nums.
Return k.

https://leetcode.com/problems/remove-duplicates-from-sorted-array
*/

function removeDuplicates(nums: number[]): number {
  let j = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[j++] = nums[i];
    }
  }

  nums.length = j;

  return nums.length;
}

// Tests
let nums;
let result;

nums = [1, 1, 2];
result = removeDuplicates(nums);
console.log(result === 2); // Expected true
console.log(nums.slice(0, result)); // Expected [1, 2]

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
result = removeDuplicates(nums);
console.log(result === 5); // Expected true
console.log(nums.slice(0, result)); // Expected [0, 1, 2, 3, 4]

nums = [1, 2, 3];
result = removeDuplicates(nums);
console.log(result === 3); // Expected true
console.log(nums.slice(0, result)); // Expected [1, 2, 3]
