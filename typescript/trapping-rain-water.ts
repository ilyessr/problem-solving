/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it can trap after raining.

https://leetcode.com/problems/trapping-rain-water
*/

/**
 * Calculates the amount of water trapped after raining.
 * @param {number[]} height - Array of non-negative integers representing the histogram heights.
 * @return {number} - Total amount of trapped water.
 */
function trap(height: number[]): number {
  // If the histogram is empty, no water is trapped
  if (height.length === 0) return 0;

  const n: number = height.length;
  // Arrays to store the maximum heights to the left and right of each bar
  const leftMax: number[] = new Array(n).fill(0);
  const rightMax: number[] = new Array(n).fill(0);

  // Fill the leftMax array
  leftMax[0] = height[0]; // Initialize the first element with the height of the first bar
  for (let i = 1; i < n; i++) {
    // The max height to the left of bar i is the max of the height of bar i and the max height to the left of bar i-1
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  // Fill the rightMax array
  rightMax[n - 1] = height[n - 1]; // Initialize the last element with the height of the last bar
  for (let i = n - 2; i >= 0; i--) {
    // The max height to the right of bar i is the max of the height of bar i and the max height to the right of bar i+1
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  // Calculate the trapped water
  let trappedWater: number = 0;
  for (let i = 0; i < n; i++) {
    // Water above bar i is the min of the max heights to its left and right minus the height of bar i
    trappedWater += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  // Return the total amount of trapped water
  return trappedWater;
}

// Example usage
const elevationMap: number[] = [0, 2, 0, 3, 0, 1];
console.log(trap(elevationMap)); // Outputs 3
