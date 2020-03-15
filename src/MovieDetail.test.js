import React from "react";
// clean up cleans up the dom tree after testing
import { render, cleanup } from "react-testing-library";
import MovieDetail from "./MovieDetail";

// sets the fetch method for the entire test suite to come from the mock
global.fetch = require("jest-fetch-mock");

// runs after each test and resets the data for the next test
afterEach(() => {
  cleanup();
  // the mock console was called in the first test, so we need to reset it for the next test
  console.error.mockClear();
});

// mock the console error function to track it
console.error = jest.fn();

// fake data

const match = {
  params: {
    id: "faked-id"
  }
};

test("<MovieDetail />", () => {
  // works but we are waiting for the data while the view renders empty
  // and what we test is what's onscreen
  fetch.mockResponseOnce(
    JSON.stringify({
      movie: {
        id: "movie-id",
        title: "Movie Response"
      }
    })
  );
  const { debug } = render(<MovieDetail match={match} />);
});
