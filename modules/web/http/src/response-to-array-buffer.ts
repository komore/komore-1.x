import { deferPromise, type Observable } from '@komore/reactive';

/**
 * Returns a response as an observable array buffer
 * @param response Response
 * @returns Observable array buffer
 */
export function responseToArrayBuffer(response: Response): Observable<ArrayBuffer> {
  return deferPromise(() => response.arrayBuffer());
}
