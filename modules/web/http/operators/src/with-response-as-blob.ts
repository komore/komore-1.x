import type { OperatorFunction } from '@komore/reactive';
import { switchMap } from '@komore/reactive/operators';
import { fromPromise } from '@komore/reactive/promise';

/**
 * Adds a response's payload as a blob
 * @returns Operator function that emits a response's payload as a blob alongside each emitted response
 */
export function withResponseAsBlob(): OperatorFunction<Response, [Response, Blob]> {
  return switchMap(response => fromPromise(response.blob().then(blob => [response, blob])));
}
