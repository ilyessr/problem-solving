/*

Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

According to the definition of h-index on Wikipedia: 
The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

https://leetcode.com/problems/h-index
*/
function hIndex(citations: number[]): number {
  let h: number = 0;
  // Sorts the table in descending order, making it easier to check if a citation is greater than or equal to its index.
  citations = citations.sort((a, b) => b - a);
  while (h < citations.length && citations[h] >= h + 1) {
    h++;
  }
  return h;
}
