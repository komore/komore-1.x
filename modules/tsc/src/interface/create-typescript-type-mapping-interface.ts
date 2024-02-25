import { type TypeScriptContext } from '../context/typescript-context';
import { typeScriptContextNodeFactorySymbol } from '../context/typescript-context-node-factory-symbol';
import { type TypeScriptIdentifier } from '../identifier/typescript-identifier';
import { createTypeScriptInterfaceDeclaration } from './create-typescript-interface-declaration';
import { type TypeScriptInterfaceDeclaration } from './typescript-interface-declaration';
import { type TypeScriptTypeMappingInterfaceParameters } from './typescript-type-mapping-interface-parameters';
import { typeScriptTypeMappingTypeScriptPropertySignature } from './typescript-type-mapping-to-typescript-property-signature';

/**
 * Creates a function that creates a TypeScript type mapping interface
 *
 * ```ts
 * interface name {
 *   'typeMapping.name': typeMapping.type;
 * }
 * ```
 *
 * @param context TypeScript context
 * @returns Function that creates a TypeScript type mapping interface
 */
export function createTypeScriptTypeMappingInterface(
  context: TypeScriptContext
): (
  parameters: TypeScriptTypeMappingInterfaceParameters
) => readonly [interfaceDeclaration: TypeScriptInterfaceDeclaration, identifier: TypeScriptIdentifier] {
  const { [typeScriptContextNodeFactorySymbol]: factory } = context;
  const toInterfaceDeclaration = createTypeScriptInterfaceDeclaration(context);
  return ({ name, typeMappings }) => {
    const members = typeMappings.map(typeScriptTypeMappingTypeScriptPropertySignature(context));
    const identifier = factory.createIdentifier(name);
    const interfaceDeclaration = toInterfaceDeclaration({ name: identifier, members });
    return [interfaceDeclaration, identifier];
  };
}
