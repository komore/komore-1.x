import type { HTMLElement } from 'node-html-parser';
import type { NodeFactory } from 'typescript';
import { buildElementAttributeDefinition } from './build-element-attribute-definition';
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
    buildElementAttributeDefinition(factory, attributeName, attributeValue)
  );
}
