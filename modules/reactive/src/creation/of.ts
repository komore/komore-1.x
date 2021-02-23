import type { ValueFromArray } from 'rxjs';
import { of as rxjsOf } from 'rxjs';
import type { Observable } from '../observable';

/**
 * Converts values to an observable sequence
 * @param values Values
 * @returns Observable sequence of values
 */
export function of<T extends ReadonlyArray<unknown>>(...values: T): Observable<ValueFromArray<T>> {
  return rxjsOf(...values);
}
