import {
  checkForEmptyValue,
  checkReadTime,
  checkValidUrl,
  isEmptyString,
} from "./validator";
describe("utils > validator", () => {
  const noErrorObject = { isError: false, errorMessage: "" };
  const emptyValueErrorObject = {
    isError: true,
    errorMessage: "cannot be empty",
  };

  test("fn isEmptyString returns true for empty string", () => {
    const testString = "";
    expect(isEmptyString(testString)).toEqual(true);
  });

  test("fn isEmptyString returns false for non empty string", () => {
    const testString = "non empty string";
    expect(isEmptyString(testString)).toEqual(false);
  });

  test("fn checkForEmptyValue returns emptyValueError object for empty value", () => {
    expect(checkForEmptyValue("")).toEqual(emptyValueErrorObject);
  });

  test("fn checkForEmptyValue returns noError object for non empty value", () => {
    expect(checkForEmptyValue("non empty string")).toEqual(noErrorObject);
  });

  test("fn checkReadTime returns emptyValueError object for empty value", () => {
    expect(checkReadTime("")).toEqual(emptyValueErrorObject);
  });

  test("fn checkReadTime returns greaterErrorObject for greater than 60 value", () => {
    let greaterErrorObject = {
      isError: true,
      errorMessage: "cannot be greater than 60 Minutes",
    };
    expect(checkReadTime("75")).toEqual(greaterErrorObject);
  });

  test("fn checkReadTime returns lesserErrorObject for less than 0 value", () => {
    let lesserErrorObject = {
      isError: true,
      errorMessage: "cannot be Less than 1 Minute",
    };
    expect(checkReadTime("-13")).toEqual(lesserErrorObject);
  });

  test("fn checkReadTime returns noError object for 0 to 60 range value", () => {
    expect(checkReadTime("25")).toEqual(noErrorObject);
  });

  test("fn checkValidUrl returns emptyValueError object for empty value", () => {
    expect(checkValidUrl("")).toEqual(emptyValueErrorObject);
  });

  test("fn checkValidUrl returns invalidErrorObject for invalid url", () => {
    let invalidErrorObject = { isError: true, errorMessage: "invalid url" };
    expect(checkValidUrl("not-url-string")).toEqual(invalidErrorObject);
  });

  test("fn checkValidUrl returns noErrorObject for valid url", () => {
    expect(checkValidUrl("https://imdb.com")).toEqual(noErrorObject);
    expect(checkValidUrl("http://")).toEqual(noErrorObject);
  });
});
