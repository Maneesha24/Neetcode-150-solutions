/**
 * @author maneeshavenigalla
 * You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons. 
 * If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. If i - 1 or i + 1 goes out of bounds of the array, then treat it as if there is a 
 * balloon with a 1 painted on it. Return the maximum coins you can collect by bursting the balloons wisely.
 * @param {number[]} nums
 * @return {number}
 */
const maxCoins = (nums) => {
    const cache = new Map();
    const numsCopy = [1, ...nums, 1];

    for (let offset = 2; offset < numsCopy.length; offset++) {
        for (let left = 0; left < numsCopy.length - offset; left++) {
            let right = left + offset;

            for (let pivot = left + 1; pivot < right; pivot++) {
                let coins = numsCopy[left] * numsCopy[pivot] * numsCopy[right];
                coins += cache.get(`${left}-${pivot}`) || 0;
                coins += cache.get(`${pivot}-${right}`) || 0;

                cache.set(`${left}-${right}`, Math.max(coins, cache.get(`${left}-${right}`) || 0));
            }
        }
    }

    return cache.get(`0-${numsCopy.length - 1}`) || 0;
};

module.exports = maxCoins;