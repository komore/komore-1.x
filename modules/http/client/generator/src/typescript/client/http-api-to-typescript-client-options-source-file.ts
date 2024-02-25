import { type HttpApi } from '@komore/http/api';
import {
  addJsDocToTypeScriptNode,
  createTypeScriptImportDeclaration,
  createTypeScriptInterfaceDeclaration,
  createTypeScriptModifier,
  createTypeScriptPropertySignature,
  createTypeScriptSourceFile,
  createTypeScriptTypeReference,
  type TypeScriptSourceFile,
} from '@komore/tsc';

import { type TypeScriptHttpApiClientGeneratorContext } from '../context/typescript-http-api-client-generator-context';

/**
 * Creates a function that returns a TypeScript API client options source file, given an HTTP API
 *
 * @param generatorContext Generator context
 * @returns Function that returns a TypeScript API client options source file, given an HTTP API
 */
export function httpApiToTypeScriptClientOptionsSourceFile(
  generatorContext: TypeScriptHttpApiClientGeneratorContext
): (httpApi: HttpApi) => TypeScriptSourceFile {
  const { baseIdentifier, context } = generatorContext;
  const name = `${baseIdentifier}ApiClientOptions`;
  const toImportDeclaration = createTypeScriptImportDeclaration(context);
  const toInterfaceDeclaration = createTypeScriptInterfaceDeclaration(context);
  const toModifier = createTypeScriptModifier(context);
  const exportModifier = toModifier('export');
  const readonlyModifier = toModifier('readonly');
  const toProperty = createTypeScriptPropertySignature(context);
  const toSourceFile = createTypeScriptSourceFile(context);
  const toTypeReference = createTypeScriptTypeReference(context);
  const httpClientType = toTypeReference({ name: 'HttpClient' });
  const withJsDoc = addJsDocToTypeScriptNode(context);
  return ({ description: { title } }) => {
    const httpClientImport = toImportDeclaration({
      imports: [{ name: 'HttpClient', type: true }],
      moduleSpecifier: '@komore/http/client',
    });

    const httpClientProperty = withJsDoc({
      node: toProperty({ modifiers: [readonlyModifier], name: 'httpClient', type: httpClientType }),
      documentation: 'HTTP client',
    });

    const members = [httpClientProperty];
    const optionsInterface = withJsDoc({
      documentation: `${title} API client`,
      node: toInterfaceDeclaration({
        modifiers: [exportModifier],
        members,
        name,
      }),
    });

    const statements = [httpClientImport, optionsInterface];

    return toSourceFile({ statements });
  };
}
