import type { ValueFromArray } from 'rxjs';
import { Observable } from '../observable';

/**
 * Converts values to an observable sequence
 * @param values Values
 * @returns Observable sequence of values
 */
export function of<T extends ReadonlyArray<unknown>>(...values: T): Observable<ValueFromArray<T>> {
  return new Observable<ValueFromArray<T>>(observer => {
    for (let i = 0; !observer.closed && i !== values.length; ++i) {
      observer.next(values[i] as ValueFromArray<T>);
    }
    observer.complete();
  });
}
