import { type TypeScriptConfiguration } from './typescript-configuration';

/**
 * Merges a TypeScript configuration with its extending configuration
 *
 * @param configuration TypeScript configuration
 * @param extendedConfiguration Extended TypeSript configuration
 * @returns Merged TypeScript configuration
 * @private
 */
export function extendedTypeScriptConfigurationsToTypeScriptConfiguration(
  configuration: TypeScriptConfiguration,
  extendedConfiguration: TypeScriptConfiguration
): TypeScriptConfiguration {
  const { compilerOptions, ...remainingConfiguration } = configuration;
  const { extends: _, compilerOptions: baseCompilerOptions, ...remainingExtendedConfiguration } = extendedConfiguration;
  return {
    compilerOptions: {
      ...baseCompilerOptions,
      ...compilerOptions,
    },
    ...remainingExtendedConfiguration,
    ...remainingConfiguration,
  };
}
