import { type Identifier, type InterfaceDeclaration, type NodeFactory, type PropertySignature } from 'typescript';
import { type TypeMapping } from './type-mapping';

/**
 * Creates a type mapping interface
 * ```ts
 * interface interfaceName {
 *   'name': Type;
 * }
 * ```
 * @param factory TypeScript node factory
 * @param interfaceName Interface name
 * @param typeMappings Type mappings
 * @returns Interface declaration and identifier
 */
export function createTypeMappingInterface(
  factory: NodeFactory,
  interfaceName: string,
  typeMappings: ReadonlyArray<TypeMapping>
): readonly [interfaceDeclaration: InterfaceDeclaration, identifier: Identifier] {
  const members = typeMappings.map(toTypeMappingPropertySignature(factory));
  const identifier = factory.createIdentifier(interfaceName);
  const interfaceDeclaration = factory.createInterfaceDeclaration(
    undefined,
    undefined,
    identifier,
    undefined,
    undefined,
    members
  );
  return [interfaceDeclaration, identifier];
}

/**
 * Returns a function that creates a property signature for a type mapping
 * ```ts
 * 'name': type
 * ```
 * @param factory TypeScript node factory
 * @returns Function that creates a property signature for a type mapping
 */
function toTypeMappingPropertySignature(factory: NodeFactory): (typeMapping: TypeMapping) => PropertySignature {
  return ({ name, type }) => {
    const propertyName = factory.createStringLiteral(name, true);
    return factory.createPropertySignature(undefined, propertyName, undefined, type);
  };
}
