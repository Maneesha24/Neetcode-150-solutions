/**
 * @author maneeshavenigalla
 * Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
 * Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the
 * pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour. Koko likes to eat slowly but still
 * wants to finish eating all the bananas before the guards return. Return the minimum integer k such that she can eat all the bananas within h hours.
 * Time complexity - O(N * log(M))
 * Space complexity - O(1)
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let result = 0;

  let left = 1;
  let right = Math.max(...piles);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let hoursTaken = 0;

    for (const pile of piles) {
      hoursTaken += Math.ceil(pile / mid);
    }

    if (hoursTaken <= h) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
};

module.exports = minEatingSpeed;
