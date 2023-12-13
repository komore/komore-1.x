import { of } from '@komore/reactive';
import { createWorkspaceExecutorDefaultTaskGeneratorFactory } from '@komore/schematics';

import { type LintModuleExecutorOptions } from './lint-module-executor-options';
import { projectConfigurationToLintModuleExecutorOptions } from './project-configuration-to-lint-module-executor-options';

/**
 * Lint module default task generator factory
 */
export const createLintModuleDefaultTask =
  createWorkspaceExecutorDefaultTaskGeneratorFactory<LintModuleExecutorOptions>(workspaceContext => {
    workspaceContext;
    return projectConfiguration => {
      const options = projectConfigurationToLintModuleExecutorOptions(projectConfiguration);
      const taskConfiguration = {
        dependencies: [],
        inputs: [options.filesPattern],
        outputs: [],
        options,
      };
      return of(taskConfiguration);
    };
  });
