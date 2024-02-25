import { SyntaxKind } from 'typescript';

import { type TypeScriptBindingName } from '../binding/typescript-binding-name';
import { type TypeScriptContext } from '../context/typescript-context';
import { typeScriptContextNodeFactorySymbol } from '../context/typescript-context-node-factory-symbol';
import { type TypeScriptIdentifier } from '../identifier/typescript-identifier';
import { type TypeScriptParameterBindingParameters } from './typescript-parameter-binding-parameters';
import { type TypeScriptParameterDeclaration } from './typescript-parameter-declaration';
import { type TypeScriptParameterIdentifierParameters } from './typescript-parameter-identifier-parameters';

/**
 * Creates a function that returns a TypeScript parameter
 *
 * ```ts
 * name?: type = initializer
 * ```
 *
 * ```ts
 * {}?: type = initializer
 * ```
 *
 * @param context TypeScript context
 * @returns Function that returns a TypeScript parameter
 */
export function createTypeScriptParameter(context: TypeScriptContext): TypeScriptParameterFactory {
  const { [typeScriptContextNodeFactorySymbol]: factory } = context;
  const parameterFactory = (parameters: Parameters<TypeScriptParameterFactory>[0]) => {
    const { initializer, name, optional, type } = parameters;
    const nameId = typeof name === 'string' ? factory.createIdentifier(name) : name;
    const questionToken = optional ? factory.createToken(SyntaxKind.QuestionToken) : undefined;
    const parameterType = type instanceof Array ? factory.createUnionTypeNode(type) : type;
    const parameterDeclaration = factory.createParameterDeclaration(
      undefined,
      undefined,
      nameId,
      questionToken,
      parameterType,
      initializer
    );
    return [parameterDeclaration, parameterDeclaration.name];
  };
  return parameterFactory as unknown as TypeScriptParameterFactory;
}

/**
 * TypeScript parameter factory
 */
export interface TypeScriptParameterFactory {
  /**
   * Creates a parameter using a name
   *
   * ```ts
   * name?: type = initializer
   * ```
   *
   * @param parameters TypeScript parameter identifier parameters
   * @returns TypeScript parameter declaration and identifier
   */
  (
    parameters: TypeScriptParameterIdentifierParameters
  ): readonly [parameterDeclaration: TypeScriptParameterDeclaration, identifier: TypeScriptIdentifier];
  /**
   * Creates a parameter using a binding name
   *
   * ```ts
   * { }?: type = initializer
   * ```
   *
   * @param parameters TypeScript parameter binding parameters
   * @returns TypeScript parameter declaration and binding name
   */
  (
    parameters: TypeScriptParameterBindingParameters
  ): readonly [parameterDeclaration: TypeScriptParameterDeclaration, bindingName: TypeScriptBindingName];
}
