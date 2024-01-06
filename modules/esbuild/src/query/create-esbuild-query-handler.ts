import { version } from 'esbuild';

import { matchQuery } from '@komore/query';
import { of } from '@komore/reactive';

import { type EsbuildQueryHandler } from './esbuild-query-handler';
import { type EsbuildQueryHandlerOptions } from './esbuild-query-handler-options';

/**
 * Creates an esbuild query handler
 *
 * @param handlerOptions esbuild query handler options
 * @returns esbuild query handler
 */
export function createEsbuildQueryHandler(_handlerOptions: EsbuildQueryHandlerOptions): EsbuildQueryHandler {
  return query =>
    matchQuery(query, {
      version: () => of(version),
    });
}
