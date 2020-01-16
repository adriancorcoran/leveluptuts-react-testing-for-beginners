import React from "react";
// clean up cleans up the dom tree after testing
import { render, cleanup } from "react-testing-library";
import Counter from "./Counter";

// test the Counter component
test(<Counter />, () => {
  const wrapper = render(<Counter />);
  // show the tree so far
  wrapper.debug();
  // find a DOM node, then output it's content
  console.log(wrapper.getByText("0").textContent);
  // find what kind of elements is holding this
  console.log(wrapper.getByText("0").tagName);
  // test this
  expect(wrapper.getByText("0").tagName).toBe("BUTTON");
});
