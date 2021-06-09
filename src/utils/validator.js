const noErrorObject = { isError: false, errorMessage: "" };

export const isEmptyString = (currentString) => {
  return currentString === "";
};

export const checkForEmptyValue = (currentString) => {
  if (isEmptyString(currentString.trim()))
    return { isError: true, errorMessage: "cannot be empty" };

  return noErrorObject;
};

export const checkReadTime = (currentTime) => {
  currentTime = currentTime.trim();
  let emptyCheck = checkForEmptyValue(currentTime);
  if (emptyCheck.isError) return emptyCheck;

  if (Number(currentTime) > 60)
    return { isError: true, errorMessage: "cannot be greater than 60 Minutes" };

  if (Number(currentTime) <= 0)
    return { isError: true, errorMessage: "cannot be Less than 1 Minute" };

  return noErrorObject;
};

export const checkValidUrl = (currentUrl) => {
  currentUrl = currentUrl.trim();
  let emptyCheck = checkForEmptyValue(currentUrl);
  if (emptyCheck.isError) return emptyCheck;
  if (!(currentUrl.startsWith("http://") || currentUrl.startsWith("https://")))
    return { isError: true, errorMessage: "invalid url" };

  return noErrorObject;
};
