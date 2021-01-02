import { createHttpClient, HttpClient } from '@komore/web/http';

/**
 * Loads a CSS style sheet
 * @param url URL
 * @param httpClient HTTP client
 * @returns CSS style sheet
 */
export function loadCssStyleSheet(url: string | URL, httpClient?: HttpClient): CSSStyleSheet {
  const cssStyleSheet = new CSSStyleSheet();

  httpClient ??= createHttpClient();
  httpClient(url, 'text').subscribe(text => cssStyleSheet.replace(text));
  // TODO: lazy when the first component is connected?

  return cssStyleSheet;
}
