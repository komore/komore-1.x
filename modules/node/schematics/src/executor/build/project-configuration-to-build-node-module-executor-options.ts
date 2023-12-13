import { resolve } from 'path';

import { type ProjectConfiguration, type WorkspaceContext } from '@komore/schematics';

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
  return ({ name, path }) => {
    const entryPoint = resolve(path, 'src', 'index.ts');
    const outputPath = resolve(baseOutputPath, name);
    const sourceMap = true;
    // TODO: .application.json, .stack.json, .library.json
    const tsConfig = resolve(path, `${name}.tsconfig.library.json`);
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
