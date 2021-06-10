import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Link from "./";

describe("Link", () => {
  test("Renders Link Component", () => {
    render(<Link text="test-link" />);
    screen.getByText("test-link");
  });

  test("Can handle click", () => {
    const clickHandler = jest.fn();
    render(<Link text="test-link" clickHandler={clickHandler} />);
    const testLinkEle = screen.getByText("test-link");

    fireEvent.click(testLinkEle);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
