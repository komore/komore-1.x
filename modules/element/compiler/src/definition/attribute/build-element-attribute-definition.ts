import { type ParsedElementAttribute } from '@komore/element/parser';
import { type NodeFactory } from 'typescript';
import { type ElementAttributeDefinition } from '../element-attribute-definition';
import { createAttributeDefaultValueExpression } from './create-attribute-default-value-expression';

/**
 * Builds an element attribute definition
 * @param factory TypeScript node factory
 * @param parsedElementAttribute Parsed element attribute
 * @returns Element attribute definition
 */
export function buildElementAttributeDefinition(
  factory: NodeFactory,
  parsedElementAttribute: ParsedElementAttribute
): ElementAttributeDefinition {
  const { attributeValueType, defaultValue: defaultValueString } = parsedElementAttribute;
  const attributeType = factory.createTypeReferenceNode(attributeValueType);
  const defaultValue = createAttributeDefaultValueExpression(factory, attributeValueType, defaultValueString);

  return {
    ...parsedElementAttribute,
    attributeType,
    defaultValue
  };
}
