import { type ReadonlyRecord } from '@komore/typescript';

import { entriesToObject } from './entries-to-object';
import { objectToEntries } from './object-to-entries';

/**
 * Creates a function that maps an object's values
 *
 * @param project Projection function that receives the existing value and key, and returns the new value
 * @returns Function that maps an object's values
 * @template T Value type
 * @template U New value type
 */
export function mapObjectValues<T, U>(
  project: (value: T, key: string) => U
): (object: ReadonlyRecord<string, T>) => ReadonlyRecord<string, U> {
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
function entryToEntryWithProjectedValue<T, U>(
  project: (value: T, key: string) => U
): (entry: readonly [propertyKey: string, value: T]) => readonly [propertyKey: string, value: U] {
  return ([propertyKey, propertyValue]) => [propertyKey, project(propertyValue, propertyKey)];
}
