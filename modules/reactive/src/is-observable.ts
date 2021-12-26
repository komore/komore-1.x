import { Observable } from './observable';

/**
 * Tests whether an object is an observable
 * @param obj Object to test
 * @returns true if the object is an observable
 * @template T Value type
 */
export function isObservable<T = unknown>(obj: unknown): obj is Observable<T> {
  return obj instanceof Observable;
}
