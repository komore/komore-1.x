import { dirname, resolve } from 'node:path';

import { empty, expand, map, reduce } from '@komore/reactive';

import { extendedTypeScriptConfigurationsToTypeScriptConfiguration } from './extended-typescript-configurations-to-typescript-configuration';
import { loadExtendedTypeScriptConfiguration } from './load-extended-typescript-configuration';
import { type TypeScriptConfiguration } from './typescript-configuration';

/**
 * Loads a TypeScript configuration from a file
 *
 * The `extends` property key is taken into account and the "inheritance" chain is walked up
 *
 * @param filePath File path
 * @returns TypeScript configuration
 */
export function loadTypeScriptConfiguration(filePath: string): Observable<TypeScriptConfiguration> {
  const initialTypeScriptConfiguration = {
    compilerOptions: {},
    extendedConfigurations: [],
  } as unknown as TypeScriptConfiguration;
  return loadExtendedTypeScriptConfiguration(filePath).pipe(
    map(typeScriptConfigurationWithPath(filePath)),
    expand(([{ extends: extendedConfigurationPath }, configurationFilePath]) => {
      if (extendedConfigurationPath === undefined) {
        return empty;
      }

      const extendedFilePath = extendedConfigurationPathToFullPath(configurationFilePath)(extendedConfigurationPath);
      return loadExtendedTypeScriptConfiguration(extendedFilePath).pipe(
        map(typeScriptConfigurationWithPath(extendedFilePath))
      );
    }),
    map(([configuration]) => configuration),
    reduce(extendedTypeScriptConfigurationsToTypeScriptConfiguration, initialTypeScriptConfiguration)
  );
}

function extendedConfigurationPathToFullPath(sourceConfigurationPath: string): (filePath: string) => string {
  const basePath = dirname(sourceConfigurationPath);
  return filePath => resolve(basePath, filePath);
}

function typeScriptConfigurationWithPath(
  sourceConfigurationPath: string
): (
  typeScriptConfiguration: TypeScriptConfiguration
) => readonly [configuration: TypeScriptConfiguration, filePath: string] {
  return typeScriptConfiguration => [typeScriptConfiguration, sourceConfigurationPath];
}
