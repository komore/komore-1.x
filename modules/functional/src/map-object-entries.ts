import { type ReadonlyRecord } from '@komore/typescript';

import { entriesToObject } from './entries-to-object';
import { objectToEntries } from './object-to-entries';

/**
 * Creates a function that maps an object's entries to another set of entries and builds a new object from them
 *
 * @param project Projection function for entries
 * @returns Function that maps an object's entries to another set of entries and builds a new object from them
 */
export function mapObjectEntries<K extends string, T, U>(
  project: (entry: readonly [propertyKey: K, value: T]) => readonly [propertyKey: K, value: U]
): (object: ReadonlyRecord<K, T>) => ReadonlyRecord<K, U> {
  return object => {
    const entries = objectToEntries(object);
    const mappedEntries = entries.map(project);
    return entriesToObject(mappedEntries);
  };
}
