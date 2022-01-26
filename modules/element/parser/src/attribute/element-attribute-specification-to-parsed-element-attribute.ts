import { elementAttributeNameSpecificationToParsedElementAttributeName } from './element-attribute-name-specification-to-parsed-element-attribute-name';
import { type ElementAttributeSpecification } from './element-attribute-specification';
import { elementAttributeValueSpecificationToParsedElementAttributeValue } from './element-attribute-value-specification-to-parsed-element-attribute-value';
import { type ParsedElementAttribute } from './parsed-element-attribute';

/**
 * Parses an element attribute
 * @param attributeSpecification Attribute specification
 * @returns Parsed element attribute
 */
export function elementAttributeSpecificationToParsedElementAttribute({
  nameSpecification,
  valueSpecification
}: ElementAttributeSpecification): ParsedElementAttribute {
  const parsedElementAttributeName = elementAttributeNameSpecificationToParsedElementAttributeName(nameSpecification);
  const { attributeValueType } = parsedElementAttributeName;
  const parsedElementAttributeValue = elementAttributeValueSpecificationToParsedElementAttributeValue(
    valueSpecification,
    attributeValueType
  );
  return {
    ...parsedElementAttributeName,
    ...parsedElementAttributeValue
  };
}
