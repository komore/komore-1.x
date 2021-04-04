import type { OperatorFunction } from '@komore/reactive';
import { switchMap } from '@komore/reactive/operators';
import { fromPromise } from '@komore/reactive/promise';

/**
 * Obtains a response's payload as a JSON object
 * @returns Operator function that emits a response's payload as JSON for each emitted response
 * @template T Response payload JSON object type
 */
export function responseAsJson<T = Record<string, unknown>>(): OperatorFunction<Response, T> {
  return switchMap(response => fromPromise(response.json()));
}
