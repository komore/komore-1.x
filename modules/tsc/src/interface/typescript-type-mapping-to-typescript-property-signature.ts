import { type TypeScriptContext } from '../context/typescript-context';
import { createTypeScriptModifier } from '../modifier/create-typescript-modifier';
import { createTypeScriptPropertySignature } from '../property/create-typescript-property-signature';
import { type TypeScriptPropertySignature } from '../property/typescript-property-signature';
import { type TypeScriptTypeMapping } from './typescript-type-mapping';

/**
 * Creates a function that creates a TypeScript property signature, given a type mapping
 *
 * ```ts
 * 'name': type
 * ```
 *
 * @param context TypeScript context
 * @returns Function that creates a TypeScript property signature, given a type mapping
 */
export function typeScriptTypeMappingTypeScriptPropertySignature(
  context: TypeScriptContext
): (typeMapping: TypeScriptTypeMapping) => TypeScriptPropertySignature {
  const toPropertySignature = createTypeScriptPropertySignature(context);
  const modifiers = [createTypeScriptModifier(context)('readonly')];
  return ({ name, type }) => toPropertySignature({ modifiers, name, type });
}
