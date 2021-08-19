import type { Observable } from '@komore/reactive';
import { deferPromise } from '@komore/reactive/promise';

/**
 * Returns a response as an observable array buffer
 * @param response Response
 * @returns Observable array buffer
 */
export function responseToArrayBuffer(response: Response): Observable<ArrayBuffer> {
  return deferPromise(() => response.arrayBuffer());
}
