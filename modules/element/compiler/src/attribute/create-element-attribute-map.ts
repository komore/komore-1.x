import type { InterfaceDeclaration, NodeFactory, PropertySignature } from 'typescript';
import type { ElementDefinition } from '../definition/element-definition';
import type { ElementAttributeDefinition } from './element-attribute-definition';

/**
 * Creates an element attribute map interface
 * ```ts
 * interface ElementNameAttributeMap {
 *   'attribute-name-1': AttributeType1;
 * }
 * ```
 * @param factory TypeScript node factory
 * @param elementDefinition Element definition
 * @param attributeDefinitions Element attribute information
 * @returns Interface declaration
 */
export function createElementAttributeMap(
  factory: NodeFactory,
  elementDefinition: ElementDefinition,
  attributeDefinitions: ReadonlyArray<ElementAttributeDefinition>
): InterfaceDeclaration {
  return factory.createInterfaceDeclaration(
    undefined,
    undefined,
    `${elementDefinition.className}AttributeMap`,
    undefined,
    undefined,
    attributeDefinitions.map(attributeDefinition => createElementAttributeMapProperty(factory, attributeDefinition))
  );
}

/**
 * Creates an element attribute map property
 * ```ts
 * 'attribute-name': AttributeType;
 * ```
 * @param factory TypeScript node factory
 * @param attributeDefinition Element attribute definition
 * @returns Property signature
 */
function createElementAttributeMapProperty(
  factory: NodeFactory,
  attributeDefinition: ElementAttributeDefinition
): PropertySignature {
  const propertyName = factory.createStringLiteral(attributeDefinition.attributeName);
  return factory.createPropertySignature(undefined, propertyName, undefined, attributeDefinition.attributeValueType);
}
