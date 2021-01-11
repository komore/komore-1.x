/**
 * Maps an element attribute value to a boolean
 * Note: an empty string maps to true in order for the presence of an attribute without a value to work
 * @param attributeValue Attribute value
 * @returns Attribute value as a boolean
 */
export function mapElementAttributeToEnum<EnumType, EnumConstructor extends new() => EnumType>(enumConstructor: EnumConstructor): `${EnumType}` {
  
  return attributeValue === '' || attributeValue === 'true';
}


type StandardEnum = {
  [id: string]: string | number;
  [nu: number]: string;
}
enum A {
  x = 'hello',
  b = 1
}

type xyz = `${A}`;
mapElementAttributeToEnum(A)
