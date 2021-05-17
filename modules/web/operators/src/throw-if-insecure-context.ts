import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { throwIf } from '@komore/reactive/operators';

/**
 * Throws if the current context is not secure
 * @param errorFactory Error factory
 * @template T Value type
 */
export function throwIfInsecureContext<T>(errorFactory?: () => unknown): MonoTypeOperatorFunction<T> {
  return throwIf(
    () => !globalThis.isSecureContext,
    () => (errorFactory !== undefined ? errorFactory() : new Error('the current context is not secure'))
  );
}
