import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Text from "./";

afterEach(cleanup);

describe("Atoms > Text ", () => {
  test("Renders Text Component", () => {
    const testContent = "Test content";
    render(<Text content={testContent} />);
    const textComponent = screen.getByText(testContent);

    expect(textComponent).toBeInTheDocument();
    expect(textComponent).toHaveTextContent(testContent);
  });
});
