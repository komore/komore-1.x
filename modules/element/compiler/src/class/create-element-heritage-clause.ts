import type { HeritageClause, NodeFactory } from 'typescript';
import { SyntaxKind } from 'typescript';

/**
 * Creates an element's heritage clause
 * ```ts
 * extends basEClassName
 * ```
 * @param factory TypeScript node factory
 * @param baseClassName Base class name
 * @returns Heritage clause
 */
export function createElementHeritageClause(factory: NodeFactory, baseClassName: string): HeritageClause {
  return factory.createHeritageClause(SyntaxKind.ExtendsKeyword, [
    factory.createExpressionWithTypeArguments(factory.createIdentifier(baseClassName), undefined)
  ]);
}
