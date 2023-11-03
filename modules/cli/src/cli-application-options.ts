import { type GenericCommand } from '@komore/command';
import { type Logger } from '@komore/logging';
import { type Observable } from '@komore/reactive';

import { type CliEvent } from './event/cli.event';

/**
 * Command-line interface application options
 */
export interface CliApplicationOptions<CommandType extends GenericCommand> {
  /**
   * Command handler
   *
   * @param command Command
   * @returns Stream of command-line interface events
   */
  readonly commandHandler: (command: CommandType) => Observable<CliEvent>;
  /**
   * Logger
   */
  readonly logger: Logger;
  /**
   * Returns a command, given command-line parameters
   *
   * @param commandLineParameters Command-line parameters
   * @returns Command
   */
  readonly parameters: (commandLineParameters: ReadonlyArray<string>) => Observable<CommandType>;
}
