export const SECOND = 1;
export const MINUTE_IN_SECONDS = SECOND * 60;
export const HOUR_IN_SECONDS = MINUTE_IN_SECONDS * MINUTE_IN_SECONDS;
export const DAY_IN_SECONDS = 24 * HOUR_IN_SECONDS;
export const WEEK_IN_SECONDS = 7 * DAY_IN_SECONDS;
export const MONTH_IN_SECONDS = 30 * DAY_IN_SECONDS;
export const YEARS_IN_SECONDS = 365 * DAY_IN_SECONDS;

export const filterEnums = Object.freeze({
  SEARCH_INPUT: "SEARCH_INPUT",
  SEARCH_X: "SEARCH_X",
  SEARCH_BY: "SEARCH_BY",
  SEARCH_FOR: "SEARCH_FOR",
});

export const defaultFilterValues = Object.freeze({
  [filterEnums.SEARCH_INPUT]: '',
  [filterEnums.SEARCH_X]: "story",
  [filterEnums.SEARCH_BY]: "DATE",
  [filterEnums.SEARCH_FOR]: "ALL",
});

export const SEARCH_X_OPTIONS = [
  { text: "All", value: "ALL" },
  { text: "Stories", value: "story" },
  { text: "Comments", value: "comment" },
];

export const SEARCH_BY_OPTIONS = [
  { text: "Date", value: "DATE" },
  { text: "Popularity", value: "POP" },
];

export const SEARCH_FOR_OPTIONS = [
  { text: "All time", value: "ALL" },
  { text: "Last 24h", value: Math.floor((new Date().getTime() - DAY_IN_SECONDS * 1000) / 1000) },
  { text: "Past Week", value: Math.floor((new Date().getTime() - WEEK_IN_SECONDS * 1000) / 1000) },
  { text: "Past Month", value: Math.floor((new Date().getTime() - MONTH_IN_SECONDS * 1000) / 1000) },
  { text: "Past Year", value: Math.floor((new Date().getTime() - YEARS_IN_SECONDS * 1000) / 1000) },
  // { text: "Custom range", value: "CUSTOM" },
];
