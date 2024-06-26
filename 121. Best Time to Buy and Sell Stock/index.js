/**
 * @author maneeshavenigalla
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the
 * future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (const price of prices) {
    minPrice = Math.min(price, minPrice);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;
};

module.exports = maxProfit;
