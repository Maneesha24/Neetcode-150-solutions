const canAttendMeetings = require("./index.js");

test("should pass all the test conditions", () => {
  expect(
    canAttendMeetings([
      [0, 30],
      [5, 10],
      [15, 20],
    ])
  ).toEqual(false);
  expect(
    canAttendMeetings([
      [7, 10],
      [2, 4],
    ])
  ).toEqual(true);
  expect(
    canAttendMeetings([
      [7, 10],
      [2, 4],
    ])
  ).toEqual(true);
  expect(
    canAttendMeetings([
      [5, 8],
      [9, 15],
    ])
  ).toEqual(true);
});
