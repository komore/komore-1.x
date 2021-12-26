import { deferPromise, type Observable } from '@komore/reactive';

/**
 * Returns a response as an observable object
 * @param response Response
 * @returns Observable object
 * @template T Response payload interface
 */
export function responseToJson<T = Record<string, unknown>>(response: Response): Observable<T> {
  return deferPromise(() => response.json());
}
