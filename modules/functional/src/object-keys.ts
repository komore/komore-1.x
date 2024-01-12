import { type ReadonlyRecord } from '@komore/typescript';

import { entriesToObject } from './entries-to-object';
import { objectToEntries } from './object-to-entries';

/**
 * Creates a function that maps an object's keys
 *
 * @param project Projection function that receives the existing key and value, and returns the new key
 * @returns Function that maps an object's keys
 * @template K Key type
 * @template L New key type
 * @template T Value type
 */
export function objectKeys<K extends string, L extends string, T>(
  project: (key: K, value: T) => L
): (object: ReadonlyRecord<K, T>) => ReadonlyRecord<L, T> {
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
function entryToEntryWithProjectedKey<K extends string, L extends string, T>(
  project: (key: K, value: T) => L
): (entry: readonly [propertyKey: K, value: T]) => readonly [propertyKey: L, value: T] {
  return ([propertyKey, propertyValue]) => [project(propertyKey, propertyValue), propertyValue];
}
