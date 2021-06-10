import React from "react";
import { render, screen } from "@testing-library/react";
import Text from "./";

describe("Atoms > Text ", () => {
  test("Renders Text Component", () => {
    const testContent = "Test content";
    render(<Text content={testContent} />);

    screen.getByText(testContent);
  });
});
