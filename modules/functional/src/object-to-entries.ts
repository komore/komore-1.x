import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Returns the list of key/value pairs from an object
 *
 * @param obj Object
 * @returns List of key/value pairs
 */
export function objectToEntries<K extends string, T>(
  obj: ReadonlyRecord<K, T>
): ReadonlyArray<readonly [key: K, value: T]> {
  return Object.entries(obj) as unknown as ReadonlyArray<readonly [key: K, value: T]>;
}
