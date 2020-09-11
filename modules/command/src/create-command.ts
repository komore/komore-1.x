import { Command } from './command';
import { CommandCreator } from './command-creator';
import { CommandSchema } from './command-schema';

/**
 * Creates a command creator for a command type
 * @param type Command type
 * @returns Command creator
 * @template T Command type
 */
export function createCommand<T extends string>(type: T): CommandCreator<T, void>;

/**
 * Creates a command creator for a command type with properties
 * @param type Command type
 * @param schema Command schema
 * @returns Command creator
 * @template T Command type
 * @template S Command schema type
 */
export function createCommand<T extends string, S extends object>(type: T, schema: CommandSchema<S>): CommandCreator<T, S>;

/**
 * Creates a command creator
 * @param type Command type
 * @param schema Command schema
 * @returns Command creator
 * @template T Command type
 * @template S Command schema type
 */
export function createCommand<T extends string, S extends object | void>(
  type: T,
  _?: { _t: 'schema' }
): CommandCreator<T, S> {
  const commandCreator = (properties?: any): Command<T, S> => ({
    type,
    ...(properties || {})
  });

  return Object.defineProperty(commandCreator, 'type', {
    value: type,
    writable: false
  });
}
