import { createPropertyAccess } from '@komore/typescript/compiler';
import { type Expression, type Identifier } from 'typescript';
import { type CompilerContext } from '../codegen/compiler-context';
import { createFromAttributeFunctionObservableFilterPredicate } from './create-from-attribute-function-observable-filter-predicate';

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
export function createFromAttributeFunctionObservable(
  context: CompilerContext,
  subjectExpression: Expression,
  name: Identifier
): Expression {
  const factory = context.factory;
  const pipeFunction = createPropertyAccess(factory, subjectExpression, 'pipe');
  const filterPredicate = createFromAttributeFunctionObservableFilterPredicate(context, name);
  const filter = context.import({
    path: '@komore/reactive',
    name: 'filter'
  });
  const filterCall = factory.createCallExpression(filter, undefined, [filterPredicate]);
  return factory.createCallExpression(pipeFunction, undefined, [filterCall]);
}
