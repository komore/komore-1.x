import {
  SyntaxKind,
  type ArrowFunction,
  type ConciseBody,
  type NodeFactory,
  type ParameterDeclaration,
  type TypeNode,
} from 'typescript';

/**
 * Creates an arrow function
 *
 * @param factory TypeScript node factory
 * @param parameters Parameters
 * @param functionBody Function body
 * @param returnType Return type
 * @returns Arrow function
 */
export function createArrowFunction(
  factory: NodeFactory,
  parameters: ReadonlyArray<ParameterDeclaration>,
  functionBody: ConciseBody,
  returnType?: TypeNode
): ArrowFunction {
  const arrowToken = factory.createToken(SyntaxKind.EqualsGreaterThanToken);
  return factory.createArrowFunction(undefined, undefined, parameters, returnType, arrowToken, functionBody);
}
