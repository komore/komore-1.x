import { matchCommand } from '@komore/command';

import { executeOpenTofuCommand } from './execute-opentofu-command';
import { type OpenTofuCommandHandlerOptions } from './opentofu-command-handler-options';
import { type OpenTofuCommandHandler } from './opentofu-command-handler';

/**
 * Creates an OpenTofu command handler
 *
 * @param options OpenTofu command handler options
 * @returns OpenTofu command handler
 */
export function createOpenTofuCommandHandler(options: OpenTofuCommandHandlerOptions): OpenTofuCommandHandler {
  const { workingDirectory } = options;
  const execute = executeOpenTofuCommand(workingDirectory);

  return command =>
    matchCommand(command, {
      apply: () => execute('apply', []),
      destroy: () => execute('destroy', []),
      init: () => execute('init', []),
      plan: () => execute('plan', ['-detailed-exitcode', '-refresh=false']),
    });
}
