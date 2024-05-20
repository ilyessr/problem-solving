/* 
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. 
The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. 
More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. 
It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
*/

function removeDuplicates2(nums: number[]): number {
  let j = 1;
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count++;
    } else {
      count = 1;
    }

    if (count <= 2) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
}

// Test 1
let nums1 = [1, 1, 1, 2, 2, 3];
let k1 = removeDuplicates2(nums1);
console.log(k1 === 5);

// Test 2
let nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
let k2 = removeDuplicates2(nums2);
console.log(k2 === 7);

// Test 3
let nums3 = [1, 1, 1, 1, 1, 1];
let k3 = removeDuplicates2(nums3);
console.log(k3 === 2);
