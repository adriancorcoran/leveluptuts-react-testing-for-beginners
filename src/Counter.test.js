import React from "react";
// clean up cleans up the dom tree after testing
import { render, cleanup, fireEvent } from "react-testing-library";
import Counter from "./Counter";

// runs after each test and resets the data for the next test
afterEach = cleanup;

// test the Counter component
test(<Counter />, () => {
  // const wrapper = render(<Counter />);
  const { debug, getByTestId } = render(<Counter />);

  // show the tree so far
  // wrapper.debug();
  debug();

  // get the button
  const counterButton = getByTestId("counter-button");

  // test this
  // expect(wrapper.getByText('0').tagName).toBe('BUTTON');
  // expect(wrapper.getByTestId('counter-button').tagName).toBe('BUTTON');
  // expect(wrapper.getByTestId('counter-button').textContent).toBe('0');

  // assert it's a BUTTON
  expect(counterButton.tagName).toBe("BUTTON");
  // assert it starts at 0
  expect(counterButton.textContent).toBe("0");

  // click the button
  fireEvent.click(counterButton);
  expect(counterButton.textContent).toBe("1");

  // click the button
  fireEvent.click(counterButton);
  expect(counterButton.textContent).toBe("2");

  // show the tree so far
  debug();
});
