import { type TypeScriptContext } from '../context/typescript-context';
import { typeScriptContextNodeFactorySymbol } from '../context/typescript-context-node-factory-symbol';
import { type TypeScriptPropertyAccessExpression } from './typescript-property-access-expression';

/**
 * Creates a function that reduces property names to a TypeScript property access expression
 *
 * @param context TypeScript context
 * @returns Function that reduces property names to a TypeScript property access expression
 */
export function propertyNamesToTypeScriptPropertyAccessExpression(
  context: TypeScriptContext
): (propertyAccess: TypeScriptPropertyAccessExpression, propertyName: string) => TypeScriptPropertyAccessExpression {
  const { [typeScriptContextNodeFactorySymbol]: factory } = context;
  return (propertyAccess, propertyName) => {
    const propertyId = factory.createIdentifier(propertyName);
    return factory.createPropertyAccessExpression(propertyAccess, propertyId);
  };
}
