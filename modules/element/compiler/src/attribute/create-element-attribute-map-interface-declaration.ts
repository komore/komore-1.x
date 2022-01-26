import { createTypeMappingInterface, type TypeMapping } from '@komore/typescript/compiler';
import { type Identifier, type InterfaceDeclaration, type NodeFactory } from 'typescript';
import { type ElementAttributeDefinition } from '../definition/element-attribute-definition';

/**
 * Creates an element attribute map interface
 * ```ts
 * interface InterfaceName {
 *   'attribute-name-1': AttributeType1;
 * }
 * ```
 * @param factory TypeScript node factory
 * @param interfaceName Interface name
 * @param attributeDefinitions Element attribute information
 * @returns Interface declaration and identifier
 */
export function createElementAttributeMapInterfaceDeclaration(
  factory: NodeFactory,
  interfaceName: string,
  attributeDefinitions: ReadonlyArray<ElementAttributeDefinition>
): readonly [interfaceDeclaration: InterfaceDeclaration, identifier: Identifier] {
  const mappedTypes = attributeDefinitions.map(toTypeMapping);
  return createTypeMappingInterface(factory, interfaceName, mappedTypes);
}

/**
 * Returns a type mapping, given an element attribute definition
 * @param elementAttributeDefinition Element attribute definition
 * @returns Type mapping
 */
function toTypeMapping({ attributeName, attributeType }: ElementAttributeDefinition): TypeMapping {
  return {
    name: attributeName,
    type: attributeType
  };
}
