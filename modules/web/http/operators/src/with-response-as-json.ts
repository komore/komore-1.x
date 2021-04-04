import type { OperatorFunction } from '@komore/reactive';
import { switchMap } from '@komore/reactive/operators';
import { fromPromise } from '@komore/reactive/promise';

/**
 * Adds a response's payload as a JSON object
 * @returns Operator function that emits a response's payload as a JSON object alongside each emitted response
 * @template T Response payload JSON object type
 */
export function withResponseAsJson<T = Record<string, unknown>>(): OperatorFunction<Response, [Response, T]> {
  return switchMap(response => fromPromise(response.json().then(json => [response, json])));
}
