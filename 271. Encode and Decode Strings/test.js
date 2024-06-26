const { encode, decode } = require("./index.js");

test("should pass all test conditions", () => {
  const str = ["Hello World"];
  const encoded = encode(str);
  expect(decode(encoded)).toStrictEqual(str);
});
