import type { OperatorFunction } from '@komore/reactive';
import { switchMap } from '@komore/reactive/operators';
import { fromPromise } from '@komore/reactive/promise';

/**
 * Adds a response's payload as a string
 * @returns Operator function that emits a response's payload as a string alongside each emitted response
 */
export function withResponseAsText(): OperatorFunction<Response, [Response, string]> {
  return switchMap(response => fromPromise(response.text().then(text => [response, text])));
}
