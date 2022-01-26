import { assertValidBooleanAttributeDefaultValue } from './assert-valid-boolean-attribute-default-value';
import { assertValidNumberAttributeDefaultValue } from './assert-valid-number-attribute-default-value';
import { type ElementAttributeValueType } from './element-attribute-value-type';
import { type ParsedElementAttribute } from './parsed-element-attribute';

/**
 * Parses an element attribute value specification
 * @param valueSpecification Value specification
 * @param valueType Element attribute value type
 * @returns Parsed element attribute value specification
 */
export function elementAttributeValueSpecificationToParsedElementAttributeValue(
  valueSpecification: string | undefined,
  valueType: ElementAttributeValueType
): Pick<ParsedElementAttribute, 'defaultValue'> | undefined {
  if (valueSpecification === undefined || valueSpecification === 'undefined') {
    return undefined;
  }

  if (valueType === 'number') {
    assertValidNumberAttributeDefaultValue(valueSpecification);
  } else if (valueType === 'boolean') {
    assertValidBooleanAttributeDefaultValue(valueSpecification);
  }

  return {
    defaultValue: valueSpecification
  };
}
