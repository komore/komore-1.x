import type { ArrayValueType } from '@komore/array';
import { Observable } from '../observable/observable';

/**
 * Converts values to an observable sequence
 * @param values Values
 * @returns Observable sequence of values
 */
export function of<T extends ReadonlyArray<unknown>>(...values: T): Observable<ArrayValueType<T>> {
  return new Observable<ArrayValueType<T>>(observer => {
    for (let i = 0; !observer.closed && i !== values.length; ++i) {
      observer.next(values[i] as ArrayValueType<T>);
    }
    observer.complete();
  });
}
