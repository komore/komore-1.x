import { resolve } from 'node:path';

import { type ProjectConfiguration, type WorkspaceContext } from '@komore/schematics';

import { type PackageNodeModuleExecutorOptions } from './package-node-module-executor-options';

/**
 * Creates a function that returns package Node module executor options, given a project configuration
 *
 * @param projectConfiguration Project configuration
 * @returns Package Node module executor options
 * @private Function that returns package Node module executor options, given a project configuration
 */
export function projectConfigurationToPackageNodeModuleExecutorOptions(
  workspaceContext: WorkspaceContext
): (projectConfiguration: ProjectConfiguration) => PackageNodeModuleExecutorOptions {
  const { basePath, configuration } = workspaceContext;
  const baseOutputPath = resolve(basePath, configuration.defaults.outputPath);
  return ({ name, path }) => {
    const outputPath = resolve(baseOutputPath, name);
    const packageJson = resolve(path, `${name}.package.json`);
    return {
      outputPath,
      packageJson,
    };
  };
}
