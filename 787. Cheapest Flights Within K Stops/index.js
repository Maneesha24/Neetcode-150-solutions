/**
 * @author maneeshavenigalla
 * There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei. 
 * You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
const findCheapestPrice = (n, flights, src, dst, k) => {
    let prices = new Array(n).fill(Infinity);
    prices[src] = 0;

    for (let i = 0; i <= k; i++) {
        let tempPrices = [...prices];

        for (const [source, dest, price] of flights) {

            if (prices[source] === Infinity) {
                continue;
            }

            if (prices[source] + price < tempPrices[dest]) {
                tempPrices[dest] = prices[source] + price;
            }

        }

        prices = tempPrices;
    }

    return prices[dst] === Infinity ? - 1 : prices[dst];

};

module.exports = findCheapestPrice;