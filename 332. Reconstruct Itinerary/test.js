const findItinerary = require("./index.js");

test("should pass the test cases", () => {
    expect(findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]])).toEqual(["JFK", "MUC", "LHR", "SFO", "SJC"]);
    expect(
        findItinerary([["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]])
    ).toEqual(["JFK", "ATL", "JFK", "SFO", "ATL", "SFO"]);
});
