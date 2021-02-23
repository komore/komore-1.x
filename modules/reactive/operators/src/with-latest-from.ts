import type { ObservableInputTuple, OperatorFunction } from '@komore/reactive';
import { withLatestFrom as rxjsWithLatestFrom } from 'rxjs/operators';

/**
 * Combines the source observable with other observables, creating an observable whose values are the latest values of
 * each observable, only when the source observable emits
 * @param inputs Input observables
 * @template T Value type
 * @template O Additional source types
 */
export function withLatestFrom<T, O extends ReadonlyArray<unknown>>(inputs: [...ObservableInputTuple<O>]): OperatorFunction<T, [T, ...O]> {
  return rxjsWithLatestFrom(...inputs);
}
