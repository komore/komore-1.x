import { type ReadonlyRecord } from '@komore/typescript';
import { enumToKeys } from './enum-to-keys';

/**
 * Gets a list of enum entries from an enum
 * @param enumObject Enum object
 * @returns List of enum entries
 * @template EnumType Enum type
 */
export function enumToEntries<EnumType extends ReadonlyRecord<string | number, unknown>>(
  enumObject: EnumType
): ReadonlyArray<[key: string, value: EnumType[number]]> {
  return enumToKeys(enumObject).map(key => [key, enumObject[key]] as [string, EnumType[number]]);
}
