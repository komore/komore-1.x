import { type GenericCommand } from '../generic-command';
import { type CommandHandler } from './command-handler';

/**
 * Generic command handler
 */
export type GenericCommandHandler = CommandHandler<GenericCommand>;
