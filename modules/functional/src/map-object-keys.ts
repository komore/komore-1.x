import { type ReadonlyRecord } from '@komore/typescript';

import { entriesToObject } from './entries-to-object';
import { objectToEntries } from './object-to-entries';

/**
 * Creates a function that maps an object's keys
 *
 * @param project Projection function that receives the existing key and value, and returns the new key
 * @returns Function that maps an object's keys
 * @template T Value type
 * @template U New key type
 */
export function mapObjectKeys<T, U extends string>(
  project: (key: string, value: T) => U
): (object: ReadonlyRecord<string, T>) => ReadonlyRecord<U, T> {
  const toEntryWithProjectedValue = entryToEntryWithProjectedKey(project);
  return object => {
    const entries = objectToEntries(object);
    const mappedEntries = entries.map(toEntryWithProjectedValue);
    return entriesToObject(mappedEntries);
  };
}

/**
 * Creates a function that returns an entry with a projected key, given an entry
 *
 * @param project Projection function
 * @returns Function that returns an entry with a projected key, given an entry
 * @private
 */
function entryToEntryWithProjectedKey<T, U>(
  project: (key: string, value: T) => U
): (entry: readonly [propertyKey: string, value: T]) => readonly [propertyKey: U, value: T] {
  return ([propertyKey, propertyValue]) => [project(propertyKey, propertyValue), propertyValue];
}
