const minMeetingRooms = require("./index.js");

test("should pass all test conditions", () => {
  expect(
    minMeetingRooms([
      [0, 30],
      [5, 10],
      [15, 20],
    ])
  ).toEqual(2);
  expect(
    minMeetingRooms([
      [7, 10],
      [2, 4],
    ])
  ).toEqual(1);
});
