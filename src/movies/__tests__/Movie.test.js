import React from "react";
// clean up cleans up the dom tree after testing
import { render, cleanup } from "react-testing-library";
import { MemoryRouter } from "react-router-dom";
import Movie, { POSTER_PATH } from "../Movie";

// runs after each test and resets the data for the next test
afterEach(() => {
  cleanup();
  // the mock console was called in the first test, so we need to reset it for the next test
  console.error.mockClear();
});

// mock the console error function to track it
console.error = jest.fn();

test("<Movie />", () => {
  render(<Movie />);
  expect(console.error).toHaveBeenCalled();
});

const movie = {
  title: "My Movie",
  poster_path: "My_Poster.jpg",
  id: 23
};

test("<Movie /> with movie", () => {
  const { debug, getByTestId } = render(
    // this fakes the react router so we don't get the
    // "Invariant Violation: You should not use <Link> outside a <Router>" error
    <MemoryRouter>
      <Movie movie={movie} />
    </MemoryRouter>
  );
  expect(console.error).not.toHaveBeenCalled();

  // what do we test?
  // no need to test existence as getByTestId will do this by default

  //  don't use this as it will bring back the full path, which could change in different environments
  // expect(getByTestId('movie-link').href)

  //  brings back relative part of the link
  expect(getByTestId("movie-link").getAttribute("href")).toBe(`/${movie.id}`);
  expect(getByTestId("movie-img").src).toBe(
    `${POSTER_PATH}${movie.poster_path}`
  );
  // debug();
});
