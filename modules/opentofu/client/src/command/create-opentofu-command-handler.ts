import { toEventCausedByCommand } from '@komore/client';
import { matchCommand } from '@komore/command';
import { map, redactValue, tapNext, toArray } from '@komore/reactive';

import { openTofuEvent } from '../opentofu.event';
import { executeOpenTofuCommand } from './execute-opentofu-command';
import { type OpenTofuCommandHandlerOptions } from './opentofu-command-handler-options';
import { type OpenTofuCommandHandler } from './opentofu-command-handler';

/**
 * Creates an OpenTofu command handler
 *
 * @param handlerOptions OpenTofu command handler options
 * @returns OpenTofu command handler
 */
export function createOpenTofuCommandHandler(handlerOptions: OpenTofuCommandHandlerOptions): OpenTofuCommandHandler {
  const { toEvents, workingDirectory } = handlerOptions;
  const execute = executeOpenTofuCommand(workingDirectory);

  // TODO: record logs

  return command =>
    matchCommand(command, {
      apply: () =>
        execute('apply', []).pipe(
          toArray(),
          map(() => openTofuEvent.applied({}))
        ),
      destroy: () => execute('destroy', []),
      init: () => execute('init', []),
      plan: () => execute('plan', ['-detailed-exitcode', '-refresh=false']),
    }).pipe(map(toEventCausedByCommand(command)), tapNext(toEvents), redactValue());
}
