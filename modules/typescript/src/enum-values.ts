import { enumKeys } from './enum-keys';

/**
 * Gets a list of enum values from an enum
 * @param enumObject Enum object
 * @returns List of enum values
 * @template EnumType Enum type
 */
export function enumValues<EnumType extends Record<string, string | number>>(
  enumObject: EnumType
): ReadonlyArray<EnumType[keyof EnumType]> {
  return enumKeys(enumObject).map(key => enumObject[key]);
}
