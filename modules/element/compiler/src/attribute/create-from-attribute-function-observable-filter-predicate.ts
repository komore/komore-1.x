import { createArrowFunction, createObjectBindingPattern, createParameter } from '@komore/typescript/compiler';
import { type ArrowFunction, type Identifier, SyntaxKind } from 'typescript';
import { type CompilerContext } from '../codegen/compiler-context';

/**
 * Creates a FromAttribute function observable filter predicate
 * ```ts
 * filter(({ attributeName }) => attributeName === name)
 * ```
 * @param context Compiler context
 * @param name Name parameter identifier
 * @returns Filter predicate arrow function
 */
export function createFromAttributeFunctionObservableFilterPredicate(
  context: CompilerContext,
  name: Identifier
): ArrowFunction {
  const factory = context.factory;
  const attributeName = factory.createIdentifier('attributeName');
  const structuredParameter = createObjectBindingPattern(factory, [attributeName]);
  const [parameterDeclaration] = createParameter(factory, structuredParameter);
  const comparisonSign = factory.createToken(SyntaxKind.EqualsEqualsEqualsToken);
  const comparisonExpression = factory.createBinaryExpression(attributeName, comparisonSign, name);
  return createArrowFunction(factory, [parameterDeclaration], comparisonExpression);
}
