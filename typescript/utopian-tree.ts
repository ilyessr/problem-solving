/*
Problem : Utopian Tree
----------------------------------------------------------------------------------------------------------
The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.
A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. How tall will the tree be after n growth cycles?


 See more : https://www.hackerrank.com/challenges/utopian-tree/problem
 */

/**
 * Calculate the height of the Utopian Tree after a given number of growth cycles.
 * The Utopian Tree goes through 2 cycles of growth every year.
 * Each spring, it doubles in height.
 * Each summer, its height increases by 1 meter.
 * A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring.
 *
 * @param n The number of growth cycles
 * @returns The height of the Utopian Tree after `n` growth cycles
 */
function utopianTree(n: number): number {
  let height = 1; // Initial height of the sapling

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      // Spring: doubling the height
      height *= 2;
    } else {
      // Summer: increasing height by 1 meter
      height += 1;
    }
  }

  return height;
}

// Test Case 1: Height after 0 cycles should be 1
console.log(utopianTree(0) === 1);
// Test Case 2: Height after 1 cycle should be 2
console.log(utopianTree(1) === 2);
// Test Case 3: Height after 4 cycles should be 7
console.log(utopianTree(4) === 7);
