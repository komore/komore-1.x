import { resolve } from 'node:path';

import { type ProjectConfiguration } from '@komore/schematics';

import { type LintModuleExecutorOptions } from './lint-module-executor-options';

/**
 * Returns lint module executor options, given a project configuration
 *
 * @param projectConfiguration Project configuration
 * @returns Lint module executor options
 * @private
 */
export function projectConfigurationToLintModuleExecutorOptions(
  projectConfiguration: ProjectConfiguration
): LintModuleExecutorOptions {
  const { name, path } = projectConfiguration;
  const eslintConfig = resolve(path, '.eslintrc.json');
  const filesPattern = resolve(path, 'src/**/*.ts');
  const tsConfig = resolve(path, `${name}.tsconfig.*.json`);
  const watch = false;
  return {
    eslintConfig,
    filesPattern,
    tsConfig,
    watch,
  };
}
