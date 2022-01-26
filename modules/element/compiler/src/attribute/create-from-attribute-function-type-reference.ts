import { createKeyof } from '@komore/typescript/compiler';
import { type TypeReferenceNode } from 'typescript';
import { type ElementCompilerContext } from '../element-compiler-context';

/**
 * Creates a fromAttribute function type
 * ```ts
 * FromAttribute<keyof ElementAttributeMap>
 * ```
 * @param context Element compiler context
 * @param attributeMapTypeReference Attribute map type reference
 * @returns Type reference node
 */
export function createFromAttributeFunctionTypeReference(
  context: ElementCompilerContext,
  attributeMapTypeReference: TypeReferenceNode
): TypeReferenceNode {
  const { factory, resolveImport } = context;
  const fromAttributeIdentifier = resolveImport({
    name: 'FromAttribute',
    path: '@komore/element',
    type: true
  });
  const typeOperator = createKeyof(factory, attributeMapTypeReference);
  return factory.createTypeReferenceNode(fromAttributeIdentifier, [typeOperator]);
}
