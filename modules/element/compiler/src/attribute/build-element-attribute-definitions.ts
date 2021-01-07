import type { HTMLElement } from 'node-html-parser';
import type { NodeFactory } from 'typescript';
import type { ElementAttributeDefinition } from './element-attribute-definition';

/**
 * Builds an element's attribute definitions
 * @param factory TypeScript node factory
 * @param templateElement Template element
 * @returns List of element attribute definitions
 */
export function buildElementAttributeDefinitions(
  factory: NodeFactory,
  templateElement: HTMLElement
): ReadonlyArray<ElementAttributeDefinition> {
  const attributes = templateElement.attributes;
  return Object.entries(attributes).map(([attributeName, attributeValue]) =>
    createElementAttributeDefinition(factory, attributeName, attributeValue)
  );
}

function createElementAttributeDefinition(
  factory: NodeFactory,
  attributeName: string,
  attributeValue: string
): ElementAttributeDefinition {
  console.log(`${attributeName} = ${attributeValue}`, attributeValue === '', attributeValue === undefined, attributeValue === null);
  return {
    attributeName,
    attributeValueType: factory.createTypeReferenceNode('Lala'),
    defaultValue: factory.createIdentifier('undefined')
  };
}
