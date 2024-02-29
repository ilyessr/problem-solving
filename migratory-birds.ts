/*
Problem : Migratory Birds
----------------------------------------------------------------------------------------------------------
Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. 
If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

 See more : https://www.hackerrank.com/challenges/migratory-birds/problem
 */

/**
 * Finds the most common type of bird in an array of bird sightings.
 * If there are multiple types of birds with the same maximum number of sightings,
 * it returns the type with the smallest ID number.
 * @param arr An array of integers representing the type of bird sighted (1, 2, 3, ..., n).
 * @returns The type of bird that is most commonly sighted.
 */
function migratoryBirds(arr: number[]): number {
  const dict: { [key: number]: number } = {};

  // Count the occurrences of each bird type
  for (let i = 0; i < arr.length; i++) {
    if (dict[arr[i]]) {
      dict[arr[i]]++;
    } else {
      dict[arr[i]] = 1;
    }
  }

  let mostCommonBird: number | null = null;
  let maxCount: number = 0;

  // Find the most common bird type
  for (const birdType of Object.keys(dict)) {
    const count = dict[parseInt(birdType)];
    if (
      count > maxCount ||
      (mostCommonBird &&
        count === maxCount &&
        parseInt(birdType) < mostCommonBird)
    ) {
      maxCount = count;
      mostCommonBird = parseInt(birdType);
    }
  }

  return mostCommonBird!;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]) === 4); // Expected output: 4

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]) === 3); // Expected output: 3
