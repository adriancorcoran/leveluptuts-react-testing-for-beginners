import { add, total } from "./App";

// Unit Test
// only tests one thing
test("add", () => {
  // const value = add(1, 2);
  // expect(value).toBe(3);
  expect(add(1, 2)).toBe(3);
  expect(add(5, 2)).toBe(7);
  expect(add(-5, 2)).toBe(-3);
});

// Integration Test
// code working together between components
test("total", () => {
  expect(total(5, 20)).toBe(`$25`);
});
