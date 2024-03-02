import { type HttpClientRequest } from '@komore/http/client';

/**
 * Returns an AWS canonical query string, given an HTTP client request
 *
 * @param httpClientRequest HTTP client request
 * @returns AWS canonical query string
 */
export function httpClientRequestToAwsCanonicalQueryString(httpClientRequest: HttpClientRequest): string {
  const { searchParams } = httpClientRequest.url;
  const entries = Array.from(searchParams.entries());
  const sortedEntries = entries.toSorted(([lhsName], [rhsName]) => lhsName.localeCompare(rhsName));
  return sortedEntries.map(searchParamEntryToFormattedValue).join('&');
}

/**
 * Returns a formatted value, given a search param entry
 *
 * @param searchParamEntry Search param entry
 * @returns Formatted value
 * @private
 */
function searchParamEntryToFormattedValue(searchParamEntry: readonly [name: string, value: string]): string {
  const [name, value] = searchParamEntry;
  return `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
}
