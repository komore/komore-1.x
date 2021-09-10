import { createVariableStatement } from '@komore/typescript/compiler';
import type { Expression, Identifier, TypeReferenceNode, VariableStatement } from 'typescript';
import type { CompilerContext } from '../codegen/compiler-context';
import { createFromAttributeFunction } from './create-from-attribute-function';

/**
 * Creates a fromAttribute variable statement
 * ```ts
 * const variableName: variableType = name => subjectExpression.pipe(
 *   filter(({ attributeName }) => attributeName === name)
 * );
 * ```
 * @param factory TypeScript node factory
 * @param variableName Variable name
 * @param variableType Variable type
 * @param subjectExpression Subject expression
 * @returns Variable declaration and identifier
 */
export function createFromAttributeVariableStatement(
  context: CompilerContext,
  variableName: string,
  variableType: TypeReferenceNode,
  subjectExpression: Expression
): [VariableStatement, Identifier] {
  const initializer = createFromAttributeFunction(context, subjectExpression);
  return createVariableStatement(context.factory, variableName, initializer, variableType);
}
