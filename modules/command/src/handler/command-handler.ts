import { type Observable } from '@komore/reactive';

import { type CommandFromType } from '../type/command-from-type';
import { type GenericCommandType } from '../type/generic-command-type';

/**
 * Command handler
 *
 * @template CommandType Command type
 */
export interface CommandHandler<CommandType extends GenericCommandType> {
  (command: CommandFromType<CommandType>): Observable<void>;
}
