import { resolve } from 'node:path';

import { type ProjectName, type ProjectConfiguration, type WorkspaceContext } from '@komore/schematics';

import { type BuildNodeModuleExecutorOptions } from './build-node-module-executor-options';

/**
 * Creates a function that returns build Node module executor options, given a project configuration
 *
 * @param projectConfiguration Project configuration
 * @returns Build Node module executor options
 * @private Function that returns build Node module executor options, given a project configuration
 */
export function projectConfigurationToBuildNodeModuleExecutorOptions(
  workspaceContext: WorkspaceContext
): (projectConfiguration: ProjectConfiguration) => BuildNodeModuleExecutorOptions {
  const { basePath, configuration } = workspaceContext;
  const baseOutputPath = resolve(basePath, configuration.defaults.outputPath);
  const toOutputPath = projectNameToOutputPath(baseOutputPath);
  return ({ name, path, type }) => {
    const entryPoint = resolve(path, 'src', 'index.ts');
    const outputPath = toOutputPath(name);
    const sourceMap = true;
    const tsConfig = resolve(path, `${name}.tsconfig.${type}.json`);
    const watch = false;
    return {
      entryPoint,
      outputPath,
      sourceMap,
      tsConfig,
      watch,
    };
  };
}

// TODO: factor
function projectNameToOutputPath(baseOutputPath: string): (projectName: ProjectName) => string {
  return projectName => {
    const slices = projectName.split('-');
    console.log('weee', resolve(baseOutputPath, ...slices));
    return resolve(baseOutputPath, projectName);
  };
}
