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
  const { debug, getByTestId, queryByTestId, container, getByText } = render(
    <NewMovie />
  );
  expect(getByTestId("page-title").textContent).toBe("New Movie");
  expect(queryByTestId("movie-form")).toBeTruthy();

  // snapshot testing is checking the html oto see if something changed
  // container returns the html structure of the page
  // console.log(container.firstChild);
  // matching snapshot creates a html snapshot in the /src/__snapshots__ directory
  // subsequent changing of the html will make the snapshot fail, letting you know something has changed
  // - could be the htmle structure, could be a typo
  // - you can fix the error or press "u" in the console to update the snapshot
  expect(container.firstChild).toMatchSnapshot();

  // check form is submitting properly
  fireEvent.click(getByText("Submit"));

  // debug();
});
