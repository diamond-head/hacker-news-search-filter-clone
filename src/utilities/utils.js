import {
  YEARS_IN_SECONDS,
  MINUTE_IN_SECONDS,
  MONTH_IN_SECONDS,
  DAY_IN_SECONDS,
  HOUR_IN_SECONDS,
  WEEK_IN_SECONDS,
} from "./constants";

export const timeSince = (input) => {
  const now = new Date().getTime();
  const seconds = Math.floor((now - input * 1000) / 1000);
  let interval = seconds / YEARS_IN_SECONDS;
  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }

  interval = seconds / MONTH_IN_SECONDS;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }

  interval = seconds / WEEK_IN_SECONDS;
  if (interval > 1) {
    return Math.floor(interval) + " weeks ago";
  }

  interval = seconds / DAY_IN_SECONDS;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }

  interval = seconds / HOUR_IN_SECONDS;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }

  interval = seconds / MINUTE_IN_SECONDS;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }

  return Math.floor(seconds) + " seconds ago";
};

export function debounce(func, delay) {
  let timeoutID = null;

  return function () {
    clearTimeout(timeoutID);

    let args = arguments;
    let context = this;

    timeoutID = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
}

export function escapeHtml (html = '') {
  if (!html) {
    return ''
  }

  const unsafeChars = [
    ['&amp;', '&'],
    ['&lt;', '<'],
    ['&gt;', '>'],
    ['&039;', `'`],
    ['&quot;', `"`],
    ['&#x2F;', '/'],
    ['&#x2f;', '/'],
    ['&#x27;', '`']
  ]

  return unsafeChars.reduce((acc, char) => acc.replaceAll(char[0], char[1]), html)
}