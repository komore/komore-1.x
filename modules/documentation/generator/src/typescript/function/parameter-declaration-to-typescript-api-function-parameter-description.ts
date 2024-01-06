import { type ParameterDeclaration } from 'ts-morph';

import { type TypeScriptApiFunctionParameterDescription } from '@komore/documentation';
import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Creates a function that builds a TypeScript API function parameter description from a parameter declaration
 *
 * @returns Function that builds a TypeScript API function parameter description from a parameter declaration
 */
export function parameterDeclarationToTypeScriptApiFunctionParameterDescription(
  parameterJsDoc: ReadonlyRecord<string, string> | undefined
): (parameterDeclaration: ParameterDeclaration) => TypeScriptApiFunctionParameterDescription {
  return parameterDeclaration => {
    const name = parameterDeclaration.getName();
    const description = parameterJsDoc?.[name]?.trim() ?? '';
    // TODO: optional, rest
    return {
      name,
      description,
    };
  };
}
