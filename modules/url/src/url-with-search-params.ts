import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Creates a function that returns a URL with additional search parameters
 *
 * @param additionalSearchParams Additional search parameters
 * @returns Function that returns a URL with additional search parameters
 */
export function urlWithSearchParams(
  additionalSearchParams: URLSearchParams | ReadonlyRecord<string, string>
): (url: URL) => URL {
  const additionalParams =
    additionalSearchParams instanceof URLSearchParams
      ? Object.fromEntries(additionalSearchParams.entries())
      : additionalSearchParams;
  return url => {
    const existingParams = Object.fromEntries(url.searchParams.entries());
    const searchParams = new URLSearchParams({ ...existingParams, ...additionalParams });
    const newUrl = new URL(url.origin + url.pathname + '?' + searchParams.toString());
    return newUrl;
  };
}
