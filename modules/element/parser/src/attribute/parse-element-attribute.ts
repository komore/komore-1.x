import type { ElementAttributeSpecification } from './element-attribute-specification';
import type { ElementAttributeValueType } from './element-attribute-value-type';
import type { ParsedElementAttribute } from './parsed-element-attribute';

/**
 * Attribute name specification regular expression
 * - attribute-name
 * - optional ? symbol
 * - optional :-prefixed type
 */
const attributeNameSpecificationRegExp = /^([^?:@^.#]+)(\??)(:.*)?$/;

/**
 * Parses an element attribute
 * @param attributeSpecification Attribute specification
 * @returns Parsed element attribute
 */
export function parseElementAttribute({
  nameSpecification,
  valueSpecification
}: ElementAttributeSpecification): ParsedElementAttribute {
  const parsedAttributeNameSpecification = parseElementAttributeNameSpecification(nameSpecification);
  return {
    ...parsedAttributeNameSpecification,
    ...parseElementAttributeValueSpecification(valueSpecification, parsedAttributeNameSpecification.attributeValueType)
  };
}

type ParsedElementAttributeName = Pick<ParsedElementAttribute, 'attributeName' | 'attributeValueType' | 'optional'>;
type ParsedElementAttributeValue = Pick<ParsedElementAttribute, 'defaultValue'>;

/**
 * Parses an element attribute name specification
 * @param nameSpecification Name specification
 * @returns Parsed element attribute name specification
 */
function parseElementAttributeNameSpecification(nameSpecification: string): ParsedElementAttributeName {
  const nameSpecificationMatches = nameSpecification.match(attributeNameSpecificationRegExp);
  if (nameSpecificationMatches === null) {
    throw new Error(`invalid attribute name specification "${nameSpecification}"`);
  }

  const attributeName = nameSpecificationMatches[1];
  const optional = nameSpecificationMatches[2] === '?';
  const attributeValueType = nameSpecificationMatches[3]?.substr(1) ?? 'string';

  validateAttributeValueType(attributeValueType);

  return {
    attributeName,
    attributeValueType,
    optional
  };
}

/**
 * Parses an element attribute value specification
 * @param valueSpecification Value specification
 * @param valueType Element attribute value type
 * @returns Parsed element attribute value specification
 */
function parseElementAttributeValueSpecification(
  valueSpecification: string | undefined,
  valueType: ElementAttributeValueType
): ParsedElementAttributeValue | undefined {
  if (valueSpecification === undefined || valueSpecification === 'undefined') {
    return undefined;
  }

  if (valueType === 'number') {
    validateNumberAttributeDefaultValue(valueSpecification);
  } else if (valueType === 'boolean') {
    validateBooleanAttributeDefaultValue(valueSpecification);
  }

  return {
    defaultValue: valueSpecification
  };
}

/**
 * Validates that an attribute value type is either string, number or boolean
 * @param valueType Value type
 */
function validateAttributeValueType(valueType: string): asserts valueType is ElementAttributeValueType {
  if (!['string', 'number', 'boolean'].includes(valueType)) {
    throw new Error(`invalid attribute value type "${valueType}"`);
  }
}

/**
 * Validates that a default value for a number attribute is an actual number
 * @param value Value
 */
function validateNumberAttributeDefaultValue(value: string): void {
  if (isNaN(parseFloat(value))) {
    throw new Error(`invalid number attribute default value "${value}"`);
  }
}

/**
 * Validates that a default value for a boolean attribute is an actual boolean
 * @param value Value
 */
function validateBooleanAttributeDefaultValue(value: string): void {
  if (!['true', 'false'].includes(value)) {
    throw new Error(`invalid boolean attribute default value "${value}"`);
  }
}
