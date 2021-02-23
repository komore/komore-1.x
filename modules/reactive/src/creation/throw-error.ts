import { throwError as rxjsThrowError } from 'rxjs';
import type { Observable } from '../observable';

/**
 * Creates an observable that notifies its observers of an error upon subscription
 * @param errorFactory Function responsible for creating the error instance
 * @returns Observable that notifies the error and never emits any value
 */
export function throwError(errorFactory: () => unknown): Observable<never> {
  return rxjsThrowError(errorFactory);
}
