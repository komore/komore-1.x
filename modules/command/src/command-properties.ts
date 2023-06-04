import { type CommandPropertiesSchema } from './command-properties-schema';

/**
 * Defines a command properties schema
 *
 * @returns Command properties schema
 * @template T Properties type
 */
export function commandProperties<T>(): CommandPropertiesSchema<T> {
  return {
    _schema: 'command',
    _type: void 0 as T,
  };
}
