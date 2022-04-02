import { deferPromise, type Observable } from '@komore/reactive';

/**
 * Creates a function that returns a response as an observable string
 * @returns Function that returns a response as an observable string
 */
export function responseToText(): (response: Response) => Observable<string> {
  return response => deferPromise(() => response.text());
}
