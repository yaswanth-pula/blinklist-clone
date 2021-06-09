import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import InputField from "./";

describe("Atoms > InputField", () => {
  test("Renders Input Field Component", () => {
    render(<InputField type="text" />);
    const textInputEle = screen.getByRole("textbox");
    expect(textInputEle).toBeInTheDocument();
    expect(textInputEle).toHaveAttribute("type", "text");
  });

  test("Renders Number Input Field ", () => {
    render(<InputField type="number" />);

    const numInputEle = screen.getByRole("spinbutton");
    expect(numInputEle).toHaveAttribute("type", "number");
  });

  test("can take string values", () => {
    const changeHandler = jest.fn();
    render(<InputField type="text" changeHandler={changeHandler} />);
    const textInputEle = screen.getByRole("textbox");

    expect(textInputEle).toBeInTheDocument();
    fireEvent.change(textInputEle, {
      target: { value: "test string" },
    });

    expect(changeHandler).toHaveBeenCalledTimes(1);
    expect(textInputEle).toHaveValue("test string");
  });

  test("can take number values", () => {
    const changeHandler = jest.fn();
    render(<InputField type="number" changeHandler={changeHandler} />);
    const numInputEle = screen.getByRole("spinbutton");

    fireEvent.change(numInputEle, {
      target: { value: 10 },
    });
    expect(changeHandler).toHaveBeenCalledTimes(1);
    expect(numInputEle).toHaveValue(10);
  });

  test("id prop check", () => {
    const testId = "test-input-field";
    render(<InputField type="text" id={testId} />);
    const textInputEle = screen.getByRole("textbox");
    expect(textInputEle).toHaveAttribute("id", testId);
  });

  test("max length prop check", () => {
    const testMaxLength = "25";
    render(<InputField type="text" maxLength={testMaxLength} />);
    const textInputEle = screen.getByRole("textbox");
    expect(textInputEle).toHaveAttribute("maxLength", testMaxLength);
  });

  test("placeholder prop check", () => {
    const testPlaceHolder = "test input placeholder";
    render(<InputField type="text" placeholder={testPlaceHolder} />);
    const textInputEle = screen.getByRole("textbox");
    expect(textInputEle).toHaveAttribute("placeholder", testPlaceHolder);
  });
});
