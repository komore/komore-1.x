import type { NodeFactory, PropertySignature } from 'typescript';
import { SyntaxKind } from 'typescript';
import type { ElementEventDefinition } from '../definition/element-event-definition';

/**
 * Creates an element event property
 * ```ts
 * 'eventName': CustomEvent<EventDetailsType>
 * ```
 * @param factory TypeScript node factory
 * @param elementEventDefinition Element event definition
 * @returns Property signature
 */
export function createElementEventProperty(
  factory: NodeFactory,
  elementEventDefinition: ElementEventDefinition
): PropertySignature {
  const { eventName, eventDetailsType } = elementEventDefinition;
  const customEventTemplateParameter = eventDetailsType ?? factory.createKeywordTypeNode(SyntaxKind.VoidKeyword);
  const propertyType = factory.createTypeReferenceNode('CustomEvent', [customEventTemplateParameter]);
  const propertyName = factory.createStringLiteral(eventName);
  return factory.createPropertySignature(undefined, propertyName, undefined, propertyType);
}
