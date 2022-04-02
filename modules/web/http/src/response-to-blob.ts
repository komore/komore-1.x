import { deferPromise, type Observable } from '@komore/reactive';

/**
 * Creates a function that returns a response as an observable blob
 * @returns Function that returns a response as an observable blob
 */
export function responseToBlob(): (response: Response) => Observable<Blob> {
  return response => deferPromise(() => response.blob());
}
