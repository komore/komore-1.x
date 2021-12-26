import { createArrowFunction, createParameter } from '@komore/typescript/compiler';
import { type ArrowFunction, type Expression } from 'typescript';
import { type CompilerContext } from '../codegen/compiler-context';
import { createFromAttributeFunctionObservable } from './create-from-attribute-function-observable';

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
