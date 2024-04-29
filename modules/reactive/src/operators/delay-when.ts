import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { map } from './map';
import { mergeMap } from './merge-map';
import { take } from './take';

/**
 * Delays the emission of values from the source observable by a given time span determined by the emissions of another
 * observable
 * @param durationSelector Function that emits when the source value may be emitted
 */
export function delayWhen<T>(
  durationSelector: (value: T, index: number) => Observable<unknown>
): MonoTypeOperatorFunction<T> {
  return mergeMap((value: T, index) =>
    durationSelector(value, index).pipe(
      take(1),
      map(() => value)
    )
  );
}
