/*Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

*/

// function majorityElement(nums: number[]): number {
//   const dict: Record<number, number> = {};

//   for (let i = 0; i < nums.length; i++) {
//     dict[nums[i]] = (dict[nums[i]] || 0) + 1;
//   }

//   const maxEntry = Object.entries(dict).reduce((max, current) => {
//     return max[1] > current[1] ? max : current;
//   }, Object.entries(dict)[0]);

//   return parseInt(maxEntry[0]);
// }

// Algorithme de Boyer-Moore
function majorityElement(nums: number[]): number | null {
  let candidate: number | null = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    if (candidate === num) {
      count += 1;
    } else {
      count -= 1;
    }
  }

  count = 0;

  for (let num of nums) {
    if (num === candidate) {
      count += 1;
    }
  }
  if (count > Math.floor(nums.length / 2)) {
    return candidate;
  }

  return null;
}

// Tests
console.log(majorityElement([3, 2, 3]) === 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]) === 2);
console.log(majorityElement([1]) === 1);
