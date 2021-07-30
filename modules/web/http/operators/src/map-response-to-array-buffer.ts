import type { OperatorFunction } from '@komore/reactive';
import { switchMap } from '@komore/reactive/operators';
import { fromPromise } from '@komore/reactive/promise';

/**
 * Maps a response's payload to an array buffer
 * @returns Operator function that emits a response's payload as an array buffer for each emitted response
 */
export function mapResponseToArrayBuffer(): OperatorFunction<Response, ArrayBuffer> {
  return switchMap(response => fromPromise(response.arrayBuffer()));
}
