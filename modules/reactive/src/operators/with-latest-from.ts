import { withLatestFrom as rxjsWithLatestFrom } from 'rxjs';
import { type Observable } from '../observable';
import { type ObservableTuple } from '../observable-tuple';
import { type OperatorFunction } from '../operator-function';

/**
 * Combines the source observable with another observable
 *
 * The created observable emits values that combine the latest values of each observable whenever the source observable
 * emits.
 * @param input Input observable
 * @template T Value type
 * @template O Observable input type
 */
export function withLatestFrom<T, O>(input: Observable<O>): OperatorFunction<T, [T, O]>;

/**
 * Combines the source observable with other observables
 *
 * The created observable emits values that combine the latest values from each observables whenever the source
 * observable emits.
 * @param inputs Input observables
 * @template T Value type
 * @template O Additional source types
 */
export function withLatestFrom<T, O extends ReadonlyArray<unknown>>(
  inputs: readonly [...ObservableTuple<O>]
): OperatorFunction<T, [T, ...O]>;

export function withLatestFrom<T, O>(
  input: Observable<O> | ReadonlyArray<ObservableTuple<O>>
): OperatorFunction<T, [T, O]> {
  return rxjsWithLatestFrom(input as Observable<O>);
}
