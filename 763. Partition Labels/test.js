const partitionLabels = require("./index.js");

test("should pass all test conditions", () => {
    expect(partitionLabels("ababcbacadefegdehijhklij")).toEqual([9,7,8]);
    expect(partitionLabels("eccbbbbdec")).toEqual([10]);
});