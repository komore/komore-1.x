import { of } from '@komore/reactive';
import { createWorkspaceExecutorDefaultTaskGeneratorFactory } from '@komore/schematics';

import { type BuildNodeModuleExecutorOptions } from './build-node-module-executor-options';
import { projectConfigurationToBuildNodeModuleExecutorOptions } from './project-configuration-to-build-node-module-executor-options';

/**
 * Build Node module default task generator factory
 */
export const createBuildNodeModuleDefaultTask =
  createWorkspaceExecutorDefaultTaskGeneratorFactory<BuildNodeModuleExecutorOptions>(workspaceContext => {
    const toBuildNodeModuleExecutorOptions = projectConfigurationToBuildNodeModuleExecutorOptions(workspaceContext);
    return projectConfiguration => {
      const options = toBuildNodeModuleExecutorOptions(projectConfiguration);
      const taskConfiguration = {
        dependencies: [],
        inputs: [], // TODO: all files based on the tsconfig configuration
        outputs: [options.outputPath],
        options,
      };
      return of(taskConfiguration);
    };
  });
