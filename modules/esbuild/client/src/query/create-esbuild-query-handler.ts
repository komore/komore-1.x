import { getEsbuildVersion } from '@komore/esbuild';
import { matchQuery } from '@komore/query';

import { type EsbuildQueryHandler } from './esbuild-query-handler';
import { type EsbuildQueryHandlerOptions } from './esbuild-query-handler-options';

/**
 * Creates an esbuild query handler
 *
 * @param handlerOptions esbuild query handler options
 * @returns esbuild query handler
 */
export function createEsbuildQueryHandler(handlerOptions: EsbuildQueryHandlerOptions): EsbuildQueryHandler {
  const { cliClient } = handlerOptions;
  const version = getEsbuildVersion(cliClient);
  return query =>
    matchQuery(query, {
      version,
    });
}
