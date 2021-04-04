import type { OperatorFunction } from '@komore/reactive';
import { switchMap } from '@komore/reactive/operators';
import { fromPromise } from '@komore/reactive/promise';

/**
 * Obtains a response's payload as a blob
 * @returns Operator function that emits a response's payload as a blob for each emitted response
 */
export function responseAsBlob(): OperatorFunction<Response, Blob> {
  return switchMap(response => fromPromise(response.blob()));
}
