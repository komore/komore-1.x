import { type TypeScriptConfiguration } from '../typescript-configuration';
import { type TypeScriptConfigurationJson } from './typescript-configuration-json';

/**
 * Returns an unresolved TypeScript configuration, given a TypeScript configuration JSON
 *
 * An unresolved TypeScript configuration still uses a path for `extends` rather than the list of referenced TypeScript
 * configurations
 *
 * @param configurationJson TypeScript configuration JSON
 * @returns TypeScript configuration
 * @private
 */
export function typeScriptConfigurationJsonToUnresolvedTypeScriptConfiguration(
  configurationJson: TypeScriptConfigurationJson
): TypeScriptConfiguration {
  const {
    compileOnSave = false,
    compilerOptions = {},
    exclude = [],
    extends: extendedConfigurationPath,
    files = [],
    include = [],
    references = [],
  } = configurationJson;
  return {
    compileOnSave,
    compilerOptions,
    exclude,
    ...(extendedConfigurationPath !== undefined ? { extends: extendedConfigurationPath } : {}),
    files,
    include,
    references,
  };
}
