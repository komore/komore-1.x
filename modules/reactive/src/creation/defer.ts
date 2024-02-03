/**
 * Creates an observable that delegates the creation of a new observable to a factory
 *
 * @param factory Factory that returns a new observable
 * @returns Observable
 * @template T Observable value type
 */
export function defer<T>(factory: () => Observable<T>): Observable<T> {
  return new Observable<T>(subscriber => factory().subscribe(subscriber));
}
