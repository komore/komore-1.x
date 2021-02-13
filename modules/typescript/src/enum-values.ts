import { enumKeys } from './enum-keys';

/**
 * Gets a list of enum values from an enum
 * @param enumObject Enum object
 * @returns List of enum values
 * @template EnumType Enum type
 */
export function enumValues<EnumType extends Record<string | number, unknown>>(
  enumObject: EnumType
): ReadonlyArray<EnumType[number]> {
  return enumKeys(enumObject).map(key => enumObject[key]);
}
