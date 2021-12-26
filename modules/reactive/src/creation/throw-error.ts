import { Observable } from '../observable';

/**
 * Creates an observable that notifies its observers of an error upon subscription
 * @param errorFactory Function responsible for creating the error instance
 * @returns Observable that notifies the error and never emits any value
 */
export function throwError(errorFactory: () => unknown): Observable<never> {
  return new Observable<never>(subscriber => subscriber.error(errorFactory()));
}
