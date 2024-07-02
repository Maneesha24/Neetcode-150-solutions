/**
 * @author maneeshavenigalla
 * You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.  
 * All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has 
 * the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"] 
 * You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.
 * @param {string[][]} tickets
 * @return {string[]}
 */
const findItinerary = (tickets) => {

    let result = [];
    let adjacencyList = {};

    for (const [source, dest] of tickets) {
        if (source in adjacencyList) {
            adjacencyList[source].push(dest);
        } else {
            adjacencyList[source] = [dest];
        }
    }

    for (const key in adjacencyList) {
        adjacencyList[key].sort();
    }

    const dfs = (source) => {
        if (source in adjacencyList) {
            let destinations = adjacencyList[source];

            while (destinations.length > 0) {
                let des = destinations.shift();
                dfs(des);
            }
        }

        result.push(source);
    }

    dfs("JFK");

    result.reverse();
    return result;

};

module.exports = findItinerary;