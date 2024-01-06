import { build } from 'esbuild';

import { toEventCausedByCommand } from '@komore/client';
import { matchCommand } from '@komore/command';
import { first, fromPromise, map, mergeMap, redactValue, tapNext } from '@komore/reactive';

import { esbuildEvent } from '../esbuild.event';
import { type EsbuildCommandHandler } from './esbuild-command-handler';
import { type EsbuildCommandHandlerOptions } from './esbuild-command-handler-options';

/**
 * Creates an esbuild command handler
 *
 * @param handlerOptions esbuild command handler options
 * @returns esbuild command handler
 */
export function createEsbuildCommandHandler(handlerOptions: EsbuildCommandHandlerOptions): EsbuildCommandHandler {
  const { initialized$, toEvents } = handlerOptions;
  return command =>
    initialized$
      .pipe(
        first(),
        mergeMap(() =>
          matchCommand(command, {
            build: buildOptions => fromPromise(build(buildOptions)).pipe(map(esbuildEvent.built)),
          })
        )
      )
      .pipe(map(toEventCausedByCommand(command)), tapNext(toEvents), redactValue());
}
