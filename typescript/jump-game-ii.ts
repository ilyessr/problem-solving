/*
You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

 

*/

function jump(nums: number[]): number {
  if (nums.length === 1) {
    return 0;
  }

  let jumps = 0; // Counter for the number of jumps made
  let farthest = 0; // The farthest position we can reach so far
  let currentEnd = 0; // The end of the current range we can reach with the jumps made so far

  // Iterate through each position in the array
  for (let i = 0; i < nums.length; i++) {
    // Update the farthest position reachable from the current position
    farthest = Math.max(farthest, i + nums[i]);

    // If we have reached the end of the current range
    if (i === currentEnd) {
      // Increase the jump counter
      jumps += 1;
      // Update the current end to be the farthest position reachable
      currentEnd = farthest;

      // If we have reached or exceeded the last position, we can stop
      if (currentEnd >= nums.length - 1) {
        break;
      }
    }
  }

  return jumps;
}

//Test
const nums1 = [2, 3, 1, 1, 4];
console.log(jump(nums1) == 2);

const nums2 = [1, 2, 3, 4, 5];
console.log(jump(nums2) == 3);

const nums3 = [6, 2, 4, 0, 5, 1, 1, 4, 2, 9];
console.log(jump(nums3) == 2);
