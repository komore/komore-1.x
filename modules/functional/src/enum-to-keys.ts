/**
 * Gets a list of enum keys from an enum
 * @param enumType Enum type
 * @returns List of enum keys
 */
export function enumToKeys<EnumType extends Record<string, unknown>>(
  enumType: EnumType
): ReadonlyArray<keyof EnumType> {
  return Object.keys(enumType).filter(key => isNaN(parseInt(key, 10)));
}
