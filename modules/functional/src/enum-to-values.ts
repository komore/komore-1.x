import { type ReadonlyRecord } from '@komore/typescript';

import { enumToKeys } from './enum-to-keys';

/**
 * Returns the list of enum values from an enum
 *
 * @param enumObject Enum object
 * @returns List of enum values
 * @template EnumType Enum type
 */
export function enumToValues<EnumType extends ReadonlyRecord<string, unknown>>(
  enumObject: EnumType
): ReadonlyArray<EnumType[keyof EnumType]> {
  return enumToKeys(enumObject).map(key => enumObject[key]);
}
