import type { TypeMapping } from '@komore/typescript/compiler';
import { createTypeMappingInterface } from '@komore/typescript/compiler';
import type { Identifier, InterfaceDeclaration, NodeFactory } from 'typescript';
import type { CompilerContext } from '../codegen/compiler-context';
import type { ElementCustomPropertyDefinition } from '../definition/element-custom-property-definition';

/**
 * Creates an element custom property map interface
 * ```ts
 * interface ElementClassNameCustomPropertyMap {
 *   '--property-name-1': string;
 * }
 * ```
 * @param compilerContext Compiler context
 * @param elementClassName Element class name
 * @param customPropertyDefinitions Element custom property definitions
 * @returns Interface declaration
 */
export function createElementCustomPropertyMap(
  compilerContext: CompilerContext,
  elementClassName: string,
  customPropertyDefinitions: ReadonlyArray<ElementCustomPropertyDefinition>
): [InterfaceDeclaration, Identifier] {
  const factory = compilerContext.factory;
  const interfaceName = `${elementClassName}CustomPropertyMap`;
  const 
  compilerContext.import()
  const mappedTypes = customPropertyDefinitions.map(toCustomPropertyMappedType(factory));
  return createTypeMappingInterface(factory, interfaceName, mappedTypes);
}

function toCustomPropertyMappedType(factory: NodeFactory): (customPropertyDefinition: ElementCustomPropertyDefinition) => TypeMapping {
  const stringType = factory.createTypeReferenceNode('string');
  const numberType = factory.createTypeReferenceNode('number');
  const syntaxMapping = new Map<string, TypeReference

  return customPropertyDefinition => {
    const { name, syntax } = customPropertyDefinition.propertyDefinition;
    return {
      name,
      type
    }
  };
}
