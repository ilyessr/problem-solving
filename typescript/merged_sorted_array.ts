/* You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

https://leetcode.com/problems/merge-sorted-array

*/

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let index1: number = m - 1;
  let index2: number = n - 1;
  let mergedIndex: number = m + n - 1;

  while (index2 >= 0) {
    // Vérifie si index1 est négatif pour éviter d'accéder à un élément hors des limites.
    if (index1 >= 0 && nums1[index1] >= nums2[index2]) {
      nums1[mergedIndex] = nums1[index1];
      index1 -= 1;
    } else {
      nums1[mergedIndex] = nums2[index2];
      index2 -= 1;
    }
    mergedIndex -= 1;
  }
}
