import { type Command } from './command';
import { type GenericCommandGroup } from './group/generic-command-group';

/**
 * Generic command
 */
export type GenericCommand = Command<GenericCommandGroup, keyof GenericCommandGroup>;
