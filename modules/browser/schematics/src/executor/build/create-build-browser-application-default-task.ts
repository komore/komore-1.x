import { of } from '@komore/reactive';
import { createWorkspaceExecutorDefaultTaskGeneratorFactory } from '@komore/schematics';

import { type BuildBrowserApplicationExecutorOptions } from './build-browser-application-executor-options';
import { projectConfigurationToBuildBrowserApplicationExecutorOptions } from './project-configuration-to-build-browser-application-executor-options';

/**
 * Build browser application default task generator factory
 */
export const createBuildBrowserApplicationDefaultTask =
  createWorkspaceExecutorDefaultTaskGeneratorFactory<BuildBrowserApplicationExecutorOptions>(workspaceContext => {
    workspaceContext;
    return projectConfiguration => {
      const options = projectConfigurationToBuildBrowserApplicationExecutorOptions(projectConfiguration);
      const taskConfiguration = {
        dependencies: [],
        inputs: [], // TODO
        outputs: [],
        options,
      };
      return of(taskConfiguration);
    };
  });
