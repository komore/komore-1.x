import type { OperatorFunction } from '@komore/reactive';
import { switchMap } from '@komore/reactive/operators';
import { fromPromise } from '@komore/reactive/promise';

/**
 * Obtains a response's payload as a string
 * @returns Operator function that emits a response's payload as a string for each emitted response
 */
export function responseAsText(): OperatorFunction<Response, string> {
  return switchMap(response => fromPromise(response.text()));
}
