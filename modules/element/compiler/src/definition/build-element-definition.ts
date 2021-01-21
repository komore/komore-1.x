import type { ParsedElementTemplate } from '@komore/element/parser';
import type { NodeFactory } from 'typescript';
import { buildElementAttributeDefinitions } from './build-element-attribute-definitions';
import type { ElementDefinition } from './element-definition';

/**
 * Builds an element's definition
 * @param factory TypeScript node factory
 * @param parsedElementTemplate Parsed element template
 * @param scriptElements Script elements
 * @returns Element definition
 */
export function buildElementDefinition(
  factory: NodeFactory,
  parsedElementTemplate: ParsedElementTemplate,
  scriptElements: ReadonlyArray<HTMLScriptElement>
): ElementDefinition {
  const { baseClassName, baseTagName, className, tagName, parsedAttributes } = parsedElementTemplate;
  const attributeDefinitions = buildElementAttributeDefinitions(factory, parsedAttributes);
  const eventDefinitions = buildElementEventDefinitions(factory, scriptElements)
  const propertyDefinitions = buildElementPropertyDefinitions(factory, scriptElements)
  return {
    baseClassName,
    baseTagName,
    className,
    tagName,
    attributeDefinitions,
    eventDefinitions,
    propertyDefinitions
  };
}
