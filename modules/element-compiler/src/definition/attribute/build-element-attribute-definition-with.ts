import { type ParsedElementAttribute } from '@komore/element/parser';
import { type NodeFactory } from 'typescript';
import { type ElementAttributeDefinition } from '../element-attribute-definition';
import { buildElementAttributeDefinition } from './build-element-attribute-definition';

/**
 * Creates a function that builds an element attribute definition with a TypeScript node factory
 * @param factory TypeScript node factory
 * @returns Function that builds an element attribute definition
 */
export function buildElementAttributeDefinitionWith(
  factory: NodeFactory
): (parsedElementAttribute: ParsedElementAttribute) => ElementAttributeDefinition {
  return parsedElementAttribute => buildElementAttributeDefinition(factory, parsedElementAttribute);
}
