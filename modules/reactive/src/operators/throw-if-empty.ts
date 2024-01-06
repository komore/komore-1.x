import { throwIfEmpty as rxjsThrowIfEmpty } from 'rxjs';

import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';

/**
 * Throws an error if the observable is empty
 *
 * @param errorFactory Error factory
 * @template T Value type
 */
export function throwIfEmpty<T>(errorFactory: () => unknown): MonoTypeOperatorFunction<T> {
  return rxjsThrowIfEmpty(errorFactory);
}
