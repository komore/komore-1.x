import { of } from '@komore/reactive';
import { createWorkspaceExecutorDefaultTaskGeneratorFactory } from '@komore/schematics';

import { type PackageNodeModuleExecutorOptions } from './package-node-module-executor-options';
import { projectConfigurationToPackageNodeModuleExecutorOptions } from './project-configuration-to-package-node-module-executor-options';

/**
 * Package Node module default task generator factory
 */
export const createPackageNodeModuleDefaultTask =
  createWorkspaceExecutorDefaultTaskGeneratorFactory<PackageNodeModuleExecutorOptions>(workspaceContext => {
    const toPackageNodeModuleExecutorOptions = projectConfigurationToPackageNodeModuleExecutorOptions(workspaceContext);
    return projectConfiguration => {
      const options = toPackageNodeModuleExecutorOptions(projectConfiguration);
      const taskConfiguration = {
        dependencies: [], // TODO: add build task
        inputs: [], // TODO: add package.json
        outputs: [options.outputPath],
        options,
      };
      return of(taskConfiguration);
    };
  });
