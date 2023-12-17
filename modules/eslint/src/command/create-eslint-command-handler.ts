import { matchCommand } from '@komore/command';
import { first, fromPromise, map, mergeMap, redactValue, tap, throwIfError } from '@komore/reactive';

import { internalEsLintErrorToEsLintError } from '../error/internal-eslint-error-to-eslint-error';
import { isInternalEsLintError } from '../error/is-internal-eslint-error';
import { esLintEvent } from '../eslint.event';
import { type EsLintCommandHandler } from './eslint-command-handler';
import { type EsLintCommandHandlerOptions } from './eslint-command-handler-options';

/**
 * Creates an ESLint command handler
 *
 * @param options ESLint command handler options
 * @returns ESLint command handler
 */
export function createEsLintCommandHandler(options: EsLintCommandHandlerOptions): EsLintCommandHandler {
  const { esLint$, events } = options;

  return command =>
    matchCommand(command, {
      lintFiles: ({ filePatterns }) =>
        esLint$.pipe(
          first(),
          mergeMap(esLint => fromPromise(esLint.lintFiles([...filePatterns]))),
          throwIfError(isInternalEsLintError, internalEsLintErrorToEsLintError()),
          map(results => esLintEvent.filesLinted({ results })),
          tap(events),
          redactValue()
        ),
    });
}
