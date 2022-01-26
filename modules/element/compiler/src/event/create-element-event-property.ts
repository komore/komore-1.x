import { type ElementEventDefinition } from '@komore/element/compiler/processor';
import { SyntaxKind, type NodeFactory, type PropertySignature } from 'typescript';

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
  const propertyName = factory.createStringLiteral(eventName, true);
  return factory.createPropertySignature(undefined, propertyName, undefined, propertyType);
}
