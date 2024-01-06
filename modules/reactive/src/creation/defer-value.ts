import { Observable } from '../observable';

/**
 * Creates an observable that delegates the creation of a new value to a factory
 *
 * @param factory Factory that returns a new value
 * @returns Observable
 * @template T Observable value type
 */
export function deferValue<T>(factory: () => T): Observable<T> {
  return new Observable<T>(subscriber => {
    try {
      const value = factory();
      subscriber.next(value);
      subscriber.complete();
    } catch (e) {
      subscriber.error(e);
    }
  });
}
