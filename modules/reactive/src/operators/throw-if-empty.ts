import { throwIfEmpty as rxjsThrowIfEmpty } from 'rxjs';
import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';

export function throwIfEmpty<T>(errorFactory: () => unknown): MonoTypeOperatorFunction<T> {
  return rxjsThrowIfEmpty(errorFactory);
}
