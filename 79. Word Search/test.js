const exist = require("./index.js");

test("should pass all test conditions", () => {
  expect(
    exist(
      [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      "ABCCED"
    )
  ).toBe(true);
  expect(
    exist(
      [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      "SEE"
    )
  ).toBe(true);
  expect(
    exist(
      [
        ["A", "B", "C", "D"],
        ["S", "A", "A", "T"],
        ["A", "C", "A", "E"],
      ],
      "BAT"
    )
  ).toBe(false);

  expect(
    exist(
      [
        ["C", "A", "A"],
        ["A", "A", "A"],
        ["B", "C", "D"],
      ],
      "AAB"
    )
  ).toBe(true);
});
