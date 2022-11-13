export const BASE_URL = process.env.REACT_APP_BASE_URL;

export function getRequestOptions(contentType) {
  const requestOptions = {
    headers: {
      "Content-Type": contentType || "application/json",
      Accept: "application/json",
    },
  };

  return requestOptions;
}

export function createQueryString(fields) {
  let QS = "";
  const qs = Object.keys(fields).reduce((p, c) => {
    return p + (!!fields[c] ? c + "=" + fields[c] + "&" : "");
  }, "");

  if (qs) {
    QS += "?" + qs.split("&").filter(Boolean).join("&");
  }
  return QS;
}
