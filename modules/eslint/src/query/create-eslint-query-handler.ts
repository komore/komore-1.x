import { matchQuery } from '@komore/query';
import { of } from '@komore/reactive';

import { type EsLintQueryHandler } from './eslint-query-handler';
import { type EsLintQueryHandlerOptions } from './eslint-query-handler-options';

/**
 * Creates an ESLint query handler
 *
 * @param options ESLint query handler options
 * @returns ESLint query handler
 */
export function createEsLintQueryHandler(options: EsLintQueryHandlerOptions): EsLintQueryHandler {
  const { esLint$: _ } = options;
  return query =>
    matchQuery(query, {
      version: () => of('TODO:unknown'),
    });
}
