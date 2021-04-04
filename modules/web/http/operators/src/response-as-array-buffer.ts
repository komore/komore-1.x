import type { OperatorFunction } from '@komore/reactive';
import { switchMap } from '@komore/reactive/operators';
import { fromPromise } from '@komore/reactive/promise';

/**
 * Obtains a response's payload as an array buffer
 * @returns Operator function that emits a response's payload as an array buffer for each emitted response
 */
export function responseAsArrayBuffer(): OperatorFunction<Response, ArrayBuffer> {
  return switchMap(response => fromPromise(response.arrayBuffer()));
}
