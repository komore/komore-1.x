import { assertValidAttributeValueType } from './assert-valid-attribute-value-type';
import { attributeNameSpecificationRegExp } from './attribute-name-specification-reg-exp';
import { type ParsedElementAttribute } from './parsed-element-attribute';

/**
 * Parses an element attribute name specification
 * @param nameSpecification Name specification
 * @returns Parsed element attribute name specification
 */
export function elementAttributeNameSpecificationToParsedElementAttributeName(
  nameSpecification: string
): Pick<ParsedElementAttribute, 'attributeName' | 'attributeValueType' | 'optional'> {
  const nameSpecificationMatches = nameSpecification.match(attributeNameSpecificationRegExp);
  if (nameSpecificationMatches === null) {
    throw new Error(`invalid attribute name specification "${nameSpecification}"`);
  }

  const attributeName = nameSpecificationMatches[1];
  const optional = nameSpecificationMatches[2] === '?';
  const attributeValueType = nameSpecificationMatches[3]?.substring(1) ?? 'string';

  assertValidAttributeValueType(attributeValueType);

  return {
    attributeName,
    attributeValueType,
    optional
  };
}
