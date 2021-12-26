import { type DeclarationStatement, type Identifier, type NodeFactory, type TypeReferenceNode } from 'typescript';

/**
 * Creates a fromAttribute function type
 * ```ts
 * type ElementClassNameFromAttribute = FromAttribute<ElementAttributeMap>;
 * ```
 * @param factory TypeScript node factory
 * @param elementClassName Element class name
 * @param attributeMap Attribute map
 * @returns Type declaration and identifier
 */
export function createFromAttributeFunctionType(
  factory: NodeFactory,
  elementClassName: string,
  attributeMap: TypeReferenceNode
): [DeclarationStatement, Identifier] {
  const name = `${elementClassName}FromAttribute`;
  const nameId = factory.createIdentifier(name);
  const typeReference = factory.createTypeReferenceNode('FromAttribute', [attributeMap]);
  const declarationStatement = factory.createTypeAliasDeclaration(
    undefined,
    undefined,
    nameId,
    undefined,
    typeReference
  );
  return [declarationStatement, nameId];
}
