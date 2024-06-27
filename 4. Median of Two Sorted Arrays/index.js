/**
 * @author maneeshavenigalla
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the
 * median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let A = nums1;
  let B = nums2;

  if (A.length > B.length) {
    [B, A] = [A, B];
  }

  let left = 0;
  let right = A.length;

  let total = A.length + B.length;
  let half = Math.floor((total + 1) / 2);

  while (left <= right) {
    let i = Math.floor((left + right) / 2);
    let j = half - i;

    let leftA = i > 0 ? A[i - 1] : -Infinity;
    let leftB = j > 0 ? B[j - 1] : -Infinity;

    let rightA = i < A.length ? A[i] : Infinity;
    let rightB = j < B.length ? B[j] : Infinity;

    if (leftA <= rightB && leftB <= rightA) {
      if (total % 2 != 0) {
        return Math.max(leftA, leftB);
      }

      return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2;
    } else if (leftA > rightB) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }

  return -1;
};

module.exports = findMedianSortedArrays;
