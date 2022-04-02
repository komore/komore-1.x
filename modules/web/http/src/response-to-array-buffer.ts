import { deferPromise, type Observable } from '@komore/reactive';

/**
 * Create a function that returns a response as an observable array buffer
 * @returns Function that returns a response as an observable array buffer
 */
export function responseToArrayBuffer(): (response: Response) => Observable<ArrayBuffer> {
  return response => deferPromise(() => response.arrayBuffer());
}
