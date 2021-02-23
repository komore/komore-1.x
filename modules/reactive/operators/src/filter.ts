import type { MonoTypeOperatorFunction, OperatorFunction } from '@komore/reactive';
import { filter as rxjsFilter } from 'rxjs/operators';

/**
 * Filters values emitted by the source observable while applying a type assertion
 * @param predicate Predicate that returns true when a value should be emitted, asserting its type
 * @template T Value type
 */
export function filter<T, S extends T>(predicate: (value: T, index: number) => value is S): OperatorFunction<T, S>;

/**
 * Filters values emitted by the source observable
 * @param predicate Predicate that returns true when a value should be emitted
 * @template T Value type
 */
export function filter<T>(predicate: (value: T, index: number) => boolean): MonoTypeOperatorFunction<T>;

export function filter<T>(predicate: (value: T, index: number) => boolean): MonoTypeOperatorFunction<T> {
  return rxjsFilter(predicate);
}
