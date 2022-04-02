import { type Command } from './command';

/**
 * Command creator function type
 * @template T Command type
 * @template P Command properties type
 */
export type CommandCreatorFunctionType<T extends string, P extends object | void> = P extends object
  ? (commandProperties: P) => Command<T, P>
  : () => Command<T, void>;

/**
 * Function capable of creating a specific Command
 * @template T Command type
 * @template P Command properties type
 * @template C Creator type
 */
export type CommandCreator<T extends string, P extends object | void> = CommandCreatorFunctionType<T, P> &
  Readonly<{ type: T }>;

export type CommandCreatorCommandType<CC> = CC extends CommandCreator<infer T, infer P> ? Command<T, P> : never;
