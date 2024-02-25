import { type HttpApi } from '@komore/http/api';
import {
  addJsDocToTypeScriptNode,
  createTypeScriptCallSignatureDeclaration,
  createTypeScriptInterfaceDeclaration,
  createTypeScriptLiteralType,
  createTypeScriptModifier,
  createTypeScriptParameter,
  createTypeScriptSourceFile,
  createTypeScriptTypeReference,
  type TypeScriptSourceFile,
} from '@komore/tsc';

import { type TypeScriptHttpApiClientGeneratorContext } from '../context/typescript-http-api-client-generator-context';

/**
 * Creates a function that returns a TypeScript API client source file, given an HTTP API
 *
 * @param generatorContext Generator context
 * @returns Function that returns a TypeScript API client source file, given an HTTP API
 */
export function httpApiToTypeScriptClientSourceFile(
  generatorContext: TypeScriptHttpApiClientGeneratorContext
): (httpApi: HttpApi) => TypeScriptSourceFile {
  const { baseIdentifier, context } = generatorContext;
  const name = `${baseIdentifier}ApiClient`;
  const toCallSignature = createTypeScriptCallSignatureDeclaration(context);
  const toInterfaceDeclaration = createTypeScriptInterfaceDeclaration(context);
  const toModifier = createTypeScriptModifier(context);
  const toParameter = createTypeScriptParameter(context);
  const toLiteralType = createTypeScriptLiteralType(context);
  const toSourceFile = createTypeScriptSourceFile(context);
  const toTypeReference = createTypeScriptTypeReference(context);
  const withJsDoc = addJsDocToTypeScriptNode(context);
  return ({ description: { title } }) => {
    const returnType = toTypeReference({ name: 'Observable', typeArguments: [] });
    const [postMethod] = toParameter({ name: 'method', type: toLiteralType('POST') });
    const [getMethod] = toParameter({ name: 'method', type: toLiteralType('GET') });
    const members = [
      withJsDoc({
        documentation: 'Woohoo GET',
        node: toCallSignature({ parameters: [getMethod], returnType, typeParameters: [] }),
      }),
      withJsDoc({
        documentation: 'Woohoo POST',
        node: toCallSignature({ parameters: [postMethod], returnType, typeParameters: [] }),
      }),
    ];

    const interfaceDeclaration = withJsDoc({
      documentation: `${title} API client`,
      node: toInterfaceDeclaration({ modifiers: [toModifier('export')], members, name }),
    });

    const statements = [interfaceDeclaration];

    return toSourceFile({ statements });
  };
}
