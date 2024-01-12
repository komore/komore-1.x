import { type ReadonlyRecord } from '@komore/typescript';

import { entriesToObject } from './entries-to-object';
import { objectToEntries } from './object-to-entries';

/**
 * Creates a function that maps an object's values
 *
 * @param project Projection function that receives the existing value and key, and returns the new value
 * @returns Function that maps an object's values
 * @template K Key type
 * @template T Value type
 * @template U New value type
 */
export function objectValues<K extends string, T, U>(
  project: (value: T, key: K) => U
): (object: ReadonlyRecord<K, T>) => ReadonlyRecord<K, U> {
  const toEntryWithProjectedValue = entryToEntryWithProjectedValue(project);
  return object => {
    const entries = objectToEntries(object);
    const mappedEntries = entries.map(toEntryWithProjectedValue);
    return entriesToObject(mappedEntries);
  };
}

/**
 * Creates a function that returns an entry with a projected value, given an entry
 *
 * @param project Projection function
 * @returns Function that returns an entry with a projected value, given an entry
 * @private
 */
function entryToEntryWithProjectedValue<K extends string, T, U>(
  project: (value: T, key: K) => U
): (entry: readonly [propertyKey: K, value: T]) => readonly [propertyKey: K, value: U] {
  return ([propertyKey, propertyValue]) => [propertyKey, project(propertyValue, propertyKey)];
}
