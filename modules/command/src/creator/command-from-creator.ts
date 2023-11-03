import { type GenericCommand } from '../generic-command';
import { type CommandCreator } from './command-creator';

/**
 * Command from a creator type
 *
 * @template CreatorType Creator type
 */
export type CommandFromCreator<CreatorType extends CommandCreator<GenericCommand>> = ReturnType<CreatorType>;
