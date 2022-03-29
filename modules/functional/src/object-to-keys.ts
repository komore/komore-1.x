import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Returns the list of property keys from an object
 * @param obj Object
 * @returns List of property keys
 */
export function objectToKeys<K extends string>(obj: ReadonlyRecord<K, unknown>): ReadonlyArray<K> {
  return Object.keys(obj) as unknown as ReadonlyArray<K>;
}
