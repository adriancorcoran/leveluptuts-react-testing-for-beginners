import React from "react";
// waitForElement - waits for a little bit for an element to be on the screen
// but fails the test eventually
import {
  render,
  cleanup,
  waitForElement,
  getByText,
  getAllByTestId
} from "react-testing-library";
import { MemoryRouter } from "react-router-dom";
import MoviesList from "../MoviesList";

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

const movies = {
  results: [
    {
      id: 1,
      poster_path: "/image-01.jpg",
      title: "Title 1",
      overview: "Overview 1"
    },
    {
      id: 2,
      poster_path: "/image-02.jpg",
      title: "Title 2",
      overview: "Overview 2"
    },
    {
      id: 2,
      poster_path: "/image-03.jpg",
      title: "Title 3",
      overview: "Overview 3"
    }
  ]
};

test("<MoviesList />", async () => {
  // mock the api
  fetch.mockResponseOnce(JSON.stringify(movies));
  const { debug, getByTestId, queryByTestId, getAllByTestId, within } = render(
    // this fakes the react router so we don't get the
    // "Invariant Violation: You should not use <Link> outside a <Router>" error
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>
  );
  expect(getByTestId("loading")).toBeTruthy();
  await waitForElement(() => getByTestId("movie-link")); //  don't need to test for everything else, done in Movie.test.js
  expect(queryByTestId("loading")).toBeFalsy(); //  use queryByTestId cos this should no longer be on screen

  // check correct number of movies rendered
  expect(getAllByTestId("movie-link").length).toBe(movies.results.length);

  // debug();
});

test("<MoviesList /> api fail", async () => {
  // mock the api failing
  movies.success = false;
  // mock the api
  fetch.mockResponseOnce(JSON.stringify(movies));
  const { debug, getByTestId, queryByTestId, getAllByTestId, within } = render(
    // this fakes the react router so we don't get the
    // "Invariant Violation: You should not use <Link> outside a <Router>" error
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>
  );
  expect(getByTestId("loading")).toBeTruthy();
});
