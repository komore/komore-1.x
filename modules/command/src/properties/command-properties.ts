import { typeSchema } from '@komore/typescript';

import { type CommandPropertiesSchema } from './command-properties-schema';

/**
 * Defines a command properties schema
 *
 * @returns Command properties schema
 * @template T Properties type
 */
export function commandProperties<T>(): CommandPropertiesSchema<T> {
  return typeSchema('command');
}
