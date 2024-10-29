import { type Command } from '../command';

/**
 * Command matcher case
 *
 * @template CommandType Command type
 * @template ResultType Result type
 */
export interface CommandMatcherCase<CommandType extends Command, ResultType> {
  (parameters: CommandType['parameters'], command: CommandType): ResultType;
}
