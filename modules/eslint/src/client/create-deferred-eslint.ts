import { ESLint } from 'eslint';

import { cache, defer, of, throwError, type Observable } from '@komore/reactive';

import { isInternalEsLintError } from '../error/is-internal-eslint-error';
import { internalEsLintErrorToEsLintError } from '../error/internal-eslint-error-to-eslint-error';
import { type EsLintClientOptions } from './eslint-client-options';

export function createDeferredEsLint(clientOptions: EsLintClientOptions): Observable<ESLint> {
  const { basePath: cwd, ...options } = clientOptions;

  return defer(() => {
    try {
      const esLint = new ESLint({ ...options, cwd });
      return of(esLint);
    } catch (e) {
      const error = isInternalEsLintError(e) ? internalEsLintErrorToEsLintError()(e) : e;
      return throwError(() => error);
    }
  }).pipe(cache());
}
