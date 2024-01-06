import { type Observable } from '../observable';
import { type OperatorFunction } from '../operator-function';
import { mergeMap } from './merge-map';

/**
 * Merges to an inner observable, ignoring the emitted value
 *
 * @param innerObservable Inner observable
 * @param concurrent Number of concurrent
 * @returns Optional maximum number of active subscriptions, defaulting to no limit
 */
export function mergeMapTo<OutputType>(
  innerObservable: Observable<OutputType>,
  concurrent?: number
): OperatorFunction<unknown, OutputType> {
  return mergeMap(() => innerObservable, concurrent);
}
