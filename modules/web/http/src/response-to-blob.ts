import { deferPromise, type Observable } from '@komore/reactive';

/**
 * Returns a response as an observable blob
 * @param response Response
 * @returns Observable blob
 */
export function responseToBlob(response: Response): Observable<Blob> {
  return deferPromise(() => response.blob());
}
