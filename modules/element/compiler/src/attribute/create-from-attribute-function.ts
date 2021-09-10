import {
  createArrowFunction,
  createObjectBindingPattern,
  createParameter,
  createPropertyAccess
} from '@komore/typescript/compiler';
import type { ArrowFunction, Expression, Identifier } from 'typescript';
import { SyntaxKind } from 'typescript';
import type { CompilerContext } from '../codegen/compiler-context';

/**
 * Creates a FromAttribute function
 * ```ts
 * name => subjectExpression.pipe(filter(({ attributeName }) => attributeName === name))
 * ```
 * @param context Compiler context
 * @param subjectExpression Subject expression
 * @returns Arrow function and identifier
 */
export function createFromAttributeFunction(context: CompilerContext, subjectExpression: Expression): ArrowFunction {
  const factory = context.factory;
  const [nameParameter, name] = createParameter(factory, 'name');
  const attributeObservable = createFromAttributeFunctionObservable(context, subjectExpression, name);
  return createArrowFunction(factory, [nameParameter], attributeObservable);
}

/**
 * Creates a FromAttribute function observable
 * ```ts
 * subjectExpression.pipe(filter(({ attributeName }) => attributeName === name))
 * ```
 * @param context Compiler context
 * @param subjectExpression Subject expression
 * @param name Name parameter identifier
 * @returns Expression
 */
function createFromAttributeFunctionObservable(
  context: CompilerContext,
  subjectExpression: Expression,
  name: Identifier
): Expression {
  const factory = context.factory;
  const pipeFunction = createPropertyAccess(factory, subjectExpression, 'pipe');
  const filterPredicate = createFromAttributeFunctionObservableFilterPredicate(context, name);
  const filter = context.import({
    path: '@komore/reactive/operators',
    name: 'filter'
  });
  const filterCall = factory.createCallExpression(filter, undefined, [filterPredicate]);
  return factory.createCallExpression(pipeFunction, undefined, [filterCall]);
}

/**
 * Creates a FromAttribute function observable filter predicate
 * ```ts
 * filter(({ attributeName }) => attributeName === name)
 * ```
 * @param context Compiler context
 * @param name Name parameter identifier
 * @returns Filter predicate arrow function
 */
function createFromAttributeFunctionObservableFilterPredicate(
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
