import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { type OperatorFunction } from '../operator-function';

/**
 * Filters values until a condition is met, asserting the type of the emitted values
 *
 * @param predicate Predicate that determines when to stop filtering values
 * @reteurns Operator function that filters values until the condition is met
 * @template T Value type
 * @template S Asserted value type
 */
export function filterUntil<T, S extends T>(predicate: (value: T) => value is S): OperatorFunction<T, S>;

/**
 * Filters values until a condition is met
 *
 * @param predicate Predicate that determines when to stop filtering values
 * @returns Operator function that filters values until the condition is met
 * @template T Value type
 */
export function filterUntil<T>(predicate: (value: T) => boolean): MonoTypeOperatorFunction<T>;

export function filterUntil<T>(predicate: (value: T) => boolean): MonoTypeOperatorFunction<T> {
  return observable =>
    new Observable<T>(subscriber => {
      let conditionMet = false;

      return observable.subscribe({
        next: value => {
          if (!conditionMet && predicate(value)) {
            conditionMet = true;
          }

          if (conditionMet) {
            subscriber.next(value);
          }
        },
        error: err => subscriber.error(err),
        complete: () => subscriber.complete(),
      });
    });
}
