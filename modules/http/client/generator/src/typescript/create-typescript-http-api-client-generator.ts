import { of } from '@komore/reactive';
import { createTypeScriptContext, typeScriptNodeToSourceString } from '@komore/tsc';

import { httpApiToTypeScriptClientOptionsSourceFile } from './client/http-api-to-typescript-client-options-source-file';
import { httpApiToTypeScriptClientSourceFile } from './client/http-api-to-typescript-client-source-file';
import { type TypeScriptHttpApiClientGeneratorContext } from './context/typescript-http-api-client-generator-context';
import { httpApiToTypeScriptApiClientBaseIdentifier } from './http-api-to-typescript-client-base-identifier';
import { type TypeScriptHttpApiClientGenerator } from './typescript-http-api-client-generator';
import { type TypeScriptHttpApiClientGeneratorOptions } from './typescript-http-api-client-generator-options';

/**
 * Creates a TypeScript HTTP API client generator
 *
 * @param generatorOptions HTTP API client TypeScript generator options
 * @returns HTTP API client TypeScript generator
 */
export function createTypeScriptHttpApiClientGenerator(
  _generatorOptions: TypeScriptHttpApiClientGeneratorOptions
): TypeScriptHttpApiClientGenerator {
  return httpApi => {
    const baseIdentifier = httpApiToTypeScriptApiClientBaseIdentifier(httpApi);
    const context = createTypeScriptContext({});
    const generatorContext: TypeScriptHttpApiClientGeneratorContext = {
      baseIdentifier,
      context,
      sourceFileOptions: {},
    };
    const {
      description: { title: name },
    } = httpApi;
    console.log(`Generating TypeScript HTTP API client for "${name}"...`);

    const baseFileName = baseIdentifier.toLocaleLowerCase();
    const clientOptionsFileName = `${baseFileName}-api-client.ts`;
    const clientFileName = `${baseFileName}-api-client.ts`;

    const clientOptionsSource = httpApiToTypeScriptClientOptionsSourceFile(generatorContext)(httpApi);
    const clientOptionsText = typeScriptNodeToSourceString({ fileName: clientOptionsFileName })(clientOptionsSource);
    const clientSource = httpApiToTypeScriptClientSourceFile(generatorContext)(httpApi);
    const clientText = typeScriptNodeToSourceString({ fileName: clientFileName })(clientSource);
    console.log(clientOptionsFileName);
    console.log(clientOptionsText);
    console.log(clientFileName);
    console.log(clientText);

    return of(void 0);
  };
}
