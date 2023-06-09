import { type HeritageClause, type Identifier, type NodeFactory, SyntaxKind } from 'typescript';

/**
 * Creates an extends heritage clause
 * ```ts
 * extends baseType
 * ```
 * @param factory TypeScript node factory
 * @param baseType Base type
 * @returns Heritage clause
 */
export function createExtendsType(factory: NodeFactory, baseType: string | Identifier): HeritageClause {
  const baseTypeId = typeof baseType === 'string'
    ? factory.createIdentifier(baseType)
    : baseType
  ;
  const baseTypeExpression = factory.createExpressionWithTypeArguments(baseTypeId, undefined);
  return factory.createHeritageClause(SyntaxKind.ExtendsKeyword, [baseTypeExpression]);
}
