import type { Identifier, InterfaceDeclaration, NodeFactory } from 'typescript';
import { createTypeMappingInterface } from '../codegen/create-type-mapping-interface';
import type { ElementAttributeDefinition } from '../definition/element-attribute-definition';

/**
 * Creates an element attribute map interface
 * ```ts
 * interface ElementClassNameAttributeMap {
 *   'attribute-name-1': AttributeType1;
 * }
 * ```
 * @param factory TypeScript node factory
 * @param elementClassName Element class name
 * @param attributeDefinitions Element attribute information
 * @returns Interface declaration
 */
export function createElementAttributeMap(
  factory: NodeFactory,
  elementClassName: string,
  attributeDefinitions: ReadonlyArray<ElementAttributeDefinition>
): [InterfaceDeclaration, Identifier] {
  const interfaceName = `${elementClassName}AttributeMap`;
  const mappedTypes = attributeDefinitions.map(({ attributeName, attributeType }) => ({
    name: attributeName,
    type: attributeType
  }));
  return createTypeMappingInterface(factory, interfaceName, mappedTypes);
}
