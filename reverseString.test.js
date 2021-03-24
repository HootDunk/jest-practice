const reverseString = require("./reverseString");

test("The word 'Hello' should now be 'olleH'", () => {
  expect(reverseString("Hello")).toBe("olleH");
});

