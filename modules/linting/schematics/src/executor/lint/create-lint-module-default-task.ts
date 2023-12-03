import { resolve } from 'path';

import { of } from '@komore/reactive';
import { createWorkspaceExecutorDefaultTaskGeneratorFactory, type TaskConfiguration } from '@komore/schematics';

import { type LintModuleExecutorOptions } from './lint-module-executor-options';

/**
 * Lint module default task generator factory
 */
export const createLintModuleDefaultTask = createWorkspaceExecutorDefaultTaskGeneratorFactory(workspaceContext => {
  workspaceContext;
  return projectConfiguration => {
    const { name, path } = projectConfiguration;
    const eslintConfig = resolve(path, '.eslintrc.json');
    const filesPattern = resolve(path, 'src/**/*.ts');
    const tsConfig = resolve(path, `${name}.tsconfig.*.json`);
    const options: LintModuleExecutorOptions = {
      eslintConfig,
      filesPattern,
      tsConfig,
      watch: false,
    };
    const taskConfiguration: Omit<TaskConfiguration<LintModuleExecutorOptions>, 'executor'> = {
      dependencies: [],
      inputs: [filesPattern],
      outputs: [],
      options,
    };
    return of(taskConfiguration);
  };
});
