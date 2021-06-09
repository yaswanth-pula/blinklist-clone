import React from "react";
import FormInputField from "./";
import { render, screen } from "@testing-library/react";

describe("Form InputField", () => {
  const testLabel = "test FormInputField label";

  test("render component", () => {
    let testInputId = "test-input-id";
    render(<FormInputField label={testLabel} id={testInputId} />);

    screen.getByText(testLabel);

    const inputFieldTextEle = screen.getByRole("textbox");
    expect(inputFieldTextEle).toHaveAttribute("id", testInputId);
  });

  test("error prop check", () => {
    let testErrorText = "test form input field error text";
    render(
      <FormInputField
        label={testLabel}
        isError={true}
        errorText={testErrorText}
      />
    );

    screen.getByText(testErrorText);
  });
});
