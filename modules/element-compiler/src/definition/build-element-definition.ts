import { type NodeFactory } from 'typescript';
import { type ProcessedSource } from '../processors/processed-source';
import { buildElementAttributeDefinitions } from './attribute/build-element-attribute-definitions';
import { buildElementCustomPropertyDefinitions } from './custom-property/build-element-custom-property-definitions';
import { buildElementEventDefinitions } from './event/build-element-event-definitions';
import { buildElementPropertyDefinitions } from './property/build-element-property-definitions';
import { type ElementDefinition } from './element-definition';

/**
 * Builds an element's definition
 * @param factory TypeScript node factory
 * @param processedSource Processed source
 * @returns Element definition
 */
export function buildElementDefinition(factory: NodeFactory, processedSource: ProcessedSource): ElementDefinition {
  const parsedSource = processedSource.parsedSource;
  const { parsedElementTemplate, parsedCustomPropertyDefinitions /*, scriptElements*/ } = parsedSource;
  const { baseClassName, baseTagName, className, tagName, parsedAttributes } = parsedElementTemplate;
  const attributeDefinitions = buildElementAttributeDefinitions(factory, parsedAttributes);
  const customPropertyDefinitions = buildElementCustomPropertyDefinitions(factory, parsedCustomPropertyDefinitions)
  const eventDefinitions = buildElementEventDefinitions(factory /*, scriptElements*/);
  const propertyDefinitions = buildElementPropertyDefinitions(factory /*, scriptElements*/);
  return {
    baseClassName,
    baseTagName,
    className,
    tagName,
    attributeDefinitions,
    customPropertyDefinitions,
    eventDefinitions,
    propertyDefinitions
  };
}
