const calculator = require("./calculator");

test("check calculator for proper arithmetic", () => {
  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.subtract(1, 1)).toBe(0);
  expect(calculator.multiply(2 ,2)).toBe(4);
  expect(calculator.divide(2, 2)).toBe(1);
})