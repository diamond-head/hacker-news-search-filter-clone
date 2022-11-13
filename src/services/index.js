import { BASE_URL, createQueryString } from "./utils";

export async function requestNewsByDate(payload = {}) {
  const { query = "", filters = {}, page = 1 } = payload;
  const { tags = "", numericFilters = "" } = filters || {};
  const queryStringFields = {
    query,
    tags,
    page,
    numericFilters,
  };
  const queryString = createQueryString(queryStringFields);
  const url = BASE_URL + "/search_by_date" + queryString;

  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
}

export async function requestNewsByPopularity(payload = {}) {
  const { query = "", filters = {}, page = 1 } = payload;
  const { tags = "", numericFilters = "" } = filters || {};
  const queryStringFields = {
    query,
    tags,
    page,
    numericFilters,
  };

  const queryString = createQueryString(queryStringFields);
  const url = BASE_URL + "/search" + queryString;

  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
}
