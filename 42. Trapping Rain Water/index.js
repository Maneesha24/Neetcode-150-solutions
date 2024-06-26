/**
 * @author maneeshavenigalla
 * Given n non-negative integers representing an elevation map where the width of each bar is 1,
 * compute how much water it can trap after raining.
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
  let left = 0;
  let right = height.length - 1;

  let maxLeft = 0,
    maxRight = 0,
    area = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      maxLeft = Math.max(maxLeft, height[left]);
      area += maxLeft - height[left];
      left++;
    } else {
      maxRight = Math.max(maxRight, height[right]);
      area += maxRight - height[right];
      right--;
    }
  }

  return area;
};

module.exports = trap;
