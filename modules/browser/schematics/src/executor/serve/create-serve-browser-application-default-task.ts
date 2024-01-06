import { of } from '@komore/reactive';
import { createWorkspaceExecutorDefaultTaskGeneratorFactory } from '@komore/schematics';

import { type ServeBrowserApplicationExecutorOptions } from './serve-browser-application-executor-options';
import { projectConfigurationToServeBrowserApplicationExecutorOptions } from './project-configuration-to-serve-browser-application-executor-options';

/**
 * Serve browser application default task generator factory
 */
export const createServeBrowserApplicationDefaultTask =
  createWorkspaceExecutorDefaultTaskGeneratorFactory<ServeBrowserApplicationExecutorOptions>(workspaceContext => {
    workspaceContext;
    return projectConfiguration => {
      const options = projectConfigurationToServeBrowserApplicationExecutorOptions(projectConfiguration);
      const taskConfiguration = {
        dependencies: [],
        inputs: [], // TODO
        outputs: [],
        options,
      };
      return of(taskConfiguration);
    };
  });
