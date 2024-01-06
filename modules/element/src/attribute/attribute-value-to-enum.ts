import { enumToValues } from '@komore/functional';

/**
 * Creates a function that maps an attribute value to an enum
 *
 * @param enumClass Enum class
 * @returns Function that maps an attribute value to the enum
 * @note Attribute values that do not exist in the enum default to `undefined`
 */
export function attributeValueToEnum<EnumType extends Record<string, string | number>>(
  enumObject: EnumType
): (attributeValue: string | undefined) => EnumType | undefined {
  const values = enumToValues(enumObject);
  return attributeValue =>
    values.includes(attributeValue as (typeof values)[0]) ? (attributeValue as unknown as EnumType) : undefined;
}
