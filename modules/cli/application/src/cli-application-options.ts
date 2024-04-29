import { type cliEvent } from '@komore/cli';
import { type Command } from '@komore/command';
import { type EventFromType } from '@komore/event';
import { type Subject } from '@komore/reactive';

/**
 * Command-line interface application options
 *
 * @template CommandType Command type
 */
export interface CliApplicationOptions<CommandType extends Command> {
  /**
   * Creates a command handler
   *
   * @param events Events subject
   * @returns Command handler
   */
  readonly createCommandHandler: (
    events: Subject<EventFromType<typeof cliEvent>>
  ) => (command: CommandType) => Observable<void>;
  /**
   * Returns a command, given command-line parameters
   *
   * @param parameters Command-line parameters
   * @returns Stream of commands
   */
  readonly parametersToCommands: (parameters$: Observable<ReadonlyArray<string>>) => Observable<CommandType>;
}
