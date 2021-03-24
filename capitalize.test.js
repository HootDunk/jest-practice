const capitalize = require('./capitalize');

test("Expect returned string to be capitalized", () => {
  expect(capitalize("word")).toBe("Word");
});


// Matchers
/*
  .toBe() tests for exact equality
  .toEqual() recursively checks every field of an object or array.
  .not.toBe() tests for opposite of a matcher
  .toMatch() is used to test strings against regular expressions
    ^ useful for form field validation
  .toContain useful for checking if an array or iterable contains a particular item
*/