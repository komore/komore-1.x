import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Returns the list of property values from an object
 *
 * @param obj Object
 * @returns List of property values
 */
export function objectToValues<T extends ReadonlyRecord<string, unknown>>(obj: T): ReadonlyArray<T[keyof T]> {
  return Object.values(obj) as unknown as ReadonlyArray<T[keyof T]>;
}
