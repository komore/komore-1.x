import { Identifier, InterfaceDeclaration, NodeFactory, TypeNode } from 'typescript';

/**
 * Creates a type mapping interface
 * ```ts
 * interface InterfaceName {
 *   'name': Type;
 * }
 * ```
 * @param factory TypeScript node factory
 * @param interfaceName Interface name
 * @param typeMappings Type mappings
 * @returns Interface declaration
 */
export function createTypeMappingInterface(
  factory: NodeFactory,
  interfaceName: string,
  typeMappings: ReadonlyArray<TypeMapping>
): [InterfaceDeclaration, Identifier] {
  const members = typeMappings.map(createTypeMappingMember(factory));
  const nameId = factory.createIdentifier(interfaceName);
  const declaration = factory.createInterfaceDeclaration(undefined, undefined, nameId, undefined, undefined, members);
  return [declaration, nameId];
}

/**
 * Creates a type mapping member
 * @param factory TypeScript node factory
 */
function createTypeMappingMember(factory: NodeFactory) {
  return ({ name, type }: TypeMapping) => {
    const propertyName = factory.createStringLiteral(name);
    return factory.createPropertySignature(undefined, propertyName, undefined, type);
  };
}

/**
 * Type mapping
 */
interface TypeMapping {
  readonly name: string;
  readonly type: TypeNode;
}
