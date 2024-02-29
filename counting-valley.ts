/*
Problem : Counting Valleys
----------------------------------------------------------------------------------------------------------
*/

/**
 * Counts the number of valleys traversed in a path.
 * A valley is defined as a sequence of steps below sea level,
 * followed by a step up to sea level. See more : https://www.hackerrank.com/challenges/counting-valleys/problem
 * @param steps The total number of steps in the path.
 * @param path An array of characters representing each step in the path ('U' for uphill, 'D' for downhill).
 * @returns The number of valleys traversed in the path.
 */
function countingValleys(steps: number, path: string[]): number {
  let seaLevel = 0;
  let valleys = 0;
  let inValley = false;

  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      seaLevel++;
    } else {
      seaLevel--;
    }

    if (!inValley && seaLevel < 0) {
      inValley = true;
    }

    if (inValley && seaLevel === 0) {
      valleys++;
      inValley = false;
    }
  }

  return valleys;
}

const steps1 = 8;
const path1 = ["U", "D", "D", "D", "U", "D", "U", "U"];
const expectedResult1 = 1; // Only one valley is traversed in the path
console.log(countingValleys(steps1, path1) === expectedResult1); // Expected output: true

const steps2 = 12;
const path2 = ["D", "D", "U", "U", "D", "D", "U", "D", "U", "U", "U", "D"];
const expectedResult2 = 2; // Two valleys are traversed in the path
console.log(countingValleys(steps2, path2) === expectedResult2); // Expected output: true
