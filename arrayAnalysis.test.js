import arrayAnalysis from "./arrayAnalysis";

test("test math accuracy of returned object values", () => {
  expect(arrayAnalysis([1,8,4,5,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  })
})