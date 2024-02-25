import { type TypeScriptContext } from '../context/typescript-context';
import { typeScriptContextNodeFactorySymbol } from '../context/typescript-context-node-factory-symbol';
import { propertyNamesToTypeScriptPropertyAccessExpression } from './property-names-to-typescript-property-access-expression';
import { type TypeScriptPropertyAccessExpression } from './typescript-property-access-expression';
import { type TypeScriptPropertyAccessParameters } from './typescript-property-access-parameters';

/**
 * Creates a function that returns a TypeScript property access expression
 *
 * ```ts
 * expression.propertyName.x.y.z
 * ```
 *
 * @param context TypeScript context
 * @returns Function that returns a TypeScript property access expression
 */
export function createTypeScriptPropertyAccessExpression(
  context: TypeScriptContext
): (parameters: TypeScriptPropertyAccessParameters) => TypeScriptPropertyAccessExpression {
  const { [typeScriptContextNodeFactorySymbol]: factory } = context;
  return ({ expression, propertyName: [propertyName, ...nestedPropertyNames] }) => {
    const baseExpression = typeof expression === 'string' ? factory.createIdentifier(expression) : expression;
    const firstExpression = factory.createPropertyAccessExpression(baseExpression, propertyName);
    return nestedPropertyNames.reduce(propertyNamesToTypeScriptPropertyAccessExpression(context), firstExpression);
  };
}
