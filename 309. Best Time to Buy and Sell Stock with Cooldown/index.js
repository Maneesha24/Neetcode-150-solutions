/**
 * @author maneeshavenigalla
 * You are given an array prices where prices[i] is the price of a given stock on the ith day. Find the maximum profit you can achieve. You may complete 
 * as many transactions as you like (i.e., buy one and sell one  share of the stock multiple times) with the following restrictions: After you sell your stock, 
 * you cannot buy stock on the next day (i.e., cooldown one day). Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {

    const dp = {};

    const dfs = (i, isBuying) => {
        if (i >= prices.length) {
            return 0;
        }

        const key = `${i}-${isBuying}`;
        if (key in dp) {
            return dp[key];
        }

        const cooldown = dfs(i + 1, isBuying);
        if (isBuying) {
            const buy = dfs(i + 1, !isBuying) - prices[i];
            dp[key] = Math.max(buy, cooldown);
        } else {
            const sell = dfs(i + 2, !isBuying) + prices[i];
            dp[key] = Math.max(sell, cooldown);
        }

        return dp[key];


    }

    return dfs(0, true);

};

module.exports = maxProfit;