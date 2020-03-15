import React from "react";
// clean up cleans up the dom tree after testing
import { render, cleanup, fireEvent } from "react-testing-library";
import MovieForm from "./MovieForm";

// runs after each test and resets the data for the next test
afterEach = cleanup;

// const onSubmit = () => console.log(`hi`);
// by changing to use a jest mock function, it allows us to track (spy) that it was called
const onSubmit = jest.fn();

test("<MovieForm />", () => {
  // getByTestId will break if the elemnt is not found
  // queryByTestId may or may not find the element but won't break the test
  // you can use the assertion to specify whether finding the element is a good or bad thing
  const { debug, queryByTestId, getByText } = render(
    <MovieForm submitForm={onSubmit} />
  );
  expect(queryByTestId("movie-form")).toBeTruthy();

  // check form is submitting properly
  fireEvent.click(getByText("Submit"));

  // check it was clicked
  expect(onSubmit).toHaveBeenCalledTimes(1);

  // debug();
});
