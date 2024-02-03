import { timeout as rxjsTimeout, type TimeoutInfo as RxjsTimeoutInfo } from 'rxjs';

import { durationToMilliseconds } from '@komore/temporal';

import { type Observable } from '../observable';
import { type ObservableType } from '../observable-type';
import { type OperatorFunction } from '../operator-function';
import { type TimeoutOptions } from './timeout-options';

/**
 * Returns an observable that will error if the source does not emit values within specific time constraints
 */
export function timeout<T, U extends Observable<unknown>>(
  options: TimeoutOptions<T, U>
): OperatorFunction<T, T | ObservableType<U>> {
  const [eachDuration, firstDurationOrDateTime] =
    'first' in options ? [options.each, options.first] : [options.each, undefined];
  const { with: withCallback } = options;
  const each = eachDuration !== undefined ? durationToMilliseconds()(eachDuration) : undefined;
  const first = firstDurationOrDateTime !== undefined ? undefined : undefined;
  const rxjsWithCallback =
    withCallback !== undefined
      ? ({ seen: valueCount, lastValue }: RxjsTimeoutInfo<T>) =>
          withCallback({ ...(lastValue !== null ? { lastValue } : {}), valueCount })
      : undefined;

  return rxjsTimeout({
    ...(each !== undefined ? { each } : {}),
    ...(first !== undefined ? { first } : {}),
    ...(rxjsWithCallback !== undefined ? { with: rxjsWithCallback } : {}),
  });
}
