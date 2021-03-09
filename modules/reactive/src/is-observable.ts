import { isObservable as rxjsIsObservable } from 'rxjs';
import type { Observable } from './observable';

/**
 * Tests whether an object is an observable
 * @param obj Object to test
 * @returns true if the object is an observable
 * @template T Value type
 */
export function isObservable<T>(obj: unknown): obj is Observable<T> {
  return rxjsIsObservable<T>(obj);
}
