import type { Identifier, InterfaceDeclaration, NodeFactory } from 'typescript';
import { createTypeMappingInterface } from '../codegen/create-type-mapping-interface';
import type { ElementCustomPropertyDefinition } from '../definition/element-custom-property-definition';

/**
 * Creates an element custom property map interface
 * ```ts
 * interface ElementClassNameCustomPropertyMap {
 *   '--property-name-1': string;
 * }
 * ```
 * @param factory TypeScript node factory
 * @param elementClassName Element class name
 * @param customPropertyDefinitions Element custom property definitions
 * @returns Interface declaration
 */
export function createElementCustomPropertyMap(
  factory: NodeFactory,
  elementClassName: string,
  customPropertyDefinitions: ReadonlyArray<ElementCustomPropertyDefinition>
): [InterfaceDeclaration, Identifier] {
  const interfaceName = `${elementClassName}CustomPropertyMap`;
  const stringType = factory.createTypeReferenceNode('string');
  const mappedTypes = customPropertyDefinitions.map(({ name }) => ({
    name,
    type: stringType
  }));
  return createTypeMappingInterface(factory, interfaceName, mappedTypes);
}
