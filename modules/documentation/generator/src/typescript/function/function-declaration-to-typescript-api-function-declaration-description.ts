import { TypeFormatFlags, type FunctionDeclaration } from 'ts-morph';

import { type TypeScriptApiFunctionDeclarationDescription } from '@komore/documentation';

import { parseJsDoc } from '../jsdoc/parse-js-doc';
import { parameterDeclarationToTypeScriptApiFunctionParameterDescription } from './parameter-declaration-to-typescript-api-function-parameter-description';

export function functionDeclarationToTypeScriptApiFunctionDeclarationDescription(
  declaration: FunctionDeclaration
): TypeScriptApiFunctionDeclarationDescription | undefined {
  const jsDocNode = declaration.getJsDocs()[0];
  if (jsDocNode === undefined) {
    return undefined;
  }

  const jsDoc = parseJsDoc(jsDocNode);
  const { description } = jsDoc;
  const declarationParameters = declaration.getParameters();
  // const typeParameters = declaration.getTypeParameters();
  const returnType = declaration.getReturnType();
  const toParameter = parameterDeclarationToTypeScriptApiFunctionParameterDescription(jsDoc.parameters);
  const parameters = declarationParameters.map(toParameter);
  const returnValue = {
    description: jsDoc.returnValue ?? '',
    type: {
      name: returnType.getText(declaration, TypeFormatFlags.None),
    },
  };

  const name = declaration.getName();
  if (name === undefined) {
    throw new Error('omg declaration has no name');
  }

  return {
    description,
    name,
    parameters,
    returnValue,
  };
}
