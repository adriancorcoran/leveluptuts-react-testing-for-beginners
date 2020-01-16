import { add } from "./add";

// create mock function
// - useful for:
//    checking a function is called
//    calling a function when not available e.g. import or db call
// const add = jest.fn(() => 3); //  auto return 3

// Unit Test
// only tests one thing
test("add", () => {
  // const value = add(1, 2);
  // expect(value).toBe(3);
  expect(add(1, 2)).toBe(3);
  expect(add(5, 2)).toBe(7);
  expect(add(-5, 2)).toBe(-3);

  //  expect this function to be called this many times
  // expect(add).toHaveBeenCalledTimes(1);

  //  expect this function to be called with these params
  // expect(add).toHaveBeenCalledWith(1, 2);
});
