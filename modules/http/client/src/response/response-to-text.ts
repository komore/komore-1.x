import { defer, type Observable } from 'rxjs';

/**
 * Creates a function that returns an HTTP client response as an observable string
 *
 * @returns Function that returns an HTTP client response as an observable string
 * @deprecated Use responseToText from @komore/http/client
 */
export function responseToText(): (response: Response) => Observable<string> {
  return response => defer(() => response.text());
}
