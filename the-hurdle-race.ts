/*
Problem : The Hurdle Race
----------------------------------------------------------------------------------------------------------
 A video player plays a game in which the character competes in a hurdle race. 
 Hurdles are of varying heights, and the characters have a maximum height they can jump.
 There is a magic potion they can take that will increase their maximum jump height by unit for each dose. 
 How many doses of the potion must the character take to be able to jump all of the hurdles. 
 If the character can already clear all of the hurdles, return 0.

 See more : https://www.hackerrank.com/challenges/the-hurdle-race/problem
 */

/**
 * Calculates the minimum number of doses of a magic potion required for the character
 * to be able to jump over all the hurdles in the race.
 *
 * @param k - The maximum height the character can jump naturally.
 * @param height - An array containing the heights of each hurdle in the race.
 * @returns The minimum number of doses required, or 0 if no doses are needed.
 */
function hurdleRace(k: number, height: number[]): number {
  const maxHurdle = Math.max(...height);
  const dosesNeeded = Math.max(maxHurdle - k, 0);
  return dosesNeeded;
}

const height1 = [1, 6, 3, 5, 2];
const k1 = 4;
console.log(hurdleRace(k1, height1)); // Output: 2

const height2 = [2, 5, 4, 5, 2];
const k2 = 7;
console.log(hurdleRace(k2, height2)); // Output: 0
