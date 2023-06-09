import { typeSchema, type TypeSchema } from '@komore/typescript';

/**
 * Defines a command properties schema
 *
 * @returns Command properties schema
 * @template T Properties type
 */
export function commandProperties<T>(): TypeSchema<<T> {
  return {
    _schema: 'command',
    _type: void 0 as T,
  };
}
