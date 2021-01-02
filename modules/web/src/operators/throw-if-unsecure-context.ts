import { throwIf } from '@komore/operators';
import { MonoTypeOperatorFunction } from 'rxjs';

/**
 * Throws if the current context is not secure
 * @param errorFactory Error factory
 */
export function throwIfUnsecureContext<T>(errorFactory?: () => unknown): MonoTypeOperatorFunction<T> {
  return throwIf(
    () => !globalThis.isSecureContext,
    () => (errorFactory !== undefined ? errorFactory() : new Error('the current context is not secure'))
  );
}
