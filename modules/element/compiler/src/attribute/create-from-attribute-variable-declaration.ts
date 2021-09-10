import type { Identifier, NodeFactory, TypeReferenceNode, VariableDeclaration } from 'typescript';

/**
 * Creates a fromAttribute variable declaration
 * ```ts
 * const fromAttribute: FromAttribute<TestAttributeMap> = name => subjectExpression.pipe(
 *   filter(({ attributeName }) => attributeName === name)
 * );
 * ```
 * @param factory TypeScript node factory
 * @param attributeMap Attribute map
 * @returns Variable declaration and identifier
 */
export function createFromAttributeVariableDeclaration(
  factory: NodeFactory,
  attributeMap: TypeReferenceNode
): [VariableDeclaration, Identifier] {}
