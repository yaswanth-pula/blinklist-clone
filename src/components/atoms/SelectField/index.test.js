import React from "react";
import { render, screen } from "@testing-library/react";
import SelectField from "./";
import userEvent from "@testing-library/user-event";

describe("SelectField", () => {
  let testOptions = ["science", "history", "politics"];
  const mockHandler = jest.fn();

  test("render select component", () => {
    render(<SelectField options={testOptions} changeHandler={mockHandler} />);

    const selectEle = screen.getByRole("combobox");
    expect(selectEle).toBeInTheDocument();
  });

  test("can select option", () => {
    render(<SelectField options={testOptions} changeHandler={mockHandler} />);
    const selectEle = screen.getByRole("combobox");

    expect(selectEle).not.toHaveValue(testOptions[2]);
    userEvent.selectOptions(selectEle, testOptions[2]);
    expect(selectEle).toHaveValue(testOptions[2]);
  });

  test("error prop check", () => {
    let testErrorText = "test error text";

    render(
      <SelectField
        options={testOptions}
        changeHandler={mockHandler}
        isError={true}
        errorText={testErrorText}
      />
    );

    const selectEle = screen.getByRole("combobox");
    expect(selectEle).toBeInTheDocument();

    const errorTextEle = screen.getByText(testErrorText);
    expect(errorTextEle).toBeInTheDocument();

    expect(errorTextEle).toHaveTextContent(testErrorText);
  });
});
