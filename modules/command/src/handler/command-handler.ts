import { type Command } from '../command';

/**
 * Command handler
 *
 * @template CommandType Command type
 */
export interface CommandHandler<CommandType extends Command = Command> {
  (command: CommandType): Observable<void>;
}
