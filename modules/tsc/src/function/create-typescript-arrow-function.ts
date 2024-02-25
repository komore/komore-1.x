import { SyntaxKind } from 'typescript';

import { type TypeScriptContext } from '../context/typescript-context';
import { typeScriptContextNodeFactorySymbol } from '../context/typescript-context-node-factory-symbol';
import { type TypeScriptArrowFunction } from './typescript-arrow-function';
import { type TypeScriptArrowFunctionParameters } from './typescript-arrow-function-parameters';

/**
 * Creates a function that creates a TypeScript arrow function
 *
 * ```ts
 * (parameters: Parameters): returnType => body
 * ```
 *
 * @param context TypeScript context
 * @returns Function that creates a TypeScript arrow function
 */
export function createTypeScriptArrowFunction(
  context: TypeScriptContext
): (parameters: TypeScriptArrowFunctionParameters) => TypeScriptArrowFunction {
  const { [typeScriptContextNodeFactorySymbol]: factory } = context;
  return ({ body, parameters, returnType }) => {
    const arrowToken = factory.createToken(SyntaxKind.EqualsGreaterThanToken);
    return factory.createArrowFunction(undefined, undefined, parameters, returnType, arrowToken, body);
  };
}
