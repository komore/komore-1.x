import { of } from '@komore/reactive';
import { createWorkspaceExecutorDefaultTaskGeneratorFactory } from '@komore/schematics';

import { type TestModuleExecutorOptions } from './test-module-executor-options';
import { projectConfigurationToTestModuleExecutorOptions } from './project-configuration-to-test-module-executor-options';

/**
 * Test module default task generator factory
 */
export const createTestModuleDefaultTask =
  createWorkspaceExecutorDefaultTaskGeneratorFactory<TestModuleExecutorOptions>(_workspaceContext => {
    return projectConfiguration => {
      const options = projectConfigurationToTestModuleExecutorOptions(projectConfiguration);
      const taskConfiguration = {
        dependencies: [],
        inputs: [options.filesPattern],
        outputs: [],
        options,
      };
      return of(taskConfiguration);
    };
  });
