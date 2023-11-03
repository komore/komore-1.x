import { type GenericCommand } from '../generic-command';

/**
 * Command matcher
 *
 * @template CommandType Possible command types
 * @template ResultType Result type
 */
export type CommandMatcher<CommandType extends GenericCommand, ResultType = void> = {
  [CommandName in CommandType['name']]: (
    parameters: ReturnType<CommandType[CommandName]>['parameters'],
    command: ReturnType<CommandType[CommandName]>
  ) => ResultType;
};
