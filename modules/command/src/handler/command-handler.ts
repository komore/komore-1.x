import { type Observable } from '@komore/reactive';

import { type GenericCommand } from '../generic-command';

/**
 * Command handler
 *
 * @template CommandType Command type
 */
export interface CommandHandler<CommandType extends GenericCommand> {
  (command: CommandType): Observable<void>;
}
