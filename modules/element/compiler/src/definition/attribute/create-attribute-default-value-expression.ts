import { type ElementAttributeValueType } from '@komore/element/parser';
import { type Expression, type NodeFactory } from 'typescript';
import { createAttributeDefaultBooleanValueExpression } from './create-attribute-default-boolean-value-expression';
import { createAttributeDefaultNumberValueExpression } from './create-attribute-default-number-value-expression';
import { createAttributeDefaultStringValueExpression } from './create-attribute-default-string-value-expression';

/**
 * Creates a default value expression
 * @param factory TypeScript node factory
 * @param attributeType Attribute type
 * @param attributeDefaultValue Attribute default value
 * @returns Default value expression
 */
export function createAttributeDefaultValueExpression(
  factory: NodeFactory,
  attributeValueType: ElementAttributeValueType,
  defaultValueString?: string
): Expression {
  if (defaultValueString === undefined) {
    return factory.createIdentifier('undefined');
  }

  switch (attributeValueType) {
    case 'boolean':
      return createAttributeDefaultBooleanValueExpression(factory, defaultValueString);
    case 'number':
      return createAttributeDefaultNumberValueExpression(factory, defaultValueString);
    case 'string':
      return createAttributeDefaultStringValueExpression(factory, defaultValueString);
  }
}
