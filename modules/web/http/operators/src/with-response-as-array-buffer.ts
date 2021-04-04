import type { OperatorFunction } from '@komore/reactive';
import { switchMap } from '@komore/reactive/operators';
import { fromPromise } from '@komore/reactive/promise';

/**
 * Adds a response's payload as an array buffer
 * @returns Operator function that emits a response's payload as an array buffer alongside each emitted response
 */
export function withResponseAsArrayBuffer(): OperatorFunction<Response, [Response, ArrayBuffer]> {
  return switchMap(response => fromPromise(response.arrayBuffer().then(arrayBuffer => [response, arrayBuffer])));
}
