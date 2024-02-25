import { SyntaxKind } from 'typescript';

import { type TypeScriptContext } from '../context/typescript-context';
import { typeScriptContextNodeFactorySymbol } from '../context/typescript-context-node-factory-symbol';
import { type TypeScriptIdentifier } from '../identifier/typescript-identifier';
import { type TypeScriptHeritageClause } from './typescript-heritage-clause';

/**
 * Creates a function that creates TypeScript extends heritage clause
 *
 * ```ts
 * extends baseType
 * ```
 *
 * @param context TypeScript context
 * @returns Function that creates a TypeScript extends heritage clause
 */
export function createTypeScriptExtendsType(
  context: TypeScriptContext
): (baseType: string | TypeScriptIdentifier) => TypeScriptHeritageClause {
  const { [typeScriptContextNodeFactorySymbol]: factory } = context;
  return baseType => {
    const baseTypeId = typeof baseType === 'string' ? factory.createIdentifier(baseType) : baseType;
    const baseTypeExpression = factory.createExpressionWithTypeArguments(baseTypeId, undefined);
    return factory.createHeritageClause(SyntaxKind.ExtendsKeyword, [baseTypeExpression]);
  };
}
