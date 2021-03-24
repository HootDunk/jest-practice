import { encodeCaesar } from "./caesarCipher"

test("testing caesar cipher across different inputs", () => {
  expect(encodeCaesar(1, "A")).toBe("B");
  expect(encodeCaesar(1, "A!")).toBe("B!")
  expect(encodeCaesar(27, "A")).toBe("B");
  expect(encodeCaesar(26, "z")).toBe("z");
  expect(encodeCaesar(2, "Hello There!")).toBe("Jgnnq Vjgtg!")
})