import { type GenericCommand } from '../generic-command';

/**
 * Command matcher case
 */
export interface CommandMatcherCase<CommandType extends GenericCommand, ResultType> {
  (parameters: CommandType['parameters'], command: CommandType): ResultType;
}
