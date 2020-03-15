import React from "react";
// clean up cleans up the dom tree after testing
import { render, cleanup, fireEvent } from "react-testing-library";
import NewMovie from "./NewMovie";

// runs after each test and resets the data for the next test
afterEach = cleanup;

test("<NewMovie />", () => {
  // getByTestId will break if the elemnt is not found
  // queryByTestId may or may not find the element but won't break the test
  // you can use the assertion to specify whether finding the element is a good or bad thing
  const { debug, getByTestId, queryByTestId } = render(<NewMovie />);
  expect(getByTestId("page-title").textContent).toBe("New Movie");
  expect(queryByTestId("movie-form")).toBeTruthy();

  debug();
});
