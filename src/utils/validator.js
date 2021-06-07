const noErrorObject = { isError: false, errorMessage: "" };
export const checkForEmptyValue = (currentString) => {
  let errorMessage = "cannot be empty";
  if (currentString === "")
    return { isError: true, errorMessage: errorMessage };

  return noErrorObject;
};

export const checkReadTime = (currentTime) => {
  let emptyCheck = checkForEmptyValue(currentTime);
  if (emptyCheck.isError) return emptyCheck;

  let errorMessage = "cannot be greater than 60 Minutes";
  if (Number(currentTime) > 60)
    return { isError: true, errorMessage: errorMessage };

  return noErrorObject;
};

export const checkValidUrl = (currentUrl) => {
  let emptyCheck = checkForEmptyValue(currentUrl);
  if (emptyCheck.isError) return emptyCheck;

  let errorMessage = "invalid url";
  if (!(currentUrl.startsWith("http://") || currentUrl.startsWith("https://")))
    return { isError: true, errorMessage: errorMessage };

  return noErrorObject;
};
