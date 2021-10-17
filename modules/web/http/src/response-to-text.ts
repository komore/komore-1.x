import type { Observable } from '@komore/reactive';
import { deferPromise } from '@komore/reactive';

/**
 * Returns a response as an observable string
 * @param response Response
 * @returns Observable string
 */
export function responseToText(response: Response): Observable<string> {
  return deferPromise(() => response.text());
}
