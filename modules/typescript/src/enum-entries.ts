import { enumKeys } from './enum-keys';

/**
 * Gets a list of enum entries from an enum
 * @param enumObject Enum object
 * @returns List of enum entries
 * @template EnumType Enum type
 */
export function enumEntries<EnumType extends Record<string | number, unknown>>(
  enumObject: EnumType
): ReadonlyArray<[key: string, value: EnumType[number]]> {
  return enumKeys(enumObject).map(key => [key, enumObject[key]] as [string, EnumType[number]]);
}
