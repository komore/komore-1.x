/**
 * Converts values to an observable sequence
 *
 * @param values Values
 * @returns Observable sequence of values
 */
export function of<T>(value: T): Observable<T> {
  return new Observable<T>(subscriber => {
    subscriber.next(value);
    subscriber.complete();
  });
}
