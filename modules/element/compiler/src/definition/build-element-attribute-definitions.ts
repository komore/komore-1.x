import type { ParsedElementAttribute } from '@komore/element/parser';
import type { NodeFactory } from 'typescript';
import { buildElementAttributeDefinition } from './build-element-attribute-definition';
import type { ElementAttributeDefinition } from './element-attribute-definition';

/**
 * Builds an element's attribute definitions
 * @param factory TypeScript node factory
 * @param parsedAttributes Parsed element attributes
 * @returns List of element attribute definitions
 */
export function buildElementAttributeDefinitions(
  factory: NodeFactory,
  parsedAttributes: ReadonlyArray<ParsedElementAttribute>
): ReadonlyArray<ElementAttributeDefinition> {
  return parsedAttributes.map(parsedAttribute => buildElementAttributeDefinition(factory, parsedAttribute));
}
