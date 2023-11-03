import { type SesCommandHandler } from './ses-command-handler';
import { type SesCommandHandlerOptions } from './ses-command-handler-options';

export function createSesCommandHandler(options: SesCommandHandlerOptions): SesCommandHandler {
  return command => matchAwsCommand(command, {});
}
