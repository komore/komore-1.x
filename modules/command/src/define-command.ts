import { type Command } from './command';
import { type CommandCreator } from './command-creator';
import { type CommandSchema } from './command-schema';

/**
 * Defines a command
 *
 * @param commandName Command name
 * @param description Description
 * @returns Command creator
 * @template CommandName Command name
 */
export function defineCommand<CommandName extends string>(
  commandName: CommandName,
  description: string
): CommandCreator<CommandName, void>;

/**
 * Creates a command creator for a command type with properties
 * @param commandName Command name
 * @param description Description
 * @param schema Command schema
 * @returns Command creator
 * @template CommandName Command name
 * @template S Command schema type
 */
export function defineCommand<CommandName extends string, S extends object>(
  commandName: CommandName,
  description: string,
  schema: CommandSchema<S>
): CommandCreator<CommandName, S>;

/**
 * Creates a command creator
 * @param type Command type
 * @param schema Command schema
 * @returns Command creator
 * @template T Command type
 * @template S Command schema type
 */
export function defineCommand<T extends string, S extends object | void>(
  type: T,
  _?: { _t: 'schema' }
): CommandCreator<T, S> {
  const commandCreator = (properties?: any): Command<T, S> => ({
    type,
    ...(properties || {}),
  });

  return Object.defineProperty(commandCreator, 'type', {
    value: type,
    writable: false,
  });
}
