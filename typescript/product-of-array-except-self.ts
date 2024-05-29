/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.


*/

function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  // Step 1: Calculate the products of all elements to the left of each index
  // Initialize the first element of answer array as 1 because there are no elements to the left of the first element
  // Iterate from the second element to the last element
  // For each element, multiply the product of all previous elements (stored in answer[i - 1]) with the previous element in nums (nums[i - 1])
  // Store the result in answer[i]
  for (let i = 1; i < n; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }

  // Step 2: Calculate the products of all elements to the right of each index and combine with the left products
  // Initialize right_product as 1 because there are no elements to the right of the last element
  let right_product = 1;
  // Iterate from the last element to the first element
  for (let i = n - 1; i >= 0; i--) {
    // Multiply the current value in answer[i] (which contains the product of all elements to the left) by right_product
    // This gives the product of all elements except the element at index i
    answer[i] *= right_product;
    // Update right_product to include the current element in nums
    right_product *= nums[i];
  }
  return answer;
}

const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // Output: [24, 12, 8, 6]
