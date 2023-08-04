import { defer, type Observable } from 'rxjs';

/**
 * Create a function that returns a response as an observable array buffer
 *
 * @returns Function that returns a response as an observable array buffer
 */
export function responseToArrayBuffer(): (response: Response) => Observable<ArrayBuffer> {
  return response => defer(() => response.arrayBuffer());
}
