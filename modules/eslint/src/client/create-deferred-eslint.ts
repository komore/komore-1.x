import { ESLint } from 'eslint';

import { cache, deferValue, type Observable } from '@komore/reactive';

import { isInternalEsLintError } from '../error/is-internal-eslint-error';
import { internalEsLintErrorToEsLintError } from '../error/internal-eslint-error-to-eslint-error';
import { type EsLintClientOptions } from './eslint-client-options';

/**
 * Creates a deferred ESLint instance
 *
 * @param clientOptions ESLint client options
 * @returns Deferred ESLint instance
 * @private
 */
export function createDeferredEsLint(clientOptions: EsLintClientOptions): Observable<ESLint> {
  const { basePath: cwd, ...options } = clientOptions;

  return deferValue(() => {
    try {
      return new ESLint({ ...options, cwd });
    } catch (e) {
      const error = isInternalEsLintError(e) ? internalEsLintErrorToEsLintError()(e) : e;
      throw error;
    }
  }).pipe(cache());
}
