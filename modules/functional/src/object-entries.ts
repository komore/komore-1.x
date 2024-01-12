import { type ReadonlyRecord } from '@komore/typescript';

import { entriesToObject } from './entries-to-object';
import { objectToEntries } from './object-to-entries';

/**
 * Creates a function that maps an object's entries to another set of entries and builds a new object from them
 *
 * @param project Projection function for entries
 * @returns Function that maps an object's entries to another set of entries and builds a new object from them
 * @template K Key type
 * @template L New key type
 * @template T Value type
 * @template U New value type
 */
export function objectEntries<K extends string, L extends string, T, U>(
  project: (entry: readonly [propertyKey: K, value: T]) => readonly [propertyKey: L, value: U]
): (object: ReadonlyRecord<K, T>) => ReadonlyRecord<K, U>;

/**
 * Creates a function that maps an object's entries to another set of entries and builds a new object from them
 *
 * @param project Projection function for entries
 * @returns Function that maps an object's entries to another set of entries and builds a new object from them
 * @template K Key type
 * @template L New key type
 * @template T Value type
 * @template U New value type
 */
export function objectEntries<K extends string, L extends string, T, U>(
  projectKey: (propertyKey: K) => L,
  projectValue: (value: T) => U
): (object: ReadonlyRecord<K, T>) => ReadonlyRecord<K, U>;

export function objectEntries<K extends string, L extends string, T, U>(
  projectOrProjectKey:
    | ((entry: readonly [propertyKey: K, value: T]) => readonly [propertyKey: L, value: U])
    | ((propertyKey: K) => L),
  projectValue?: (value: T) => U
): (object: ReadonlyRecord<K, T>) => ReadonlyRecord<L, U> {
  const project =
    projectValue === undefined
      ? (projectOrProjectKey as (entry: readonly [propertyKey: K, value: T]) => readonly [propertyKey: L, value: U])
      : ([propertyKey, value]: readonly [K, T]) =>
          [(projectOrProjectKey as (propertyKey: K) => L)(propertyKey), projectValue(value)] as const;
  return object => {
    const entries = objectToEntries(object);
    const mappedEntries = entries.map(project);
    return entriesToObject(mappedEntries);
  };
}
