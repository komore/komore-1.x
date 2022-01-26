import { createTypeMappingInterface } from '@komore/typescript/compiler';
import { type Identifier, type InterfaceDeclaration } from 'typescript';
import { type ElementCompilerContext } from '../element-compiler-context';
import { type ElementCustomPropertyDefinition } from '../definition/element-custom-property-definition';
import { customPropertyDefinitionToTypeMapping } from './custom-property-definition-to-type-mapping';

/**
 * Creates an element custom property map interface
 * ```ts
 * interface name {
 *   '--property-name-1': string;
 * }
 * ```
 * @param context Element compiler context
 * @param name Interface name
 * @param customPropertyDefinitions Element custom property definitions
 * @returns Interface declaration and identifier
 */
export function createElementCustomPropertyMap(
  context: ElementCompilerContext,
  name: string,
  customPropertyDefinitions: ReadonlyArray<ElementCustomPropertyDefinition>
): readonly [interfaceDeclaration: InterfaceDeclaration, identifier: Identifier] {
  const factory = context.factory;
  const mappedTypes = customPropertyDefinitions.map(customPropertyDefinitionToTypeMapping(factory));
  return createTypeMappingInterface(factory, name, mappedTypes);
}
