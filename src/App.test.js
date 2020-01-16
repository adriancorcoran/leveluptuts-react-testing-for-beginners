import { total } from "./App";

// mock test: e.g. the add function calls an API,
// however in our tests we don't want to have to wait for that
// so we import the add function then mock the path so that the
// add function is not called
import { add } from "./add";

// mock the function
// can add multiple values to this as an object
jest.mock("./add", () => ({
  add: jest.fn(() => 25)
}));

// Integration Test
// code working together between components
test("total", () => {
  expect(total(5, 20)).toBe(`$25`);
  // we can check on calling the function cos it's a mock function
  expect(add).toHaveBeenCalledTimes(1);

  // redundant
  // now we can change the output of the mock function
  add.mockImplementation(() => 30);
  expect(total(5, 25)).toBe(`$30`);
  expect(add).toHaveBeenCalledTimes(2);
});
