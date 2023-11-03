import { CommandFromType, matchCommand } from '@komore/command';

import { executeOpenTofuCommand } from './execute-opentofu-command';
import { openTofuCommand } from './opentofu.command';
import { type OpenTofuCommandHandlerOptions } from './opentofu-command-handler-options';

export function createOpenTofuCommandHandler(options: OpenTofuCommandHandlerOptions): unknown {
  const { workingDirectory } = options;
  const execute = executeOpenTofuCommand(workingDirectory);

  return (command: CommandFromType<typeof openTofuCommand>) =>
    matchCommand(command, {
      apply: () => execute('apply', []),
      destroy: () => execute('destroy', []),
      init: () => execute('init', []),
      plan: () => execute('plan', ['-detailed-exitcode', '-refresh=false']),
    });
}
