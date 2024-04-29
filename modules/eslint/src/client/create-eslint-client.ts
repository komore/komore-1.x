import { ESLint } from 'eslint';

import { createClient } from '@komore/client';

import { createEsLintCommandHandler } from '../command/create-eslint-command-handler';
import { isInternalEsLintError } from '../error/is-internal-eslint-error';
import { internalEsLintErrorToEsLintError } from '../error/internal-eslint-error-to-eslint-error';
import { esLintCommand } from '../eslint.command';
import { esLintError } from '../eslint.error';
import { esLintEvent } from '../eslint.event';
import { esLintQuery } from '../eslint.query';
import { createEsLintQueryHandler } from '../query/create-eslint-query-handler';
import { type EsLintClient } from './eslint-client';
import { type EsLintClientOptions } from './eslint-client-options';
import { esLintCommandEventMap } from './eslint-command-event-map';

/**
 * Creates an ESLint client
 *
 * @param clientOptions ESLint client options
 * @returns ESLint client
 */
export function createEsLintClient(clientOptions: EsLintClientOptions): EsLintClient {
  const esLint = instantiateEsLint(clientOptions);

  return createClient({
    command: esLintCommand,
    commandEventMap: esLintCommandEventMap,
    commandHandler: ({ toEvents }) => createEsLintCommandHandler({ esLint, toEvents }),
    error: esLintError,
    event: esLintEvent,
    query: esLintQuery,
    queryHandler: () => createEsLintQueryHandler({ esLint }),
  });
}

function instantiateEsLint(clientOptions: EsLintClientOptions): ESLint {
  const { basePath: cwd, ...options } = clientOptions;

  try {
    return new ESLint({ ...options, cwd });
  } catch (e) {
    const error = isInternalEsLintError(e) ? internalEsLintErrorToEsLintError()(e) : e;
    throw error;
  }
}
