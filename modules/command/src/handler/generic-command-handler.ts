import { type GenericCommandType } from '../type/generic-command-type';
import { type CommandHandler } from './command-handler';

/**
 * Generic command handler
 */
export type GenericCommandHandler = CommandHandler<GenericCommandType>;
