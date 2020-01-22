import React from "react";
// clean up cleans up the dom tree after testing
import { render, cleanup } from "react-testing-library";
import Counter from "./Counter";

// test the Counter component
test(<Counter />, () => {
  // const wrapper = render(<Counter />);
  const { debug, getByTestId } = render(<Counter />);

  // show the tree so far
  // wrapper.debug();
  debug();

  // test this
  // expect(wrapper.getByText("0").tagName).toBe("BUTTON");
  // expect(wrapper.getByTestId("counter-button").tagName).toBe("BUTTON");
  // expect(wrapper.getByTestId("counter-button").textContent).toBe("0");

  // assert it's a BUTTON
  expect(getByTestId("counter-button").tagName).toBe("BUTTON");
  // assert it starts at 0
  expect(getByTestId("counter-button").textContent).toBe("0");
});
