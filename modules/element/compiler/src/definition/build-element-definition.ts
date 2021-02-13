import type { ParsedSource } from '@komore/element/parser';
import type { NodeFactory } from 'typescript';
import { buildElementAttributeDefinitions } from './build-element-attribute-definitions';
import type { ElementDefinition } from './element-definition';

/**
 * Builds an element's definition
 * @param factory TypeScript node factory
 * @param parsedSource Parsed source
 * @returns Element definition
 */
export function buildElementDefinition(
  factory: NodeFactory,
  parsedSource: ParsedSource
): ElementDefinition {
  const { parsedElementTemplate, parsedCustomPropertyDefinitions, scriptElements } = parsedSource;
  const { baseClassName, baseTagName, className, tagName, parsedAttributes } = parsedElementTemplate;
  const attributeDefinitions = buildElementAttributeDefinitions(factory, parsedAttributes);
  const eventDefinitions = buildElementEventDefinitions(factory, scriptElements);
  const propertyDefinitions = buildElementPropertyDefinitions(factory, scriptElements);
  const customPropertyDefinitions = buildElementCustomPropertyDefinitions(factory, parsedCustomPropertyDefinitions);
  return {
    baseClassName,
    baseTagName,
    className,
    tagName,
    attributeDefinitions,
    eventDefinitions,
    propertyDefinitions,
    customPropertyDefinitions
  };
}
