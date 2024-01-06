import { resolve } from 'node:path';

import { type ProjectConfiguration } from '@komore/schematics';

import { type BuildBrowserApplicationExecutorOptions } from './build-browser-application-executor-options';

/**
 * Returns build browser application executor options, given a project configuration
 *
 * @param projectConfiguration Project configuration
 * @returns Build browser application executor options
 * @private
 */
export function projectConfigurationToBuildBrowserApplicationExecutorOptions(
  projectConfiguration: ProjectConfiguration
): BuildBrowserApplicationExecutorOptions {
  const { name, path } = projectConfiguration;
  const tsConfig = resolve(path, `${name}.tsconfig.application.json`);
  const watch = false;
  return {
    tsConfig,
    watch,
  };
}
