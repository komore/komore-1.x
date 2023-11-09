import { type ApplicationOptions } from '@komore/application';
import { type GenericCommand } from '@komore/command';
import { type Logger } from '@komore/logging';
import { type NodeHost } from '@komore/node';
import { type Observable, type Subject } from '@komore/reactive';

import { type CliEvent } from './cli.event';

/**
 * Command-line interface application options
 */
export interface CliApplicationOptions<CommandType extends GenericCommand> extends ApplicationOptions<NodeHost> {
  /**
   * Command handler factory
   *
   * @param events Events subject
   * @returns Command handler factory
   */
  readonly commandHandler: (events: Subject<CliEvent>) => (command: CommandType) => Observable<void>;
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
  readonly parametersToCommand: (commandLineParameters: ReadonlyArray<string>) => Observable<CommandType>;
}
