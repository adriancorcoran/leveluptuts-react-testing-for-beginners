import React from "react";
// waitForElement - waits for a little bit for an element to be on the screen
// but fails the test eventually
import {
  render,
  cleanup,
  waitForElement,
  getByText
} from "react-testing-library";
import MovieDetail, { POSTER_PATH } from "./MovieDetail";

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

const movie = {
  id: "movie-id",
  title: "Movie Title",
  release_date: "2020-03-20",
  overview: "Overview of the movie",
  poster_path: "movie-image.jpg"
};

test("<MovieDetail />", async () => {
  // works but we are waiting for the data while the view renders empty
  // and what we test is what's onscreen
  fetch.mockResponseOnce(JSON.stringify(movie));
  const { debug, getByText, getByTestId } = render(
    <MovieDetail match={match} />
  );
  await waitForElement(() => getByText(movie.title));
  expect(getByTestId("movie-title").textContent).toBe(movie.title);
  expect(getByTestId("movie-release-date").textContent).toBe(
    movie.release_date
  );
  expect(getByTestId("movie-overview").textContent).toBe(movie.overview);
  expect(getByTestId("movie-poster").src).toBe(
    `${POSTER_PATH}${movie.poster_path}`
  );

  // debug();
});
