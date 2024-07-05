/**
 * @author maneeshavenigalla
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. 
 * Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.
 * You may assume that you have an infinite number of each kind of coin.
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = (amount, coins) => {
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;

    for (let i = coins.length - 1; i >= 0; i--) {
        let nextDp = new Array(amount + 1).fill(0);
        nextDp[0] = 1;

        for (let a = 1; a <= amount; a++) {
            nextDp[a] = dp[a];

            if (a - coins[i] >= 0) {
                nextDp[a] += nextDp[a - coins[i]];
            }
        }


        dp = nextDp;
    }

    return dp[amount];

};

module.exports = change;