import { resolve } from 'node:path';

import { type ProjectConfiguration } from '@komore/schematics';

import { type TestModuleExecutorOptions } from './test-module-executor-options';

/**
 * Returns test module executor options, given a project configuration
 *
 * @param projectConfiguration Project configuration
 * @returns Test module executor options
 * @private
 */
export function projectConfigurationToTestModuleExecutorOptions(
  projectConfiguration: ProjectConfiguration
): TestModuleExecutorOptions {
  const { name, path } = projectConfiguration;
  const eslintConfig = resolve(path, '.eslintrc.json');
  const filesPattern = resolve(path, 'src/**/*.ts');
  const tsConfig = resolve(path, `${name}.tsconfig.*.json`);
  const watch = false;
  return {
    filesPattern,
    tsConfig,
    watch,
  };
}
