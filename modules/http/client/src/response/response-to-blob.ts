import { defer, type Observable } from 'rxjs';

/**
 * Creates a function that returns an HTTP client response as an observable blob
 *
 * @returns Function that returns an HTTP client response as an observable blob
 */
export function responseToBlob(): (response: Response) => Observable<Blob> {
  return response => defer(() => response.blob());
}
