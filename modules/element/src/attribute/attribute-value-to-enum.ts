import { enumValues } from '@komore/functional';

/**
 * Creates a function that maps an attribute value to an enum
 *
 * Note: attribute values that do not exist in the enum default to `undefined`
 * @param enumClass Enum class
 * @returns Function that maps an attribute value to the enum
 */
export function attributeValueToEnum<EnumType extends Record<string, string | number>>(
  enumObject: EnumType
): (attributeValue: string | undefined) => EnumType | undefined {
  const values = enumValues(enumObject);
  return attributeValue =>
    values.includes(attributeValue as typeof values[0]) ? (attributeValue as unknown as EnumType) : undefined;
}
