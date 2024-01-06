import { isObservable } from '../is-observable';
import { type Observable } from '../observable';
import { of } from './of';

/**
 * Turns a value into an observable, if it is not already one
 *
 * @param value Value
 * @returns Value as an observable
 * @template T Value type
 */
export function asObservable<T>(value: T | Observable<T>): Observable<T> {
  return isObservable(value) ? value : of(value);
}
