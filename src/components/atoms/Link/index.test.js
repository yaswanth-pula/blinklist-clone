import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Link from "./";

afterEach(cleanup);

describe("Link", () => {
  test("Renders Link Component", () => {
    render(<Link text="test-link" />);
    const testLinkEle = screen.getByText("test-link");
    expect(testLinkEle).toBeInTheDocument();
    expect(testLinkEle).toHaveTextContent("test-link");
  });

  test("Can handle click", () => {
    const clickHandler = jest.fn(() => {
      // console.log("link clicked");
    });
    render(<Link text="test-link" clickHandler={clickHandler} />);
    const testLinkEle = screen.getByText("test-link");

    fireEvent.click(testLinkEle);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
