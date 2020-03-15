import React from "react";
// clean up cleans up the dom tree after testing
import { render, cleanup } from "react-testing-library";
import Movie from "./Movie";

// runs after each test and resets the data for the next test
afterEach = cleanup;

console.error = jest.fn();

test("<Movie />", () => {
  render(<Movie />);
  expect(console.error).toBeCalled();
  // debug();
});
