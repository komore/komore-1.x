import { type TypeScriptContext } from '../context/typescript-context';
import { typeScriptContextNodeFactorySymbol } from '../context/typescript-context-node-factory-symbol';
import { type TypeScriptExpression } from '../expression/typescript-expression';
import { type TypeScriptExpressionStatement } from '../expression/typescript-expression-statement';

/**
 * Creates a function that creates a TypeScript super() call expression statement
 *
 * ```ts
 * super(parameters);
 * ```
 *
 * @param context TypeScript context
 * @returns Function that creates a TypeScript super() call expression statement
 */
export function createTypeScriptSuperCallExpressionStatement(
  context: TypeScriptContext
): (expressions: ReadonlyArray<TypeScriptExpression>) => TypeScriptExpressionStatement {
  const { [typeScriptContextNodeFactorySymbol]: factory } = context;
  return expressions => {
    const superCall = factory.createCallExpression(factory.createSuper(), undefined, expressions);
    return factory.createExpressionStatement(superCall);
  };
}
