import { type TypeScriptContext } from '../context/typescript-context';
import { typeScriptContextNodeFactorySymbol } from '../context/typescript-context-node-factory-symbol';
import { type TypeScriptPropertySignature } from '../property/typescript-property-signature';
import { type TypeScriptPropertySignatureParameters } from './typescript-property-signature-parameters';

/**
 * Creates a function that creates a TypeScript property signature
 *
 * ```ts
 * readonly 'name'?: type
 * ```
 *
 * @param context TypeScript context
 * @returns Function that creates a TypeScript property signature
 */
export function createTypeScriptPropertySignature(
  context: TypeScriptContext
): (parameters: TypeScriptPropertySignatureParameters) => TypeScriptPropertySignature {
  const { [typeScriptContextNodeFactorySymbol]: factory } = context;
  return ({ modifiers, name, type }) => {
    // TODO: check if name can't be a property name without quote
    const propertyName = factory.createStringLiteral(name, true);
    propertyName;
    return factory.createPropertySignature(modifiers, name, undefined, type);
  };
}
