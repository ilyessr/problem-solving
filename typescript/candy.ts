/*

There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.


*/

/**
 * This function takes an array of children's ratings as input and returns the total number of candies distributed according to the following rules:
 * The first pass adjusts the number of candies based on increasing ratings, while the second pass adjusts candies from right to left to ensure that a child with a higher rating than their right neighbor receives at least one more candy than that neighbor.
 *
 * @param {number[]} ratings - An array representing the ratings of children.
 * @returns {number} - The total number of candies distributed.
 */
function candy(ratings) {
  const n = ratings.length;
  let candies = new Array(n).fill(1);

  // First pass from left to right
  for (let i = 0; i < n - 1; i++) {
    if (ratings[i] < ratings[i + 1]) {
      candies[i + 1] = candies[i] + 1;
    }
  }

  // Second pass from right to left
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
      candies[i] = candies[i + 1] + 1;
    }
  }

  // Calculate total candies
  let total = candies.reduce((acc, val) => acc + val, 0);
  return total;
}
