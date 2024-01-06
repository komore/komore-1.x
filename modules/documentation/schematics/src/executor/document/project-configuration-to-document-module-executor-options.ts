import { resolve } from 'node:path';

import { type ProjectConfiguration } from '@komore/schematics';

import { type DocumentModuleExecutorOptions } from './document-module-executor-options';

/**
 * Returns document module executor options, given a project configuration
 *
 * @param projectConfiguration Project configuration
 * @returns Document module executor options
 * @private
 */
export function projectConfigurationToDocumentModuleExecutorOptions(
  tempPath: string
): (projectConfiguration: ProjectConfiguration) => DocumentModuleExecutorOptions {
  return ({ name, path, type }) => {
    const entryPoint = resolve(path, 'src/index.ts');
    const outputPath = resolve(tempPath, 'documentation', `${name}.json`);
    const packageJson = resolve(path, `${name}.package.json`);
    const tsConfig = resolve(path, `${name}.tsconfig.${type}.json`);
    const tsConfigSpec = resolve(path, `${name}.tsconfig.specifications.json`);
    const watch = false;
    return {
      entryPoint,
      outputPath,
      packageJson,
      tsConfig,
      tsConfigSpec,
      watch,
    };
  };
}
