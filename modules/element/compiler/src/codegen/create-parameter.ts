import type { Expression, NodeFactory, ParameterDeclaration, TypeNode } from 'typescript';
import { SyntaxKind } from 'typescript';

/**
 * Creates a parameter
 * @param factory TypeScript node factory
 * @param name Parameter name
 * @param type Parameter type, or types of a union
 * @param initializer Optional initializer expression
 * @returns Parameter declaration
 */
export function createParameter(
  factory: NodeFactory,
  name: string,
  type: TypeNode | ReadonlyArray<TypeNode>,
  optional?: boolean,
  initializer?: Expression
): ParameterDeclaration {
  const questionToken = optional ? factory.createToken(SyntaxKind.QuestionToken) : undefined;
  type = type instanceof Array ? factory.createUnionTypeNode(type) : type;
  return factory.createParameterDeclaration(undefined, undefined, undefined, name, questionToken, type, initializer);
}
